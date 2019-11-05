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
      <button type="button" @click="addItem()">Add</button>
    </form>
    <div id="score-list" class="best-results--list">
      <span class="score-list-item"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppResults',
  methods: {
    addItem: function() {
            let elVal, stringValues;
            let listItem = document.querySelector('.score-list-item');
            let singleItemValues = document.querySelectorAll('.item-value');
            let valueArray = Array.prototype.slice.call(singleItemValues);
            let i = 1;
            let getValues = valueArray.map((el) => {
                return elVal = el.value;
            });
            if(elVal) {
                stringValues = getValues.join(', ');
                listItem.innerHTML = `${i++}. ${stringValues}`;
            } else {
              alert("Can't add empty line :(, fill inputs");
            }
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.best-results {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;
    justify-content: center;
    &--list {
    margin: 2rem 0 0 0;
    font: 600 1.5rem/2.5rem 'Quicksand';
    color: #fff183;
  }
}
</style>
