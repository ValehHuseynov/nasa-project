const { Router } = require("express");
const launchesRouter = Router();

const {
  httpGetAllLaunches,
  httpPostNewLaunch,
  httpDeleteLaunch,
} = require("./launches.controller");

launchesRouter.get("/launches", httpGetAllLaunches);
launchesRouter.post("/launches", httpPostNewLaunch);
launchesRouter.delete("/launches/:id", httpDeleteLaunch);

module.exports = launchesRouter;
