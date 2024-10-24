const { Router } = require("express");
const { shopkeeperSingup } = require("../controllers/shopkeeperController");

const shopkeeperRouter = Router()

shopkeeperRouter.post("/singup", shopkeeperSingup)

module.exports = {
    shopkeeperRouter
}