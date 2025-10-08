<template>
  <v-col
    cols="12"
    md="3"
    sm="6"
  >
    <v-dialog
      :width="dialogWidth"
      v-model="showDialog"
    >
      <template #activator="{ props: activatorProps }">
        <v-card
          v-bind="activatorProps"
          class="text-white border-card fill-height text-center"
          color="#ffffff22"
        >
          <v-card-text
            class="text-center pa-0"
            style="background-color: #ffffffdd"
          >
            <v-img
              :src="icon"
              cover
              height="300"
            />
          </v-card-text>

          <v-card-text>
            <h3>{{ title }}</h3>
            <p>{{ subtitle }}</p>
          </v-card-text>
        </v-card>
      </template>

      <v-card
        class="text-white border-card"
        color="#4c5d71"
      >
        <v-card-text class="d-flex pa-0">
          <div class="pa-4">
            <h2 class="styled-font">
              <strong style="font-weight: 600">{{ title }}</strong
              >: {{ subtitle }}
            </h2>
            <v-divider class="my-2" />
            <slot></slot>
            <br />
            <v-btn
              variant="outlined"
              size="small"
              class="mt-4"
              @click="showDialog = false"
              >close</v-btn
            >
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useDisplay } from "vuetify"

defineProps<{
  title: string
  subtitle?: string
  icon: string
}>()

const showDialog = ref(false)

const { width } = useDisplay()

const dialogWidth = computed(() => {
  if (width.value < 600) return "90vw"
  if (width.value < 960) return "70vw"
  return "650px"
})
</script>
