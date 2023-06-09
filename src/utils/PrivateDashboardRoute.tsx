import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateDashboardRoute = () => {

  let user = sessionStorage.getItem("user_id")
  let allow;
  if (user == "undefined" || user == null) {
    allow = false
  } else {
    allow = true
  }

  return (
    allow ? <Outlet /> : <Navigate to="/" />
  )
}

export default PrivateDashboardRoute