function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.MAX_SAVER_ON = 25;
  this.MAX_SAVER_OFF = 32;
  this.current_temperature = this.DEFAULT_TEMP;
  this.MIN = 10;
  this.powersaver = true;
  this.max = this.MAX_SAVER_ON;
  this.check_energy_usage();
};

Thermostat.prototype.uptemp = function() {
  this._check_temp_max();
  this.current_temperature++;
  this.check_energy_usage();
};

Thermostat.prototype.downtemp = function() {
  this._check_temp_min();
  this.current_temperature--;
  this.check_energy_usage();
};

Thermostat.prototype._check_temp_min = function() {
  if (this.current_temperature <= this.MIN) throw "Temp is too low";
}

Thermostat.prototype._check_temp_max = function() {
  if (this.current_temperature >= this.max) throw "Temp is too high";
}

Thermostat.prototype.saver_switch_on = function() {
  this.powersaver = true
  this.max = this.MAX_SAVER_ON
  if (this.current_temperature >= this.max) { this.current_temperature = this.max} ;
// this.check_energy_usage();
};

Thermostat.prototype.saver_switch_off = function() {
  this.powersaver = false
  this.max = this.MAX_SAVER_OFF
};

Thermostat.prototype.temp_reset = function() {
  this.current_temperature = this.DEFAULT_TEMP;
  this.check_energy_usage();
}

Thermostat.prototype.check_energy_usage = function() {
  if (this.current_temperature < 18) { this.energy_usage = "low_usage" };
  if (this.current_temperature >= 18 && this.current_temperature < 25) { this.energy_usage = "medium_usage"} ;
  if (this.current_temperature >= 25) { this.energy_usage = "high_usage" };
}
