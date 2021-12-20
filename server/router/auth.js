const exp=require('express'); 

const routeR =exp.Router();

const jwt= require('jsonwebtoken');

const bcrypt = require('bcryptjs');

require('../db/conn'); 
const User =require("../models/userSchema");

routeR.get('/',(req, res) => {
    res.send('Hey User AUTH.JS');
}); 

// routeR.post('/register', (req , res) => { 
//     const { namE, emaiL , PhonE , passworD , cpassworD } =req.body; 

//     // console.log(name);

//     if(!namE || !emaiL || !PhonE || !passworD || !cpassworD) 
//     {
//         return res.status(422).json({ error: "Ensure that the fields are properly filled"});
//     }
//     User.findOne({email:emaiL}) 
//     .then((userExists) => {
//         if(userExists) 
//         {
//             return res.status(422).json({error : "Email already exists"});
//         } 
//         const user =new User( {name: namE, email:emaiL, Phone: PhonE, password: passworD ,cpassword:cpassworD });
//         user.save().then(() => {
//             res.status(201).json({message: "user has successfully registered"});
//         }).catch((err) => res.status(500).json( {error: "Failed to register the user"}));
//     }).catch((err) => { console.log(err); });

//     // console.log(name);
//     // console.log(req.body.name); 
//     // res.json({message:req.body});
//     // res.send("Register page");
// }); 

routeR.post('/register', async(req , res) => { 
    const { namE, emaiL , PhonE , passworD , cpassworD } =req.body; 

    // console.log(name);

    if(!namE || !emaiL || !PhonE || !passworD || !cpassworD) 
    {
        return res.status(422).json({ error: "Ensure that the fields are properly filled"});
    } 
    try
    {
        const userExists = await User.findOne({email:emaiL});  
        if(userExists) 
        {
            return res.status(422).json({error : "Email already exists"});
        }
        else if(passworD != cpassworD)
        {
            return res.status(422).json({error : "Password and Confirm Passwords are not equal"});
        } 
        else 
        {
            const user =new User( {name: namE, email:emaiL, Phone: PhonE, password: passworD ,cpassword:cpassworD }); 
            const userReg = await user.save();
            if(userReg)
            {
                res.status(201).json({message: "user has successfully registered"});
            } 
            else 
            {
                res.status(500).json( {error: "Failed to register the user"});
            }
        }
        // .then((userExists) => {
        //     if(userExists) 
        //     {
        //         return res.status(422).json({error : "Email already exists"});
        //     } 
        //     const user =new User( {name: namE, email:emaiL, Phone: PhonE, password: passworD ,cpassword:cpassworD });
        //     user.save().then(() => {
        //         res.status(201).json({message: "user has successfully registered"});
        //     }).catch((err) => res.status(500).json( {error: "Failed to register the user"}));
        // })
    }
    catch(err)
    {
        console.log(err);
    }

    // console.log(name);
    // console.log(req.body.name); 
    // res.json({message:req.body});
    // res.send("Register page");
}); 

// login route

routeR.post('/signin' , async (req, res) => {
    // console.log(req.body); 
    // res.json({message: "Great!!"});
    try 
    { 
        const { emaiL , passworD} =req.body;
        let token;
        if(!emaiL || !passworD) 
        {
            return res.status(400).json({error : "Fill the data Completely"});
        } 
        const userLogin = await User.findOne({email: emaiL}); 
        // console.log(userLogin);
        if(userLogin) 
        {
            const isMatch =await bcrypt.compare(passworD, userLogin.password); 
            token = await userLogin.generateAuthToken(); 
            console.log(token); 

            res.cookie("jwtoken", token, {
                //The token gets expired after 30 days.
                //The user automatically gets logged out after 30 days.
                expires:new Date(Date.now()+ 25892000000),
                httpOnly:true
            });
            if(!isMatch)
            {
                res.status(400).json({error: "Invalid Credentials"});
            } 
            else 
            {
                res.json({message: "User Successfully Signed In"});
            }
        }
        else if(!userLogin)
        {
            res.status(400).json({error: "Invalid Credentials"});
        }  
    } 
    catch (err) 
    {
        console.log(err);
    }
});



module.exports =routeR;
