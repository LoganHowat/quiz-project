import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const LoginModal = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [LoggedIn, setLoggedIn] = useState(false)
  const [userError, setUserError] = useState(false)
  const [serverError, setServerError] = useState(false)

  const navigate = useNavigate()


  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    const dataToSend = {
      email: email,
      password: password
  }

  try {
    // Checking user credentials with database
    const response = await fetch(`/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
         dataToSend
      )
    });
    const data = await response.json()
    console.log(data)
    sessionStorage.setItem("user_id", data.user.id)
    sessionStorage.setItem("username", data.user.name)

    // If credentials are successfully stored in database, login user.
    const gotten = sessionStorage.getItem("user_id")
    if (gotten === "undefined") {
      console.error("Unable to retrieve User")
      setServerError(true)
      setTimeout(() => {
        setServerError(false)
      }, 10000)
    } else {
      setLoggedIn(true)
      navigate('/dashboard')
      setTimeout(() => {
        setLoggedIn(false)
      }, 3000)
    }
    
    } catch (error) {
      console.error("Email or Password is incorrect")
      setUserError(true)
      setTimeout(() => {
        setUserError(false)
      }, 10000)
    }
  }

  return (
    <>
    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <div className="card-body">
      <h3 className="text-lg font-bold">Enter Your Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        {LoggedIn && <p className="form-control mt-6 text-emerald-500">Login Successful!</p>}
        {userError && <p className="form-control mt-6 text-red-500">Email or Password is incorrect.</p>}
        {serverError && <p className="form-control mt-6 text-red-500">Database Error: Cannot Get User</p>}
        </form>
      </div>
      </div>
    </div>
  </>
  )
}

export default LoginModal