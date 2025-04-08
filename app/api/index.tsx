import { Hono } from "hono";
import { reports } from "@/api/data/reports";

const app = new Hono();
const api = app.basePath("/api");

api.get("/reports", (c) => {

  // Throw an error 33% of the time
  if (Math.random() < 0.33) {
    c.status(500);
    return c.json({ error: "Something went wrong. Please try again" });
  }

  return c.json(reports);
});

export default app;
