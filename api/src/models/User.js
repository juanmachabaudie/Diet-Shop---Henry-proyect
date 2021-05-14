const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('user',
    {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
    },
    {
      timestamps: false,
    }
  );
};