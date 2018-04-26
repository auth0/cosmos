const fs = require('fs')

let asketch = JSON.parse(fs.readFileSync('./dist/asketch.json', 'utf8'))

/* filter out narrow spec */
asketch.layers = asketch.layers.filter(layer => !layer.symbolID.includes('narrow'))

/* remove stupid emoji from name */
asketch.layers = asketch.layers.map(layer => {
  layer.name = layer.name.replace('🖥 ', '')
  return layer
})

fs.writeFileSync('./dist/asketch.json', JSON.stringify(asketch))
