const { Router } = require("express");
const { procureCountries } = require("../controllers");


const route = Router()

route.get('/', procureCountries)

module.exports = route