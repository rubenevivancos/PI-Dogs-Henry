const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Temperament', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {timestamps: false})
}