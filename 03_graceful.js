const http = require('http')
const server = http.createServer((request ,response) => {
  response.end(`
    <html>
      <body>
        <h1>Hello, Nodebp!</h1>
      </body>
    </html>
    `);
}).listen(3000)

function terminationHandler (a) {
  server.close(() => {
    Promise.all([
      // here close db connections, etc....
      Promise.resolve()
    ]).then(() => {
      process.exit(0)
    })
  })
}

process.on('SIGINT', terminationHandler)
process.on('SIGTERM', terminationHandler)
