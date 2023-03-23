import React, {useState} from 'react'
import { createModal } from '../../components'
import CreateModal from '../../components/CreateModal'

const Dashboard = () => {

const [createModal, setCreateModal] = useState(false)

const handleCreateModal = () => {
    setCreateModal(true)
  }

  return ( <>
    {createModal && <CreateModal />}

    <main className='cards-container'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="create" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Create Game</h2>
                <p>Create a brand-new quiz!</p>
                <div className="card-actions">
                <label onClick={handleCreateModal} htmlFor='my-modal-3' className="btn btn-primary">SELECT</label>
                </div>
            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="highscores" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Highscores</h2>
                <p>See your previous scores on our leaderboard!</p>
                <div className="card-actions">
                <button className="btn btn-primary">SELECT</button>
                </div>
            </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Logout</h2>
                <p>Go back to the welcome page</p>
                <div className="card-actions">
                <button className="btn btn-primary">LOGOUT</button>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default Dashboard