import React, {useState} from 'react'
import { LoginModal, SignupModal } from '../../components'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

const Home = (): JSX.Element => {

  const [loginModal, setLoginModal] = useState(false)
  const [signupModal, setSignupModal] = useState(false)

  const handleLoginModal = () => {
    setLoginModal(true)
    setSignupModal(false)
  }
  const handleSignupModal = () => {
    setLoginModal(false)
    setSignupModal(true)
  }

  return (
<>
{loginModal && <LoginModal />}
{signupModal && <SignupModal />}
            <motion.div className="intro" id="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    delay: 0.5,
                    default: {
                        duration: 0.3,
                    }
                }}>
                <div className="intro__center center">
                    <div className="intro__wrap">
                        <motion.div 
                        className="header"
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
                        }}>
                            WELCOME!
                        </motion.div>
                        <motion.div 
                        className="text"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 0.9 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ scale: 0.85 }}
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
                        }}>
                           Click Signup or Login to get started
                        </motion.div>
                        <div className="buttons">
                            <label onClick={handleSignupModal} htmlFor='my-modal-3' className="button signup">Signup</label>
                            <label onClick={handleLoginModal} htmlFor="my-modal-3" className="button login">Login</label>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
  )
}

export default Home