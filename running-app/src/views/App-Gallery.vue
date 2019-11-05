<template>
  <div class="app-gallery-view">
    <AppGallery/>
  </div>

</template>

<script>
// @ is an alias to /src
import AppGallery from '@/components/AppGallery.vue'

export default {
  name: 'app-gallery',
  components: {
    AppGallery
  }
}
</script>
