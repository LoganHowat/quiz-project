import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { StringLiteral } from "typescript";

const Game = () => {

    const [questionCount, setQuestionCount] = useState(0)
    const [questions, setQuestions] = useState<any[]>([{question: "Loading...", incorrectAnswers: ["Wrong1, Wrong2, Wrong3"], correctAnswer: ["Correct1"]}])
    const [numberOfQuestions, setNumberOfQuestions] = useState(0)
    const [answerList, setAnswerList] = useState([])
    const [score, setScore] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
      const getQuestions = async() => {
          //This gets the current game session data, we need to get the quiz id from this
          const game_id = sessionStorage.getItem('game_id')
          const game_response = await fetch(`/quiz_data/quiz_data_id/${game_id}`)
          const game_data = await game_response.json()
          const got_quiz_id = game_data.quiz_id
      
          //Now we need to retrieve the questions from the quiz object
          const quiz_response = await fetch(`/quiz/${got_quiz_id}`)
          const questions_response = await quiz_response.json()
          setQuestions(questions_response.questions)
          setNumberOfQuestions(questions_response.questions.length)
         } 
        
        getQuestions()
    }, [])

    useEffect(() => {

      let newArr = questions[questionCount].incorrectAnswers
      newArr.push(questions[questionCount].correctAnswer)
      const shuffledArr = newArr.sort((a: string, b: string) => 0.5 - Math.random());
      setAnswerList(shuffledArr)

    }, [questions, questionCount])


    interface AnswerClick extends React.MouseEvent<HTMLDivElement> {
        target: HTMLBodyElement;
      }

    const checkAnswer = async(e: AnswerClick) => {
      const game_id = sessionStorage.getItem('game_id')
      let choice =  e.target.innerText || e.target.children[0].innerHTML
      if (choice == questions[questionCount].correctAnswer) {
        const newScore = score +25
        setScore(newScore)
        const response = await fetch(`/quiz_data/${game_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            score: newScore
          })
        });
        console.log(await response.json())
        if (questionCount + 1 === numberOfQuestions) {
          navigate('/results')
        }else{
          setQuestionCount(questionCount + 1)
        }

      } else {
        if (questionCount + 1 === numberOfQuestions) {
          const response = await fetch(`/quiz_data/${game_id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              score: score
            })
          });
          navigate('/results')
        }else{
          setQuestionCount(questionCount + 1)
        }
      }
    }

  return (
  <>
      <div className="question-container">
          <motion.div className="card w-96 sm:w-1/2 md:w-4/3 bg-neutral text-neutral-content justify-content: center align-items: center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5}}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.75 }}
                    transition={{
                      default: {
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01]
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
                  <p>Score: {score}</p><br></br>
                  <h2 className="card-title">Question:</h2>
                  <p id="question-bubble">{questions[questionCount].question}</p>
                  <div className="card-actions justify-end">
                  </div>
              </div>
          </motion.div>
      </div>

    <div className="page-grid">

          <motion.div className="answer hover:bg-base-300 card md:w-96  bg-neutral text-neutral-content justify-content: center align-items: center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{opacity: 0, scale: 0.5}}
                  whileHover={{ scale: 1.05 }}
                  style={{ fontSize: 'calc(1vw + 1vh + 1vmin)'}}
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
                  onClick={checkAnswer}          
          >
              <div className="card-body items-center text-center">
                  <h2 className="card-title">{answerList[0]}</h2>
                  <div className="card-actions justify-end">
                  </div>
              </div>
          </motion.div>

          <motion.div className="answer hover:bg-base-300 card md:w-96 bg-neutral text-neutral-content justify-content: center align-items: center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{opacity: 0, scale: 0.5}}
                  whileHover={{ scale: 1.05 }}
                  style={{ fontSize: 'calc(1vw + 1vh + 1vmin)'}}
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
                  onClick={checkAnswer}          
          >
              <div className="card-body items-center text-center">
                  <h2 className="card-title">{answerList[1]}</h2>
                  <div className="card-actions justify-end">
                  </div>
              </div>
          </motion.div>

          <motion.div className="answer hover:bg-base-300 card md:w-96 bg-neutral text-neutral-content justify-content: center align-items: center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{opacity: 0, scale: 0.5}}
                  whileHover={{ scale: 1.05 }}
                  style={{ fontSize: 'calc(1vw + 1vh + 1vmin)'}}
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
                  onClick={checkAnswer}          
          >
              <div className="card-body items-center text-center">
                  <h2 className="card-title">{answerList[2]}</h2>
                  <div className="card-actions justify-end">
                  </div>
              </div>
          </motion.div>

          <motion.div className="answer hover:bg-base-300 card md:w-96 bg-neutral text-neutral-content justify-content: center align-items: center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{opacity: 0, scale: 0.5}}
                  whileHover={{ scale: 1.05 }}
                  style={{ fontSize: 'calc(1vw + 1vh + 1vmin)'}}
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
                  onClick={checkAnswer}          
          >
              <div className="card-body items-center text-center">
                  <h2 className="card-title">{answerList[3]}</h2>
                  <div className="card-actions justify-end">
                  </div>
              </div>
          </motion.div>
    </div>
    </>
  )

}
    

export default Game