const user = require('./user.controller')
const country = require('./country.controller')

module.exports = {
    ...user,
    ...country
}