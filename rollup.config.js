/*
 * @Author: rzh
 * @Date: 2021-10-04 15:53:17
 * @LastEditors: ran
 * @LastEditTime: 2022-03-23 11:58:31
 * @Description: Do not edit
 */
import resolve from 'rollup-plugin-node-resolve';
// import polyfills from 'rollup-plugin-polyfill-node';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import ts from 'rollup-plugin-typescript2'
import * as path from 'path'
// import { eslint } from 'rollup-plugin-eslint';

const extensions = [
  '.js',
  '.ts',
  '.tsx'
]
export default [
  {
    input: './index.ts',
    output: {
      name: 'auto-less',
      file: 'dist/bundle.js',
      format: 'umd',
      sourcemap: true,
      banner: '/*eslint-disable*/',
      
    },
    plugins: [
      // resolve({
      //   browser: true,
      // }), // 这样 Rollup 能找到 `ms`
    //   eslint({
    //     throwOnError: true,
    //     throwOnWarning: true,
    //     include: ['main.js', 'draw.js'],
    //     exclude: ['node_modules/**'],
    //   }),
      // babel({
      //   exclude: 'node_modules/**', // 防止打包node_modules下的文件
      //   runtimeHelpers: true, // 使plugin-transform-runtime生效
      // }),
      ts({
        tsconfig: path.resolve(__dirname, 'tsconfig.json'),
        extensions
    }),
      babel({
        runtimeHelpers: true,
      }),
     
      // polyfills(),
      commonjs(),
      resolve({
        preferBuiltins: true
      }),
      terser()
    ],
  },
];
