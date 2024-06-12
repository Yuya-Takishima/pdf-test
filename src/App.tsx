import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <Router>
      {/* ルーティングを設定 */}
      <Routes>
        <Route path="/" element={<FormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
