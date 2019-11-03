<template>
  <div class="best-results-page">
    <AppResults/>
  </div>

</template>

<script>
// @ is an alias to /src
import AppResults from '@/components/AppResults.vue'

export default {
  name: 'app-results',
  components: {
    AppResults
  }
}
</script>
