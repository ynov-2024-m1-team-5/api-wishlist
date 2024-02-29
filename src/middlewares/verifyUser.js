const jwtDecode = require("jwt-decode");

const verifyUser = (req, res, next) => {
    const { customerId } = req.params;
    const token = jwtDecode(req.headers.authorization);
    if (customerId !== token.customerId) {
        return res.status(403).json({ success:false, message: "Unauthorized" });
    }
    next();
}

module.exports = verifyUser;