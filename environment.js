'use strict';
const nunjucks = require('nunjucks');

const Environment = function() {
  this.env = undefined;
}

Environment.prototype.__initRequired = true;

Environment.prototype.__init = function(units) {
  const settings = units.require('core.settings');
  const s = settings.nunjucks || {};
  this.env = nunjucks.configure(s.path, Object.assign({
    watch: settings.core.debug
  }, s));

  for (const name in s.global) {
    this.env.addGlobal(name, s.global[name]);
  }
};

Environment.prototype.__instance = function() {
  return this.env;
};

module.exports = Environment;
