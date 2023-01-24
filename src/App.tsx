import { useState } from 'react'

import { TURNS, WINNING_MATCHES } from './constants'
import './App.scss'

interface ISquareHandlerProps {
  position: number
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(''))
  const [turn, setTurn] = useState(TURNS.X)

  const cleanBoard = () => {
    setBoard(Array(9).fill(''))
    setTurn(TURNS.X)
  }

  const checkWinner = (newBoard: any) => {
    for (const combo of WINNING_MATCHES) {
      const [a, b, c] = combo

      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a]
      }
    }

    return null
  }

  const squareClickHandler = ({ position }: ISquareHandlerProps): void => {
    if (board[position]) {
      return
    }

    const newBoard = [...board]

    newBoard[position] = turn

    setBoard(newBoard)
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X)

    const winner = checkWinner(newBoard)

    if (winner) {
      cleanBoard()
    }
  }

  return (
    <div className="App">
      <h1 className="title">
        TIC-TAC-TOE 🇺🇸 <br />
        TA-TE-TI 🇦🇷 <br />
        TRIQUI 🇨🇴 <br />
        TRES EN RAYA 🇪🇸 <br />
      </h1>

      <div className="board">
        {board.map((square, i) => {
          return (
            <div
              key={`square-${i}`}
              className="square"
              onClick={() => squareClickHandler({ position: i })}
            >
              {square}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
