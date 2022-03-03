'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert("TransaccionOperacion", [
      {
        idUsuario: 2,
        idTipoCambio: 2,
        numero: "541656",
        fecha: "2/03/2022",
        hora: "21:25",
        tipoOperacion: "compra",
        estado: "finalizado",
        monto:"500",
        numCuentaBancaria:"65144894",
        direccionBilletera: "0007778888222",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        idUsuario: 1,
        idTipoCambio: 1,
        numero: "65189",
        fecha: "28/02/2022",
        hora: "13:15",
        tipoOperacion: "venta",
        estado: "finalizado",
        monto:"150",
        numCuentaBancaria:"65198449",
        direccionBilletera: "8887774115",
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('TransaccionOperacion', null, {});
  }
};
