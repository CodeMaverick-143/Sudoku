// A function to generate a valid Sudoku puzzle using a backtracking algorithm
function generateSudoku() {
    let board = Array.from({ length: 9 }, () => Array(9).fill(0));

    function isValid(board, row, col, num) {
        // Check if num is already in the row, column, or 3x3 sub-grid
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num || board[i][col] === num) return false;
        }

        let startRow = Math.floor(row / 3) * 3;
        let startCol = Math.floor(col / 3) * 3;

        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === num) return false;
            }
        }

        return true;
    }

    function solve(board) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === 0) {
                    for (let num = 1; num <= 9; num++) {
                        if (isValid(board, row, col, num)) {
                            board[row][col] = num;
                            if (solve(board)) return true;
                            board[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    solve(board);
    return board;
}

// A function to remove numbers to create an incomplete puzzle
function createPuzzle(board, difficulty = 40) {
    let puzzle = board.map(row => row.slice());
    let cellsToRemove = difficulty;

    while (cellsToRemove > 0) {
        let row = Math.floor(Math.random() * 9);
        let col = Math.floor(Math.random() * 9);

        if (puzzle[row][col] !== 0) {
            puzzle[row][col] = 0;
            cellsToRemove--;
        }
    }

    return puzzle;
}

// Function to render the Sudoku grid
function renderBoard(board) {
    const sudokuBoard = document.getElementById('sudoku-board');
    sudokuBoard.innerHTML = ''; // Clear existing board

    board.forEach((row, i) => {
        row.forEach((cell, j) => {
            const cellElement = document.createElement('input');
            cellElement.type = 'number';
            cellElement.min = 1;
            cellElement.max = 9;
            cellElement.classList.add('w-12', 'h-12', 'text-center', 'border', 'border-gray-500', 'rounded-md', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500', 'sudoku-input', 'transition-all');

            if (cell !== 0) {
                cellElement.value = cell;
                cellElement.disabled = true; // Disable filled cells
            } else {
                cellElement.classList.add('empty'); // Add class for empty cells
                cellElement.addEventListener('input', (e) => handleInput(i, j, e.target.value));
            }

            sudokuBoard.appendChild(cellElement);
        });
    });
}

// Handle user input (check if it's valid)
function handleInput(row, col, value) {
    const num = parseInt(value);
    if (isNaN(num) || num < 1 || num > 9) return;

    // Check if the number is valid for the Sudoku board
    if (!isValidMove(row, col, num)) {
        alert('Invalid move!');
    }
}

// Validate a move (check row, column, and subgrid)
function isValidMove(row, col, num) {
    const board = window.currentBoard;
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][col] === num) return false;
    }

    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;

    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (board[i][j] === num) return false;
        }
    }

    return true;
}

// Function to start a new game and generate a new puzzle
function newGame() {
    let board = generateSudoku();
    let puzzle = createPuzzle(board);

    window.currentBoard = board; // Store the original complete board
    renderBoard(puzzle); // Render the puzzle
    clearBanner(); // Clear any previous messages
}

// Function to clear the banner message
function clearBanner() {
    const banner = document.getElementById('banner');
    banner.classList.add('hidden');
}

// Function to check if the current board matches the solution
function checkSolution() {
    const sudokuBoard = document.getElementById('sudoku-board');
    const userSolution = [];

    let isCorrect = true;

    for (let i = 0; i < 9; i++) {
        userSolution[i] = [];
        for (let j = 0; j < 9; j++) {
            const cell = sudokuBoard.children[i * 9 + j];
            const value = parseInt(cell.value);

            if (isNaN(value) || value !== window.currentBoard[i][j]) {
                isCorrect = false;
            }

            userSolution[i][j] = value;
        }
    }

    showResult(isCorrect);
}

// Function to show the result (You Won! or Try Again)
function showResult(isCorrect) {
    const banner = document.getElementById('banner');
    if (isCorrect) {
        banner.textContent = "You Won!";
        banner.classList.add('text-green-500');
        banner.classList.remove('text-red-500');
    } else {
        banner.textContent = "Try Again";
        banner.classList.add('text-red-500');
        banner.classList.remove('text-green-500');
    }
    banner.classList.remove('hidden');
}

// Function to solve the puzzle (reveal the solution)
function solvePuzzle() {
    const sudokuBoard = document.getElementById('sudoku-board');
    const solution = window.currentBoard;

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = sudokuBoard.children[i * 9 + j];
            if (cell.value === '') {
                cell.value = solution[i][j]; // Fill empty cells with the solution
                cell.disabled = true; // Disable the solved cells
            }
        }
    }
}

// Initial render
newGame();

// Add event listeners to the buttons
document.getElementById('new-game-btn').addEventListener('click', newGame);
document.getElementById('submit-btn').addEventListener('click', checkSolution);
document.getElementById('solve-btn').addEventListener('click', solvePuzzle);
