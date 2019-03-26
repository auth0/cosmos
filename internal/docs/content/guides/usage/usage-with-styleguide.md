Cosmos adds a set of resets the same resets to your application, if you are already using the legacy styleguide, you can disable the resets from Cosmos by setting an environment variable in your `webpack.config.js`

```js
{
  plugins: [
    new webpack.EnvironmentPlugin({
      COSMOS_DISABLE_RESETS: true,
    }),
  ]
}
```
