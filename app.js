let createError = require("http-errors");
let express = require("express");
let path = require("node:path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let cors = require("cors");

const galaxyRoute = require('./routes/galaxy.route');

const galaxyRoute = require('./routes/galaxy.route');

let authRouter = require("./routes/auth.routes");
let testRouter = require("./routes/user.routes");

let app = express();
let corsOptions = {
  origin: "http://localhost:5000",
};
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/auth", authRouter);
app.use("/api/test", testRouter);

// database
const db = require("./models");
const Role = db.role;

// will drop the table if it already exists
db.sequelize.sync({
  force: true
    }
).then(() => {
  console.log("Drop and Resync Database with { force: true }");
  initial();
});

function initial() {
  Role.findOrCreate({ where: { id: 1 }, defaults: { name: "user" } });
  Role.findOrCreate({ where: { id: 2 }, defaults: { name: "moderator" } });
  Role.findOrCreate({ where: { id: 3 }, defaults: { name: "admin" } });
}

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use('/galaxies', galaxyRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  console.log(err.message);
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ message: err.message });
});

module.exports = app;
