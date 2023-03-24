import React, {useState} from 'react'
import TopicDropdown from '../TopicDropdown'
import QuestionDropdown from '../QuestionDropdown'
import DifficultyDropdown from '../DifficultyDropdown'

const CreateModal = () => {

  const [topicSelect, setTopicSelect] = useState("Arts & Literature")
  const [difficultySelect, setDifficultySelect] = useState("easy")
  const [questionSelect, setQuestionSelect] = useState(1)
  
  console.log(topicSelect)
  console.log(difficultySelect)
  console.log(questionSelect)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const dataToSend = {
      categories: topicSelect,
      difficulty: difficultySelect,
      limit: questionSelect
    }

    try {
      // Fetches the unique question object with your chosen options
      const questions_response = await fetch(`/questions`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          dataToSend
        )
      });
      const data = await questions_response.json()

      //-------------------------------------------------------------//

      const user_id = sessionStorage.getItem('user_id')
      const quiz_id = data.id
      
      //Below fetches endpoint to create a quizData object that tracks the score the player gets on the quiz, it does this by linking both the user_id and quiz_id
      // Quiz_Data can be lookd at to keep a track of all previous games and the scores the player gets in the games
      const quiz_data_response = await fetch(`/quiz_data/${user_id}/${quiz_id}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const quiz_data = await quiz_data_response.json()
      sessionStorage.setItem('game_id', quiz_data.id)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      <div className="card-body">
      <h3 className="text-lg font-bold">Create Game</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Topic:</span>
            <TopicDropdown selected={topicSelect} setSelected={setTopicSelect} />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Difficulty:</span>
            <DifficultyDropdown selected={difficultySelect} setSelected={setDifficultySelect}/>
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Limit:</span>
            <QuestionDropdown selected={questionSelect} setSelected={setQuestionSelect}/>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary" type='submit'>Start Game</button>
        </div>
        </form>
      </div>
      </div>
    </div>
  </>
  )
}

export default CreateModal