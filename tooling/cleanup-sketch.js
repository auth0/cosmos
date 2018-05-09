const fs = require('fs')

let raw = fs.readFileSync('./build/asketch.json', 'utf8')

/* replace font name */
raw = raw.replace(/fakt-web/g, 'Fakt Pro')

/* convert to structured json */
let asketch = JSON.parse(raw)

/* filter out narrow spec */
asketch.layers = asketch.layers.filter(layer => !layer.symbolID.includes('narrow'))

/* remove silly emoji from name */
asketch.layers = asketch.layers.map(layer => {
  layer.name = layer.name.replace('🖥 ', '')
  return layer
})

fs.writeFileSync('./build/asketch.json', JSON.stringify(asketch))
