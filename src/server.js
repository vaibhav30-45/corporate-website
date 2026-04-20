const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, "../.env"),
});

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

// Debug
console.log("MONGO_URI:", process.env.MONGO_URI);

// DB connect
connectDB();

// Server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});