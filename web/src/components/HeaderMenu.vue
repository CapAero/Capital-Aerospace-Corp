<template>
  <v-menu
    v-model="menu"
    offset-y
    width="200"
  >
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        variant="outlined"
        size="large"
        class="mr-5 mt-1 px-0"
        :class="buttonClass"
        style="min-width: 50px"
      >
        <v-icon size="30">mdi-menu</v-icon>
      </v-btn>
    </template>

    <v-card
      color="#152332"
      class="text-center mt-3 text-white py-2"
    >
      <router-link
        to="/"
        class="text-decoration-none d-block py-2"
        :class="{ active: currentRoute.path === '/' }"
        >Home</router-link
      >
      <router-link
        to="/our-mission"
        :class="{ active: currentRoute.path === '/our-mission' }"
        class="text-decoration-none d-block py-2"
        >Our Mission</router-link
      >
      <router-link
        to="/pricing"
        class="text-decoration-none d-block py-2"
        :class="{ active: currentRoute.path === '/pricing' }"
        >Pricing</router-link
      >
      <router-link
        to="/team"
        class="text-decoration-none d-block py-2"
        :class="{ active: currentRoute.path === '/team' }"
        >Our Team</router-link
      >
      <router-link
        to="/careers"
        class="text-decoration-none d-block py-2"
        :class="{ active: currentRoute.path === '/careers' }"
        >Careers</router-link
      >
      <router-link
        to="/contact"
        class="text-decoration-none d-block py-2"
        :class="{ active: currentRoute.path === '/contact' }"
        >Contact</router-link
      >
    </v-card>
  </v-menu>
</template>
<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"

const { currentRoute } = useRouter()

defineProps<{
  buttonClass: string
}>()

const menu = ref(false)
</script>
