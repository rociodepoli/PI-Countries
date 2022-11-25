const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('touristicAct', {
    ID: {
        type: DataTypes.STRING(5),
        allowNull: false
    },
    name:{
        type: DataTypes.STRING
    },
    difficulty:{
        type: DataTypes.INTEGER,
        validate:{
            max: 5, 
            min: 1
        }
    },
    duration: {
        type: DataTypes.FLOAT
    },
    season: {
        type: DataTypes.ENUM('Summer', 'Spring', 'Autumn', 'Winter'),
    }
  },
  {
    timestamps: false,
  })}