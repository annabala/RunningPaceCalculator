new Vue({
    el: '#vue-app',
    data: {
        distance: 10,
        distanceUnit: 'kilometers',
        result: '<span class="result-time" id="result-time"></span>',
        newItem: "",
        itemValues: []
    },
    methods: {
        add: function(inc) {
            this.distance += inc;
            return;
        },
        substract: function(dec) {
            this.distance -= dec;
            return;
        },
        calculatePace: function() {
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
            
        },
        addItem: function() {
            let elVal, stringValues;
            let listItem = document.querySelector('.score-list-item');
            let singleItemValues = document.querySelectorAll('.item-value');
            let valueArray = Array.prototype.slice.call(singleItemValues);
            let getValues = valueArray.map((el) => {
                return elVal = el.value;
            });
            if(elVal) {
                stringValues = getValues.join(', ');
                listItem.innerHTML = stringValues;
            }
        }
    }

});













// function calculatePace(e) {
//     e.preventDefault();
//     let distance, hour, minutes, seconds, time, result;
//     distance = parseInt(document.getElementById('distance-input').value);
//     hour = parseInt(document.getElementById('hour-input').value);
//     minutes = parseInt(document.getElementById('minutes-input').value);
//     seconds = parseInt(document.getElementById('seconds-input').value);
//     result = document.querySelector('.result-div');
    
//     let hourValue = hour * 60;
//     let minutesValue = minutes * 1;
//     let secondsValue = seconds / 60;
//     let distanceValue = distance * 1;
//     let finalResult = 0;
    
//     time = hourValue + minutesValue + secondsValue;
    
//     finalResult = (time / distanceValue).toFixed(2);
//     return result.innerHTML = finalResult + ' min/km';
    
// }

// document.getElementById('show-result').addEventListener('click', calculatePace);