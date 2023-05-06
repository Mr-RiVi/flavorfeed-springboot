import React from "react";
import { Routes, Route } from "react-router-dom";

import SignInPage from '../pages/sign-page'
import UserReviewRouterHome from './user-review-router-home'

import ReviewRouterHome from './review-router-home'
import ProfileRouterHome from './profile-router-home'


const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/signin"  element={ <SignInPage/> }/>
      <Route path="/userHome/*"  element={ <UserReviewRouterHome/> }/>

      {/* <Route path="/reviewHome/*" element={<ReviewRouterHome />} />     */}
      <Route path="/profileHome/*"  element={ <ProfileRouterHome/> }/>
      <Route path="/reviewerHome/*"  element={ <ReviewRouterHome/> }/>



    </Routes>
  );
};

export default IndexRoutes;