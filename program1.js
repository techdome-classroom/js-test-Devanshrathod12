const getTotalIsles = function (grid) {

    let isles = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                isles++;
                dfs(grid, i, j);
            }
        }
    }

    return isles;

};

module.exports = getTotalIsles;