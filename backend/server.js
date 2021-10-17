const express = require('express')
const cors = require('cors')

const {dbConnection} = require('./database/config')

class Server {
    constructor() {

        //Iniciación de variables
        this.app = express()
        this.port = process.env.PORT

        //Listado de endpoint
        this.paths = []

        //Conexion de base de datos
        this.connectDB()

        //Definir Middlewares
        this.middlewares()

        //Iniciación de rutas
        this.routes()

    }

    async connectDB(){
        await dbConnection()
    }

    middlewares(){
        //CORS
        this.app.use(cors())

        //Pareso y lectura del body
        this.app.use(express.json())

    }

    routes(){

    }

    listeb(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port)
        })
    }

}

module.exports = Server