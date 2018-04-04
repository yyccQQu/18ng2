import * as http from 'http'

const server = http.createServer((request, response) => {
    response.end('hello_server')
})

server.listen(8000)


