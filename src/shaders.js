export const shaders = {
  defaultVertex: `
  attribute vec4 a_position;
  attribute vec2 a_texcoord;
  
  uniform mat4 u_matrix;
  
  varying vec2 v_texcoord;
  
  void main() {
     gl_Position = u_matrix * a_position;
     v_texcoord = a_texcoord;
  }`,
  defaultFragment: `
  precision mediump float;
  
  varying vec2 v_texcoord;
  
  uniform sampler2D u_texture;
  
  void main() {
     gl_FragColor = texture2D(u_texture, v_texcoord);
  }`
}