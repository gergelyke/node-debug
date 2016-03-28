const fs = require('fs')

fs.readFile('OMG-NO-SUCH-FILE', function (err) {
  if (err) {
    return console.log(err)
  }

  // THE WORLD ENDS HERE
})
