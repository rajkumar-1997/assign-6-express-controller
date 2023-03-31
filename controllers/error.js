
const path=require('path');
const rootDir=require('../utill/path.js');

exports.errorcontroller=(req,res)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
}