const options = {
  foo: 1,
  bar: "2",
  baz: [3]
}
const foo = new GG.sprite(options);
options.foo = 2;
foo.logFoo();
const foo2 = new GG.sprite(options);
foo2.logFoo();
//const foo3 = new GG.Sprite(options);