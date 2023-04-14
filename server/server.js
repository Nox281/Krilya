const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dbUrl = process.env.DB_URL;
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();
const jwtSecret = uuidv4();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const token = jwt.sign({ user: req.user }, jwtSecret, { expiresIn: "1h" });
    res.json({ message: "Authenticated!", token: token });
  }
);

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

passport.use(
  new JwtStrategy(options, (jwtPayload, done) => {
    // TODO: Implement user authentication logic
  })
);

app.use(passport.initialize());
