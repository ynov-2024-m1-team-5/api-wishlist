const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(403).json({ success:false, message: "Unauthorized" });
    }
    next();
}

module.exports = verifyToken;