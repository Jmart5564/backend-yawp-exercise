'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      releaseYear: {
        type: Sequelize.STRING
      },
      genreId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Genres', //needs to be table name 
          key: 'id',
<<<<<<< HEAD:lib/migrations/20220817174857-create-movies.js
        },
        onDelete: 'CASCADE',
=======
        }, onDelete: 'CASCADE',

>>>>>>> 90d0ffc27d45c80d505ef0054d4054ea9039b277:lib/migrations/20220817174859-create-movies.js
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Movies');
  }
};
