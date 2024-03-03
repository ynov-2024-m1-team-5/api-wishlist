const router = require('express').Router();
const wishlistController = require('../controllers/wishlist.controller');
const verifyProduct = require('../middlewares/verifyProduct');
const verifyUser = require('../middlewares/verifyUser');
const verifyIsAdmin = require('../middlewares/verifyIsAdmin');

router.get('/:customer_id/products',verifyUser, wishlistController.getWishlistByCustomerId);
router.post('/:customer_id/products/add/:product_id',verifyProduct, wishlistController.addProductToWishlist);
router.put('/:customer_id/products/remove/:product_id',verifyProduct, wishlistController.removeProductFromWishlist);
router.delete('/:customer_id',verifyIsAdmin, wishlistController.deleteWishlistByCustomerId);

module.exports = router;