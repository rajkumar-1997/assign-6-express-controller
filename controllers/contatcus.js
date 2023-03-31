const path=require('path');
const rootDir=require('../utill/path.js');


exports.contactuscontroller= (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))
 }

 exports.postcontactuscontroller=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/success');
}