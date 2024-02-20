import React from 'react'
import LandingPage from '../pages/main/landingPage/LandingPage'
import { Outlet } from 'react-router-dom'

function LandingRoute() {
  return (
    <>
      <div>
       <LandingPage/>
    </div>
    </>
  
  )
}

export default LandingRoute