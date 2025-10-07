<template>
  <v-col
    cols="12"
    md="4"
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
            class="text-center py-2"
            style="background-color: #ffffffdd"
          >
            <v-img
              :src="icon"
              alt="Maintenance icon"
              width="50"
              style="width: 70px; margin: 0 auto"
            />
          </v-card-text>

          <v-card-text>
            <h3>{{ title }}</h3>
          </v-card-text>
        </v-card>
      </template>

      <v-card
        class="text-white border-card"
        color="#4c5d71"
      >
        <v-card-text class="d-flex pa-0">
          <div class="pa-2 bg-white">
            <div style="position: absolute; bottom: 10px">
              <v-btn
                variant="text"
                size="small"
                style="z-index: 3"
                @click="showDialog = false"
                >close</v-btn
              >
            </div>
            <div class="fill-height">
              <v-img
                class="fill-height"
                :src="icon"
                width="64"
              />
            </div>
          </div>
          <div class="pa-4">
            <slot></slot>
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
