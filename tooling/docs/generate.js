const getComponentMetadata = require('./metadata')
const buildPages = require('./pages')

const metadata = getComponentMetadata()
buildPages(metadata)
