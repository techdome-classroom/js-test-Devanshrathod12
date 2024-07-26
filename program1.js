const getTotalIsles = function (grid) {
  // Check if the grid is empty
  if (!grid || grid.length === 0) {
    return 0;
  }

  // Get the number of rows and columns in the grid
  const rows = grid.length;
  const cols = grid[0].length;

  // Initialize a visited matrix to keep track of visited cells
  const visited = new Array(rows).fill(0).map(() => new Array(cols).fill(false));

  let islandCount = 0;
  function dfs(row, col) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 'W' || visited[row][col]) {
      return;
    }

    visited[row][col] = true;
    dfs(row - 1, col); 
    dfs(row + 1, col); 
    dfs(row, col - 1); 
    dfs(row, col + 1); 
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 'L' && !visited[i][j]) {
        islandCount++;
        dfs(i, j);
      }
    }
  }

  return islandCount;
};

module.exports = getTotalIsles;