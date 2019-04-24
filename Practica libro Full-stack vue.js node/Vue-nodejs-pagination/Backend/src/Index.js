const express = require('express')
const app = express();

require("./database");
const cors = require('cors');

//nos prermite enviar y recibir datos entre servidores 
app.use(cors());
app.use(require("./routes/index"));

app.listen(3000, () => {
    console.log('Server on port 300')
}) 