//JavaScript Code

function displayCalcTemp() {

    let tempInCelsius = document.getElementById('tbConvertCelsius').value;
    let convertTempToFar = tempInCelsius * 9 / 5 + 32;
    let celsiusTemp = document.getElementById('temp-celsius');
    celsiusTemp.textContent = convertTempToFar + '°F ';
}
