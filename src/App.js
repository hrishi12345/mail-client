
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import AuthForm from "./components/Form";
import Inbox from './components/inbox';

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  console.log(isLogin)

  return (
    <Routes>
      <Route path="/login" element={!isLogin ? <AuthForm /> : <Navigate to="/home" />} />
      <Route path="/inbox" element={<Inbox />}/> 
      <Route path="/home" element={isLogin ? <Home /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
