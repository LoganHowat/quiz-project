import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {

  let user = sessionStorage.getItem("user_id")
  let allow;
  if (user == "undefined") {
    allow = false
  } else {
    allow = true
  }

  return (
    allow ? <Outlet /> : <Navigate to="/" />
  )
}

export default PrivateRoute