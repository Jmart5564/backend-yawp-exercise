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
   
    await queryInterface.bulkInsert('Restaurants', [
      {
        title: 'Walking Dead',
        description: 'Zombies!',
        image: 'this is an image',
        releaseYear: '2010',
        genreId: 1,
      },
      {
        title: 'Shrek',
        description: 'Ogres!',
        image: 'this is an image',
        releaseYear: '2006',
        genreId: 1,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
