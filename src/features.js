$( document ).ready(function() {
  th1 = new Thermostat();

$('#current_temp').text(th1.current_temperature);

$('#uptemp').click(function() {
   th1.uptemp();
   $('#current_temp').text(th1.current_temperature);
});

$('#downtemp').click(function() {
   th1.downtemp();
   $('#current_temp').text(th1.current_temperature);
});

$('#temp_reset').click(function() {
   th1.temp_reset();
   $('#current_temp').text(th1.current_temperature);
});

$.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8d768cdf677e80b711b9f48b07da13fc&units=metric", function(data) {
  $("#weather").text("London is " + data.main.temp + '°C    ☺');
});


//insert before end
});
