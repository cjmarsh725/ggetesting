var GG = (function (exports) {
  'use strict';

  const config = () => {
    return "foobar";
  };

  const setup = () => {
    console.log(config());
  };

  exports.setup = setup;

  return exports;

}({}));
