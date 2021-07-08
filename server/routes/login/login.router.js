var router = require('express').Router();
var {register, find} = require('./login.controller.js')

router.get('/register', register);

router.get('/find', find);

module.exports = router;


