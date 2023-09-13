const {
  getAllLaunches,
  addNewLaunch,
} = require("../../models/launches.module");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpPostNewLaunch(req, res) {
  console.log(req.body);
  addNewLaunch(req.body);
  res.status(201).json({ message: "Launch successfully created" });
}

module.exports = {
  httpGetAllLaunches,
  httpPostNewLaunch,
};
