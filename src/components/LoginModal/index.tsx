import React from 'react'

const LoginModal = () => {
  return (
    <>
    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <div className="card-body">
      <h3 className="text-lg font-bold">Enter Your Details</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
      </div>
    </div>
  </>
  )
}

export default LoginModal