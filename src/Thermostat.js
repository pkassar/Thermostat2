function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.uptemp = function() {
  this.temperature++;
};
