const Product = require("../models/product.model");

const verifyProduct = async (req, res, next) => {
    const { product_id } = req.body;
    Product.findByPk(product_id)
    .then(() => next())
    .catch((err) => res.status(404).json({ success: false, message: err.message }));
}

module.exports = verifyProduct;