const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserManager = require('../manager/user.manager.js');
const userManager = new UserManager();
const { isValidPassword, createHash } = require('../utils/bcrypt.js')
const CartManager = require('../manager/cart.manager.js');
const cartManager = new CartManager();

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email)

const initializePassport = () => {

    passport.use('login', new LocalStrategy(
        {usernameField: 'email', passReqToCallback: true},
        async(req, username, password, done) => {
            try{
                let user = await userManager.getUserByUsername(username);
                if(user !== null){
                    if(isValidPassword(user, password)){
                        user.last_connection = new Date()
                        return done(null, user)
                    }else{
                        throw new Error('Invalid Password or User')
                    }
                }else{
                    throw new Error('Invalid Password or User')
                }
            }catch(err){
                return done(err);
            } 
        }
    ))

    passport.use('register', new LocalStrategy(
        {usernameField: 'email', passReqToCallback: true},
        async(req, username, password, done)=>{
            try{
                if(await userManager.getUserByUsername(username) !== null){
                    return done('Usuario existente!')
                }else{ 
                    const userData = req.body
                    const cart = await cartManager.createCart();
                    const newUser = {
                        email: username,
                        password: createHash(password),
                        first_name: userData.firstName,
                        last_name: userData.lastName,
                        age: Number(userData.age),
                        cartId: cart._id
                    }

                    for(const key of Object.keys(newUser)){
                        const field = newUser[key];
                        if(typeof(field) === 'string' && field.trim() === '' || field === null){
                            return done('Ingrese datos sin espacios')
                        }
                    }
                    
                    if(!validateEmail(username)){
                        return done('Email incorrecto')
                    }

                    let result = await userManager.addUser(newUser);
                    return done(null, result);
                }
            }catch(err){
                return done('Error inesperado');
            }
        }
    ))

    passport.serializeUser(function(user, done){
        done(null, user._id)
    })

    passport.deserializeUser(async (id, done) =>{
        try{
            const user = await userManager.getUserById(id);
            done(null, user);
        }catch(error){
            done(error);
        }
    })
}

module.exports = initializePassport;
