import React, {useState} from 'react'

const SignupModal = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    const dataToSend = {
      name: name,
      email: email,
      password: password
  }

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
        </form>
      </div>
      </div>
    </div>
    </>
  )
}

export default SignupModal