import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import ReactCanvasConfetti from "react-canvas-confetti";
import { useNavigate } from 'react-router-dom';

const Results = () => {

  const [users, setUsers] = useState([])
  const [gameId, setGameId] = useState<number>(0);
  console.log(users)

  const navigate = useNavigate()

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("/quiz_data")
      const data = await response.json()
      let reversed = data.reverse()
      setUsers(reversed)
      const application = sessionStorage.getItem("game_id")
      setGameId(Number(application))
    }
    
    getUsers()
  }, [])

  const goBack = () => {
    sessionStorage.removeItem('game_id')
    navigate("/dashboard")
  }

  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  };
  const getAnimationSettings = (angle: number, originX: number) => {
    return {
      particleCount: 3,
      angle,
      spread: 55,
      origin: { x: originX },
      colors: ["#bb0000", "#ffffff"],
    };
  }


  interface User {
    id: number;
    game_id: number;
    user: string;
    score: number;
  }


  return (
    <>
      <div className="question-container">
        <motion.div className="card w-1/3 bg-neutral text-neutral-content justify-content: center align-items: center"
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
            <h2 className="card-title">LEADERBOARD</h2>
            {users.map((user: User) => {
              return (
                <p style={{background: user.game_id == gameId ? "purple" : ""}} key={user.id}>
                {user.user}: {user.score}</p>
              )
            })}
            <button onClick={goBack}>Go Back</button>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Results