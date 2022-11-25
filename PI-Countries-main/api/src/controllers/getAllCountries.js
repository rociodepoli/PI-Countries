const { Country } = require("../db");
const getApiInfo = require("./getApiInfo");

const getAllCountries = async () => {
  try {
    const infoDb = await Country.findAll();
    if (infoDb.length === 0) {
      const apiData = await getApiInfo();
      //console.log(apiData)
      const countriesData = await Country.bulkCreate(apiData);
      return countriesData;
    }
    return infoDb;
  } catch (error) {
    error;
  }
};

module.exports = getAllCountries;
