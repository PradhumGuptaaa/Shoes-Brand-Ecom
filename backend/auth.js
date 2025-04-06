const app = require('express');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const UserCollection = require('./models/UserCollection');

app.use(passport.initialize());

passport.use(new localStrategy(async (email, password, done) => {
    try {
        // console.log("recieved credential:", user, password);

        const userDetail = await UserCollection.findOne({ email: email });
        if (!userDetail) return done(null, false, { message: "user not found" });

        const isPasswordMatch = await userDetail.comparePassword(password);
        if (isPasswordMatch) {
            return done(null, user);

        } else {
            return done(null, false, { message: "incorrect password" });
        }
    } catch (err) {
        return done(err);
    }
}))