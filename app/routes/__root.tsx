import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import Header from "@/components/ui/header";

export const Route = createRootRoute({
  component: () => (
    <div>
      <Header logo="Reports App" />
      <div className="w-full max-w-screen-xl mx-auto p-4 min-h-screen relative">
        <Outlet />
      </div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Reports App
          </p>
        </div>
      </footer>
      {import.meta.env.PROD ? null : <TanStackRouterDevtools />}
    </div>
  ),
});
