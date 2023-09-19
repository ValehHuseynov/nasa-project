const {
  getAllLaunches,
  addNewLaunch,
  deleteLaunch,
  existsLaunchWithId,
} = require("../../models/launches.module");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpPostNewLaunch(req, res) {
  const launch = req.body;

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.destination
  ) {
    return res
      .status(400)
      .json({ success: false, error: "Missing required launch property" });
  }
  const launchData = addNewLaunch(req.body);
  res.status(201).json({
    data: launchData,
    message: "Launch successfully created",
    success: true,
  });
}

function httpDeleteLaunch(req, res) {
  const id = Number(req.params.id);
  if (!existsLaunchWithId(id)) {
    return res.status(404).json({
      error: "Launch not found",
    });
  }
  const aborted = deleteLaunch(id);
  return res
    .status(200)
    .json({ message: "Launch successfully deleted", success: true, aborted });
}

module.exports = {
  httpGetAllLaunches,
  httpPostNewLaunch,
  httpDeleteLaunch,
};
