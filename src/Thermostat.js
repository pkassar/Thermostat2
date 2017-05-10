function Thermostat() {
  this.temperature = 20;
  this.min = 10;
};

Thermostat.prototype.uptemp = function() {
  this.temperature++;
};

Thermostat.prototype.downtemp = function() {
  this.check_temp();
  this.temperature--;
};

Thermostat.prototype.check_temp = function() {
  if (this.temperature === this.min) throw "Temp is too low";
}
