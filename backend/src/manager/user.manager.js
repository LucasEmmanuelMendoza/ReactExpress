const UserModel = require("../dao/db/models/user.model");

class UserManager{
    async addUser(value){
        try{
            const returnCreate = await UserModel.create(value);
            if(returnCreate){
                return true;
            }
        }catch(error){
            console.log(error);
            return error;
        }
    }

    async getUserById(id){
        try{
            const foundUser = await UserModel.findById(id);
            if(foundUser){
                return foundUser;
            }
        }catch(error){
            console.log(error);
            return error;
        }
    }

    async updateUser(id, value){
        try{
            const returnUpdate = await UserModel.findByIdAndUpdate(id, {$set: value})
            if(returnUpdate){
                return true;
            }
        }catch(error){
            console.log(error);
            return error;
        }
    }

    async deleteUser(id){
        try{
            const returnDelete = await UserModel.findOneAndDelete({_id: id});
            if(returnDelete){
                return true;
            }
        }catch(error){
            console.log(error);
            return error;
        }
    }
}

module.exports = UserManager