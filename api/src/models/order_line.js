const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('order_line', {
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
        {
            timestamps: false,
        }
    );
};