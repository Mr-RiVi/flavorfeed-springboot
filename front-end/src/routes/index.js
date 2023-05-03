import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from '../pages/Login/login'
import Signup from '../pages/Signup/signup'
import ReviewRouterHome from './review-router-home'
import ProfileRouterHome from './profile-router-home'

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      <Route path="/reviewHome/*" element={<ReviewRouterHome />} />    
      <Route path="/profileHome/*"  element={ <ProfileRouterHome/> }/>
    </Routes>
  );
};

export default IndexRoutes;

export default IndexRoutes;