<div align="center">
<h1>hardchor-scripts 🛠📦</h1>

<p>CLI toolbox for common scripts for my projects</p>
</div>

<hr />

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmcharts]
[![MIT License][license-badge]][license]

[![PRs Welcome][prs-badge]][prs]
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]

> **Initially forked from [kcd-scripts](https://github.com/kentcdodds/kcd-scripts) and amended to my needs.**

## The problem

I do a bunch of open source and want to make it easier to maintain so many
projects.

## This solution

This is a CLI that abstracts away all configuration for my open source projects
for linting, testing, building, and more.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [The problem](#the-problem)
- [This solution](#this-solution)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
  - [Overriding Config](#overriding-config)
- [Inspiration](#inspiration)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev hardchor-scripts
```

## Usage

This is a CLI and exposes a bin called `hardchor-scripts`. I don't really plan on
documenting or testing it super duper well because it's really specific to my
needs. You'll find all available scripts in `src/scripts`.

This project actually dogfoods itself. If you look in the `package.json`, you'll
find scripts with `node src {scriptName}`. This serves as an example of some
of the things you can do with `hardchor-scripts`.

### Overriding Config

Unlike `react-scripts`, `hardchor-scripts` allows you to specify your own
configuration for things and have that plug directly into the way things work
with `hardchor-scripts`. There are various ways that it works, but basically if you
want to have your own config for something, just add the configuration and
`hardchor-scripts` will use that instead of it's own internal config. In addition,
`hardchor-scripts` exposes its configuration so you can use it and override only
the parts of the config you need to.

This can be a very helpful way to make editor integration work for tools like
ESLint which require project-based ESLint configuration to be present to work.

So, if we were to do this for ESLint, you could create an `.eslintrc` with the
contents of:

```
{"extends": "./node_modules/hardchor-scripts/eslint.js"}
```

> Note: for now, you'll have to include an `.eslintignore` in your project until
> [this eslint issue is resolved](https://github.com/eslint/eslint/issues/9227).

Or, for `babel`, a `.babelrc` with:

```
{"presets": ["hardchor-scripts/babel"]}
```

Or, for `jest`:

```javascript
const {jest: jestConfig} = require('hardchor-scripts/config')
module.exports = Object.assign(jestConfig, {
  // your overrides here

  // for test written in Typescript, add:
  transform: {
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
})
```

> Note: `hardchor-scripts` intentionally does not merge things for you when you start
> configuring things to make it less magical and more straightforward. Extending
> can take place on your terms. I think this is actually a great way to do this.

## Inspiration

This is inspired by `kcd-scripts` and `react-scripts`.


[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[version-badge]: https://img.shields.io/npm/v/hardchor-scripts.svg?style=flat-square
[package]: https://www.npmjs.com/package/hardchor-scripts
[downloads-badge]: https://img.shields.io/npm/dm/hardchor-scripts.svg?style=flat-square
[npmcharts]: http://npmcharts.com/compare/hardchor-scripts
[license-badge]: https://img.shields.io/npm/l/hardchor-scripts.svg?style=flat-square
[license]: https://github.com/hardchor/monorepo/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[github-watch-badge]: https://img.shields.io/github/watchers/hardchor/monorepo.svg?style=social
[github-watch]: https://github.com/hardchor/monorepo/watchers
[github-star-badge]: https://img.shields.io/github/stars/hardchor/monorepo.svg?style=social
[github-star]: https://github.com/hardchor/monorepo/stargazers
