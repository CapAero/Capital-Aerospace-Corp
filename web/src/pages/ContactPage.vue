<template>
  <section
    class="section1"
    :style="{ height: section1Height }"
  >
    <v-img
      :src="hero2Image"
      class="fill-height"
      cover
      style="opacity: 0.3"
    />

    <div
      class="pa-8 text-white content1 text-left"
      style="position: absolute; top: 120px; width: 100%"
    >
      <h2 class="hero-heading mb-1">CONTACT US</h2>

      <h1
        class="styled-font mb-5"
        style="font-size: 1.8rem"
      >
        Reach out so we can explore maintenance solutions that fit your operation
      </h1>

      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            class="mb-5 text-white border-card"
            color="#ffffff22"
          >
            <v-card-title>Send Us A Message</v-card-title>
            <v-card-text>
              <hr class="mb-4" />
              <p class="mb-5">
                Tell us what you need and how to reach you and we'll follow up with a clear path
                forward.
              </p>

              <v-form
                v-model="valid"
                @submit.prevent="handleSubmit"
              >
                <v-text-field
                  v-model="formData.name"
                  :rules="[(v) => !!v || 'Name is required']"
                  label="Your name"
                  class="mb-4"
                  bg-color="#444"
                />

                <v-text-field
                  v-model="formData.email"
                  :rules="[
                    (v) => !!v || 'E-mail is required',
                    (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                  ]"
                  label="Your email"
                  class="mb-4"
                  bg-color="#444"
                />
                <v-textarea
                  v-model="formData.message"
                  label="Company details and how we can help"
                  rows="3"
                  class="mb-4"
                  auto-grow
                  bg-color="#444"
                />

                <v-btn
                  :disabled="!valid"
                  type="submit"
                  color="primary"
                >
                  Send
                </v-btn>
                <v-snackbar
                  v-model="snackbar"
                  location="top center"
                  timeout="3000"
                  color="success"
                  text="Thank you! We will be in touch soon."
                />
              </v-form>
            </v-card-text>
          </v-card>

          <v-card
            class="text-white border-card"
            color="#ffffff22"
          >
            <v-card-title>Company Information</v-card-title>
            <v-card-text>
              <hr class="mb-4" />
              <h3 class="mb-1">Address:</h3>
              <div class="mb-3">
                <div>Capital Aerospace Corp</div>
                <div>192 Condor Rd</div>
                <div>Whitehorse, Yukon, Canada Y1A 6E6</div>
              </div>

              <h3 class="mb-1">Primary contact:</h3>
              <div class="mb-3">
                <p>Kevin Beamish</p>
                <p>
                  Phone: <a href="tel:+18673343777">+1-867-334-3777</a><br />
                  Email: <a href="mailto:k.beamish@capaerocorp.com">k.beamish@capaerocorp.com</a>
                </p>
              </div>

              <h3 class="mb-1">Service area:</h3>
              <p>Yukon &amp; North/Western Canada</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col>
          <v-card
            class="mb-5 text-white border-card"
            color="#ffffff22"
          >
            <v-card-title>Map</v-card-title>
            <v-card-text>
              <hr class="mb-4" />
              <iframe
                class="rounded"
                title="Capital Aerospace Corp location"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="400px"
                style="border: none"
                src="https://www.google.com/maps?q=192%20Condor%20Rd,%20Whitehorse,%20Yukon,%20Canada%20Y1A%206E6&output=embed"
              >
              </iframe>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"

import hero2Image from "/images/contact-bg.jpg"

const section1Height = ref("100vh")

function updateContentHeight() {
  const content1 = document.querySelector(".content1")
  const section1 = document.querySelector(".section1")

  if (content1 && section1) {
    const contentHeight = content1.clientHeight
    section1Height.value = `${contentHeight + 120}px`
  }
}

onMounted(() => {
  // Initial height calculation
  updateContentHeight()
})

window.addEventListener("resize", updateContentHeight)

const valid = ref(false)
const snackbar = ref(false)
const formData = ref({
  name: "",
  email: "",
  message: "",
})

const handleSubmit = async () => {
  const data = new FormData()
  data.append("form-name", "contact")
  data.append("name", formData.value.name)
  data.append("email", formData.value.email)
  data.append("message", formData.value.message)

  snackbar.value = true

  try {
    const response = await fetch("/", {
      method: "POST",
      body: data,
    })
    if (response.ok) {
      console.log("Contact submitted")
      formData.value = { name: " ", email: " ", message: " " }
    }
  } catch (error) {
    console.error("Submission failed:", error)
  }
}
</script>
