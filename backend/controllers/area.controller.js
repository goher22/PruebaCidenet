const { Area } = require("../models")

const procureArea = async (req, res) => {
    const areas = await Area.find()
    res.json({Areas: areas})
}

module.exports = {
    procureArea
}