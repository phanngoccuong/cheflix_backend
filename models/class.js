'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    startDate: {
      type: DataTypes.STRING
    },
    teacherId: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: true,
    paranoid: true
  });
  Class.associate = function (models) {
    // associations can be defined here
    Class.belongsTo(models.User, {
      foreignKey: 'teacherId'
    });
  };
  return Class;
};