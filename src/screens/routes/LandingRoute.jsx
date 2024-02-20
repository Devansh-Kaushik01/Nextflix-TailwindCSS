import React from 'react'
import Banner from '../pages/main/banner/Banner'
import { Outlet } from 'react-router-dom'

function LandingRoute() {
  return (
    <>
      <div>
        <Banner/>
    </div>
    </>
  
  )
}

export default LandingRoute