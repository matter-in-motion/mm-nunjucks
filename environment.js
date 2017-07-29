'use strict';
const nunjucks = require('nunjucks');

const Environment = function() {
  this.env = undefined;
}

Environment.prototype.__initRequired = true;

Environment.prototype.__init = function(units) {
  const settings = units.require('core.settings');
  this.env = nunjucks.configure(settings.nunjucks.path, Object.assing({
    watch: settings.core.debug
  }, settings.nunjucks));
};

Environment.prototype.__instance = function() {
  return this.env;
};

module.exports = Environment;
