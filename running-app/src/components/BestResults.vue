<template>
  <div class="best-results">
    <form class="form grid-el">
      <h2 class="h2">Save your best results:</h2>
      <div class="form-group">
        <div class="row">
          <div class="col-12 my-3">
            <label for="race-name">Race name</label>
            <input type="text" id="race-name" class="form-control item-value" placeholder="New York Marathon" required>
          </div>
          <div class="col-12 my-3">
            <label for="race-distance">Race distance</label>
            <input type="text" id="race-distance" class="form-control item-value" placeholder="42,125km" required>
          </div>
          <div class="col-12 my-3">
            <label for="race-score">Race score</label>
            <input type="text" id="race-score" class="form-control item-value" placeholder="3:00:00" required>
          </div>
        </div>
      </div>
      <button type="button">Add</button>
    </form>
    <ul id="score-list" class="grid-el">
      <li class="score-list-item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BestResults'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
