const express = require('express');
const cors = require('cors');
const { port } = require("../backend/config");
const connectDb = require('./db');
const shopkeeperSessionMiddleware = require('./middlewares/shopkeeperSessionmiddleware');
const dealerSessionMiddleware = require('./middlewares/dealerSessionmiddleware');
const { shopkeeperRouter } = require('./routes/shopkeeper');
const { dealerRouter } = require('./routes/dealer');


connectDb();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/shopkeeper", shopkeeperSessionMiddleware, shopkeeperRouter);
app.use("/api/v1/dealer", dealerSessionMiddleware, dealerRouter);

app.listen(port, () => console.log("Backend server started"));


