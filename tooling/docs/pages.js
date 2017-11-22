require('babel-core/register')({
  ignore: /node_modules/,
  presets: ['react'],
  plugins: ['transform-es2015-modules-umd', 'babel-plugin-transform-object-rest-spread']
})

const fs = require('fs-extra')
const path = require('path')
const root = require('pkg-dir').sync(__dirname)

const template = data => `
import React from 'react'
import Page from '../common/page'

import ${data.displayName} from '${path.join(root, data.path)}'
import docs from '${path.join(root, data.path.replace('.js', '.md'))}'
const components = { ${data.displayName} }

export default () => <Page docs={docs} components={components} />

`

const buildPages = metadata =>
  metadata.map(data => {
    const page = template(data)
    fs.removeSync(path.join(root, 'build/docs/pages'))
    fs.mkdirsSync(path.join(root, 'build/docs/pages'))
    fs.writeFileSync(path.join(root, 'build/docs/pages/', data.displayName + '.js'), page, 'utf8')
  })

module.exports = buildPages
