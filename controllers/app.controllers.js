const jwt = require('jsonwebtoken')

module.exports.login = (req, res) => {
    console.log(req.body)
    const { username, password } = req.body
    const token = jwt.sign({ user: username, password: password }, 'testtoken')
    res.json({ user: username, token: token })
}

