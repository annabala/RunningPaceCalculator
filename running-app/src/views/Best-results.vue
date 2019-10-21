<template>
  <div class="best-results-page">
    <BestResults/>
  </div>

</template>

<script>
// @ is an alias to /src
import BestResults from '@/components/BestResults.vue'

export default {
  name: 'best-results',
  components: {
    BestResults
  }
}
</script>
