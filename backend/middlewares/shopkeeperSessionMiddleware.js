const session = require("express-session");
const { shopkeeperSessionConfig } = require("../config/sessionConfig");

const shopkeeperSessionMiddleware = session(shopkeeperSessionConfig);

module.exports = shopkeeperSessionMiddleware;