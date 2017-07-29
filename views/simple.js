'use strict';
const SimpleView = function(template) {
  this.templateFile = template;
};

SimpleView.prototype.__init = function(units) {
  this.env = units.require('core.template');
};

SimpleView.prototype.get = function(req, res) {
  this.env.render(this.templateFile, req.body, (err, html) => {
    res.send(html);
  });
};


module.exports = SimpleView;
