//Dobra, deklaruje globalne zmienne. Następnie pobieram i zapisuje do zmiennych elementy DOM do każdego inputu, buttona. 
//Kolejne zmienne pobierają wartość wpisaną w elementy DOM.
//Następnie ta wartość musi zostać przekonwertowana w odpowiedni sposób.
//Przekonwertowane wartości są przypisane do kolejnych zmiennych.
//Obliczanie tempa czyli dzielę podany czas(w minutach) przez dystans w metrach. Otrzymuję oczekiwany wynik.
//Kolejną rzeczą jest dodanie wyniku do spanu, w którym będzie się pokazywał.
//Wszystko to dzieje się na wykonany submit formularza.


let distance, hour, minutes, seconds, resultTime;

distance = document.getElementById('distance-input');
hour = document.getElementById('hour-input');
minutes = document.getElementById('minutes-input');
seconds = document.getElementById('seconds-input');
resultTime = document.getElementById('result-time');

let hourValue = hour.value;
let minutesValue = minutes.value;
let secondsValue = seconds.value;
let distanceValue = distance.value;

function convertValue() {
    hourValue = hourValue * 60;
    secondsValue = secondsValue / 60;
    distanceValue = distanceValue * 1000;
}

function calculatePace() {
    convertValue();
    let time = hourValue + minutesValue + secondsValue;
    let finalResult = (time / distanceValue);
    resultTime.innerHTML = finalResult;
    return
}
document.getElementById('show-result').addEventListener('submit', calculatePace);