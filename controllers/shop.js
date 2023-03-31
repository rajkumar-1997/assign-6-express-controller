const path=require('path');

const rootDir=require('../utill/path.js');




exports.shopcontroller=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'))
  }