# Safe PowerShell-only resizer: handles same-file overwrite without GDI+ errors
# - Normalizes names in assets\images
# - Creates hero-01..hero-07 (max 1920px) + thumbs (600px) using temp files then replaces

$ProjectDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$SrcDir     = Join-Path $ProjectDir "assets\images"
$ThumbDir   = Join-Path $SrcDir "thumbs"

New-Item -ItemType Directory -Force -Path $SrcDir  | Out-Null
New-Item -ItemType Directory -Force -Path $ThumbDir | Out-Null

# --- Normalize filenames (strip double extensions; unify to .jpg)
Get-ChildItem -Path $SrcDir -File | ForEach-Object {
  $name = $_.Name
  $base = [IO.Path]::GetFileNameWithoutExtension($name) -replace '\.(jpg|jpeg|png)$',''
  $new  = "$base.jpg"
  if ($new -ne $name) { Rename-Item -LiteralPath $_.FullName -NewName $new -ErrorAction SilentlyContinue }
}

Add-Type -AssemblyName System.Drawing

function Fix-Orientation ([System.Drawing.Image]$img) {
  try {
    $id = 0x0112
    if ($img.PropertyIdList -contains $id) {
      $p = $img.GetPropertyItem($id)
      switch ($p.Value[0]) {
        2 { $img.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX) }
        3 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
        4 { $img.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipY) }
        5 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipX) }
        6 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
        7 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX) }
        8 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
      }
      $img.RemovePropertyItem($id) | Out-Null
    }
  } catch {}
}

function Save-ResizedJpeg {
  param([string]$InPath,[string]$OutPath,[int]$MaxWidth,[int]$Quality=85)

  # Compute temp output (in same folder) to avoid overwriting a file that's open
  $outDir = [IO.Path]::GetDirectoryName($OutPath)
  $tempOut = Join-Path $outDir ("tmp_" + [Guid]::NewGuid().ToString() + ".jpg")

  $img = [System.Drawing.Image]::FromFile($InPath)
  try {
    Fix-Orientation $img
    if ($img.Width -le $MaxWidth) { $newW=$img.Width; $newH=$img.Height }
    else { $ratio=$MaxWidth/$img.Width; $newW=[int]($img.Width*$ratio); $newH=[int]($img.Height*$ratio) }

    $bmp = New-Object System.Drawing.Bitmap $newW,$newH,([System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.Clear([System.Drawing.Color]::White)
    $g.InterpolationMode="HighQualityBicubic"; $g.SmoothingMode="HighQuality"; $g.PixelOffsetMode="HighQuality"
    $g.DrawImage($img,0,0,$newW,$newH)
    $g.Dispose()

    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object {$_.MimeType -eq "image/jpeg"}
    $ep = New-Object System.Drawing.Imaging.EncoderParameters 1
    $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), $Quality

    # Save to temp path first
    $bmp.Save($tempOut,$codec,$ep)
    $bmp.Dispose()
  } finally {
    # Dispose source *before* replacing
    $img.Dispose()
  }

  # Replace destination atomically
  Move-Item -LiteralPath $tempOut -Destination $OutPath -Force
}

# Pick up to 7 source images (jpg/jpeg/png)
$files = Get-ChildItem -Path $SrcDir -File | Where-Object { $_.Extension -match '^\.(jpe?g|png)$' } | Sort-Object Name | Select-Object -First 7
if (-not $files) { Write-Error "No JPG/PNG files found in `"$SrcDir`"."; exit 1 }

# Generate hero & thumb sets
$i = 1
foreach ($f in $files) {
  $heroName  = ("hero-{0:D2}.jpg" -f $i)
  $heroOut   = Join-Path $SrcDir   $heroName
  $thumbOut  = Join-Path $ThumbDir $heroName

  Save-ResizedJpeg -InPath $f.FullName -OutPath $heroOut  -MaxWidth 1920 -Quality 85
  Save-ResizedJpeg -InPath $f.FullName -OutPath $thumbOut -MaxWidth 600  -Quality 80

  Write-Host ("Processed {0} -> {1}" -f $f.Name, $heroName)
  $i++
}

Write-Host "`n✅ Done. Heroes: $SrcDir  |  Thumbnails: $ThumbDir"
