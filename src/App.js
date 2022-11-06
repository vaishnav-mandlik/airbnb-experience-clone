import "./App.css";
import React from "react";
import Experiences from "./Components/Experiences/Experiences";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/s/experiences/online" element={<Experiences />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
