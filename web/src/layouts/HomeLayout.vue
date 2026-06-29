<template>
  <v-app-bar flat color="transparent" floating scroll-behavior="fade-image inverted" :image="transparent" height="90"
    class="justify-space-between">
    <v-row>
      <v-col class="text-left"></v-col>
      <v-col class="text-center">
        <v-img :src="logoWhite" height="55" :style="{ opacity: imageOpacity }"
          style="transition: opacity 1s ease-in-out" />
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
import { useDisplay } from "vuetify/lib/composables/display"

const { smAndDown } = useDisplay()

// On mobile, skip the intro animation and show the white logo right away.
const imageOpacity = ref(smAndDown.value ? 1 : 0)

onMounted(() => {
  if (smAndDown.value) return

  // Fade the white logo in after the center logo fades out.
  setTimeout(() => {
    imageOpacity.value = 1
  }, 5000)
})
</script>
