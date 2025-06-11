# Tech Assessment - Reports App - Hono/React

This project is composed with the following dependencies:

- **[Node](https://nodejs.org)**
- **[React](https://react.dev/)**
- **[TanStack Router](https://tanstack.com/router/latest/docs/framework/react/overview)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[Hono](https://hono.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Vite](https://vite.dev/)**

## Project Structure

The project structure is organized as follows:

- **`app/`**: Contains the source code for both the client and the API.
  - **`api/`**: Hono API code
  - **`main.tsx`**: Entry point for the React application
  - **`routes/`**: React Router routes (e.g., `app/routes/__root.tsx`, `app/routes/reports.lazy.tsx`, `app/routes/index.lazy.tsx`)
  - **`style.css`**: Tailwind CSS stylesheet
  - **`components/`**: React components (e.g., `app/components/button.tsx`)
- **`vite.config.ts`**: Vite configuration file
- **`tailwind.config.js`**: Tailwind CSS configuration file 
- **`_routes.json`**: Hono routes configuration
- **`index.html`**: HTML template for the React application
- **`README.md`**: This file!

## Instructions

### Setup and Development

1. **Fork this repository**

2. **Clone the repository:**
   ```bash
   git clone {{ Your repository URL }}
   cd reports-assessment-hono-react
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

   This will start two servers:
   - **Client:** Runs on `http://localhost:5173/` and serves the React application.
   - **API:** Runs on `http://localhost:3000/api` and serves the Hono API.


### Tasks

Try to complete as many of the following tasks as you are able within the alotted time. You will not be assessed on the number of tasks completed.
 
1. In the React app, create an `ApiService` javascript class that implements `IApiService` in `app/types.ts`, using an HTTP client of your choice (axios, fetch, etc...). 
2. Implement the `getReports` method by making a GET request to `/api/reports` 
3. Based on the response, create a Typescript definition for a `Report`. Update the interface and API service to use this new type
5. Implement error handling for non-200 API responses
6. Add logic to the Home and Reports pages to make the API request when each page mounts
7. Create a `ReportsTable` component with a strongly-typed `reports` array prop. Display the reports in an HTML table, styled however you like
8. Create an `ErrorMessage` component with a `message` prop
9. If the request succeeds, show the `ReportsTable` component. If the request fails, show the `ErrorMessage` component
10. On the Home page, filter and display reports created _within the past two weeks_, sorted by most recent
11. On the Reports page, display _all_ reports, sorted by most recent
13. Create an API endpoint at `/api/reports/{{reportId}}` that finds a single report by the given ID and returns it as JSON
14. Add a method to the API service called `getReport` that takes a `reportId` argument and makes a GET request to `/api/reports/{{reportId}}` 
15. Add a button to each Report table row that, when clicked, makes an API request to this endpoint with that respective report's ID. Display the report separately, below the table
16. Commit your changes and make a Pull Request to the origin repo (https://github.com/echoasi/reports-assessment-hono-react)
17. Create a "Loading" component and display it while an API call is in progress
18. Implement pagination on the reports table component
19. Implement column sorting on the reports table component
20. Create a report details route/page with the route `/reports/{{reportId}}`
  - On the `ReportsTable` component, change the report details button into a link to this page for each respective report
  - Load the report from the API when this component mounts
  - Display the report details, styled however you like
  - Display an error to the user if the request fails
21. Implement server-side pagination for the reports endpoint using query string parameters
