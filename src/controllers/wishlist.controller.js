const Wishlist = require("../models/wishlist.model");
const Product = require("../models/product.model");

exports.getWishlistByCustomerId = async (req, res) => {
    const { customer_id } = req.params;
    try {
        const wishlist = await Wishlist.findOne({ where: { customer_id } });
        if (wishlist) {
        const products = await Product.findAll({ where: { id: wishlist.product_ids } });
        return res.status(200).json({ success:true, products});
        }
        return res.status(404).json({ success:false, message: "Wishlist not found"});
    } catch (error) {
        return res.status(500).json({ success:false, message: error.message});
    }
}

exports.addProductToWishlist = async (req, res) => {
    const { product_id, customer_id } = req.params;
    try {
        const wishlist = await Wishlist.findOne({ where: { customer_id } });
        if (wishlist) {
        const productIds = wishlist.product_ids;
        productIds.push(product_id);
        await Wishlist.update({ product_ids: productIds}, { where: { customer_id } });
        return res.status(200).json({ success:true, message: "Product added to wishlist"});
        }
        await Wishlist.create({product_ids: [product_id],customer_id});
        return res.status(200).json({ success:true, message: "Product added to the newly created wishlist"});
    } catch (error) {
        return res.status(500).json({ success:false, message: error.message});
    }
}

exports.removeProductFromWishlist = async (req, res) => {
    const { product_id, customer_id } = req.params;

    try {
        const wishlist = await Wishlist.findOne({ where: { customer_id } });
        if (wishlist) {
            let productIds = wishlist.product_ids;
            productIds = productIds.filter(id => id !== product_id);
            await Wishlist.update({ product_ids: productIds}, { where: { customer_id } });
            return res.status(200).json({ success:true });
        }
        throw new Error("Wishlist not found");
        
    } catch (error) {
        return res.status(500).json({ success:false, message: error.message});
    }
}

exports.deleteWishlistByCustomerId = async (req, res) => {
    const { customer_id } = req.params;
    try {
        const wishlist = await Wishlist.findOne({ where: { customer_id } });
        if (wishlist) {
        await wishlist.destroy();
        return res.status(200).json({ success:true });
        }
        throw new Error("Wishlist not found");
    } catch (error) {
        return res.status(500).json({ success:false, message: error.message});
    }
}