let createError = require("http-errors");
let express = require("express");
let path = require("node:path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let cors = require("cors");

// let indexRouter = require('./routes/index');
// let usersRouter = require('./routes/users');

let app = express();
let corsOptions = {
  origin: "http://localhost:5000",
};
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// database
const db = require("./models");
const Role = db.role;
//drop and create table
db.sequelize.sync();
// will drop the table if it already exists
db.sequelize.sync().then(() => {
  console.log("Drop and Resync Database with { force: true }");
  initial();
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
