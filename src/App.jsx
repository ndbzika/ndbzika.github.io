import React from 'react';

import './App.css';

import { Home } from "./Pages/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Home/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
