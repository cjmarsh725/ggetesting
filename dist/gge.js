var GG = (function (exports) {
  'use strict';

  class Renderer {
    constructor() {
      // this.vertexShader = this.createShader(gl)
    }

    createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
      if (success) return shader;
      console.error("There was a problem creating the shader: " +
                        gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
    }

    run() {
      console.log("running...");
    }

  }

  const renderer = new Renderer();

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

  const run = renderer.run;

  exports.run = run;
  exports.sprite = Sprite;

  return exports;

}({}));
