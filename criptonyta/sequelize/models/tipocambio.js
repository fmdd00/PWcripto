'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoCambio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TipoCambio.hasMany(models.TransaccionOperacion,{
        foreignKey:'idTipoCambio'
      })
    }
  }
  TipoCambio.init({
    TipoCambioVigente: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'TipoCambio',
    freezeTableName: true
  });
  return TipoCambio;
};