const { Router } = require("express");
const { procureArea } = require("../controllers");

const route = Router()

route.get('/', procureArea)

module.exports = route