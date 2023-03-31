const express=require('express');
const router =express.Router();

const successcontroller=require('../controllers/success.js');

router.get('/success',successcontroller.successgetcontroller);
// router.post('/contactus',(req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/success');
// });

module.exports=router; 