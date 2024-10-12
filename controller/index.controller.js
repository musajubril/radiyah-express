const axios = require('axios');
class HomeController {
    async main(req, res){
        await this.fetchProducts(req, res)
        .then(products=>{
            res.render('index', {products:products.data})
        })
    }
    async fetchProducts(req, res){
        const products = await axios.get('https://fakestoreapi.com/products').then(data=>{
            return data
        })
        return products
    }
}

const homeController = new HomeController();
const home = homeController.main.bind(homeController);
module.exports = home