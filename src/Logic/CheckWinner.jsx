import { WINNER_COMBS } from '../constantsl'
import confetti from 'canvas-confetti'

export const checkWinner = (boarToCheck, turn, setWinner) => {
  const winner = WINNER_COMBS.find((comb) => {
    return comb.every((index) => {
      return boarToCheck[index] === turn
    })
  })
  if (winner) {
    confetti()
    return setWinner(turn)
  }
}
