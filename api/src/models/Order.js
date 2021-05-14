const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define('order', {

        orderState: {
            type: DataTypes.ENUM({
                values: ['cart', 'created', 'processing', 'cancelled', 'completed'],
                allowNull: false,
            })
        },
        purchasePrice: {
            type: DataTypes.FLOAT
        },
        shippingCost: {
            type: DataTypes.FLOAT
        },
        shippingAddress: {
            type: DataTypes.STRING
        },
        shippingZip: {
            type: DataTypes.STRING
        },
        shippingCity: {
            type: DataTypes.STRING
        },
        shippingState: {
            type: DataTypes.STRING
        },
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        comments: {
            type: DataTypes.STRING
        },
        paymentDetails: {
            type: DataTypes.STRING
        },
    },
    );
};
