import { useState } from 'react'
import { Square } from './components/Square'
import { TURNS } from './constantsl'
import WinnerModal from './components/WinnerModal'
import { checkWinner } from './Logic/CheckWinner'
import { updateBoard } from './Logic/UpdateBoard'
import { resetGame } from './Logic/ResetGame'

/* eslint-disable react/prop-types */

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)
  const checkEndGame = (newBoard) => {
    return (newBoard.every(square => square !== null))
  }
  return (
    <main className='board'>
      <h1>Tres en Raya</h1>
      <button onClick={() => resetGame(setBoard, setTurn, setWinner)}>Reset del juego</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={
                  () => updateBoard(index, board, turn, setWinner, setTurn, setBoard, checkWinner, checkEndGame)
                }
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal winner={winner} resetGame={() => resetGame(setBoard, setTurn, setWinner)} />
    </main>
  )
}

export default App
