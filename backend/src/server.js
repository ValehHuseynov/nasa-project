const http = require("http");
const app = require("./app");

const { loadPlanetsData } = require("./models/planets.module");

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

async function startServer() {}

(async () => {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(PORT);
  });
})();
