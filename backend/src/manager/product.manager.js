const ProductModel = require('../dao/db/models/product.model');

class ProductManager{
    async getProducts(){
        try{
            return await ProductModel.find()
        }catch(error){
            console.log('ERROR:', error)
            throw error;
        }
    }

    async getProduct(id){
        try{
            const result = await ProductModel.findById(id)
            if(!result){
                throw new Error('Product not found');
            }
            return result;
        }catch(error){
            console.log('ERROR:', error)
            throw error;
        }
    }

    async addProduct(value){
        try{
            const existe = await ProductModel.find({code: value.code});
            if(existe){
                return {success: false, message: 'Code must be unique'}
            }else{
                await ProductModel.create(value)
                return {success: true, message: 'Product added'}
            }
        }catch(error){
            console.log('ERROR in ProductManager addProduct:', error)
            throw error;        
        }
    }
    
    async deleteProduct(id){
        try{
            const existe = await ProductModel.findById(id)
            if(!existe){
                return {success: false, message:'Product not found'};
            }else{
                await ProductModel.findByIdAndDelete(id)
                return {success: true};
            }
        }catch(error){
            console.log('ERROR:', error)
            throw error;
        }
    }

    async updateProduct(id, value){
        try{
            const result = await ProductModel.findByIdAndUpdate(id, {$set: value})
            if(!result){
                throw new Error('Product not found');
            }
        }catch(error){
            console.log('ERROR:', error)
            throw error;
        }
    }
}

module.exports = ProductManager