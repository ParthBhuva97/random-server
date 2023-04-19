const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const session = require('express-session');

require("./services/passport");
require("./models/userSchema");
require("./models/personSchema");
require("./models/giftSchema");

const app = express();
// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cors({
//   origin: 'http://127.0.0.1:5173',
//   credentials: true,
// }));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


app.use(session({
  secret: 'xyz',
  resave: false,
  saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());

// Routes
const userRoutes = require("./routes/userRoutes");
const personRoutes = require("./routes/personRoutes");
const giftRoutes = require("./routes/giftRoutes");
const authRoutes = require("./routes/authRoutes");
app.use("/api/users", userRoutes);
app.use("/api/people", personRoutes);
app.use("/api/gifts", giftRoutes);
app.use("/auth", authRoutes);

// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://vijaydabhi04:o0Vks0NA5i0KcXhY@cluster0.sqx4dpl.mongodb.net/giftapp?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server on port ${port}`));
