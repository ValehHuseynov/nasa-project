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

    expect(response.body).toMatchObject(launchDataWithoutData);
  });

  test("It should catch missing required properties", () => {});

  test("It should catch invalid Dates", () => {});
});
