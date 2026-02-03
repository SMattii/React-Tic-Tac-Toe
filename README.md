# React Tic-Tac-Toe

Interactive Tic-Tac-Toe game built with React.
Includes editable player names, turn tracking, win and draw detection, and game restart logic.

## Features

* 🎮 3x3 interactive game board
* 👥 Editable player names
* 📝 Turn-by-turn move log
* 🏆 Automatic win detection
* 🤝 Draw detection
* 🔄 Game restart
* ✨ Active player highlighting

## Tech Stack

* React
* Vite
* JavaScript (JSX)

## Installation

```bash
git clone https://github.com/SMattii/React-Tic-Tac-Toe.git
cd React-Tic-Tac-Toe
npm install
```

## Usage

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## How to Play

* Click an empty square to make a move
* Edit player names using the Edit button
* View move history in the log
* Restart the game when it ends

## Project Structure

```txt
src/
├── Components/
│   ├── GameBoard.jsx
│   ├── Gameover.jsx
│   ├── Log.jsx
│   └── Player.jsx
├── App.jsx
├── winning-combinations.js
└── index.jsx
```

## Credits

Based on React - The Complete Guide (incl Hooks, React Router, Redux)
by Maximilian Schwarzmüller – Udemy
