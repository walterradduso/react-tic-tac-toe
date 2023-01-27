import { WINNING_MATCHES } from '../constants'

export const checkWinner = (newBoard: any) => {
  for (const combo of WINNING_MATCHES) {
    const [a, b, c] = combo

    if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
      return newBoard[a]
    }
  }

  return null
}
