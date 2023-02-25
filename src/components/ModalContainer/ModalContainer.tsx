import { ReactElement } from 'react'
import { clsx } from 'clsx'

import './styles.scss'

interface IModalContainerProps {
  draw: boolean
  restartGame: () => void
  setShowModal: (value: boolean) => void
  showModal: boolean
  winner: string | null
}

const ModalContainer = ({
  draw,
  restartGame,
  setShowModal,
  showModal,
  winner,
}: IModalContainerProps): ReactElement => {
  const modalContainerClass = clsx('modal-container', {
    'modal-container-hide': !showModal,
  })

  return (
    <div className={modalContainerClass}>
      <div className="modal-bg" onClick={() => setShowModal(false)} />
      <div className="modal-winner">
        {winner && <p className="winner-message">Ganador: {winner}</p>}
        {draw && <p className="winner-message">Es un empate!</p>}

        <button className="restart-button" onClick={restartGame}>
          Reiniciar
        </button>

        <button className="close-button" onClick={() => setShowModal(false)}>
          X
        </button>
      </div>
    </div>
  )
}

export default ModalContainer
