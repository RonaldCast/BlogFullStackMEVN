var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var User = require("./Models/User")
var chalk = require('chalk')


/**var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
*/

/********agregrar file-system***********/

var fs = require('file-system');
var app = express();
require("./Models/database")

// se usa par amandar objeto mediante el metodo post y put 
// es de suma importantacia para leer los json que se envian. 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//----------------------------------------------------------------------------
//include controller
//Configuracion del controlador 
/**
 * Description: esta lo que hace es leer la carpeta controller 
 * luego analiza cada fichero de la carpeta y luego
 * agregar express a cada carpeta. 
 *  */

fs.readdirSync('controllers').forEach( function(file) {
      if(file.substr(-3) == '.js'){
      const route = require('./controllers/' + file)
       route.controller(app)
    }
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/******************************* */
// configuraciones de las rutas 
/*app.use('/', indexRouter);
app.use('/users', usersRouter);*/

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


//*************************************** */
//para poner en funcionamiento el local host//
/******************* */
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
 
app.listen(3000, function(){console.log(chalk.blue("http://localhost:3000/"))})



module.exports = app;