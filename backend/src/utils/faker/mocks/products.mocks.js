const {faker} = require('@faker-js/faker/locale/es');

const generateProduct = () => {
    return {
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        pictureUrl: faker.image.avatar(),
        price: faker.commerce.price(),
        stock: faker.number.int({min:0, max:30}),
        code: faker.string.alphanumeric(8)
    }
}

module.exports = {generateProduct};