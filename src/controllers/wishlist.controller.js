const Wishlist = require("../models/wishlist.model");

exports.getWishlistByCustomerId = async (req, res) => {
    const { customerId } = req.params;
    try {
        const wishlist = await Wishlist.findOne({ where: { customer_id: customerId } });
        if (wishlist) {
        return res.status(200).json({ success:true, wishlist });
        }
        throw new Error("Wishlist not found");
    } catch (error) {
        return res.status(500).json({ success:false, message: error.message});
    }
}

exports.addProductToWishlist = async (req, res) => {
    const { product_id } = req.params;
    const { customer_id } = req.body;
    try {
        const wishlist = await Wishlist.findOne({ where: { customer_id } });
        if (wishlist) {
        const productIds = wishlist.product_ids;
        productIds.push(product_id);
        await wishlist.update({ product_ids });
        return res.status(200).json({ success:true });
        }
        await Wishlist.create({product_ids: [product_id],customer_id});
        return res.status(200).json({ success:true });
    } catch (error) {
        return res.status(500).json({ success:false, message: error.message});
    }
}

exports.removeProductFromWishlist = async (req, res) => {
    const { product_id } = req.params;
    const { customer_id } = req.body;
    try {
        const wishlist = await Wishlist.findOne({ where: { customer_id } });
        if (wishlist) {
        const productIds = wishlist.product_ids;
        const index = productIds.indexOf(product_id);
        if (index > -1) {
            productIds.splice(index, 1);
            await wishlist.update({ product_ids });
            return res.status(200).json({ success:true });
        }
        throw new Error("Product not found in wishlist");
        }
        throw new Error("Wishlist not found");
    } catch (error) {
        return res.status(500).json({ success:false, message: error.message});
    }
}

exports.deleteWishlistByCustomerId = async (req, res) => {
    const { customerId } = req.params;
    try {
        const wishlist = await Wishlist.findOne({ where: { customer_id: customerId } });
        if (wishlist) {
        await wishlist.destroy();
        return res.status(200).json({ success:true });
        }
        throw new Error("Wishlist not found");
    } catch (error) {
        return res.status(500).json({ success:false, message: error.message});
    }
}