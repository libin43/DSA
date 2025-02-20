const http = require('http')


const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/plain'})
    res.write('Hello word')
    res.end()
})

server.listen(3000, ()=>{
    console.log('listent to 3000')
})