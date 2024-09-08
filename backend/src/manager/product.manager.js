const ProductModel = require('../dao/db/models/product.model');

class ProductManager{
    async getProducts(){
        try{
            const result = await ProductModel.find()
            if(!result){
                throw new Error('Products Not Found');
            }
            return result
        }catch(error){
            if(error.message === 'Products Not Found'){
                throw error;
            }
            throw new Error('Error Getting Products');
        }
    }

    async getProduct(id){
        try{
            const result = await ProductModel.findById(id)
            if(!result){
                throw new Error('Product Not Found');
            }
            return result;
        }catch(error){
            if(error.message === 'Product Not Found'){
                throw error;
            }
            throw new Error('Error Getting Product');
        }
    }

    async addProduct(value){
        try{
            const result = await ProductModel.create(value)
            return result;
        }catch(error){
            if(error.code === 11000){
                throw new Error('Code Must Be Unique');
            }
            throw new Error('Error Creating Product');        
        }
    }
    
    async deleteProduct(id){
        try{
            const result = await ProductModel.findByIdAndDelete(id);
            if(!result){
                throw new Error('Product Not Found')
            }
        }catch(error){
            if(error.message === 'Product Not Found'){
                throw error;
            }
            throw new Error('Error Deleting Product');
        }
    }

    async updateProduct(id, value){
        try{
            const result = await ProductModel.findByIdAndUpdate(id, {$set: value})
            if(!result){
                throw new Error('Product Not Found');
            }
        }catch(error){
            if(error.message === 'Product Not Found'){
                throw error;
            }
            throw new Error('Error Updating Product');
        }
    }
}

module.exports = ProductManager