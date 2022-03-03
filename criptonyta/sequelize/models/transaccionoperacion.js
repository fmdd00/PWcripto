'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransaccionOperacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TransaccionOperacion.belongsTo(models.Usuario,{
        foreignKey:'idUsuario'
      })
      TransaccionOperacion.belongsTo(models.TipoCambio,{
        foreignKey:'idTipoCambio'
      })
    }
  }
  TransaccionOperacion.init({
    idUsuario: DataTypes.INTEGER,
    idTipoCambio: DataTypes.INTEGER,
    numero: DataTypes.STRING,
    fecha: DataTypes.STRING,
    hora: DataTypes.STRING,
    tipoOperacion: DataTypes.STRING,
    estado: DataTypes.STRING,
    monto: DataTypes.STRING,
    numCuentaBancaria: DataTypes.STRING,
    direccionBilletera: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TransaccionOperacion',
    freezeTableName: true
  });
  return TransaccionOperacion;
};