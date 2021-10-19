const { Router } = require("express");
const { procureDocumentsType } = require("../controllers");

const route = Router()

route.get('/', procureDocumentsType)

module.exports = route