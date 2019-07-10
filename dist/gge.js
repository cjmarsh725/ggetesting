var GG = (function (exports) {
  'use strict';

  const _width = new WeakMap();

  class Sprite {
    constructor(options = {}) {
      let { foo, bar, baz } = Object.assign({}, options);
      console.log("Sprite: " + (foo || "foobarbaz"));
      
      _width.set(this, 5);

      this.test = foo;
    }
    set width(val) {_width.set(this, val);}
    get width() {return _width.get(this)}

    logFoo() {
      console.log("Test: " + this.test);
      console.log("Width: " + this.width);
    }
  }

  exports.sprite = Sprite;

  return exports;

}({}));
