import { Square } from './Square'
export default function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return null
  const winnerTest = winner === false ? 'Empate' : 'Ganador: ' + winner + '!'

  return (

        <section className='winner'>
            <div className='text'>
                <h2>{winnerTest}</h2>
                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer >
                    <button onClick={resetGame}>Emepezar de nuevo</button>
                </footer>
            </div>
        </section>

  )
}
