import React from "react";
import { Routes, Route } from "react-router-dom";

import ReviewRouterHome from './review-router-home'

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/reviewHome/*" element={<ReviewRouterHome />} />    
    </Routes>
  );
};

export default IndexRoutes;
