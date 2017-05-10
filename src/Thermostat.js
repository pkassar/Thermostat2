function Thermostat() {
  this.temperature = 20;
  this.min = 10;
  this.powersaver = true;
  this.max_saver_on = 25;
  this.max_saver_off = 32;
};

Thermostat.prototype.uptemp = function() {
  this.check_temp();
  this.temperature++;
};

Thermostat.prototype.downtemp = function() {
  this.check_temp();
  this.temperature--;
};

Thermostat.prototype.check_temp = function() {
  this.saver_switch()
  if (this.temperature === this.min) throw "Temp is too low";
  if (this.temperature === this.max) throw "Temp is too high";
}

Thermostat.prototype.saver_switch = function() {
  if (this.powersaver === true) {this.max = this.max_saver_on}
  else {this.max = this.max_saver_off}
}

// //thermostat ... SWITCH =
// power saver. on --> off
//                 offf --> on
