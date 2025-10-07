import { ref, watch } from "vue"
import { useRouter, useRoute } from "vue-router"

export function useRootClass() {
  const router = useRouter()
  const route = useRoute()
  const rootClass = ref("") // Starts empty; will hold e.g., 'bg-home'

  // Function to update class from current route meta
  const updateRootClass = () => {
    const bgMeta = route.meta.background as { class: string } | undefined

    if (bgMeta && bgMeta.class) {
      rootClass.value = bgMeta.class
    } else {
      rootClass.value = "" // Default/no background
    }
  }

  // Initial update
  updateRootClass()

  // Watch for route changes (including programmatic navigation)
  watch(() => route.path, updateRootClass, { immediate: true })

  // Also listen to router events for edge cases (e.g., initial load)
  router.afterEach(updateRootClass)

  return {
    rootClass,
    updateRootClass, // Expose if you need manual updates in components
  }
}
