new Vue({
    el: '#vue-app',
    data: {
        distance: 10,
        title: 'calculate your running pace',
        distanceUnit: 'kilometers',
        result: '<span class="result-time" id="result-time"></span>',
    },
    methods: {
        greet: function() {
            return 'Hello, here you can ' + this.title;
        },
        add: function(inc) {
            this.distance += inc;
            return;
        },
        substract: function(dec) {
            this.distance -= dec;
            return;
        }
    }

});












// let distance, hour, minutes, seconds, time;

// function calculatePace() {
    
//     distance = parseInt(document.getElementById('distance-input').value);
//     hour = parseInt(document.getElementById('hour-input').value);
//     minutes = parseInt(document.getElementById('minutes-input').value);
//     seconds = parseInt(document.getElementById('seconds-input').value);
    
//     let hourValue = hour * 60;
//     console.log(hourValue);
//     let minutesValue = minutes * 1;
//     let secondsValue = seconds / 60;
//     let distanceValue = distance * 1;
//     console.log(distanceValue);
//     let finalResult = 0;
//     let resultTime = document.getElementById('result-time');
    
//     time = hourValue + minutesValue + secondsValue;
//     console.log(time);
//     finalResult = (time / distanceValue);
//     resultTime.innerHTML = finalResult;
    
// }

// document.getElementById('show-result').addEventListener('click', calculatePace);