var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
var User = mongoose.model('User');

router.get('/',(req,res)=>{
    res.render('user/SignUp',{
        viewTitle:'SignUp'
    });
});
router.post('/',(req,res)=>{
     console.log(req.body);
     var user = new User();
     user.fullname = req.body.fullname;
     user.password = req.body.password;
     user.save((err,doc)=>{
         if(!err){
             res.redirect('user/login');
         }else{
             console.log("error during insertion"+err);
         }
     })

 });
 router.get('/login',(req,res)=>{
     res.render('user/login')
   
    
 })

 router.post('/login',(req,res)=>{
    console.log(req.body);
     //var user = new User();
     //user.fullname = req.body.fullname;
    // user.password = req.body.password;
     
            User.find((err,docs)=>{
                if(!err){
                  // console.log(docs);
                   docs.forEach((doc) => {
                       if(doc.fullname=req.body.fullname&&doc.password==req.body.password){
                           console.log("loggedin");
                       }else{
                           console.log('incorrect password or fullname');
                       }
                       
                   });
                }
                else{
                   console.log('error in retrival,on',err);
                }
            }).lean();
         
 })

  


module.exports = router;