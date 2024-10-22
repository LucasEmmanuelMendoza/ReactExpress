const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserManager = require('../manager/user.manager.js');
const userManager = new UserManager();
const isValidPassword = require('../utils/bcrypt.js');
const createHash = require('../utils/bcrypt.js')
const CartManager = require('../manager/cart.manager.js');
const cartManager = new CartManager();

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email)

const initializePassport = () => {

    passport.use('login', new LocalStrategy(
        {usernameField: 'email', passReqToCallback: true},
        async(req, username, password, done) => {
            try{
                const userData = req.body
                let user = await userManager.getUserByUsername(username);
                if(user !== null){
                    if(isValidPassword(user, userData.password)){
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
                if(await userManager.getUserByUsername(username)){
                    return done('Usuario existente!')
                }else{
                    const userData = req.body
                    const cart = await cartManager.createCart();
                    const newUser = {
                        email: username,
                        password: createHash(password),
                        first_name: userData.first_name,
                        last_name: userData.last_name,
                        age: userData.age,
                        cartId: cart._id
                    }
                    for(const key of Object.keys(newUser)){
                        const field = newUser[key];
                        if(typeof(field) === 'string' && field.trim() === '' || field === null){
                            return done('Error tratando de registrar un usuario')
                        }
                    }
                    if(!validateEmail(username)){
                        return done('Error tratando de registrar un usuario')
                    }

                    let result = await userManager.addUser(newUser);
                    return done(null, result);
                }
            }catch(err){
                res.status(500).send('Error inesperado');
            }
        }
    ))

    passport.serializeUser(function(user, done){
        done(null, user)
    })

    passport.deserializeUser(function(user, done){
        done(null, user)
    })
}

module.exports = initializePassport;
