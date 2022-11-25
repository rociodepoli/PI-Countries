const { Country, TouristicAct } = require("../db");


const getCountryById= async(id)=> {
try {
    const country = await Country.findOne({
        where: {
          ID: id
        },
        include: TouristicAct
      });
    if(!country) throw new Error ('Id does not match with any country')
return country
} catch (error) {
    return error
}
}


module.exports= getCountryById