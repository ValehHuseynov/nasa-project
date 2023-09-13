const { Router } = require("express");
const launchesRouter = Router();

const {
  httpGetAllLaunches,
  httpPostNewLaunch,
} = require("./launches.controller");

launchesRouter.get("/launches", httpGetAllLaunches);
launchesRouter.post("/launches", httpPostNewLaunch);

module.exports = launchesRouter;
