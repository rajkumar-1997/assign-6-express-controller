const express=require('express');
const router =express.Router();

const admincontroller=require('../controllers/admin.js');
router.get('/add-product',admincontroller.admingetcontroller);

router.post('/add-product',admincontroller.adminpostcontroller);

module.exports=router;
