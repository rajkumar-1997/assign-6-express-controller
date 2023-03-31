const express=require('express');

const contactuscontroller=require('../controllers/contatcus.js');
const router =express.Router();
router.get('/contactus',contactuscontroller.contactuscontroller);

router.post('/contactus',contactuscontroller.postcontactuscontroller);

module.exports=router;