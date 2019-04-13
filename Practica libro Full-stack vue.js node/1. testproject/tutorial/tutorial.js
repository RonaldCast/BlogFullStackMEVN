'use-strict'
//crear un servidor 
const http = require('http')

const template =`
<h1>My name is Ronald</h1>
<h2>I love programming </h2>
`
http.createServer((req,res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(template);
}).listen(3000,'localhost')

console.log("server running at http://localhost:3000/")

