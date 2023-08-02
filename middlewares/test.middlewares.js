const { getUserOneDb } = require('../models/users.models')
const jwt = require('jsonwebtoken')

module.exports.checkExitsUserSignIn = async (req, res, next) => {
    const { username } = req.body
    const user = await getUserOneDb({ username })
    if (user) res.status(400).json({ message: 'User Exits' })
    else next()
}

module.exports.checkAuthentication = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]
        console.log(token)
        if (token) {
            const decoded = jwt.verify(token, 'testtoken')
            if (decoded) next()
            else res.json({ message: 'bạn chưa đăng nhập' })
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports.checkAuthoziration = async (req, res, next) => {
    const { username } = req.headers
    const user = await getUserOneDb({ username })
    console.log(user);
    if (user?.role.includes("admin")) next()
    else res.json(user)
}