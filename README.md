[js-collections](http://aureooms.github.io/js-collections)
==

Collections code bricks for JavaScript. Parent is
[js-data-structures](https://github.com/aureooms/js-data-structures).

JavaScript version of
[Python's collections library](https://docs.python.org/3.6/library/collections.html)
together with
[Python's heapq library](https://docs.python.org/3.6/library/heapq.html)
and
[Python's bisect library](https://docs.python.org/3.6/library/bisect.html).

```js
let {
	heapq , bisect ,
	namedtuple ,
	deque ,
	set ,
	dict , defaultdict , ordereddict , counter , chainmap
} = collections ;
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-collections.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-collections/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-collections.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-collections)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-collections.svg?style=flat)](http://bower.io/search/?q=aureooms-js-collections)
[![Build Status](http://img.shields.io/travis/aureooms/js-collections.svg?style=flat)](https://travis-ci.org/aureooms/js-collections)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-collections.svg?style=flat)](https://coveralls.io/r/aureooms/js-collections)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-collections.svg?style=flat)](https://david-dm.org/aureooms/js-collections#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-collections.svg?style=flat)](https://david-dm.org/aureooms/js-collections#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-collections.svg?style=flat)](https://codeclimate.com/github/aureooms/js-collections)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-collections.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-collections)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-collections.svg?style=flat)](https://github.com/aureooms/js-collections/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-collections.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-collections)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-collections
# or
jspm install npm:aureooms-js-collections
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-collections
```

### bower
```terminal
bower install aureooms-js-collections
```

### ender
```terminal
ender add aureooms-js-collections
```

### jam
```terminal
jam install aureooms-js-collections
```

### spm
```terminal
spm install aureooms-js-collections --save
```

### npm
```terminal
npm install aureooms-js-collections --save
```

## Require
### jspm
```js
let collections = require( "github:aureooms/js-collections" ) ;
// or
import collections from 'aureooms-js-collections' ;
```
### duo
```js
let collections = require( "aureooms/js-collections" ) ;
```

### component, ender, spm, npm
```js
let collections = require( "aureooms-js-collections" ) ;
```

### bower
The script tag exposes the global variable `collections`.
```html
<script src="bower_components/aureooms-js-collections/js/dist/collections.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-collections" ] , function ( collections ) { ... } ) ;
```

## Use

See Python's docs:

  - [collections](https://docs.python.org/3.6/library/collections.html)
  - [heapq](https://docs.python.org/3.6/library/heapq.html)
  - [bisect](https://docs.python.org/3.6/library/bisect.html).
