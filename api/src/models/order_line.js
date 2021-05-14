const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('order_line', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
          },
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