import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const SignupModal = () => {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [LoggedIn, setLoggedIn] = useState(false)
  const [userError, setUserError] = useState(false)
  const [serverError, setServerError] = useState(false)

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    const dataToSend = {
      name: name,
      email: email,
      password: password
  }

  try {
    // Posting user credentials into database
    const response = await fetch(`/register`, {
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
    sessionStorage.setItem("user_id", data.id)

    // If credentials are successfully stored in database, login user.
    const gotten = sessionStorage.getItem("user_id")
    if (gotten === "undefined") {
      console.error("Database/SessionStorage Error: Cannot Store New User")
      setServerError(true)
      setTimeout(() => {
        setServerError(false)
      }, 10000)
    } else {
      setLoggedIn(true)
      setTimeout(() => {
        setLoggedIn(false)
      }, 3000)
    }
    
    } catch (error) {
      console.error("Email already in use")
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
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={handleSubmit}>Signup</button>
        </div>
        {LoggedIn && <p className="form-control mt-6 text-emerald-500">Signup Successful!</p>}
        </form>
        {userError && <p className="form-control mt-6 text-red-500">Email already signed up</p>}
        {serverError && <p className="form-control mt-6 text-red-500">Database Error: Cannot Get User</p>}
      </div>
      </div>
    </div>
    </>
  )
}

export default SignupModal