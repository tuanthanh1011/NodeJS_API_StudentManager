const express = require("express");
const bodyParser = require("body-parser");

const port = 3333;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
const { connect } = require('./config/database.config');

// Gọi hàm connect để kết nối đến MongoDB
connect();
require("./app/routes/student.routes")(app);
app.listen(port, () => {
  console.log(`Server Up in with posrt \n\n http://localhost:${port}\n\n`);
});
