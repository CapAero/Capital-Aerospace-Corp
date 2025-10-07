import { createApp } from "vue"

// Plugins
import vuetify from "@/plugins/vuetify-plugin"

import VueScrollTo from "vue-scrollto"
import router from "@/router"
import { createGtag } from "vue-gtag"

import App from "@/App.vue"

const app = createApp(App)
app.use(router).use(vuetify)

app.use(
  createGtag({
    tagId: "G-P51CQHC2M7",
    pageTracker: {
      router,
    },
  })
)

app.mount("#app")

app.use(VueScrollTo, {
  duration: 1000,
  easing: "ease",
})
