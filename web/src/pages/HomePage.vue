<template>
  <v-img v-if="!smAndDown" :src="goldLogo" :width="500" :style="{ opacity: imageOpacity }" style="
      position: fixed;
      top: 45%;
      left: 50%;
      z-index: 1000;
      transform: translateX(-50%);
      transition: opacity 1s ease-in-out;
    " />
  <section style="min-height: 100vh !important; position: relative">
    <v-img :src="hero1Image" class="fill-height" cover style="opacity: 0.8" />

    <!-- Hiring callout: top-left attention grabber linking to the careers page -->
    <router-link
      to="/careers"
      class="hiring-callout"
      :style="smAndDown ? { right: '20px', maxWidth: 'none' } : { maxWidth: 'auto' }"
    >
      <div class="hiring-callout__badge">WE'RE HIRING</div>
      <div class="hiring-callout__text">
        Join the Capital Aerospace team
        <span class="hiring-callout__cta">View open positions →</span>
      </div>
    </router-link>

    <div style="position: absolute; top: 20px; right: 20px; text-align: right"
      :style="{ maxWidth: smAndDown ? '90%' : '60%' }">
      <h2 class="hero-heading" :style="{ marginTop: smAndDown ? '250px' : '200px' }">HELICOPTER MAINTENANCE TAILORED FOR YOUR OPERATIONS</h2>
      <p class="mt-4" style="font-size: 1.2rem">
        By optimizing maintenance logistics and prioritizing clear communication, we minimize
        downtime and provide a dependable process that supports your business's needs.
      </p>
      <v-btn class="mt-5" variant="outlined" to="/our-mission">Learn More</v-btn>
    </div>


  </section>


  <section style="position: relative; min-height: 600px">
    <v-img :src="hero3Image" class="fill-height" cover style="opacity: 0.8" />
    
    <div style="position: absolute; top: 20px; left: 20px; text-align: left"
      :style="{ maxWidth: smAndDown ? '90%' : '60%' }">
      <h2 class="hero-heading">ENGINEERING TOMORROW'S SOLUTIONS</h2>
      <p class="mt-4 hero-body" style="font-size: 1.2rem">
        We leverage advanced technology and innovative practices to develop customized maintenance
        solutions, ensuring each client receives an approach aligned with their unique operational
        goals.
      </p>
      <v-btn class="mt-5" variant="outlined" to="/our-mission">Learn More</v-btn>
    </div>
  </section>

  <section style="position: relative; min-height: 600px">
    <v-img :src="hero2Image" class="fill-height" cover style="opacity: 0.6" />

    <div style="position: absolute; top: 20px; right: 20px; text-align: right"
      :style="{ maxWidth: smAndDown ? '90%' : '60%' }">
      <h2 class="hero-heading">UNDERSTANDING YOUR OPERATIONS</h2>
      <p class="mt-4 hero-body" style="font-size: 1.2rem">
        Through a discovery phase, we gain a clear understanding of your fleet, operational
        challenges, and future goals, enabling us to craft a maintenance solution that strengthens
        and supports your business.
      </p>
      <v-btn class="mt-5" variant="outlined" to="/our-mission">Learn More</v-btn>
    </div>
  </section>

</template>
<script setup lang="ts">
import { onMounted, ref } from "vue"

import goldLogo from "@/assets/logos/capital-logo.svg"
import hero1Image from "@/assets/images/hero.jpg"
import hero2Image from "@/assets/images/hero-05.jpg"
import hero3Image from "@/assets/images/home-3.jpg"
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

<style scoped>
.hiring-callout {
  position: absolute;
  /* Sit clear of the fixed 90px app-bar, which otherwise captures clicks
     over the top of the card. */
  top: 110px;
  left: 20px;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 14px 18px;
  border-radius: 12px;
  border: 1px solid gold;
  background: rgba(21, 35, 50, 0.78);
  backdrop-filter: blur(4px);
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.45);
  animation: hiring-pulse 2.2s ease-in-out infinite;
  transition: transform 0.2s ease-in-out;
}

/* Keep the whole card visually unified as one click target */
.hiring-callout:hover .hiring-callout__cta {
  text-decoration: underline;
}

.hiring-callout:hover {
  transform: scale(1.04);
  animation-play-state: paused;
}

.hiring-callout__badge {
  background: gold;
  color: #152332;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  padding: 3px 10px;
  border-radius: 20px;
}

.hiring-callout__text {
  color: white;
  font-weight: 600;
  font-size: 1.05rem;
  line-height: 1.3;
  display: flex;
  flex-direction: column;
}

.hiring-callout__cta {
  color: gold;
  font-weight: 500;
  font-size: 0.9rem;
  margin-top: 2px;
}

@keyframes hiring-pulse {
  0%,
  100% {
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.45), 0 0 0 0 rgba(255, 215, 0, 0.5);
  }
  50% {
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.45), 0 0 0 10px rgba(255, 215, 0, 0);
  }
}
</style>
