import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Github, { githubInfoLoader } from "./Components/Github";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Header />
        <About />
        <Footer />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Header />
        <Contact />
        <Footer />
      </div>
    ),
  },
  {
    path: "/github",
    element: (
      <div>
        <Header />
        <Github />
        <Footer />
      </div>
    ),
    loader: githubInfoLoader,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
