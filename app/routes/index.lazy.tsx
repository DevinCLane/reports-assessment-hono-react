import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <h2 className="text-2xl font-bold">New Reports</h2>
    </>
  );
}
