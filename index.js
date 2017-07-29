'use strict';
const Environment = require('./environment');

module.exports = () => ({
  templates: { nunjucks: new Environment() }
});
