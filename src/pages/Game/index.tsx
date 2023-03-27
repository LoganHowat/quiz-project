import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";

const Game = () => {

   const getQuestions = async() => {

    //This gets the current game session data, we need to get the quiz id from this
    const game_id = sessionStorage.getItem('game_id')
    const game_response = await fetch(`/quiz_data/quiz_data_id/${game_id}`)
    const game_data = await game_response.json()
    const got_quiz_id = game_data.quiz_id

    //Now we need to retrieve the questions from the quiz object
    const quiz_response = await fetch(`/quiz/${got_quiz_id}`)
    const questions = await quiz_response.json()
    console.log(questions.questions)
    return(questions)
   } 

   getQuestions()

  return (
  <>
      <div className="question-container">
          <div className="card w-96 bg-neutral text-neutral-content justify-content: center align-items: center">
              <div className="card-body items-center text-center">
                  <h2 className="card-title">Question:</h2>
                  <p>This is the first question</p>
                  <div className="card-actions justify-end">
                  </div>
              </div>
          </div>
      </div>

    <div className="page-grid">
          <div className="answer1 card w-96 bg-neutral text-neutral-content justify-content: center align-items: center">
              <div className="card-body items-center text-center">
                  <h2 className="card-title">Answer1</h2>
                  <div className="card-actions justify-end">
                  </div>
              </div>
          </div>
          <div className="answer2 card w-96 bg-neutral text-neutral-content justify-content: center align-items: center">
              <div className="card-body items-center text-center">
                  <h2 className="card-title">Answer2</h2>
                  <div className="card-actions justify-end">
                  </div>
              </div>
          </div>
          <div className="answer3 card w-96 bg-neutral text-neutral-content justify-content: center align-items: center">
              <div className="card-body items-center text-center">
                  <h2 className="card-title">Answer3</h2>
                  <div className="card-actions justify-end">
                  </div>
              </div>
          </div>
          <div className="answer4 card w-96 bg-neutral text-neutral-content justify-content: center align-items: center">
              <div className="card-body items-center text-center">
                  <h2 className="card-title">Answer4</h2>
                  <div className="card-actions justify-end">
                  </div>
              </div>
          </div>
    </div>
    </>
  )

}
    

export default Game