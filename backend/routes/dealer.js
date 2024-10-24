const { Router } = require("express");
const { dealerSingup } = require("../controllers/dealerController");

const dealerRouter = Router()

dealerRouter.post("/singup", dealerSingup)

module.exports = {
    dealerRouter
}