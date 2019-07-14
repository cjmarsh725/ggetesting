import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/main.js',
  cache: true,
  output: {
    file: 'dist/gge.js',
    name: 'GG',
    format: 'iife'
  },
  plugins: [
    resolve()
  ]
};