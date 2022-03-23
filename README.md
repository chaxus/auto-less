
## auto-require-less

Js or index.ts automatically require a less file with the same name at the end of the file.

自动在index.js或者index.ts文件最后面require同名的less文件
## Getting Started
```
npm i auto-require-less -D
```
Then add the plugin to your webpack config. For example:
### webpack.config.js
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)?$/,
        use: ["auto-require-less"],
      },
    ],
  },
};
```