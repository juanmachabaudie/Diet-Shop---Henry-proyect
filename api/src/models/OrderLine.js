const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("orderLine", {
    quantity: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
    },
    subTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
    },
  });
};
