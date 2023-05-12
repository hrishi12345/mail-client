import BasicExample from "./components/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const isLogin=true
  return (
    <Routes>
      {!isLogin && <Route path="*" element={<BasicExample />} />}
      {isLogin && <Route path="/home" element={<Home />} />}
      </Routes>
    
  );
}

export default App;
