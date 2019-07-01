var GG = (function (exports) {
  'use strict';

  const renderer = {};

  const config = () => {
    return renderer.foo;
  };

  const setup = () => {
    renderer.foo = "foo";
    console.log(config());
  };

  exports.setup = setup;

  return exports;

}({}));
