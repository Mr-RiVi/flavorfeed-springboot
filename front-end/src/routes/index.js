import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/login";
import Signup from "../pages/Signup/signup";
import ReviewRouterHome from "./review-router-home";
import ProfileRouterHome from "./profile-router-home";
import AdminRoutes from "./admin";
import SignInPage from "../pages/sign-page";
import UserReviewRouterHome from "./user-review-router-home";
import CommentSection from "../pages/comment/comments";

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/userHome/*" element={<UserReviewRouterHome />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/reviewHome/*" element={<ReviewRouterHome />} />
      <Route path="/profileHome/*" element={<ProfileRouterHome />} />
      <Route path="/reviewerHome/*" element={<ReviewRouterHome />} />
      <Route path="/comments/*" element={<CommentSection />} />
      <Route path="/reviewHome/*" element={<ReviewRouterHome />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
};

export default IndexRoutes;
