const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
  res.send("This is my home page");
});

app.post("/RegisterData", (req, res) => {
  var FirstName = req.body.FirstName;
  var LastName = req.body.LastName;
  var Email = req.body.Email;
  var Password = req.body.Password;
  var Phone = req.body.Phone;
  var Address = req.body.Address;
  let connection = mysql.createConnection({
    host: "localhost",
    user: "hsamoo02",
    password: "123456789",
    database: "form",
  });

  connection.connect(function (err) {
    if (err) throw err;
    console.log("connected!");

    var sql =
      "INSERT INTO user (FirstName, LastName, Email, Password, Phone, Address) VALUES ('" +
      FirstName +
      "','" +
      LastName +
      "','" +
      Email +
      "','" +
      Password +
      "','" +
      Phone +
      "','" +
      Address +
      "')";
    connection.query(sql, function (err, results) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    res.send("insert ok");
  });
});

app.get("/home", (req, res) => {
  var home = [
    {
      id: "1",
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Phone: "",
      Address: "",
    },
    {
      id: "1",
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Phone: "",
      Address: "",
    },
    {
      id: "1",
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Phone: "",
      Address: "",
    },
    {
      id: "1",
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Phone: "",
      Address: "",
    },
  ];
  res.send(home);
});

app.listen(8000, function () {
  console.log("server is running......." + 8000);
});
