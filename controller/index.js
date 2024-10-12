const login = require("./auth.controller.js");
const getProduct = require("./get-product.controller.js");
const home = require("./index.controller.js");

// export {home} from "./index.controller.js"
const controllers = {
    home,
    login,
    getProduct
}

module.exports = controllers;
