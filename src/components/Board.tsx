import { ReactElement } from 'react'

import { checkWinner } from '../utils/checkWinner'
import { TURNS } from '../constants'

interface IPosition {
  position: number
}

interface IBoardProps {
  board: string[]
  oWinners: number
  setBoard: (board: string[]) => void
  setDraw: (value: boolean) => void
  setOWinners: (value: number) => void
  setShowModal: (value: boolean) => void
  setTurn: (value: string) => void
  setWinner: (value: string) => void
  setXWinners: (value: number) => void
  turn: string
  winner: string | null
  xWinners: number
}

const Board = ({
  board,
  oWinners,
  setBoard,
  setDraw,
  setOWinners,
  setShowModal,
  setTurn,
  setWinner,
  setXWinners,
  turn,
  winner,
  xWinners,
}: IBoardProps): ReactElement => {
  const squareClickHandler = ({ position }: IPosition): void => {
    if (board[position]) {
      return
    }

    const newBoard = [...board]

    newBoard[position] = turn

    setBoard(newBoard)
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X)

    const winner = checkWinner(newBoard)

    if (winner) {
      setWinner(turn)
      setShowModal(true)

      if (turn === TURNS.X) {
        setXWinners(xWinners + 1)
      } else {
        setOWinners(oWinners + 1)
      }
    }

    const itsDraw = newBoard.every(board => board !== '')

    if (itsDraw) {
      setDraw(true)
      setShowModal(true)
    }
  }

  return (
    <div className="board">
      {board.map((square, i) => {
        return (
          <div
            key={`square-${i}`}
            className="square"
            onClick={() => {
              if (!winner) {
                squareClickHandler({ position: i })
              }
            }}
          >
            {square}
          </div>
        )
      })}
    </div>
  )
}

export default Board
