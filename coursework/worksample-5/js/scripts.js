var kelvinTemperature;
var celcius;
var fahrenheit;

$.getJSON("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=Sydney,au&appid=3d2363042523c46eb86f30163a636f2c", function(result){
  
  kelvinTemperature = result.main.temp;
  
  // T(°C) = T(K) - 273.15

  //T(°F) = K × (9/5) - 459.67
  celcius = kelvinTemperature - 273.15;

  fahrenheit = kelvinTemperature * (9/5) - 459.67;

  console.log(result);

  // $('#kelvin-temp').append(kelvinTemperature, ' degrees Kelvin');

  $('#celcius-temp').append(celcius.toFixed(2), ' &#176; C');

  $('#fahrenheit-temp').append(fahrenheit.toFixed(2), ' &#176; F');


if (celcius < 28) {
	$('.background').addClass('cold-weather');
} else {
	$('.background').removeClass('cold-weather');
}

});






