/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css"
import "vuetify/styles"
import "@/assets/styles.css"
import "@/plugins/variables.scss"

// Composables
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import * as labsComponents from "vuetify/labs/components"

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    ...components,
    ...labsComponents,
  },
  theme: {
    defaultTheme: "capital",
    themes: {
      capital: {
        dark: false,

        colors: {
          primary: "#cda850",
          secondary: "#424242",
          accent: "#82B1FF",
          //success: "#ff0000",
        },
      },
    },
  },
  directives,
  defaults: {
    VCard: {
      rounded: "md",
    },
    VTextField: {
      variant: "outlined",
      density: "comfortable",
      color: "primary",
    },
    VTextarea: {
      variant: "outlined",
      density: "comfortable",
      color: "primary",
    },
    VFileInput: {
      variant: "outlined",
      density: "comfortable",
      color: "primary",
      prependInnerIcon: "mdi-paperclip",
      prependIcon: "",
    },
    VSelect: {
      variant: "outlined",
      density: "comfortable",
      color: "primary",
    },
    VListItem: {
      minHeight: "45px",
    },
    VTooltip: {
      location: "top",
    },
  },
})
