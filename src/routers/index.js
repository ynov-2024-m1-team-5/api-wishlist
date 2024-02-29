const router = require('express').Router();
const wishlistRouter = require('./wishlist.router');
const verifyToken = require('../middlewares/verifyToken');

router.use(verifyToken);
router.use('/wishlist', wishlistRouter);