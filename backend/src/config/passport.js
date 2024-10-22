const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserManager = require('../manager/user.manager.js');
const userManager = new UserManager();
const isValidPassword = require('../utils/bcrypt.js')


const validateEmail = (email) => /\S+@\S+\.\S+/.test(email)

const initializePassport = () => {

    passport.use('login', new LocalStrategy(
        {usernameField: 'email', passReqToCallback: true},
        async(req, username, password, done) => {
            try{
                const userData = req.body
                let user = await userManager.getUserByUsername(username);
                if(user !== null){
                    if(isValidPassword(user, password)){
                        user.last_connection = new Date()
                        return done(null, user)
                    }else{
                        throw new Error('Invalid Password or User}')
                    }
                }else{
                    throw new Error('Invalid Password or User}')
                }
            }catch(err){
                return done(err);
            } 
        }
    ))

    passport.serializeUser(function(user, done){
        done(null, user);
    })

    passport.deserializeUser(function(user, done){
        done(null, user);
    })
}

module.exports = initializePassport;
