const UserModel = require("../dao/db/models/user.model");

class UserManager{
    async getUsers(){
        try{
            const result = await UserModel.find();
            if(!result){
                throw new Error('Users Not Found');
            }
            return result;
        }catch(error){
            if(error.message === 'Users Not Found'){
                throw error;
            }
            throw new Error('Error Getting Users');
        }
    }

    async addUser(value){
        try{
            const result = await UserModel.create(value);
            if(!result){
                throw new Error('Email already used');
            }
            return result;
        }catch(error){
            if(error.message === 'Email already used'){
                throw error;
            }
            throw new Error('Error Creating User');
        }
    }

    async getUserByUsername(username){
        try{
            const result = await UserModel.findOne({email: username});
            return result;
        }catch(error){
            if(error.message === 'User Not Found'){
                throw error;
            }
            throw new Error('Error Getting User');
        }
    }

    async getUserById(id){
        try{
            const result = await UserModel.findById(id);
            if(!result){
                throw new Error('User Not Found');
            }
            return result;
        }catch(error){
            if(error.message === 'User Not Found'){
                throw error;
            }
            throw new Error('Error Getting User');
        }
    }

    async updateUser(id, value){
        try{
            const result = await UserModel.findByIdAndUpdate(id, value);
            if(!result){
                throw new Error('User Not Found');
            }
            return result;
        }catch(error){
            if(error.message === 'User Not Found'){
                throw error;
            }
            throw new Error('Error Updating User');
        }
    }

    async deleteUser(id){
        try{
            const result = await UserModel.findOneAndDelete({_id: id});
            if(!result){
                throw new Error('User Not Found');
            }
            return result;
        }catch(error){
            if(error.message === 'User Not Found'){
                throw error;
            }
            throw new Error('Error Deleting User');
        }
    }
}

module.exports = UserManager