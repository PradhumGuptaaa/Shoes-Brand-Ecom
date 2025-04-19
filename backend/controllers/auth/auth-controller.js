const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../../models/UserCollection');


const google = async (req, res, next) => {
    const { email, name, photoURL } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user) {
        const token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.SECRETE_KEY,
          {
            expiresIn: "24h",
          }
        );
        const { password, ...rest } = user._doc;
        res
          .status(200)
          .cookie("access_token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
          })
          .json(rest);
      } else {
        const generatedPassword =
          Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8);
        const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
        const newUser = new User({
          fullName:
            name.toLowerCase().split(" ").join("") +
            Math.random().toString(9).slice(-4),
          email,
          password: hashedPassword,
          photoUrl: photoURL,
        });
        await newUser.save();
        const token = jwt.sign(
          { id: newUser._id, isAdmin: newUser.role === 'admin' },
          process.env.JWT_SECRET,
          {
            expiresIn: "24h",
          }
        );
        const { password, ...rest } = newUser._doc;
        res
          .status(200)
          .cookie("access_token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
          })
          .json(rest);
      }
    } catch (error) {
      next(error);
    }
  };

module.exports = {  google};
