import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Header from "./Components/Header";
import FooterComp from "./Components/FooterComp";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
        <FooterComp/>
      </BrowserRouter>
    </>
  );
}
