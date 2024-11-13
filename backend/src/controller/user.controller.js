const UserManager = require("../manager/user.manager");
const userManager = new UserManager();

class UserController{
    async getUser(req, res){
        const userId = req.params.uid;
        try{
            const result = await userManager.getUserById(userId);
            return res.status(200).json(result)
        }catch(error){
            if(error.message === 'User Not Found' || error.messge === 'Error Getting User'){
                return res.status(404).json({error: error.message});
            }
            return res.status(500).json({error: 'Internal Server Error'})
        }
    }

    async getUsers(req, res){
        try{
            const result = await userManager.getUsers();
            return res.status(200).json(result);
        }catch(error){
            if(error.message === 'Users Not Found' || error.message === 'Error Getting Users'){
                return res.status(404).json({error: error.message});    
            }
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    async deleteUser(req, res){
        const userId = req.params.uid;
        try{
            await userManager.deleteUser(userId);
            return res.status(200).json({message: 'User Deleted Succesfully'});
        }catch(error){
            if(error.message === 'User Not Found' || error.message === 'Error Deleting User'){
                return res.status(404).json({error: error.message})
            }
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }

    async updateUser(req, res){
        const userId = req.params.uid;
        const value = req.body;
        try{
            await userManager.updateUser(userId, value);
            return res.status(200).json({message: 'User Updated Succesfully'});
        }catch(error){
            if(error.message === 'User Not Found' || error.message === 'Error Updating User'){
                return res.status(404).json({error: error.message});
            }
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }
    
    async addUser(req, res){
        const value = req.body;
        try{
            await userManager.addUser(value);
            return res.status(200).json({message: 'User Added Successfully'});
        }catch(error){
            if(error.message === 'Code Must Be Unique' || error.message === 'Error Creating User'){
                return res.status(404).json({error: error.message});
            }
            return res.status(500).json({error: 'Internal Server Error'});
        }
    }
}

module.exports = UserController;