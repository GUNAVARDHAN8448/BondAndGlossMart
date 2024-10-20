const express = require('express');
const cors = require('cors');
const { port } = require("../backend/config");
const connectDb = require('./db');


connectDb();

const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log("Backend server started"));


