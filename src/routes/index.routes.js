
const {Router} = require("express");
const router = Router();
const controlar = require('../controllers/controler')

router.post('/', controlar.raiz);

router.get('/getobjeto', controlar.get)

module.exports = router;  