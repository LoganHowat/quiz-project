import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateGameRoute = () => {

  let game = sessionStorage.getItem("game_id")
  let user = sessionStorage.getItem("user_id")
  let allowGame;
  let allowDash;
  let direction;

  if (game == "undefined" || game == null) {
    allowGame = false
  } else {
    allowGame = true
  }

  if (user === "undefined" || user == null) {
    allowDash = false
  } else {
    allowDash = true
  }

  if (allowGame == false && allowDash == false) {
    direction = <Navigate to="/" />
  } else if (allowGame == false && allowDash == true) {
    direction = <Navigate to="/dashboard" />
  } else {
    direction = <Outlet />
  }

  return (<>
    {direction}
    </>
  )
}

export default PrivateGameRoute