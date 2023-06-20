import { setupGame } from './game-setup.js';

const liveCells = {
    0: {3: 1, 4: 1},
    1: {3: 1},
    2: {2: 1,3: 1,4: 1},
    3: {3: 1,4: 1}
}

setupGame(
    5,
    document.getElementById('game-container'),
    liveCells
);