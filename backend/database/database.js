const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: config.development.host,
    dialect: config.development.dialect,
});

const Project = require('../models/Project')(sequelize, DataTypes); // Ensure you are initializing the model here

sequelize.sync();

module.exports = {
    sequelize,
    Project, // Ensure Project model is exported
};
