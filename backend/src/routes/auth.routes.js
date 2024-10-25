const express = require('express')
const routerAuth = express.Router()
const passport = require('passport')

routerAuth.post('/register', passport.authenticate('register', {failureRedirect: '/auth/failRegister', successRedirect: '/auth/successRegister'}))

routerAuth.get('/successRegister', (req, res) => {
    res.redirect('/login')
})

routerAuth.get('/failRegister', (req, res) => {
    res.redirect('/errorRegister')
})

routerAuth.post('/login', passport.authenticate('login', {failureRedirect: '/auth/failLogin', successRedirect:'/auth/successLogin'}))

routerAuth.get('/failLogin', (req, res) => {
    res.redirect('/errorLogin')
})

const updateLastConnection = (email) => {
    console.log(email)
} 

routerAuth.get('/sucessLogin', async(req, res) => {
    const currentDate = await updateLastConnection(req.session.passport.user.email)
    req.session.passport.user.last_connection = currentDate

    //updateUser usando el manager con la última conexión
})