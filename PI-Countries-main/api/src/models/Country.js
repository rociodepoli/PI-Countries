const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ID: {
      type: DataTypes.STRING(3),
      allowNull: false,
     unique: true
    },
    flagImg: {
      type: DataTypes.STRING, 
     allowNull: false
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
     // allowNull: false
    },
    subreg: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.FLOAT,
    },
    population: {
      type: DataTypes.INTEGER
    }
  },
  {
    
    timestamps: false,
  });
};
