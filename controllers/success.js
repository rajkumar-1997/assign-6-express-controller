const path=require('path');
const rootDir=require('../utill/path.js');

exports.successgetcontroller=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'))
 };