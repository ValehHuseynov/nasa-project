const API_URL = "http://localhost:8000";

async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  return response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);
  return response.json();
}

async function httpSubmitLaunch(launch) {
  const response = await fetch(`${API_URL}/launches`, {
    method: "POST",
    body: JSON.stringify(launch),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

async function httpAbortLaunch(id) {
  return await fetch(`${API_URL}/launches/${id}`, { method: "DELETE" });
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
