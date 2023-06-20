export function playGame(size, initState, passCount) {
    let counter = 0;

    const grid = [];

    for(let i = 0; i < size; i++) {
        const row = [];
        grid.push(row);
        for(let j = 0; j < size; j++) {
            const cell = initState[i] ? initState[i][j] ?? 0 : 0;
            row.push(cell);
        }
    }
    // console.log('==== ', JSON.stringify(grid));

    while(counter < passCount) {
        applyGameRules();
        counter++;
    }
    return grid;


    function applyGameRules() {
        for(let i = 0; i < grid.length; i++) {
            const row = grid[i];
            for(let j = 0; j < row.length; j++) {
                const cell = grid[i][j];
                const neighbours = [
                    grid[i-1] ? grid[i-1][j-1] ?? 0 : 0,
                    grid[i-1] ? grid[i-1][j] ?? 0 : 0,
                    grid[i-1] ? grid[i-1][j+1] ?? 0 : 0,
                    grid[i] ? grid[i][j-1] ?? 0 : 0,
                    grid[i] ? grid[i][j+1] ?? 0 : 0,
                    grid[i+1] ? grid[i+1][j-1] ?? 0 : 0,
                    grid[i+1] ? grid[i+1][j] ?? 0 : 0,
                    grid[i+1] ? grid[i+1][j+1] ?? 0 : 0
                ];

                const liveNeighbourCount = neighbours.reduce((count, elem) => count + elem, 0);
                console.log('Cell: ', i, ' ', j, "Neighbours: ", neighbours, "live count: ", liveNeighbourCount);

                if(cell === 1) { // living cell
                    if(liveNeighbourCount < 2 || liveNeighbourCount > 3) grid[i][j] = 0;
                } else { // Dead cell
                    if(liveNeighbourCount === 3) grid[i][j] = 1;
                }
            }
        }
    }
}