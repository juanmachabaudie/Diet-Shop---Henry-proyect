const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = (sequelize) => {
  const User = sequelize.define(
    "user",
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
      },
      password: {
        type: DataTypes.STRING,
        set(value) {
          if (value) { // tiene que ser sincrónico
            const salt = bcrypt.genSaltSync(saltRounds) // si guardo como contraseña hola dos veces, en la base de datos van a ser diferentes (para que las contraseñas no sean iguales)
            const hash = bcrypt.hashSync(value, salt) // hashea en base 64
            this.setDataValue("password", hash) // le decimos el valor que queremos setear y el hash
          }
        }
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
      shippingCost: {
        type: DataTypes.FLOAT,
      },
      shippingAddress: {
        type: DataTypes.STRING,
      },
      shippingZip: {
        type: DataTypes.STRING,
      },
      shippingCity: {
        type: DataTypes.STRING,
      },
      shippingState: {
        type: DataTypes.STRING,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      comments: {
        type: DataTypes.STRING,
      },
      paymentDetails: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    { timestamps: false }
  );

  User.prototype.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
  }
  return User;

};
