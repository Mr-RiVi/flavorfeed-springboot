import React from "react";
import { Routes, Route } from "react-router-dom";

import ReviewRouterHome from './review-router-home'
import ProfileRouterHome from './profile-router-home'

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/reviewHome/*" element={<ReviewRouterHome />} />    
      <Route path="/profileHome/*"  element={ <ProfileRouterHome/> }/>
    </Routes>
  );
};

export default IndexRoutes;

export default IndexRoutes;