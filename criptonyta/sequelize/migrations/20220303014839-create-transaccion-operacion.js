'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TransaccionOperacion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUsuario: {
        type: Sequelize.INTEGER
      },
      idTipoCambio: {
        type: Sequelize.INTEGER
      },
      numero: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.STRING
      },
      hora: {
        type: Sequelize.STRING
      },
      tipoOperacion: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      monto: {
        type: Sequelize.STRING
      },
      numCuentaBancaria: {
        type: Sequelize.STRING
      },
      direccionBilletera: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    // Agregar el constraint Foreign Key
    await queryInterface.addConstraint("Usuario", {
      type: "FOREIGN KEY",
      fields : ["idUsuario"],
      references : {
        table : "Usuario",
        field : "id"
      },
      name : "FK_ID_USUARIO"
    })
    await queryInterface.addConstraint("TipoCambio", {
      type: "FOREIGN KEY",
      fields : ["idTipoCambio"],
      references : {
        table : "TipoCambio",
        field : "id"
      },
      name : "FK_ID_TIPOCAMBIO"
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Usuario", "FK_ID_USUARIO")
    await queryInterface.removeConstraint("TipoCambio", "FK_ID_TIPOCAMBIO")
    await queryInterface.dropTable('TransaccionOperacion');
    
  }
};