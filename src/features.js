$( document ).ready(function() {
  th1 = new Thermostat();

  $('#current_temp').text('The thermostat is now set at ' + th1.current_temperature+ ' °C');
  $('#min_temp').text('the min temperature is ' + th1.MIN + ' °C');
  $('#max_temp').text('the current max temperature is ' + th1.max + ' °C');

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

  $("#power_saver_on").click(function() {
    th1.saver_switch_on();
    $('#current_temp').text(th1.current_temperature)
    $('#max_temp').text('the current max temperature is ' + th1.max + ' °C');
  });

  $("#power_saver_off").click(function() {
    th1.saver_switch_off();
    $('#current_temp').text(th1.current_temperature)
    $('#max_temp').text('the current max temperature is ' + th1.max + ' °C');
  });


  $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8d768cdf677e80b711b9f48b07da13fc&units=metric", function(data) {
    $("#weather").text("London is " + data.main.temp + '°C    ☺');
  });



  //insert before end
});
