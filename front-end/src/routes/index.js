import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from '../pages/Login/login'
import Signup from '../pages/Signup/signup'

const IndexRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default IndexRoutes
