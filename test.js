'use strict';
const test = require('ava');
const { createApp } = require('mm-test');
const extension = require('./index');

process.env.NODE_ENV = '';

test('Renders the simple string', t => {
  const app = createApp({
    extensions: [ extension ]
  }, { default: false });

  t.true(app.inited);
  const env = app.units.require('templates.nunjucks');
  const res = env.renderString('Hello {{ name }}', { name: 'World' });
  t.is(res, 'Hello World');
});

test('Renders the simple string with global variable', t => {
  const app = createApp({
    extensions: [ extension ],
    nunjucks: {
      global: {
        name: 'World'
      }
    }
  }, { default: false });

  t.true(app.inited);
  const env = app.units.require('templates.nunjucks');
  const res = env.renderString('Hello {{ name }}');
  t.is(res, 'Hello World');
});
