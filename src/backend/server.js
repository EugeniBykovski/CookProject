const fs = require('fs');
const http = require('http')
const PORT = 3000

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })

  fs.readFile('../CookProject/src/frontend/index.html', (err, data) => {
    err
      ? res.writeHead(404) && res.write('Error: File Not Found!')
      : res.write(data)

    res.end()
  })
})

server.listen(PORT, err => {
  err 
    ? console.log(`Something went wrong`, err)
    : console.log(`Server is listening on port: ${PORT}`)
})