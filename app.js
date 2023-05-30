//FILE CONTROLLER
const express = require("express")
const dbConnect = require('./config/mongo')
const app = express()

app.use(express.json());

const port =  3000

dbConnect();

app.use('*', (req, res, next) => {
    if (!connected) {
      return res.status(500).send("No se pudo establecer la conexión. Por favor, póngase en contacto con el administrador.");
    } else {
        res.end('Conexion Establecida\n');
      return next();
    }
  });

app.listen(port, () => {
    console.log(`app lista url http://localhost:${port}`)
})

