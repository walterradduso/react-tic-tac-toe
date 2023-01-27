import { ReactElement } from 'react'
import { clsx } from 'clsx'

interface IBoardActionsProps {
  draw: boolean
  oWinners: number
  restartGame: () => void
  winner: string | null
  xWinners: number
}

const BoardActions = ({
  xWinners,
  winner,
  draw,
  oWinners,
  restartGame,
}: IBoardActionsProps): ReactElement => {
  const restartButtonClass = clsx('restart-button', {
    'restart-button-hide': !winner && !draw,
  })

  return (
    <div className="board-actions">
      <p>Juegos Ganados X: {xWinners}</p>
      <button className={restartButtonClass} onClick={restartGame}>
        Reiniciar
      </button>
      <p>Juegos Ganados O: {oWinners}</p>
    </div>
  )
}

export default BoardActions
