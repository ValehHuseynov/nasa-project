const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  test("It should respons with 200 success", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test POST /launches", () => {
  const completeLaunchData = {
    mission: "Test mission",
    rocket: "Test rocket",
    destination: "Test destination",
    launchDate: "January 4, 2028",
  };

  const launchDataWithoutData = {
    mission: "Test mission",
    rocket: "Test rocket",
    destination: "Test destination",
  };

  test("It should respons with 201 created", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect("Content-Type", /json/)
      .expect(201);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.data.launchDate).valueOf();
    expect(responseDate).toBe(requestDate);

    expect(response.body.data).toMatchObject(launchDataWithoutData);
  });

  test("It should catch missing required properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithoutData)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      success: false,
      error: "Missing required launch property",
    });
  });
});

describe("Test Delete /launches/id", () => {
  test("it shuld response width 200: Deleted", async () => {
    const response = await request(app)
      .delete(`/launches/${100}`)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toStrictEqual({
      message: "Launch successfully deleted",
      success: true,
      aborted: {
        customers: ["ZTM", "NASA"],
        destination: "Kepler-442 b",
        flightNumber: 100,
        launchDate: "2030-12-26T20:00:00.000Z",
        mission: "Kepler exploration X",
        rocket: "Explorer IS1",
        success: false,
        upcoming: false,
      },
    });
  });
  test("it should catch Launch not found", async () => {
    const response = await request(app)
      .delete(`/launches/${110}`)
      .expect("Content-Type", /json/)
      .expect(404);

    expect(response.body).toStrictEqual({
      error: "Launch not found",
    });
  });
});
