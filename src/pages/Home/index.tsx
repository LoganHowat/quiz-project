import React from 'react'
import { Navbar, Login, Signup } from '../../components'

const Home = (): JSX.Element => {
  return (
    <div>
        <h1>This is the home page</h1>
        <Navbar />
        <Login />
        <Signup />
    </div>
  )
}

export default Home