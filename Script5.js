// Fahrenheit para Celsius
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}

//Celsius para Fahrenheit
function tempConverter(vNum) {
    vNum  = parseFloat(vNum)

    document.getElementById("outputFahrenheit").innerHTML=(vNum*1.8)+32;
}
// Créditos á esse Site https://www.w3schools.com/howto/howto_js_temperature_converter.asp