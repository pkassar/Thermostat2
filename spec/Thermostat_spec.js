'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("It initializes at 20 degress", function () {
    expect(thermostat.current_temperature).toEqual(20)
  });

  it("It increases temperature by 1 from 20 to 21 degrees", function () {
    thermostat.uptemp()
    expect(thermostat.current_temperature).toEqual(21)
  });

  it("It decreases temperature by 1 from 20 to 19 degrees", function () {
    thermostat.downtemp()
    expect(thermostat.current_temperature).toEqual(19)
  });

it("Will not let temperature go below 10", function () {
  thermostat.current_temperature = 10;
  expect(function(){
    thermostat.downtemp()}).toThrow("Temp is too low");
  });

  it("Will not let temperature go above 25 on powersaver ON", function () {
    thermostat.current_temperature = 25;
    expect(function(){
      thermostat.uptemp()}).toThrow("Temp is too high");
  });

  it("Will not let temperature go above 32 on powersaver OFF", function () {
    thermostat.current_temperature = 32;
    thermostat.powersaver = false;
    expect(function(){
      thermostat.uptemp()}).toThrow("Temp is too high");
  });

  it("Will reset temperature to 20 from 24", function () {
    thermostat.current_temperature = 24;
    thermostat.temp_reset();
    expect(thermostat.current_temperature).toEqual(20);
  });

  it("Will state low energy usage when temperature is 17", function () {
    thermostat.current_temperature = 17;
    thermostat.check_energy_usage();
    expect(thermostat.energy_usage).toEqual("low_usage");
  });

  it("Will state medium energy usage when temperature is 23", function () {
    thermostat.current_temperature = 23;
    thermostat.check_energy_usage();
    expect(thermostat.energy_usage).toEqual("medium_usage");
  });

  it("Will state high energy usage when temperature is 28", function () {
    thermostat.current_temperature = 28;
    thermostat.check_energy_usage();
    expect(thermostat.energy_usage).toEqual("high_usage");
  });

  it("Switches the power saver OFF >> Max temp 32 and powersaver will be False", function() {
    thermostat.saver_switch();
    expect(thermostat.max).toEqual(thermostat.MAX_SAVER_OFF);
    expect(thermostat.powersaver).toEqual(false);
  });

  it("Switches the power saver ON >> Max temp 25 and powersaver will be True", function() {
    thermostat.powersaver = false
    thermostat.saver_switch();
    expect(thermostat.max).toEqual(thermostat.MAX_SAVER_ON);
    expect(thermostat.powersaver).toEqual(true);
  });

});
