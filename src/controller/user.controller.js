const express = require("express");


const User = require("../models/user.model");

const router = express.Router();

router.post("",async (req,res)=>{
    try {
        const user=await User.create(req.body);
        
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
});



// router.get("/city",async (req,res)=>{
//     const  filters=req.query
//     try {
//         const users=await User.find().lean().exec();

//         const filterUsers=users.filter((user)=>{
//             let isValid=true;
//             for(key in filters){
//                 console.log(key,user[key],filters[key])
//                 isValid=isValid && user[key]==filters[key]
//             }
//             return isValid
//         })
//         res.send(filterUsers)
//     } catch (error) {
//         return res.status(500).send({message:error.message})
//     }
  
// });

router.get("/month/:id",async (req,res)=>{
     const{id}=req.params;
        console.log(id)
    try {
        const users=await User.find().lean().exec();
       let userFilterd= users.map((user)=>{return{...user,month:new Date(user.registrationDate).getMonth()}})

       let filterd=userFilterd.filter((e)=>{return e.month==id})
       console.log(userFilterd)
       res.send(filterd)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }

});


module.exports = router;