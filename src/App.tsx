import React from "react";
// react router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import HomePage from "./pages/HomePage/HomePage";
import Expenses from "./pages/Expenses/Expenses";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/expenses" element={<Expenses />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
