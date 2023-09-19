const launches = new Map();

let lastLaunchFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27,2030"),
  destination: "Kepler-442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  lastLaunchFlightNumber++;
  const launchBody = Object.assign(launch, {
    flightNumber: lastLaunchFlightNumber,
    customers: ["ZTM", "NASA"],
    upcoming: true,
    success: true,
    launchDate: new Date(launch.launchDate),
  });
  launches.set(lastLaunchFlightNumber, launchBody);
  return launchBody;
}

function existsLaunchWithId(id) {
  return launches.has(id);
}

function deleteLaunch(id) {
  const aboured = launches.get(id);
  aboured.upcoming = false;
  aboured.success = false;
  return aboured;
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  deleteLaunch,
  existsLaunchWithId,
};
