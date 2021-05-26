const router = require('express').Router();
const { checkout } = require('../controllers/checkoutController.js')

router.post('/', checkout)

module.exports = router;

// module.exports = router;

// collection_id=1237022864
// &collection_status=approved
// &payment_id=1237022864
// &status=approved
// &external_reference=null
// &payment_type=credit_card
// &merchant_order_id=2710792291
// &preference_id=172264424-10e46f56-8497-4aaf-b757-2e24ff55a5ac
// &site_id=MLA
// &processing_mode=aggregator
// &merchant_account_id=null

// ?code=4
// %2F0AY0e-g6CNiNMzV3ChMfgDF6PsO0yTJ5ri7mYwjjKLTNyMfFa5F9HDhzzUG4PvNk1Zd49kw
// &scope=email+profile+https
// %3A
// %2F
// %2Fwww.googleapis.com
// %2Fauth
// %2Fuserinfo.profile+https
// %3A
// %2F
// %2Fwww.googleapis.com
// %2Fauth
// %2Fuserinfo.email+openid
// &authuser=0
// &prompt=consent#