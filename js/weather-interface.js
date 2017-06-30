var apiKey = require('./../.env').apiKey;
var Weather = require('./../js/weather.js').weatherModule;
var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city);
  });
});

exports.displayHumidityFunction = displayHumidity;



//
// $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
// .then(function(response) {
//   $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
// })
//
// .fail(function(error) {
//   $('.showWeather').text(error.responseJSON.message);
// });
