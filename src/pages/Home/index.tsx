import React from 'react'
import { Login, Signup } from '../../components'
import { motion } from "framer-motion"

const Home = (): JSX.Element => {
  return (
        <div className="title-container">
          <motion.h1
            className="title"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 0.9 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 0.8 }}
            whileTap={{ scale: 0.75 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 10,
                stiffness: 400,
                restDelta: 0.001,
              },
            }}
          >
            WELCOME!
          </motion.h1>
        </div>
  )
}

export default Home