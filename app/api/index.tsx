import { Hono } from "hono";
import { reports } from "@/api/data/reports";

const app = new Hono();
const api = app.basePath("/api");

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

app.use(async (c, next) => {
  // Simulate a delay between 0.5 and 1 seconds
  await sleep(Math.random() * 500 + 500);
  
  // Throw an error 33% of the time
  if (Math.random() < 0.33) {
    c.status(500);
    return c.json({ error: "Something went wrong. Please try again" });
  }

  return next();
});

api.get("/reports", (c) => {
  return c.json(reports);
});

export default app;
