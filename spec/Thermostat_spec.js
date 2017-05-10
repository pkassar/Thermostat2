describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("It initializes at 20 degress", function () {
    expect(thermostat.temperature).toEqual(20)
  });

  it("It increases temperature by from 20 to 21 degrees", function () {
    thermostat.uptemp()
    expect(thermostat.temperature).toEqual(21)
  });

  it("It decreases temperature by from 20 to 19 degrees", function () {
    thermostat.downtemp()
    expect(thermostat.temperature).toEqual(19)
  });
});
