import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Header from "./Components/Header";
import FooterComp from "./Components/FooterComp";
import PrivateRoute from "./Components/PrivateRoute";
import OnlyAdminPrivateRoute from "./Components/OnlyAdminPrivateRoute copy";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./Components/ScrollToTop";
import Search from "./pages/Search";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/search" element={<Search/>}></Route>

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>
          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path="/create-post" element={<CreatePost />}></Route>
            <Route path="/update-post/:postId" element={<UpdatePost />}></Route>
          </Route>

          <Route path="/post/:postSlug" element={<PostPage />}></Route>
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </>
  );
}
