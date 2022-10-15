require("dotenv").config()
const {PORT} = process.env
const express = require("express");
const app = express();
const User = require("./db/User");
const cors = require("cors");
const bodyParser = require("body-parser");

require("./db/config");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post("/register", async (req, res) => {
  let user = new User(req.body);

  let findthisuser = await User.findOne(req.body);
  if (findthisuser) {
    res.send({ msg: "This user already exists" });
  } else {
    let result = await user.save();
    res.json({
      message: "Congratulations, you have scuccessfully registered in learno",
    });
  }
  res.end();
});

app.post("/login", async (req, res) => {
  let user = await User.findOne(req.body);
  console.log(req.body);

  if (user) {
    res.send({ message: "login successful" });
  } else {
    res.send({ msg: "login failed" });
  }
});

console.log("Running on: " + PORT)
app.listen(PORT, () => console.log("app is running on " + PORT));