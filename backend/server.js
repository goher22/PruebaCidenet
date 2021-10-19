const express = require('express')
const cors = require('cors')

const {dbConnection} = require('./database/config')

class Server {
    constructor() {

        //Iniciación de variables
        this.app = express()
        this.port = process.env.PORT

        //Listado de endpoint
        this.paths = {
            user: '/api/user',
            country: '/api/country'
        }

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
        this.app.use(this.paths.user, require('./routes/user.route'))
        this.app.use(this.paths.country, require('./routes/country.route'))
    }

    listeb(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port)
        })
    }

}

module.exports = Server