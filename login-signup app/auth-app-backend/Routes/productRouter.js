
const router = require('express').Router();
const ensureAuthentication = require('../middlewares/auth');

router.get('/', ensureAuthentication,  (req, res)=>{
   res.status(200).json([
   {
    name: 'mobile',
    price: '10000',
   },
   {
    name: 'TV',
    price: '12000',
   },
   {
    name: 'Computer',
    price: '15000',
   },
   ])
})

module.exports = router;