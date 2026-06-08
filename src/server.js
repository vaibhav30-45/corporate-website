// const path = require("path");

// require("dotenv").config({
//   path: path.join(__dirname, "../.env"),
// });

// const app = require("./app");
// const connectDB = require("./config/db");

// const PORT = process.env.PORT || 5000;


// console.log("MONGO_URI:", process.env.MONGO_URI);


// connectDB();


// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
const path = require("path");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

dns.resolveSrv(
  "_mongodb._tcp.vaibhav.nclcods.mongodb.net",
  (err, addresses) => {
    console.log("SRV TEST:", err || addresses);
  }
);

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