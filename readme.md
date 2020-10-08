# is-repeated ![build](https://travis-ci.com/RocktimSaikia/is-repeated.svg?branch=master) ![license](https://img.shields.io/github/license/rocktimsaikia/is-repeated)

> Check if a string has consecutive characters

## Install
```
$ npm install is-repeated
```

## Usage

```js
const isRepeated = require('is-repeated')

isRepeated('foo-bar---baz','-')
//=> true

isRepeated('-bar-', '-'));
//=> false

isRepeated('foo@#@#baz', '@#');
//=> true

isRepeated('baAr', 'a', {ignoreCase: true});
//=> true
```

## API

### isRepeated(input, target, options?)

##### input

*Required*
Type: `string`

#### target

*Required*  
Type: `string`

subtring to run the test against.

#### options

##### ignoreCase

Type: `boolean`<br>
Default: `false`

## Related 

- [`trim-repeated`](https://github.com/sindresorhus/trim-repeated) - Trim a consecutively repeated substring

## Support

<a href="https://www.buymeacoffee.com/7BdaxfI"><img src="https://user-images.githubusercontent.com/33410545/95193575-a3b51b00-07f1-11eb-9bbb-90ea2e1018d7.png" height="60px"/></a>
