import React from "react";
import { Routes, Route } from "react-router-dom";


import ProfileRouterHome from './profile-router-home'

const IndexRoutes = () => {
  return (
    <Routes>      
      <Route path="/profileHome/*"  element={ <ProfileRouterHome/> }></Route>    
    </Routes>
  );
};

export default IndexRoutes;