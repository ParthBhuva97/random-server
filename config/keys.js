const dotenv = require('dotenv');

dotenv.config({path: '../config.env'})

module.exports = {
    google: {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.EXPIRES_IN,
    },
  };
  