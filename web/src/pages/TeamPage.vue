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
      <h2 class="hero-heading mb-1">OUR TEAM</h2>

      <h1
        class="styled-font mb-5"
        style="font-size: 1.8rem"
      >
        Profiles and photos are on the way
      </h1>

      <v-row class="text-left">
        <StaffCard
          title="Kevin Beamish"
          subtitle="President/PRM"
          icon="/images/staff/KevinBeamish.jpg"
        >
          Kevin's Bio Coming Soon!
        </StaffCard>

        <StaffCard
          title="Trevor Strockinski"
          subtitle="Team Lead & AME"
          icon="/images/staff/Trevor.jpg"
        >
          Trevor's Bio Coming Soon!
        </StaffCard>

        <StaffCard
          title="Kyle Landry"
          subtitle="Technology and Innovation Lead & AME"
          icon="/images/staff/KyleLandry.jpg"
        >
         Kyle's Bio Coming Soon!
        </StaffCard>
        <StaffCard
          title="Jay Chow"
          subtitle="Technical Records and Stores Manager"
          icon="/images/staff/JayChow.jpg"
        >
          Jay's Bio Coming Soon!
        </StaffCard>
        <StaffCard
          title="Mark Cunningham"
          subtitle="AME"
          icon="/images/staff/mark.png"
        >
          Mark's Bio Coming Soon!
        </StaffCard>
        <StaffCard
          title="Owen Davis"
          subtitle="AME"
          icon="/images/staff/OwenDavis.jpg"
        >
          Owen's Bio Coming Soon!
        </StaffCard>
        <StaffCard
          title="Damon Juss"
          subtitle="AME & Turbine Specialist"
          icon="/images/staff/damon.png"
        >
         Damon's Bio Coming Soon!
        </StaffCard>
        <StaffCard
          title="Jesse Kirby"
          subtitle="Apprentice & Turbine Specialist"
          icon="/images/staff/JesseKirby.jpg"
        >
         Jesse's Bio Coming Soon!
        </StaffCard>
        <StaffCard
          title="Ryan Purcell"
          subtitle="Apprentice"
          icon="/images/staff/RyanPurcell.jpg"
        >
          Ryan's Bio Coming Soon!
        </StaffCard>
        <StaffCard
          title="Andrew Sinding"
          subtitle="Apprentice"
          icon="/images/staff/AndrewSinding.jpg"
        >
          Andrew's Bio Coming Soon!
        </StaffCard>
      </v-row>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"

import StaffCard from "@/components/team/StaffCard.vue"
import hero2Image from "/images/team-bg.jpg"

const section1Height = ref("1500px")

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
</script>
