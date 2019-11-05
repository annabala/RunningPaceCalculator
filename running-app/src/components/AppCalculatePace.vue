<template>
  <div class="calculate-pace">
    <form action="" class="form">
        <h2 class="h2">Here, you can calculate your pace:</h2>
        <div class="form-group">
            <label for="distance">Distance</label>
            <input type="text" id="distance-input" v-bind:value="distance" class="form-control" required>
            <button type="button" @click="add(1)">More</button>
            <button type="button" @click="substract(1)">Less</button>
        </div>
        <div class="form-group">
            <label for="time">Time</label>
            <div class="row">
                <div class="col-md-4 my-3"><input type="text" id="hour-input" class="form-control" placeholder="Hour" required><span class="calculate-pace--error" aria-live="polite">Fill empty fields or fix errors</span></div>
                <div class="col-md-4 my-3"><input type="text" id="minutes-input" class="form-control" placeholder="Minutes" required><span class="calculate-pace--error" aria-live="polite"></span></div>
                <div class="col-md-4 my-3"><input type="text" id="seconds-input" class="form-control" placeholder="Seconds" required><span class="calculate-pace--error" aria-live="polite"></span></div>
            </div>
        </div>
        <button type="submit" id="show-result" @click="AppCalculatePace()">Find your pace!</button>
    </form>
    <div class="calculate-pace--result">
        <h2 class="h2">Your pace:</h2>
        <span class="result-div"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCalculatePace',
  data() {
      return {
        distance: 10,
        distanceUnit: 'kilometers',
        result: '<span class="result-time" id="result-time"></span>',
        newItem: "",
        itemValues: []
      }
  },
  methods : {
    add: function(inc) {
        this.distance += inc;
        return;
    },
    substract: function(dec) {
        this.distance -= dec;
        return;
    },
    AppCalculatePace: function() {
        let distance, hour, minutes, seconds, time, result;
        distance = parseInt(document.getElementById('distance-input').value);
        hour = parseInt(document.getElementById('hour-input').value);
        minutes = parseInt(document.getElementById('minutes-input').value);
        seconds = parseInt(document.getElementById('seconds-input').value);
        result = document.querySelector('.result-div');

        let hourValue = hour * 60;
        let minutesValue = minutes * 1;
        let secondsValue = seconds / 60;
        let distanceValue = distance * 1;
        let finalResult = 0;
            
        time = hourValue + minutesValue + secondsValue;
            
        finalResult = (time / distanceValue).toFixed(2);

        if(time) {
                result.innerHTML = `Your result is: ${finalResult} min/km`;
        } else {
                alert('Fill empty fields to get a result');
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.calculate-pace {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &--result {
        padding: 20px;
        text-align: center;
        font: 600 2rem/3rem 'Quicksand';
        color: #fff183;
    }
    &--error {
        display: none;
    }
}

</style>