const express = require('express')
const cors = require('cors')
const app = express()
const { connectDB } = require('./utils/db')
require("dotenv").config();
const { checkAuthentication, checkExitsUserSignIn } = require('./middlewares/test.middlewares');

app.use(express.json())
app.use(cors())
const userRouter = require('./routes/users.routes');
const { login } = require('./controllers/app.controllers');
const { postUser } = require('./controllers/users.controllers');
app.use('/user', userRouter)

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.post('/login', login)

app.post('/register', checkExitsUserSignIn, postUser)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('Server run in PORT ' + PORT)
    connectDB()
})