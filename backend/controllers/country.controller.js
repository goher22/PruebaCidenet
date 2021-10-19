const { Country } = require("../models");

const procureCountries = async (req, res) => {
    const countries = await Country.find()
    res.json({Contries: countries})
}

module.exports = {
    procureCountries
}