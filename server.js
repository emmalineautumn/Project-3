const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose")
const router = require("./routes")
const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const session = require("express-session");
const dbUser = require("./controller/User")

// Connect to MongoDB

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: "yellowisnotacolor" }));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "css")));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(username, password, done) {
      dbUser.find({ username: username })
        .then(function(user) {
          if (!user) {
            console.log("wrong email");
            return done(null, false, { message: "Incorrect email." });
          }
          bcrypt
            .compare(password, user[0].dataValues.Password)
            .then(function(isMatch) {
              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false, { message: "Incorrect password." });
              }
            })
            .catch(function(err) {
              return done(err);
            });
        })
        .catch(function(err) {
          return done(err);
        });
    }
  )
);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static('client/public'))

// Define API routes here
app.post(
  "/sign-in",
  passport.authenticate("local", {
    session: true,
    successRedirect: "/",
    failureRedirect: "/404"
  })
);
require("./routes/dndRoutes")(app);
app.use(router)
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/DungeonsAndDragons");
// Send every other request to the React app
// Define any API routes before this runs
if (process.env.NODE_ENV === 'production') {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
