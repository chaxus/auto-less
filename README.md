<!--
 * @Author: ran
 * @Date: 2021-12-06 15:34:49
 * @LastEditors: ran
 * @LastEditTime: 2022-03-23 12:18:45
-->
简介：webpack 的一个loader
作用：自动在index.js或者index.ts文件最后面require同名的less文件
用法：在webpack配置loader的地方配置
```js
  {
        test: /\.(js|jsx|tsx)?$/,
        use: ["auto-require-less"],
  },
```