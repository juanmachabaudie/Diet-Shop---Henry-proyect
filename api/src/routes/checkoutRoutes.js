const router = require('express').Router();
const { checkout, changeOrderStatus } = require('../controllers/checkoutController.js')

router.post('/', checkout)
router.put('/', changeOrderStatus)

module.exports = router;

