// assets/js/script.js
(() => {
  // ---- Helpers ----
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
  const focusableSel =
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

  // ---- Find elements for BOTH variants ----
  // Old variant
  const btnOld = $('#menuBtn');
  const panelOld = $('#offcanvas');
  let backdropOld = $('.backdrop');

  // New variant
  const btnNew = $('.menu-toggle');
  const btnHamb = $('.hamburger');           // <-- add support for .hamburger (your HTML)
  const panelNew = $('.offcanvas');          // may not have id
  const closeNew = $('.close-menu');         // optional close button in new panel

  // Pick active set (prefer new if present on index)
  const btn = btnNew || btnHamb || btnOld;   // <-- ensure a button is found
  const panel = panelNew || panelOld;

  // Ensure there is a backdrop. Old pages have one in HTML; new pages we create it.
  let backdrop = backdropOld;
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    backdrop.setAttribute('hidden', '');
    document.body.appendChild(backdrop);
  }

  let lastFocused = null;

  function isOpen(pnl) {
    if (!pnl) return false;
    // support both [open] attribute and .open class
    return (typeof pnl.hasAttribute === 'function' && pnl.hasAttribute('open')) || pnl.classList.contains('open');
  }

  function openPanel() {
    if (!panel) return;
    lastFocused = document.activeElement;

    // Show
    if (panel.id === 'offcanvas') {
      // old: use [open] attr
      panel.removeAttribute('hidden');
      panel.setAttribute('open', '');
    } else {
      // new: use .open class
      panel.classList.add('open');
    }

    backdrop.removeAttribute('hidden');
    backdrop.setAttribute('open', '');
    backdrop.classList.add('open');

    btn && btn.setAttribute('aria-expanded', 'true');

    // Focus first focusable inside panel
    const first = $(focusableSel, panel);
    first && first.focus();

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('focus', trapFocus, true);
    // Prevent page scroll behind
    document.documentElement.style.overflow = 'hidden';
  }

  function closePanel() {
    if (!panel) return;

    if (panel.id === 'offcanvas') {
      panel.removeAttribute('open');
      setTimeout(() => {
        panel.setAttribute('hidden', '');
      }, 300);
    } else {
      panel.classList.remove('open');
    }

    backdrop.removeAttribute('open');
    backdrop.classList.remove('open');
    setTimeout(() => {
      backdrop.setAttribute('hidden', '');
    }, 300);

    btn && btn.setAttribute('aria-expanded', 'false');

    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('focus', trapFocus, true);

    // restore scroll
    document.documentElement.style.overflow = '';

    lastFocused && lastFocused.focus();
  }

  function onKeyDown(e) {
    if (e.key === 'Escape') {
      closePanel();
      return;
    }
    // Trap tab inside panel
    if (e.key === 'Tab' && panel && isOpen(panel)) {
      const focusables = $$(focusableSel, panel);
      if (!focusables.length) { e.preventDefault(); return; }
      const first = focusables[0];
      const last  = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        last.focus(); e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === last) {
        first.focus(); e.preventDefault();
      }
    }
  }

  function trapFocus(e) {
    if (!panel || !isOpen(panel)) return;
    if (panel.contains(e.target)) return;
    const first = $(focusableSel, panel);
    first && first.focus();
  }

  // Click handlers
  btn && btn.addEventListener('click', () => {
    isOpen(panel) ? closePanel() : openPanel();
  });
  // Old close button in panel
  const closeOld = panelOld ? $('.panel-close', panelOld) : null;
  closeOld && closeOld.addEventListener('click', closePanel);
  // New close button in panel
  closeNew && closeNew.addEventListener('click', closePanel);
  // Backdrop click
  backdrop && backdrop.addEventListener('click', closePanel);
  // Close when clicking any link inside the panel
  panel && panel.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (a) closePanel();
  });

  // Year stamp
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  // ---- Intro fade helpers ----
  const intro = $('.intro') || $('.full-viewport');
  const overlayEl = $('.intro-overlay');     // the overlay container
  const logoImgEl = $('.intro-logo');        // may be an <img>
  const vid = $('.intro-video');

  const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

  // Apply fade class to the OVERLAY (matches CSS .intro-overlay.intro-fade)
  function fadeOverlay() {
    if (overlayEl) overlayEl.classList.add('intro-fade');
  }

  if (intro) {
    if (prefersReduced) {
      // Respect reduced motion: stop video and fade immediately
      if (vid) { vid.pause(); vid.removeAttribute('autoplay'); }
      fadeOverlay();
      // Safety: hide overlay after ~2.4s in case CSS animation isn't supported
      setTimeout(() => { overlayEl && (overlayEl.style.display = 'none'); }, 2400);
    } else if (vid) {
      let faded = false;
      const doFade = () => {
        if (faded) return;
        faded = true;
        setTimeout(() => {
          fadeOverlay();
          setTimeout(() => { overlayEl && (overlayEl.style.display = 'none'); }, 2400);
        }, 1200);
      };
      vid.addEventListener('playing', doFade, { once: true });
      // Fallback if 'playing' never fires promptly
      vid.addEventListener('loadeddata', () => setTimeout(doFade, 1800), { once: true });
    } else {
      // No video: fade after a short delay
      setTimeout(() => {
        fadeOverlay();
        setTimeout(() => { overlayEl && (overlayEl.style.display = 'none'); }, 2400);
      }, 1200);
    }
  }

})();
document.addEventListener('DOMContentLoaded', () => {
  const introLogo = document.querySelector('.intro-logo');
  if (introLogo) {
    setTimeout(() => {
      introLogo.classList.add('is-fading'); // triggers the CSS transition
    }, 2000); // waits 2 seconds, then fade begins
  }
});