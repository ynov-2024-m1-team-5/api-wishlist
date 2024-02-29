const router = require('express').Router();
const wishlistController = require('../controllers/wishlist.controller');
const verifyProduct = require('../middlewares/verifyProduct');
const verifyUser = require('../middlewares/verifyUser');

router.get(verifyUser,'/:customerId', wishlistController.getWishlistByCustomerId);
router.post([verifyProduct,verifyUser],'/add/:productId', wishlistController.addProductToWishlist);
router.put([verifyProduct,verifyUser],'/remove/:productId', wishlistController.removeProductFromWishlist);
router.delete(verifyUser,'/:customerId', wishlistController.deleteWishlistByCustomerId);