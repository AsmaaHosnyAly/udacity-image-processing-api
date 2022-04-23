import supertest from "supertest";
import app from "../app";

const request = supertest(app);

describe("Server API", () => {
  it("Expect return a welcome message", async (done) => {
    const response = await request.get("/");
    expect(response.text).toBe("Welcome to Udacity Image Processing API");
    done();
  });

  it("Expect return a status of 200", async (done) => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    done();
  });
});
