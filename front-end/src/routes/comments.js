import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/layout/header";
import SideNavbar from "../components/sidenavbar-enterpreneur.component";

import CommentSection from "../pages/comment/comments";
// import CommentEdit from "../pages/comment/comments_edit";
// import ProfileDetails from '../pages/profile-view'

const ProfileRouterHome = () => {
  return (
    <div className=" bg-blue-200 ">
      <Header />

      <div className=" flex min-w-full w-full bg-red-200 ">
        <SideNavbar />
        <div className="ml-[80px]">
          <Routes>
            <Route path="/comments" element={<CommentSection />}></Route>
            {/* <Route path="/edit" element={<CommentEdit />}></Route> */}
            {/* <Route path="/profiledetails" element={<ProfileDetails />}></Route>         */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default ProfileRouterHome;
