const fs = require('fs')

let asketch = JSON.parse(fs.readFileSync('./build/asketch.json', 'utf8'))

/* filter out narrow spec */
asketch.layers = asketch.layers.filter(layer => !layer.symbolID.includes('narrow'))

/* remove stupid emoji from name */
asketch.layers = asketch.layers.map(layer => {
  layer.name = layer.name.replace('🖥 ', '')
  return layer
})

fs.writeFileSync('./build/asketch.json', JSON.stringify(asketch))
