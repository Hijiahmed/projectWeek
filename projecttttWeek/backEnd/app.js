const express = require("express");
const app = express();
require("./db/db.js");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const StoreRoute = require("./routers/Route/storeRoute");
const sinUpRoute = require("./routers/Route/sinUpRoute");
const logInRoute = require("./routers/Route/logInRoute");
app.use(StoreRoute);
app.use(logInRoute);
app.use(sinUpRoute);

const Port = 5000;
app.listen(Port, () => {
  console.log("server is on");
});
