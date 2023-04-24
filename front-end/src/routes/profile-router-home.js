import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../components/layout/header'

import ProfileAdminHome from '../pages/profile-admin-home'

const ProfileRouterHome = () => {
    return (
       <div className=" bg-blue-200 ">
        <Header />
  
        <div className=" flex min-w-full w-full bg-red-200 ">
          {/* <SideNavbar />         */}
          <div className ='ml-[80px]'>
              <Routes>
  
                <Route path="/" element={<ProfileAdminHome />}></Route>               
    
              </Routes>                 
          </div>
        </div>
      </div>
    )
}

export default ProfileRouterHome