import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold">New Reports</h2>
    </div>
  );
}
