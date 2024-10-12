const axios = require('axios');
class GetProductController {
    async main(req, res){
        const id = req.params.id
        console.log(id)
        const data = await fetch('https://fakestoreapi.com/products/'+id)
        .then(response => response.json())
        // .then(response => response.data)
        res.render('product', {product:data})
    }
}
const getProductController = new GetProductController()
const getProduct = getProductController.main.bind(getProductController)

module.exports = getProduct