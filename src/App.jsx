import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import { useState } from 'react';
import { WINNING_COMBINATIONS } from './winning-combinations.js';

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
      ...prevTurns];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard ž
          onSelectSquare={handleSelectSquare}
          turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
