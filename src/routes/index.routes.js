
const {Router} = require("express");
const router = Router();
const controlar = require('../controllers/controler')

router.post('/1', controlar.raiz);

router.get('/2', controlar.get)

router.put('/3', controlar.put)

router.delete('/4', controlar.delete)

module.exports = router;  