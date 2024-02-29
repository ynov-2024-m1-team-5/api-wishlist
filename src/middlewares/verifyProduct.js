const Product = require("../models/product.model");

const verifyProduct = async (req, res, next) => {
    const { product_id } = req.body;
    const product = await Product.findByPk(product_id);
    if (!product) {
        return res.status(404).json({ success:false, message: "Product not found" });
    }

    next();
}

module.exports = verifyProduct;