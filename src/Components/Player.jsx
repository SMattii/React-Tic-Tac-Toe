import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing((prev) => !prev);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }


    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {isEditing ? (
                    <input required type="text" placeholder="Player name"
                        value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
                ) : (
                    <span className="player-name" >{playerName}</span>
                )}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}
                className="player-button">{isEditing ? 'Save' : 'Edit'}</button>
        </li >
    );
}