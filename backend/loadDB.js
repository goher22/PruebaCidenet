require('dotenv').config()

const { Promise } = require('mongoose')
const { dbConnection, dbDisconnection } = require('./database/config')

const { Country, Area, DocumentType } = require('./models')

const main = async () => {

    try {
        //Conectando a mongo
        await dbConnection()

        //Paises inicial
        const countries = [
            new Country({ name: 'Colombia', iso: 'co' }),
            new Country({ name: 'Estados Unidos', iso: 'us' })
        ]

        //Areas inicial
        const areas = [
            new Area({ name: 'Administración' }),
            new Area({ name: 'Financiera' }),
            new Area({ name: 'Compras' }),
            new Area({ name: 'Infraestructura' }),
            new Area({ name: 'Operación' }),
            new Area({ name: 'Talento Humano' }),
            new Area({ name: 'Servicios Varios' })
        ]

        //Tipo de documento inicial
        const document_types = [
            new DocumentType({ name: 'Cédula de Ciudadanía' }),
            new DocumentType({ name: 'Cédula de Extranjería' }),
            new DocumentType({ name: 'Pasaporte' }),
            new DocumentType({ name: 'Permiso Especial' })
        ]

        console.log("Cargando base de dato de mongodb..")

        await Promise.all([
            Area.insertMany(areas),
            DocumentType.insertMany(document_types),
            Country.insertMany(countries)
        ])

        console.log("Datos Cargados")

        //Desconectando de mongo
        await dbDisconnection()
    } catch (error) {
        console.log(error)
        //Desconectando de mongo
        await dbDisconnection()
    }
}

main()