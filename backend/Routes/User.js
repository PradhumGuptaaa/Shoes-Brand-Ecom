const express = require('express');
const jwt = require('jsonwebtoken');
const UserCollection = require('../models/UserCollection');
const { JWTmiddelware, createToken } = require('../jwt');
const { google } = require('../controllers/auth/auth-controller');
const router = express.Router();

// ✅ Register route
router.post('/register', async (req, res) => {
    try {
        const data = req.body;
        console.log("Received registration data:", data);

        // ❌ Don't hash here. Model will hash it automatically.
        const newUser = new UserCollection(data);
        await newUser.save();

        res.status(200).json({ message: "Registration successful" });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ error: "Server error during registration" });
    }
});

// ✅ Login route
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Login request received:", email, password);

        const user = await UserCollection.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "User not found!" });
        }

        console.log("✅ User found:", user.email);
        console.log("Stored hash:", user.password);

        const isMatch = await user.comparePassword(password);
        console.log("Password match result:", isMatch);

        if (!isMatch) {
            console.log("❌ Incorrect password");
            return res.status(401).json({ error: "Incorrect password!" });
        }

        const token = createToken(user);
        res.status(200).json({
            message: "Login successful",
            success: true,
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

router.post("/google",google);

// routes/auth.js
router.post('/logout', (req, res) => {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logged out successfully" });
  });
  

router.get('/profile', JWTmiddelware, async (req, res) => {
    try {
        const data = req.userdata;
        const user = await UserCollection.findOne({ email: data.userdata.email });

        res.status(200).json({ user });
    } catch (err) {
        console.error("Profile Fetch Error:", err);
        return res.status(500).json({ error: "Server error while fetching profile" });
    }
});

module.exports = router;
