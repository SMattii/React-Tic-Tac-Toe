function Gameover({ winner, onRestart }) {
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner === "draw" ? <p>It's a draw!</p> : <p>Player {winner} wins!</p>}
            <button onClick={onRestart}>Rematch!</button>
        </div>
    );
}

export default Gameover;