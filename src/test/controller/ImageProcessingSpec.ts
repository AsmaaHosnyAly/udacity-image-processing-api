import supertest from "supertest";
import app from "../../app";

const request = supertest(app);

describe("Resize Controller Middleware", () => {
  it("expect an error is a parameter is missing", async () => {
    const response = await request.get("/api/images/resize?");
    expect(response.text).toBe("There was an error processing your image");
    
  });

  it("should return an error message if width is not a number", async () => {
    const response = await request.get(
      "/api/images/resize?filename=img1&width=NotNumber&height=400"
    );
    expect(response.text).toBe("Height and width must be numbers");
    
  });

  it("should return an error message if height is not a number", async (done) => {
    const response = await request.get(
      "/api/images/resize?filename=img1&width=notNumber&height=NotNumber"
    );
    expect(response.text).toBe("Height and width must be numbers");
    done();
  });

  it("should return a status of 400 if an error occured", async (done) => {
    const response = await request.get(
      "/api/images/resize?filename=img1&width=string&height=string"
    );
    expect(response.status).toBe(400);
    done();
  });

  it("should return a message if image does not exist", async (done) => {
    const response = await request.get(
      "/api/images/resize?filename=filenotFound&width=400&height=300"
    );
    expect(response.status).toBe(403);
    expect(response.body.ok).toBe("failed");
    expect(response.body.message).toBe("Input file is missing");
    done();
  });
});
