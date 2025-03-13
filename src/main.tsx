import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gallery from "./gallery/page"; // Import the Gallery component
import Faq from "./faq/page";
import Home from "./home/page";
import Layout from "./layout/Layout";
import "./index.css";
import About2 from "../about/page";
import NotFound from "./components/NotFound";
import Article from "./recommendations/ articles/page";
import Customers from "./recommendations/customers/page";
import Graduations from "./recommendations/graduations/page";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/gallery" element={<Gallery />} />{" "}
          <Route path="/faq" element={<Faq />} />{" "}
          <Route path="/about" element={<About2 />} />{" "}
          <Route path="*" element={<NotFound />} />
          <Route path="/recommendations/articles" element={<Article />} />
          <Route path="/recommendations/customers" element={<Customers />} />
          <Route path="/recommendations/graduations" element={<Graduations />} />

        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
