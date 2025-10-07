<template>
  <v-img
    :src="goldLogo"
    :width="500"
    :style="{ opacity: imageOpacity }"
    style="
      position: fixed;
      top: 45%;
      left: 50%;
      z-index: 1000;
      transform: translateX(-50%);
      transition: opacity 1s ease-in-out;
    "
  />
  <section style="min-height: 100vh !important; position: relative">
    <v-img
      :src="hero1Image"
      class="fill-height"
      cover
      style="opacity: 0.8"
    />
  </section>

  <section style="position: relative; min-height: 600px">
    <v-img
      :src="hero2Image"
      class="fill-height"
      cover
      style="opacity: 0.6"
    />
    <div
      style="position: absolute; top: 20px; right: 20px; text-align: right"
      :style="{ maxWidth: smAndDown ? '90%' : '60%' }"
    >
      <h2 class="hero-heading">HELICOPTER MAINTENANCE TAILORED FOR YOUR OPERATIONS</h2>
      <p
        class="mt-4"
        style="font-size: 1.2rem"
      >
        By optimizing maintenance logistics and prioritizing clear communication, we minimize
        downtime and provide a dependable process that supports your business's needs.
      </p>
      <v-btn
        class="mt-5"
        variant="outlined"
        to="/our-mission"
        >Learn More</v-btn
      >
    </div>
  </section>

  <section style="position: relative; min-height: 600px">
    <v-img
      :src="hero3Image"
      class="fill-height"
      cover
      style="opacity: 0.8"
    />
    <div
      style="position: absolute; top: 20px; left: 20px; text-align: left"
      :style="{ maxWidth: smAndDown ? '90%' : '60%' }"
    >
      <h2 class="hero-heading">ENGINEERING TOMORROW'S SOLUTIONS</h2>
      <p
        class="mt-4 hero-body"
        style="font-size: 1.2rem"
      >
        We leverage advanced technology and innovative practices to develop customized maintenance
        solutions, ensuring each client receives an approach aligned with their unique operational
        goals.
      </p>
      <v-btn
        class="mt-5"
        variant="outlined"
        to="/our-mission"
        >Learn More</v-btn
      >
    </div>
  </section>

  <section style="position: relative; min-height: 600px">
    <v-img
      :src="hero4Image"
      class="fill-height"
      cover
      style="opacity: 0.8"
    />
    <div
      style="position: absolute; top: 20px; right: 20px; text-align: right"
      :style="{ maxWidth: smAndDown ? '90%' : '60%' }"
    >
      <h2 class="hero-heading">UNDERSTANDING YOUR OPERATIONS</h2>
      <p
        class="mt-4 hero-body"
        style="font-size: 1.2rem"
      >
        Through a discovery phase, we gain a clear understanding of your fleet, operational
        challenges, and future goals, enabling us to craft a maintenance solution that strengthens
        and supports your business.
      </p>
      <v-btn
        class="mt-5"
        variant="outlined"
        to="/our-mission"
        >Learn More</v-btn
      >
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue"

import goldLogo from "@/assets/logos/capital-logo.svg"
import hero1Image from "@/assets/images/hero.jpg"
import hero2Image from "@/assets/images/hero-05.jpg"
import hero3Image from "@/assets/images/home-3.jpg"
import hero4Image from "@/assets/images/home-4.jpg"
import { useDisplay } from "vuetify/lib/composables/display"

const imageOpacity = ref(1)
const showImage = ref(true)

const { smAndDown } = useDisplay()

onMounted(() => {
  // Start fade-out after 5 seconds
  setTimeout(() => {
    imageOpacity.value = 0 // Trigger fade-out
    // Remove image from DOM after transition (5s + buffer)
    setTimeout(() => {
      showImage.value = false
    }, 3000)
  }, 5000)
})
</script>
