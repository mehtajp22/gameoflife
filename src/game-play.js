export function playGame(state) {
    const grid = state.map((row) => {
        return row.slice();
    });
    for(let i = 0; i < state.length; i++) {
        const row = state[i];
        for(let j = 0; j < row.length; j++) {
            const cell = state[i][j];
            const neighbours = [
                state[i-1] ? state[i-1][j-1] ?? 0 : 0,
                state[i-1] ? state[i-1][j] ?? 0 : 0,
                state[i-1] ? state[i-1][j+1] ?? 0 : 0,
                state[i] ? state[i][j-1] ?? 0 : 0,
                state[i] ? state[i][j+1] ?? 0 : 0,
                state[i+1] ? state[i+1][j-1] ?? 0 : 0,
                state[i+1] ? state[i+1][j] ?? 0 : 0,
                state[i+1] ? state[i+1][j+1] ?? 0 : 0
            ];

            const liveNeighbourCount = neighbours.reduce((count, elem) => count + elem, 0);
            console.log('Cell: ', i, ' ', j, "Neighbours: ", neighbours, "live count: ", liveNeighbourCount);

            if(cell === 1) { // living cell
                if(liveNeighbourCount < 2 || liveNeighbourCount > 3) grid[i][j] = 0;
                else grid[i][j] = 1;
            } else { // Dead cell
                if(liveNeighbourCount === 3) grid[i][j] = 1;
                else grid[i][j] = 0;
            }
        }
    }
    return grid;
}