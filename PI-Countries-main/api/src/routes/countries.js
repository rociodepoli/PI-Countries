const { Router } = require('express');
const getAllCountries = require('../controllers/getAllCountries');
const getCountryByName = require('../controllers/getCountryByName');


const router= Router();




router.get('/', async(req, res )=>{
try {
    const {name}= req.query;
    
 if(name !== undefined) {
    console.log('va por name')
  await getAllCountries(); 
   const country= await getCountryByName(name)
    return res.json(country)
 } else {
 const countries= await getAllCountries();
   return res.json(countries)
 }
} catch (error) {
    res.status(404).json(error.message)
}
})



module.exports= router;