const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");

const Wishlist = sequelize.define("wishlist",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product_ids: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

})

module.exports = Wishlist;