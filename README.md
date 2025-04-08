# Reports App

This project is composed with the following dependencies:

- **React:** The front-end framework for building dynamic user interfaces.
- **TypeScript:** A superset of JavaScript that adds optional static typing for improved code quality.
- **Vite:** A fast development server and build tool for modern web development.
- **Hono:** A lightweight, minimal and fast serverless web framework for Deno and Cloudflare Workers.
- **TanStack Router:** A performant and powerful routing library for React.

## Project Structure

The project structure is organized as follows:

- **`app/`**: Contains the source code for both the client and the API.
  - **`api/`**: Hono API code (`app/api/index.tsx`)
  - **`main.tsx`**: Entry point for the React application (`app/main.tsx`)
  - **`routes/`**: React Router routes (e.g., `app/routes/__root.tsx`, `app/routes/about.lazy.tsx`, `app/routes/index.lazy.tsx`)
  - **`style.css`**: Tailwind CSS stylesheet (`app/style.css`)
  - **`components/`**: React components (e.g., `app/components/notion-like-editor.tsx`)
- **`vite.config.ts`**: Vite configuration file (`vite.config.ts`)
- **`tailwind.config.js`**: Tailwind CSS configuration file (`tailwind.config.js`)
- **`tsconfig.app.json`**: TypeScript configuration file for the application (`tsconfig.app.json`)
- **`tsconfig.json`**: TypeScript configuration file for the entire project (`tsconfig.json`)
- **`tsconfig.node.json`**: TypeScript configuration file for Node.js (`tsconfig.node.json`)
- **`package.json`**: Project dependencies and scripts (`package.json`)
- **`_routes.json`**: Hono routes configuration for Cloudflare Pages (`_routes.json`)
- **`index.html`**: HTML template for the React application (`index.html`)
- **`README.md`**: This file! (`README.md`)
- **`LICENSE`**: MIT license (`LICENSE`)

## Setup and Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/laiso/hono-spa-react.git
   cd hono-spa-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

   This will start two servers:
   - **Client:** Runs on `http://localhost:5173/` and serves the React application.
   - **API:** Runs on `http://localhost:3000/api` and serves the Hono API.

4. **Build for production:**
   ```bash
   npm run build
   ```

   This will generate optimized build artifacts in the `dist` directory.

## Instructions

1. Create an API service using the HTTP client of your choice.
2. Using the API client, create a method that makes a GET request to `/api/reports` 
3. Based on the response, create a Typescript definition for a `Report`
4. Update the API client method to have a strongly-typed response
5. Implement error handling for non-200 API responses
6. Create a table component to with a strongly-typed `reports` prop to display the reports
7. Create an error component with an error message prop
8. Add the table to the Home page. Filter and display _only_ reports created within the past two weeks
9. Add the table to the Reports page. Display _all_ reports, sorted by most recent.
10. Display the error component if the request fails
11. Create an API endpoint that returns a single report from `/reports/{{reportId}}`
12. Add a button to each Report table row that makes an API request to this route using the respective report's ID

### Bonus
- Create a "Loading" component that and display it while an API call is in progress
- Implement pagination on the reports table component
- Implement column sorting on the reports table component
- Create a report details page with the route `/reports/{{reportId}}`
  - Load the report from the API when this component mounts
  - Display the report details, styled however you like
  - Display an error to the user if the request fails
- Implement server-side pagination for the reports endpoint using query string parameters