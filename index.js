const config = require('config')
const StreamZip = require('node-stream-zip')

const zip = new StreamZip({
  file: config.get('path'),
  storeEntries: false
})

zip.on('ready', () => {
})

zip.on('entry', entry => {
  console.log(`entry ${entry.name}`)
})

