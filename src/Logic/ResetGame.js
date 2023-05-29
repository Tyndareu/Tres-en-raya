import { TURNS } from '../constantsl'

export const resetGame = (setBoard, setTurn, setWinner) => {
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}
