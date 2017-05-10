var thermostat = new Thermostat();

describe("Thermostat", function() {

  it("It initializes at 20 degress", function () {
    expect(thermostat.temperature).toEqual(20)
  });

  it("It increases temperature by from 20 to 21 degrees", function () {
    thermostat.uptemp()
    expect(thermostat.temperature).toEqual(21)
  });
});
