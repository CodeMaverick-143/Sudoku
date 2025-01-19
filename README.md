# Sudoku Game

Welcome to the **Sudoku Game**, a web-based Sudoku puzzle generator and solver. This project creates dynamic Sudoku puzzles, allows users to play by solving the puzzles, and provides features such as puzzle validation and automatic solving.

---

## Features

- **Dynamic Sudoku Puzzle Generation**: Generates a new Sudoku puzzle for every game using a backtracking algorithm.
- **Customizable Difficulty**: Option to control the difficulty level by adjusting the number of removed cells.
- **Interactive Gameplay**: Users can input their answers directly into the grid.
- **Puzzle Validation**: Check your solution against the correct answer.
- **Automatic Solver**: Reveals the complete solution to the puzzle.
- **Beautiful UI**: Stylish and responsive design using TailwindCSS for an enhanced user experience.

---

## How to Play

1. Open the game in your browser.
2. Click the **New Game** button to generate a new puzzle.
3. Fill in the empty cells by entering numbers (1-9).
4. When you're ready, click the **Submit** button to check your solution.
5. If you need help, click the **Solve** button to reveal the solution.

---

## Installation and Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, etc.).
- No additional software is required.

### Steps to Run
1. Download or clone this repository:
   ```bash
   git clone https://github.com/CodeMaverick-143/Sudoku.git
   ```
2. Navigate to the project directory:
   ```bash
   cd sudoku-game
   ```
3. Open the `index.html` file in your browser to play the game.

---

## Project Structure

```
|-- index.html        # Main HTML file
|-- script.js         # JavaScript logic for the game
|-- style.css         # Custom styles for the game (optional; styles also embedded in HTML)
|-- README.md         # Project documentation
```

---

## Technologies Used

- **HTML**: Structuring the webpage.
- **CSS (TailwindCSS)**: Styling and responsiveness.
- **JavaScript**: Game logic and interactivity.

---

## How It Works

1. **Puzzle Generation**: A backtracking algorithm generates a valid Sudoku grid.
2. **Puzzle Masking**: Numbers are removed from the grid to create a playable puzzle. The number of removed cells determines the difficulty.
3. **User Input Handling**: Players can input their numbers into the grid, with real-time validation.
4. **Solution Validation**: Compares the user’s inputs to the original solved grid.
5. **Solution Reveal**: The complete solution is displayed when the **Solve** button is clicked.

---

## Contributing

Contributions are welcome! If you find a bug or have an idea for an enhancement:

1. Fork the repository.
2. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push the branch:
   ```bash
   git commit -m "Add feature description"
   git push origin feature-name
   ```
4. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgements

- Sudoku puzzle generation algorithm inspired by common backtracking techniques.
- Design inspired by modern UI/UX principles and enhanced with TailwindCSS.

---

Enjoy playing Sudoku! If you have any feedback or suggestions, feel free to open an issue or contact the repository maintainer.

