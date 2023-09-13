const { Router } = require("express");
const planetsRouter = Router();
const { getAllPlanets } = require("./planets.controller");

planetsRouter.get("/planets", getAllPlanets);

module.exports = planetsRouter;
