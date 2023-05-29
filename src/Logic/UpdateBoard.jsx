import { TURNS } from '../constantsl'

export const updateBoard = (index, board, turn, setWinner, setTurn, setBoard, checkWinner, checkEndGame) => {
  if (board[index]) return
  const newBoard = [...board]
  newBoard[index] = turn
  const newTurn = turn === TURNS.O ? TURNS.X : TURNS.O
  setTurn(newTurn)
  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('turn', newTurn)
  setBoard(newBoard)
  const newWinner = checkWinner(newBoard, turn, setWinner)
  if (newWinner) {
    setWinner(newWinner)
  } else if (checkEndGame(newBoard)) { setWinner(false) }
}
