const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("cart", {
    status: {
      type: DataTypes.ENUM("Processing", "Cancel", "Complete", "Cart"),
      allowNull: false,
      defaultValue: "Cart",
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
    },
    payment_id: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    payment_status: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    merchant_order_id: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
    },
  });
};
