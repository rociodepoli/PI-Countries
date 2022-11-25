const {Country, TouristicAct} = require('../db');
const { Op} = require('sequelize')

const getCountryByName= async(name) =>{
try {
    const country= await Country.findOne({
        where:{
            name: {
                [Op.iLike] : name
            }
        },
        include: TouristicAct
    })
    if(!country) throw Error('Country not found');
    return country;

} catch (error) {
    return error
}
}


module.exports=getCountryByName