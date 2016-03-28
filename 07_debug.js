// npm install -g node-inspector
// node-debug app.js

const fs = require('fs')

function parseJSON (string) {
  return new Promise((resolve, reject) => {
    try {
      return resolve(JSON.parse(string))
    } catch (ex) {
      return reject(ex)
    }
  })
}

function filterName (json) {
  return json.neme
}

fs.readFile('package.json', 'utf-8', (err, data) => {
  if (err) {
    return console.log(err)
  }

  parseJSON(data)
    .then(filterName)
    .then((name) => {
      console.log(name)
    })
})
