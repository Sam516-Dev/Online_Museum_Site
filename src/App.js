import React from "react";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import HomePage from "./HomePage";
import Exhibits from "./Exhibits.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collections from "./Collections";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Exhibits" element={<Exhibits />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Collections" element={<Collections />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
