//Dobra, deklaruje globalne zmienne. Następnie pobieram i zapisuje do zmiennych elementy DOM do każdego inputu, buttona. 
//Kolejne zmienne pobierają wartość wpisaną w elementy DOM.
//Następnie ta wartość musi zostać przekonwertowana w odpowiedni sposób.
//Przekonwertowane wartości są przypisane do kolejnych zmiennych.
//Obliczanie tempa czyli dzielę podany czas(w minutach) przez dystans w metrach. Otrzymuję oczekiwany wynik.
//Kolejną rzeczą jest dodanie wyniku do spanu, w którym będzie się pokazywał.
//Wszystko to dzieje się na wykonany submit formularza.
let distance, hour, minutes, seconds;

function calculatePace() {
    
    distance = parseInt(document.getElementById('distance-input').value);
    hour = parseInt(document.getElementById('hour-input').value);
    minutes = parseInt(document.getElementById('minutes-input').value);
    seconds = parseInt(document.getElementById('seconds-input').value);
    
    let hourValue = hour * 60;
    console.log(hourValue);
    let minutesValue = minutes * 1;
    let secondsValue = seconds / 60;
    let distanceValue = distance * 1;
    console.log(distanceValue);
    let finalResult = 0;
    let time = 0;
    let resultTime = 0;
    
    time = hourValue + minutesValue + secondsValue;
    console.log(time);
    finalResult = (time / distanceValue);
    resultTime.innerHTML = finalResult;
}

document.getElementById('show-result').addEventListener('click', calculatePace);