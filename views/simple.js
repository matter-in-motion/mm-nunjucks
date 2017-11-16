'use strict';
const Simple = function(template) {
  this.file = template;
};

Simple.prototype.__init = function(units) {
  this.logger = units.require('core.logger').get('templates');
  const env = units.require('templates.nunjucks');
  this.template = env.getTemplate(this.file, true);
};

Simple.prototype.get = function(req, res) {
  this.template.render(req.body, (err, html) => {
    if (err) {
      this.logger.error(err);
      res.status(500).end();
      return;
    }

    res.set('Content-Type', 'text/html');
    res.send(html);
  });
};


module.exports = Simple;
