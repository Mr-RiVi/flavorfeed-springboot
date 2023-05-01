import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../components/layout/header'
import ReviewAdminHome from '../pages/review-admin-home'

const ReviewRouterHome = () => {
  return (
    <div className="bg-blue-200 ">
      <Header />
      
      <div className="flex min-w-full w-full bg-red-200">
        {/* <SideNavbar  /> */}
        <div className='ml-[80px]'>
          <Routes >

            <Route path="/" element={<ReviewAdminHome />}></Route>

          </Routes>
        </div>
      </div>
    </div>
  )
}

export default ReviewRouterHome