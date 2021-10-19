const user = require('./user.controller')
const country = require('./country.controller')
const area = require('./area.controller')
const document = require('./document.controller')

module.exports = {
    ...user,
    ...country,
    ...area,
    ...document
}