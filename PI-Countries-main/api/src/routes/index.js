const { Router } = require('express');
const countries = require('../routes/countries')
// Importar todos los routers;



const router = Router();

// Configurar los routers
 //router.use('/countries', countries);



router.use('/countries', countries)

module.exports = router;
