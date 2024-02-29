const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");

const Wishlist = sequelize.define("wishlists",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product_ids: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
        defaultValue: []
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

})

module.exports = Wishlist;