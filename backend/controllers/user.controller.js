const { response, request } = require("express");
const { User } = require("../models")

const { generateEmail } = require('../helpers')

const procureUsers = async (req, res) => {
    const {page=1} = req.query

    const desde = page < 1 ? 0 : Number(page-1)*10

    const [total, users] = await Promise.all([
        User.countDocuments(),
        User.find()
            .skip(Number(desde))
            .limit(Number(10))
    ])

    const totalPages = Math.trunc(total/Number(10))

    res.json({
        Page: page < 1 ? 1 :Number(page),
        TotalPages: totalPages == 0? 1 : totalPages,
        Items: users.length,
        TotalItems: total,
        Users: users
    })

}

const procureUser = async (req, res) => {
    const {id} = req.params
    const user = await User.findById(id)
    res.json(user)    
}

const createUser = async (req, res) => {
    
    const { first_name, surname, country, date_admission, ...body} = req.body

    const email = await generateEmail(first_name, surname, country)
    const date_ad = Date(date_admission)

    const data = {
        first_name,
        surname,
        country,
        ...body,
        date_admission: date_ad,
        email
    }

    const user = new User(data)
    await user.save()

    res.status(201).json(user)

}

const updateUser = async (req, res) => {
    const {id} = req.params

    const {_id, email, state, date_created, date_admission,...body} = req.body

    const date_ad = Date(date_admission)

    const data = {
        ...body,
        date_admission: date_ad,
    }

    const user = await User.findByIdAndUpdate(id, data)
    res.json(user)
}

const deleteUser = async (req, res) => {
    const {id} = req.params

    const user = await User.findByIdAndUpdate(id, {state: false})

    res.json({user})

}

module.exports = {
    procureUsers,
    procureUser,
    createUser,
    deleteUser,
    updateUser
}