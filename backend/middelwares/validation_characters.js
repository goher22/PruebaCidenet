
const validationCharacters = (req, res, next) => {
    const {first_name, second_name, surname, second_surname} = req.body
    
    const pattern = new RegExp("^[a-zA-Z\\s]+$");
    if(!pattern.test(first_name))
        return res.status(400).json({msg: 'Primer nombre no valido'});
    if(!pattern.test(second_name))
        return res.status(400).json({msg: 'Segundo nombre no valido'});
    if(!pattern.test(surname))
        return res.status(400).json({msg: 'Primer apellido no valido'});
    if(!pattern.test(second_surname))
        return res.status(400).json({msg: 'Segundo apellido no valido'});
    next()
}

const validationDate = (req, res, next) => {
    const { date_admission } = req.body

    const date_ad = Date(date_admission)
    const datanow = Date.now

    if(date_ad > datanow)
        return res.status(400).json({msg: 'Fecha no valida'});

    next()
}

module.exports = {
    validationCharacters,
    validationDate
}