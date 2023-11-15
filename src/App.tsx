import React from "react";
// react router
import { HashRouter, Route, Routes } from "react-router-dom";
// components
import HomePage from "./pages/HomePage/HomePage";
import Expenses from "./pages/Expenses/Expenses";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/expenses" element={<Expenses />} />
        </Routes>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
