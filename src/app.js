const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const errorMiddleware = require("./middleware/error.middleware");


const routes = require("./routes");

const app = express();

// Middleware

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//  STATIC FOLDER (IMPORTANT)
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Routes
app.use("/api", routes);
app.use(errorMiddleware);

module.exports = app;