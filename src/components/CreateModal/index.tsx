import React from 'react'
import TopicDropdown from '../TopicDropdown'
import QuestionDropdown from '../QuestionDropdown'
import DifficultyDropdown from '../DifficultyDropdown'

const CreateModal = () => {
  return (
    <>
    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <div className="card-body">
      <h3 className="text-lg font-bold">Create Game</h3>

      <form>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Topic:</span>
            <TopicDropdown />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Difficulty:</span>
            <DifficultyDropdown />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Limit:</span>
            <QuestionDropdown />
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Start Game</button>
        </div>
        </form>
      </div>
      </div>
    </div>
  </>
  )
}

export default CreateModal