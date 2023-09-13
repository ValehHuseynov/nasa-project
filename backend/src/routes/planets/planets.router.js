const { Router } = require("express");
const planetsRouter = Router();
const { httpGetAllPlanets } = require("./planets.controller");

planetsRouter.get("/planets", httpGetAllPlanets);

module.exports = planetsRouter;
