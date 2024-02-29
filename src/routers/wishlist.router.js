const router = require('express').Router();
const wishlistController = require('../controllers/wishlist.controller');
const verifyProduct = require('../middlewares/verifyProduct');
const verifyUser = require('../middlewares/verifyUser');

router.get('/:customer_id/products', wishlistController.getWishlistByCustomerId);
router.post(verifyProduct,'/:customer_id/products/add/:product_id', wishlistController.addProductToWishlist);
router.put(verifyProduct,'/:customer_id/products/remove/:product_id', wishlistController.removeProductFromWishlist);
router.delete('/:customer_id', wishlistController.deleteWishlistByCustomerId);

module.exports = router;