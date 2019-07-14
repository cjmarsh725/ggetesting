import { shaders } from '../shaders';

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

export default Renderer;