import { useState } from 'react'

import { TURNS } from './constants'
import './App.scss'
import BoardActions from './components/BoardActions'
import ModalContainer from './components/ModalContainer'
import Board from './components/Board'

function App() {
  const [board, setBoard] = useState(Array(9).fill(''))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState<string | null>(null)
  const [draw, setDraw] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [xWinners, setXWinners] = useState<number>(0)
  const [oWinners, setOWinners] = useState<number>(0)

  const cleanBoard = () => {
    setBoard(Array(9).fill(''))
    setTurn(TURNS.X)
  }

  const restartGame = (): void => {
    setWinner(null)
    setDraw(false)
    setShowModal(false)
    cleanBoard()
  }

  return (
    <div className="App">
      <h1 className="title">
        TIC-TAC-TOE 🇺🇸 <br />
        TA-TE-TI 🇦🇷 <br />
        TRIQUI 🇨🇴 <br />
        TRES EN RAYA 🇪🇸 <br />
        GATO 🇲🇽 <br />
      </h1>

      <Board
        board={board}
        oWinners={oWinners}
        setBoard={setBoard}
        setDraw={setDraw}
        setOWinners={setOWinners}
        setShowModal={setShowModal}
        setTurn={setTurn}
        setWinner={setWinner}
        setXWinners={setXWinners}
        turn={turn}
        winner={winner}
        xWinners={xWinners}
      />

      <ModalContainer
        draw={draw}
        restartGame={restartGame}
        setShowModal={setShowModal}
        showModal={showModal}
        winner={winner}
      />

      <BoardActions
        draw={draw}
        oWinners={oWinners}
        restartGame={restartGame}
        winner={winner}
        xWinners={xWinners}
      />
    </div>
  )
}

export default App
