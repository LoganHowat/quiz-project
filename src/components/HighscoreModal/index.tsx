import React, { useState, useEffect } from 'react'

const HighscoreModal = () => {

    const [users, setUsers] = useState([])
    console.log(users)

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch("/quiz_data")
            const data = await response.json()
            let reversed = data.reverse()
            setUsers(reversed)
        }
        getUsers()
    }, [])


    interface User {
        id: number;
        user: string;
        score: number;
    }


    return (
<>
    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
    <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div className="card-body justify-items: center">
                <h3 className="text-xl justify-content: center font-bold">Leaderboard</h3>

                <div className='leaderboard-grid'>
                            <span className='position'>Position:</span>
                            <span className='username'>Username:</span>
                            <span className='score'>Score:</span>
                </div>

                    {users.map((user: User, index) => {
                        return (<>
                            <div className='leaderboard-grid' key={user.id}>
                                    <span className='position'>{index + 1}</span>
                                    <span className='username'>{user.user}</span>
                                    <span className='score'>{user.score}</span>
                            </div>
                        </>
                        )
                    })}
                </div>
            </div>
        </div>
</>
    )
}

export default HighscoreModal