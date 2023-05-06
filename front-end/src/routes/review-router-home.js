import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../components/layout/header'
import SideNavbar from '../components/sidenavbar-enterpreneur.component'

import ReviewAdminHome from '../pages/review/review-home'
import ReviewView from '../pages/review/review-view'
import ReviewUpdate from '../pages/review/review-update'
import ReviewCreate from '../pages/review/review-create'
import RecipeReviewCard from '../pages/seek'
import Recipehi from '../pages/hi'

import ProfileDetails from '../pages/profile/profile-view'
import ProfileUpdate from '../pages/profile/profile-update'

const ReviewRouterHome = () => {
  return (
    <div className="bg-blue-200 ">
      <Header />
      
      <div className="flex min-w-full w-full bg-red-200">
        <SideNavbar  />
        <div className='ml-[80px]'>
          <Routes >

            <Route path="/" element={<ReviewAdminHome />}></Route>
            <Route path="/reviewview/:profileId/:reviewId" element={<ReviewView />}></Route> 
            <Route path="/reviewupdate/:profileId/:reviewId" element={<ReviewUpdate />}></Route>        
            <Route path="/reviewcreate/:profileId" element={<ReviewCreate />}></Route> 

            <Route path="/seek" element={<RecipeReviewCard />}></Route>
            <Route path="/hi/:id" element={<Recipehi />}></Route> 

            <Route path="/profiledetail/:id" element={<ProfileDetails />}></Route> 
            <Route path="/profileupdate/:id" element={<ProfileUpdate />}></Route> 


          </Routes>
        </div>
      </div>
    </div>
  )
}

export default ReviewRouterHome