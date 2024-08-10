import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Chat from "./Components/Chat";
const Approuter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
};

export default Approuter;
