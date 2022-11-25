const axios = require('axios')

const getApiInfo = async () => {
try {
    const url= 'https://restcountries.com/v3.1/all';
    const apiInfo= await axios.get(url)
    const countries= await apiInfo.data.map(c => {
        return {
            name: c.name.common,
            ID: c.cca3,
            flagImg: c.flags.png ,
            continent: c.continents[0],
            capital: c.capital !== null ? c.capital : 'Does not have capital city',
            subreg: c.subregion,
            area: c.area,
            population: c.population
        }
    });
    return countries
} catch (error) {
    return error
}
}

module.exports = getApiInfo;