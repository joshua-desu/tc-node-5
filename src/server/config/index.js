const dotenv = require("dotenv");

const envFound = dotenv.config();

if (!envFound) {
  throw new Error("ENV VARS NOT READ");
}

module.exports = {
  port: parseInt(process.env.PORT),
};
