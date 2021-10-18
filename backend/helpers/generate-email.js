const { Country, User } = require('../models')
/**
 * Genera un correo electronico
 */
const generateEmail = async (first_name, surname, id_country) => {

    var countemail = 0
    var init_email = `${first_name}.${surname}`
    var exists_email = ''

    const country = await Country.findById(id_country)

    if(!country) throw new Error('El pais no existe')

    do{
        exists_email = await User.findOne({email: `${init_email}@cidenet.com.${country.iso}`})
        if(exists_email) {
            countemail++
            init_email = `${first_name}.${surname}.${countemail}`
        }

    }while(exists_email != null)

    return `${init_email}@cidenet.com.${country.iso}`

}

module.exports = {
    generateEmail
}