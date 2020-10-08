import test from 'ava';
import isRepeated from '.';

test('main', t => {
	t.truthy(isRepeated('foo', 'o'));
	t.truthy(isRepeated('foo--bar', '-'));
	t.truthy(isRepeated('foo))bar', ')'));
	t.truthy(isRepeated('foo-bar---', '-'));
	t.false(isRepeated('-bar-', '-'));
	t.false(isRepeated('-baAr-', 'a'));
	t.truthy(isRepeated('-baAr-', 'a', {ignoreCase: true}));
	t.truthy(isRepeated('foo@#@#baz', '@#'));
});
