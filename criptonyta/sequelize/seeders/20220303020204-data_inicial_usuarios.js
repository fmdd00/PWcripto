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
     await queryInterface.bulkInsert("Usuario", [
      {
        nombre : "J",
        apellido: "Han",
        correo: "ace@hotmail.com",
        dni:"78945123",
        telefono:"987423651",
        rol: "admin",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nombre : "Sam",
        apellido: "Gonzales",
        correo: "samzales@hotmail.com",
        dni:"87965412",
        telefono:"997245871",
        rol: "cliente",
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
     await queryInterface.bulkDelete('Usuario', null, {});
  }
};
