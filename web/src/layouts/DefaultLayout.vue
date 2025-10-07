<template>
  <v-app-bar
    flat
    color="transparent"
    floating
    scroll-behavior="fade-image inverted"
    :image="transparent"
    height="90"
  >
    <v-row>
      <v-col> </v-col>
      <v-col class="text-center">
        <router-link to="/">
          <v-img
            :src="goldLogo"
            height="55"
          />
        </router-link>
      </v-col>
      <v-col class="text-right">
        <header-menu button-class="text-white"></header-menu>
      </v-col>
    </v-row>
  </v-app-bar>

  <v-app style="background: black; color: white">
    <router-view />
    <default-footer class="footer" />
  </v-app>
</template>

<script setup lang="ts">
import HeaderMenu from "@/components/HeaderMenu.vue"
import DefaultFooter from "@/layouts/DefaultFooter.vue"

import goldLogo from "@/assets/logos/capital-logo.svg"
import transparent from "@/assets/logos/transparent-bar-background.png"
</script>
