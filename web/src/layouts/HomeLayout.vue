<template>
  <v-app-bar
    flat
    color="transparent"
    floating
    scroll-behavior="fade-image inverted"
    :image="transparent"
    height="90"
    class="justify-space-between"
  >
    <v-row>
      <v-col class="text-left"> <aog class="ml-5 mt-1 mr-auto" /> </v-col>
      <v-col class="text-center">
        <v-img
          :src="logoWhite"
          height="55"
          :style="{ opacity: imageOpacity }"
          style="transition: opacity 1s ease-in-out"
        />
      </v-col>
      <v-col class="text-right"> <header-menu button-class="text-white"></header-menu> </v-col>
    </v-row>
  </v-app-bar>

  <v-app style="background: black; color: white">
    <router-view />
    <default-footer />
  </v-app>
</template>

<script setup lang="ts">
import HeaderMenu from "@/components/HeaderMenu.vue"
import Aog from "@/components/home/AOG.vue"
import DefaultFooter from "@/layouts/DefaultFooter.vue"

import logoWhite from "@/assets/logos/logo-white.jpg"
import transparent from "@/assets/logos/transparent-bar-background.png"
import { onMounted, ref } from "vue"

const imageOpacity = ref(0)

onMounted(() => {
  // Start fade-out after 5 seconds
  setTimeout(() => {
    imageOpacity.value = 1 // Trigger fade-out
  }, 5000)
})
</script>
