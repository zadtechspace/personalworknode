const express = require('express')
const router = express.Router()

const { signup, signin, dashboard } = require('../Controllers/user.controller')


router.post("/signup", signup)

router.post('/signin', signin)

router.get('/dashboard', dashboard)


module.exports = router