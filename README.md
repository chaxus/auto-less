
## auto-require-css

js,tsx,jsx file automatically require a less,css,scss file with the same name at the end of the file.

## Getting Started
```
npm i auto-require-css -D
```
Then add the plugin to your webpack config. For example:
### webpack.config.js
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)?$/,
        use: ["auto-require-css"],
      },
    ],
  },
};
```
CSS Module mode is now supported，

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]-[hash:base64:5]",
              }
            },
          },
        ],
      },
      {
        test: /\.(js|jsx|tsx)?$/,
        use: [{
          loader:"auto-require-css",
          options:{
            mode:'module'
          }
        }],
      },
    ],
  },
};
```