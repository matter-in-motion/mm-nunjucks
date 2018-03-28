# Matter In Motion. Nunjucks templates

[![NPM Version](https://img.shields.io/npm/v/mm-nunjucks.svg?style=flat-square)](https://www.npmjs.com/package/mm-nunjucks)
[![NPM Downloads](https://img.shields.io/npm/dt/mm-nunjucks.svg?style=flat-square)](https://www.npmjs.com/package/mm-nunjucks)

[Nunjucks templates](https://mozilla.github.io/nunjucks) extension for [matter in motion](https://github.com/matter-in-motion/mm) framework

## Usage

[Extensions installation instructions](https://github.com/matter-in-motion/mm/blob/master/docs/extensions.md)

Adds nunjucks templates [Environment](https://mozilla.github.io/nunjucks/api.html#environment) as `templates.nunjucks` unit.

## Settings

Add `nunjucks` section to your settings with path to templates.

* **path** — string, path to where your templates live
* global — object, global variables to add to an environment context
* [The rest available options](https://mozilla.github.io/nunjucks/api.html#configure)

If your `core.debug` options is true it will reload templates when they are changed.

License: MIT.
