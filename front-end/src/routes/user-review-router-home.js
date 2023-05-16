import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../components/layout/header'
import SideNavbar from '../components/sidenavbar-enterpreneur.component'

import UserReviewHome from '../pages/userview/user-review-home'
import UserProfileDetails from '../pages/userview/user-review-view'
import CommentSection from '../pages/comment/comments'

const UserReviewRouterHome = () => {
  return (
    <div className="bg-blue-200 ">
      <Header />
      <div className="flex min-w-full w-full bg-red-200">
        <SideNavbar  />
        <div className='ml-[80px]'>
          <Routes >
            <Route path="/" element={<UserReviewHome />}></Route>
            <Route path="/userprofiledetail/:id" element={<UserProfileDetails />}></Route> 
            <Route path="/comments" element={<CommentSection />}></Route>

          </Routes>
        </div>
      </div>
    </div>
  )
}

export default UserReviewRouterHome