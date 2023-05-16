import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/layout/header";
import SideNavbar from "../components/sidenavbar-enterpreneur.component";

import ReviewAdminHome from '../pages/review/review-home'
import ReviewUpdate from "../pages/review/review-update";
import ReviewCreate from "../pages/review/review-create";

import ProfileDetails from "../pages/profile/profile-view";
import ProfileUpdate from "../pages/profile/profile-update";
import Seek from "../pages/review/seek";
import CommentSection from "../pages/comment/comments";

const ReviewRouterHome = () => {
  return (
    <div>
      <Header />
      <div className="flex min-w-full w-full">
        <SideNavbar />
        <div className="ml-[80px]">
          <Routes>

          <Route path="/" element={<ReviewAdminHome />}></Route>
            <Route
              path="/reviewupdate/:profileId/:reviewId"
              element={<ReviewUpdate />}
            ></Route>
            <Route
              path="/reviewcreate/:profileId"
              element={<ReviewCreate />}
            ></Route>

            <Route
              path="/profiledetail/:id"
              element={<ProfileDetails />}
            ></Route>
            <Route
              path="/profileupdate/:id"
              element={<ProfileUpdate />}
            ></Route>
            <Route
              path="/seek/:id"
              element={<Seek />}
            ></Route>
            <Route path="/comments" element={<CommentSection />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default ReviewRouterHome;