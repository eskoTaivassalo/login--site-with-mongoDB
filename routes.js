const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')

router.post('/signup', async (request, response) => {

    const saltpassWord = await bcrypt.genSalt(10)
    const securepassWord = await bcrypt.hash(request.body.passWord, saltpassWord)
    const signedUpUser = new signUpTemplateCopy ({
        userName:request.body.userName,
        Email:request.body.Email,
        passWord:securepassWord

    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})


module.exports = router