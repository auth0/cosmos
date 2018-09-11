const babelOptions = { presets: ['env'] }

module.exports = require('babel-jest').createTransformer(require('../../core/babel-preset'))
