/// <reference path="./somejs.d.ts" />

import Bar from 'sub/Bar';

import { baz as fooBaz, qat as fooQat, Foo as BazFoo } from 'sub/baz';
import somejs = require('sub/somejs');

export default class Foo {
	private foo: BazFoo;
	bar: Bar;
	baz = fooBaz;
	qat = fooQat;
	constructor (foo: BazFoo) {
		this.bar = new Bar();
		this.foo = foo;
	}
}

export const foo = new Foo({ bar: '', qat: 1 });
export const js = somejs.js;
