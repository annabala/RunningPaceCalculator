<template>
  <div class="calculate-pace">
    <form action="" class="form grid-el">
        <h2 class="h2">Here, you can calculate your pace:</h2>
        <div class="form-group">
            <label for="distance">Distance</label>
            <input type="text" id="distance-input" class="form-control" required>
            <button type="button">More</button>
            <button type="button">Less</button>
        </div>
        <div class="form-group">
            <label for="time">Time</label>
            <div class="row">
                <div class="col-md-4 my-3"><input type="text" id="hour-input" class="form-control" placeholder="Hour" required><span class="error" aria-live="polite"></span></div>
                <div class="col-md-4 my-3"><input type="text" id="minutes-input" class="form-control" placeholder="Minutes" required><span class="error" aria-live="polite"></span></div>
                <div class="col-md-4 my-3"><input type="text" id="seconds-input" class="form-control" placeholder="Seconds" required><span class="error" aria-live="polite"></span></div>
            </div>
        </div>
        <button type="submit" id="show-result">Find your pace!</button>
    </form>
    <div class="result grid-el">
        <h2 class="h2">Your pace:</h2>
        <span class="result-div"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalculatePace'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
