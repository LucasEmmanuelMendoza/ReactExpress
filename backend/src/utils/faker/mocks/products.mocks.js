const { faker } = require('@faker-js/faker/locale/es');
//category: faker.commerce.product(),
const generateProduct = () => {
    const categories = ['pantalones', 'remeras', 'camperas', 'ropa interior', 'accesorios']
    return {
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        category: faker.helpers.arrayElement(categories),
        pictureUrl: faker.image.avatar(),
        price: faker.commerce.price(),
        stock: faker.number.int({min:0, max:30}),
        code: faker.string.alphanumeric(8)
    }
}

module.exports = { generateProduct };