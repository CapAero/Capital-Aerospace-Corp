<template>
  <section
    class="section1"
    :style="{ height: section1Height }"
  >
    <v-img
      :src="hero2Image"
      class="fill-height"
      cover
      style="opacity: 0.5"
    />

    <div
      class="pa-8 text-white content1 text-left"
      style="position: absolute; top: 120px; width: 100%"
    >
      <h2 class="hero-heading mb-1">APPLY NOW</h2>

      <h1
        class="styled-font mb-5"
        style="font-size: 1.8rem"
      >
        Lets talk about building your future together
      </h1>

      <!-- Careers form (ENABLED for Netlify) -->
      <v-row>
        <v-col cols="12">
          <v-card
            class="mb-5 text-white border-card"
            color="#ffffff22"
          >
            <v-card-title>Open Positions</v-card-title>
            <v-card-text>
              <hr class="mb-4" />

              <p
                v-if="positions.length === 0"
                class="mb-2"
              >
                We don't have any openings posted right now, but we're always
                interested in hearing from talented people. Submit an application
                and we'll be in touch.
              </p>

              <v-list
                v-else
                bg-color="transparent"
                class="pa-0"
              >
                <v-list-item
                  v-for="position in positions"
                  :key="position.title"
                  class="px-0 mb-3"
                >
                  <div
                    class="d-flex flex-wrap align-center justify-space-between"
                    style="gap: 12px"
                  >
                    <div>
                      <div class="text-white font-weight-medium">
                        {{ position.title }}
                      </div>
                      <div
                        v-if="position.location"
                        class="text-grey-lighten-1"
                        style="font-size: 0.85rem"
                      >
                        {{ position.location }}
                      </div>
                    </div>

                    <v-btn
                      :href="position.pdf"
                      :download="position.downloadName"
                      color="primary"
                      size="large"
                      prepend-icon="mdi-download"
                      style="opacity: 1;"
                      @click="trackDownload(position.title)"
                    >
                      View Job Description
                    </v-btn>
                  </div>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            class="mb-5 text-white border-card"
            color="#ffffff22"
          >
            <v-card-title>Apply Online</v-card-title>
            <v-card-text>
              <hr class="mb-4" />
              <v-form
                v-model="valid"
                name="careers"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                enctype="multipart/form-data"
                @submit.prevent="handleSubmit"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="careers"
                />

                <!-- Honeypot to reduce spam -->
                <div
                  hidden
                  aria-hidden="true"
                >
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </div>

                <v-text-field
                  v-model="formData.name"
                  label="Full name"
                  name="name"
                  class="mb-4"
                  :hide-details="false"
                  :rules="[(v: string) => !!v || 'Name is required']"
                  bg-color="#444"
                />

                <v-text-field
                  v-model="formData.email"
                  label="Email"
                  :rules="[(v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid']"
                  name="email"
                  class="mb-4"
                  bg-color="#444"
                ></v-text-field>

                <v-textarea
                  v-model="formData.message"
                  label="Tell us about yourself"
                  name="message"
                  class="mb-4"
                  bg-color="#444"
                  placeholder="Write your cover letter here... (skills, certifications, aircraft/engine types, availability)"
                ></v-textarea>

                <v-file-input
                  v-model="file"
                  label="Attach your resume"
                  name="resume"
                  class="mb-4"
                  accept=".pdf,.doc,.docx"
                  bg-color="#444"
                />

                <v-btn
                  :disabled="!valid"
                  type="submit"
                  color="primary"
                >
                  Submit Application
                </v-btn>
              </v-form>
              <v-snackbar
                v-model="snackbar"
                location="top center"
                timeout="3000"
                color="success"
                text="Thank you! Your application has been submitted."
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"

import hero2Image from "/images/careers-bg.jpg"

import { useGtag } from "@/use/useGTag"
const { trackEvent } = useGtag()

const snackbar = ref(false)
const valid = ref(false)
const section1Height = ref("100vh")

// Open positions. Drop the matching application PDF into web/public/assets/
// and reference it here. Add or remove entries as roles open and close.
interface Position {
  title: string
  location?: string
  pdf: string
  downloadName: string
}

const positions = ref<Position[]>([
  {
    title: "Aircraft Maintenance Engineer (AME)",
    location: "Whitehorse, YT",
    pdf: "/assets/AME_Job_Description.pdf",
    downloadName: "AME_Job_Description.pdf",
  },
])

function trackDownload(title: string) {
  trackEvent("careers_application_download", {
    event_category: "engagement",
    event_label: title,
    value: 1,
  })
}

function updateContentHeight() {
  const content1 = document.querySelector(".content1")
  const section1 = document.querySelector(".section1")

  if (content1 && section1) {
    const contentHeight = content1.clientHeight
    section1Height.value = `${contentHeight + 120}px`
  }
}

onMounted(() => {
  updateContentHeight()
})

window.addEventListener("resize", updateContentHeight)

const formData = ref({
  name: "",
  email: "",
  message: "",
})
const file = ref<File | null>(null)

const handleSubmit = async () => {
  const data = new FormData()
  data.append("form-name", "careers")
  data.append("name", formData.value.name)
  data.append("email", formData.value.email)
  data.append("message", formData.value.message)
  if (file.value) data.append("resume", file.value)

  snackbar.value = true

  try {
    const response = await fetch("/", {
      method: "POST",
      body: data,
    })

    trackEvent("ads_conversion_careers_form_1", {
      event_category: "engagement",
      event_label: "careers",
      value: 1,
    })

    if (response.ok) {
      console.log("Resume submitted")
      formData.value = { name: " ", email: " ", message: " " }
      file.value = null
    }
  } catch (error) {
    console.error("Submission failed:", error)
  }
}
</script>
