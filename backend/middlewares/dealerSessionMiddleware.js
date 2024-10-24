const session = require("express-session");
const { dealerSessionConfig } = require("../config/sessionConfig");

const dealerSessionMiddleware = session(dealerSessionConfig);

module.exports = dealerSessionMiddleware;