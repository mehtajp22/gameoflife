import { playGame } from './game-play.js';

export function setupGame (size, gameContainer, initState) {
    const grid = document.createElement('div');
    grid.classList.add('grid')
    let state = [];

    renderTiles();
    setupPlayBtn();
    initializeState();
    colorTiles(state);
    
    function initializeState() {
        for(let i = 0; i < size; i++) {
            const row = [];
            state.push(row);
            for(let j = 0; j < size; j++) {
                const cell = initState[i] ? initState[i][j] ?? 0 : 0;
                row.push(cell);
            }
        }
    }

    function renderTiles() {
        for(let i = 0; i < size; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for(let j = 0; j < size; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                row.appendChild(cell);
            }
            grid.appendChild(row);
        }
        gameContainer.appendChild(grid);
    }

    function setupPlayBtn() {
        const playBtn = document.createElement('button');
        playBtn.classList.add('play-btn');
        playBtn.innerText = "Start";
        gameContainer.appendChild(playBtn);

        playBtn.addEventListener('click', () => {
            setInterval(() => {
                state = playGame(state);
                colorTiles(state);
            }, 1000);
        });
    }

    function colorTiles(state) {
        grid.childNodes.forEach((row, i) => {
            row.childNodes.forEach((cell, j) => {
                cell.classList.remove('live');
                if(state[i][j]) {
                    cell.classList.add('live');
                }
            })
        })
    }
}