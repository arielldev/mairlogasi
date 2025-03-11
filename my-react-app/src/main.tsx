import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/hero";
import Gallery from "./gallery/page"; // Import the Gallery component
import Faq from "./faq/page";

import Layout from "./layout/Layout";
import "./index.css"; // Ensure Tailwind's directives are imported here

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />{" "}
          {/* This will show Hero on the homepage */}
          <Route path="/gallery" element={<Gallery />} />{" "}
          <Route path="/gallery" element={<Gallery />} />{" "}
          <Route path="/faq" element={<Faq />} />{" "}
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
