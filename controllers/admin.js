const path=require('path');
const rootDir=require('../utill/path.js');


exports.admingetcontroller=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
 }


 exports.adminpostcontroller=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
}