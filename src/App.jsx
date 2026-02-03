import { useState } from 'react';
import Player from './Components/Player.jsx';
import GameBoard from './Components/GameBoard.jsx';
import Log from './Components/Log.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';
import Gameover from './Components/Gameover.jsx';

const PLAYERS = {
  'X': 'Player 1',
  'O': 'Player 2'
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns) {
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    return "O";
  }
  return "X";
}

function deriveWinner(gameBoard, players) {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].rowIndex][combination[0].colIndex];
    const secondSquare = gameBoard[combination[1].rowIndex][combination[1].colIndex];
    const thirdSquare = gameBoard[combination[2].rowIndex][combination[2].colIndex];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = firstSquare;
    }
  }
  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(row => [...row])];

  gameTurns.forEach(turn => {
    const { square, player } = turn;
    const { rowIndex, colIndex } = square;
    gameBoard[rowIndex][colIndex] = player;
  });

  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevGameTurns => {
      const currentPlayer = deriveActivePlayer(prevGameTurns);

      const updatedGameTurns = [{
        square: { rowIndex, colIndex },
        player: currentPlayer
      },
      ...prevGameTurns];
      return updatedGameTurns;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player onChangeName={handlePlayerNameChange} initialName={PLAYERS['X']} symbol="X" isActive={currentPlayer === "X"} />
          <Player onChangeName={handlePlayerNameChange} initialName={PLAYERS['O']} symbol="O" isActive={currentPlayer === "O"} />
        </ol>
        {(winner || hasDraw) && <Gameover winner={winner ? players[winner] : "draw"} onRestart={handleRestart} />}
        <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main >)
}

export default App;
