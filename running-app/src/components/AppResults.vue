<template>
  <div class="best-results">
    <form class="form grid-el" @submit.prevent="addItem()">
      <h2 class="h2">Save your best results:</h2>
      <div class="form-group">
        <div class="row">
          <div class="col-12 my-3">
            <label for="race-name">Race name</label>
            <input type="text" id="race-name" class="form-control item-value" placeholder="New York Marathon" v-model="name" required>
          </div>
          <div class="col-12 my-3">
            <label for="race-distance">Race distance(km)</label>
            <input type="text" id="race-distance" class="form-control item-value" placeholder="42,125km" v-model.number="distance" required>
          </div>
          <div class="col-12 my-3">
            <label for="race-score">Race score(h:m:s)</label>
            <input type="text" id="race-score" class="form-control item-value" placeholder="3:00:00" v-model="score" required>
          </div>
        </div>
      </div>
      <button class="btn green">Add</button>
    </form>
    <div id="score-list" class="best-results--list">
      <ul>
        <li><span class="score-list-item"></span></li>
      </ul>
      <button type="button" class="btn best-results--delete" @click="deleteItem()">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppResults',
  data: function() {
    return {
      name: '',
      distance: '',
      score: '',
      items: []
    }
  },
  methods: {
    addItem: function() {
      let elVal, stringValues, listItem, singleItemValues, valueArray, getValues, btnDelete;
      listItem = document.querySelector('.score-list-item');
      singleItemValues = document.querySelectorAll('.item-value');
      btnDelete = document.querySelector('.best-results--delete');
      // bestList = document.querySelector('.best-results--list');
      valueArray = Array.prototype.slice.call(singleItemValues);
      let i = 1;
      if(this.name && this.distance && this.score) {
        getValues = valueArray.map((el) => {
          return elVal = el.value;
        });
      }
      
      if(elVal) {
        stringValues = getValues.join(', ');
        listItem.innerText = `${i++}. ${stringValues}`;
        // bestList.appendChild(listItem);
        // listItem.items.push();
        btnDelete.style.display = "inline-block";
        this.name = '';
        this.distance = '';
        this.score = '';
      } else {
        alert("Can't add empty line :(, fill inputs");
      }
    },
    deleteItem: function() {
      let listItem, btnDelete;
      listItem = document.querySelector('.score-list-item');
      btnDelete = document.querySelector('.best-results--delete');
      if(listItem) {
        listItem.parentNode.removeChild(listItem);
        btnDelete.style.display = 'none';
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
  &--delete {
    display: none;
    background-color: #ff4040;
    padding: .4rem;
    margin: 0 20px 0 0;
  }
}
</style>
