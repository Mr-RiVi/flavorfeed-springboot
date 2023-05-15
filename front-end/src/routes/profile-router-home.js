import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../components/layout/header'
import SideNavbar from '../components/sidenavbar-enterpreneur.component'

import ProfileAdminHome from '../pages/profile/profile-home'

const ProfileRouterHome = () => {
    return (
       <div>
        <Header />
  
        <div className=" flex min-w-full w-full">
          <SideNavbar />        
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