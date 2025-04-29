import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
// routes imported from module declares in vite-env.d.ts
import routes from "~react-pages";
import { NavBar } from "./components";

function App() {
  return (
    /*
     * This setup allows me to use a file-based routing system, where the routes come from "src/pages"
     * Each folder in pages has an index.tsx file, which acts as the base route for that folder.
     * for example, pages/index.tsx is the same as localhost:5173, but then pages/about/index
     * would lead to localhost:5173/about
     */
    <Suspense fallback={<p>...Loading</p>}>
      <NavBar />
      {useRoutes(routes)}
    </Suspense>
  );
}

export default App;
