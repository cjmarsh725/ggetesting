var GG = (function (exports) {
  'use strict';

  const _width = new WeakMap();

  class Sprite {
    constructor() {
      _width.set(this, 5);
    }
    set width(val) {_width.set(this, val);}
    get width() {return _width.get(this)}
  }

  exports.Sprite = Sprite;

  return exports;

}({}));
