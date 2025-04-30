import { Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";
// routes imported from module declares in vite-env.d.ts
import routes from "~react-pages";
import { Header } from "./components";

function App() {
  useEffect(() => {
    generateToken();
  });

  // on app load, generate a JWT to be stored in cookies and used in future API requests
  const generateToken = async () => {
    try {
      // POST request to api
      const response = await fetch("http://localhost:8080/api/token", {
        method: "POST",
        // include credentials for cookies
        credentials: "include",
      });

      if (!response.ok) {
        const errorMessage = (await response.json()).message;
        throw new Error(errorMessage);
      }
    } catch (err: any) {
      console.error(`Error: ${err.message}`);
    }
  };

  return (
    /*
     * This setup allows me to use a file-based routing system, where the routes come from "src/pages"
     * Each folder in pages has an index.tsx file, which acts as the base route for that folder.
     * for example, pages/index.tsx is the same as localhost:5173, but then pages/about/index
     * would lead to localhost:5173/about
     */
    <Suspense fallback={<p>...Loading</p>}>
      <Header />
      {useRoutes(routes)}
    </Suspense>
  );
}

export default App;
