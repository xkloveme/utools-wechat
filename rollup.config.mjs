import babel from 'rollup-plugin-babel';
import {uglify} from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins'
export default {
  input: 'src/bot.js', // 入口文件
  output: {
    format: 'cjs',
    file: 'index.js', // 打包后输出文件
  },
  external: ['wechaty'],
  paths: {
    wechaty: 'https://cdn.jsdelivr.net/npm/wechaty@1.20.2/bin/clean-json.min.js'
  },
  plugins: [
    babel(),
    // 压缩代码
    uglify(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    builtins(),
    commonjs()
  ]
}