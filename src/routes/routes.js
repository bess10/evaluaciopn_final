const {Router} = require('express');
const router = Router();
//importamos la función de scraping
const scraping = require('../controllers/controllers.js');

//indicamos la ruta y la función a ejecutar
router.get('/scraper', scraping);

//exportamos el router
module.exports = router;