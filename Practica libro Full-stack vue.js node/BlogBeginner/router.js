function route(handler, pathname, response, postData) {
    console.log(`A punto de rutear una peticion para ${pathname}`)

    let arrayRoutes = Object.keys(handler)
    if (arrayRoutes.includes(pathname)) {
        return handler[pathname](response, postData)
    }else{
        console.log("No hay manipulador de peticion para " + pathname);
       response.writeHead(404,{"content-type": "text/html"});
       response.write("404 no encontrado")
       response.end()
    }
   
}

exports.route = route;