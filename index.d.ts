interface Options {
	/** ignore case
    * @default false
    */
	readonly ignoreCase: boolean;
}

/**
 * Check if a string has consecutive characters
 *
 * @example
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
 */
declare function isRepeated(
	input: string,
	target: string,
	options?: Options
): boolean;

export = isRepeated;
