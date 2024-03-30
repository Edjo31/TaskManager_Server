const express = require("express");
const facultyRouter = require("./routes/facultad.router");
const semesterRouter = require("./routes/semestre.router");
const claseRouter = require("./routes/clase.router");
const app = express();
app.use(express.json());
app.use("/api/v1/faculty", facultyRouter);
app.use("/api/v1/semester", semesterRouter);
app.use("/api/v1/class", claseRouter);

app.get("/", (req, res) => {
  res.send({
    status: "ok",
    body: "TaskManager it's on ",
  });
});

module.exports = app;
