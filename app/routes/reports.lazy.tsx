import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/reports")({
  component: About,
});

function About() {
  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold">Reports List</h2>
    </div>
  );
}
