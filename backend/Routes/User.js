const express = require('express');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserCollection = require('../models/UserCollection');
const { JWTmiddelware, createToken } = require('../jwt');
const router = express.Router();

router.post('/register' , async(req,res)=>{
    try {
        const data = req.body;
        console.log(data)
        const newUser = new UserCollection(data);
        const response = await newUser.save();
        res.status(200).json({ok :'ok'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "server error in backend", error})
    }
 
});

router.post("/login", async (req, res) => {
  try {
      const { email, password } = req.body;

      // 🔹 Check if user exists
      const user = await UserCollection.findOne({ email });
      if (!user) {
          return res.status(401).json({ error: "User not found!" });
      }

      // 🔹 Compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(401).json({ error: "Incorrect password!" });
      }

      // 🔹 Create JWT token
      const token = createToken(user);

      res.status(200).json({
          message: "Login successful",
          token,
          user: {
              id: user._id,
              fullName: user.fullName,
              email: user.email,
              role: user.role
          }
      });
  } catch (error) {
      console.error("Login Error:", error);
      res.status(500).json({ error: "Server error during login" });
  }
});


router.post("/logout", (req, res) => {
    res.clearCookie("token").json({
      success: true,
      message: "Logged out successfully!",
    });
});

router.get('/profile',JWTmiddelware,async(req,res)=>{
    try{
         //in this you need to import data from jwt toke 
         
            const data = req.userdata
            console.log(req.userdata)
         const user=await UserCollection.findOne({email:data.userdata.email});
         res.status(200).json({user})


    }catch (err) {
        console.log(err);
        return res.status(500).json({ err: "server error in backend", err }); // Use 'return' to stop further execution
    }
})

module.exports = router;