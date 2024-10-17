module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        titre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        fichierJoint: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Project;
};

