
import noderesolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {uglify} from 'rollup-plugin-uglify';
import buble from 'rollup-plugin-buble';
export default {
  input: 'src/index.js',
  output: [
    {file: 'dist/vge.js', format: 'iife', sourcemap: true}
  ],
  plugins: [
    noderesolve(),
    commonjs(),
    buble(),
    uglify()
  ]
};
