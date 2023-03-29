import React, {useState} from 'react'
import { CreateModal, HighscoreModal } from '../../components'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';

const Dashboard = () => {

const [createModal, setCreateModal] = useState(false)
const [highscoreModal, setHighscoreModal] = useState(false)

const navigate = useNavigate()

const handleCreateModal = () => {
    setCreateModal(true)
    setHighscoreModal(false)
  }
const handleHighscoreModal = () => {
    setHighscoreModal(true)
    setCreateModal(false)
  }
const logout = () => {
    sessionStorage.removeItem("user_id")
    navigate("/")
}

const username = sessionStorage.getItem("username")

  return ( <>
    {createModal && <CreateModal />}
    {highscoreModal && <HighscoreModal />}

    <motion.h1 className='dashboard-title'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.05 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 400,
              restDelta: 0.001
            }
          }}
    >WELCOME <br></br>{username}</motion.h1>

    <main className='cards-container'>
        <motion.div className="card w-96 bg-base-100 shadow-xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.05 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 400,
              restDelta: 0.001
            }
          }}
        >
            <div className="card-body items-center text-center">
                <h2 className="card-title">Create Game</h2>
                <p>Create a brand-new quiz!</p>
                <div className="card-actions">
                <label onClick={handleCreateModal} htmlFor='my-modal-3' className="btn btn-primary">PLAY</label>
                </div>
            </div>
        </motion.div>

        <motion.div className="card w-96 bg-base-100 shadow-xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.05 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 400,
              restDelta: 0.001
            }
          }}        
        >
            <div className="card-body items-center text-center">
                <h2 className="card-title">Highscores</h2>
                <p>See the community scores on our leaderboard!</p>
                <div className="card-actions">
                <label onClick={handleHighscoreModal} htmlFor='my-modal-3' className="btn btn-primary">SELECT</label>
                </div>
            </div>
        </motion.div>

        <motion.div className="card w-96 bg-base-100 shadow-xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.05 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 400,
              restDelta: 0.001
            }
          }}        
        >
            <div className="card-body items-center text-center">
                <h2 className="card-title">Logout</h2>
                <p>Go back to the welcome page</p>
                <div className="card-actions">
                <button className="btn btn-primary" onClick={logout}>LOGOUT</button>
                </div>
            </div>
        </motion.div>
    </main>
    </>
  )
}

export default Dashboard