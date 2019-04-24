const http = require('http')
const url = require('url')
const querystring = require('querystring')

function iniciar(route, handler){
    function onRequest(req, res) {
        console.log("Peticion Recibida.");
        var pathName = url.parse(req.url).pathname;
        var dataPosteada = "";
       // var d = querystring.parse(pathName)
        console.log(`Peticion para  ${pathName} recibidad`)
        //para que acepte todo los paramaetro 
        req.setEncoding("utf8")
        req.addListener("data", function(trozoPosteado){
            dataPosteada += trozoPosteado
            console.log(`Recibido trozo POST ${trozoPosteado}`)
        })
            
        req.addListener("end", function(){
             route(handler, pathName, res, dataPosteada)
        })

       
    }

http.createServer(onRequest).listen(3000)

console.log("http://localhost:3000")
}
 exports.iniciar = iniciar 

 /**
  * 
  * Para oder manipular las rutas se usa:
  * Modulo url y querystring 
  * url.parse(string).query
  * url.parse(string).query
  * querystring(string)["foo"]
  * querystring(string)["hello"]
  * http: //localhost:8888/iniciar?foo=bar&hello=world
  */