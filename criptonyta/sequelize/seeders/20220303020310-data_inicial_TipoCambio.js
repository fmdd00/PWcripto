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
     * 
     * 1 - Soles 
     * 2 - BTN
     * 
    */ 
     

     await queryInterface.bulkInsert("TipoCambio", [
      {
        /*
        soles 
        */
        TipoCambioVigente : 3.7,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        /*
        BTN
        */
        TipoCambioVigente : 3.8,
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
     await queryInterface.bulkDelete('TipoCambio', null, {});
  }
};
