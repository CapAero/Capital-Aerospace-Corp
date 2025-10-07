<template>
  <footer class="pa-5">
    <v-row>
      <v-col
        cols="12"
        md="4"
        :class="{ 'text-center': smAndDown, 'text-left': !smAndDown, 'pt-10': !smAndDown }"
        style="font-size: 0.9rem"
      >
        <p class="mb-2">© <strong style="font-weight: 600">Capital Aerospace Corp</strong></p>
        <div class="mb-3">
          192 Condor Rd<br />
          Whitehorse, Yukon, Canada Y1A 6E6
        </div>
        <div><a href="tel:+18673343777">1-867-334-3777</a></div>
        <div><a href="mailto:k.beamish@capaerocorp.com">k.beamish@capaerocorp.com</a></div>
      </v-col>

      <v-col
        cols="12"
        md="4"
        class="text-center"
      >
        <v-img
          :src="goldLogo"
          alt="Capital Aerospace Corp"
          height="48"
          class="mb-3"
        />
        <p
          class="mb-3"
          style="font-weight: 600"
        >
          Where Precision Fuels Progress
        </p>
        <v-btn
          href="#"
          class="mb-3"
          color="primary"
          title="Coming soon"
          >Staff Login</v-btn
        >
        <br />
        <v-btn
          href="#"
          class="btn customer"
          color="success"
          title="Coming soon"
          >Customer Portal</v-btn
        >
      </v-col>
      <v-col
        cols="12"
        md="4"
        :class="{ 'text-right': !smAndDown, 'pt-10': !smAndDown }"
        style="font-size: 0.9rem"
      >
        <div :class="{ 'd-flex': smAndDown, 'd-block': !smAndDown, 'justify-center': smAndDown }">
          <div
            :class="{ active: currentRoute.path === '/' }"
            style="min-height: 26px"
          >
            <router-link
              to="/"
              exact
              >Home</router-link
            >
          </div>
          <div
            :class="{ active: currentRoute.path === '/our-mission' }"
            class="ml-4"
            style="min-height: 26px"
          >
            <router-link to="/our-mission">Our Mission</router-link>
          </div>
          <div
            :class="{ active: currentRoute.path === '/pricing' }"
            class="ml-4"
            style="min-height: 26px"
          >
            <router-link to="/pricing">Pricing</router-link>
          </div>
          <div
            :class="{ active: currentRoute.path === '/team' }"
            class="ml-4"
            style="min-height: 26px"
          >
            <router-link to="/team">Our Team</router-link>
          </div>
          <div
            :class="{ active: currentRoute.path === '/careers' }"
            class="ml-4"
            style="min-height: 26px"
          >
            <router-link to="/careers">Careers</router-link>
          </div>
          <div
            :class="{ active: currentRoute.path === '/contact' }"
            class="ml-4"
            style="min-height: 26px"
          >
            <router-link to="/contact">Contact</router-link>
          </div>
        </div>
      </v-col>
    </v-row>
  </footer>
</template>

<script setup lang="ts">
import goldLogo from "@/assets/logos/capital-logo.svg"
import { useRouter } from "vue-router"

import { useDisplay } from "vuetify"

const { smAndDown } = useDisplay()

const { currentRoute } = useRouter()
</script>
