document.addEventListener("DOMContentLoaded", function (){
    // Get all div elements inside the board
    const boardSquares = document.querySelectorAll("#board div");
    const statusDiv = document.getElementById("status");
    let isXTurn = true; //tracks turns (x goes 1st)
    let gameState = Array(9).fill(null); 

    // Define winning combinations (rows, columns, diagonals)
    const winningCombinations = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal from top-left
        [2, 4, 6]  // Diagonal from top-right
    ];

    // Function to check for a winner
    function checkWinner() {
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a]; // Return 'X' or 'O' if a winner is found
            }
        }
        return null; // No winner yet
    }

    // Loop through each div and add the class 'square'
    boardSquares.forEach(square => {
        square.classList.add("square");
    });
     // Loop through each square and add click, mouseover, and mouseout event listeners
     boardSquares.forEach((square, index) => {
        // Handle square clicks
        square.addEventListener("click", function () {
            if (!gameState[index]) {
                if (isXTurn) {
                    square.textContent = "X";
                    square.classList.add("X");
                    gameState[index] = "X";
                } else {
                    square.textContent = "O";
                    square.classList.add("O");
                    gameState[index] = "O";
                }
                // Check for a winner after each move
                const winner = checkWinner();
                if (winner) {
                    statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
                    statusDiv.classList.add("you-won");
                }
                isXTurn = !isXTurn;
            }
        });
        // Handle mouseover (hover) event
        square.addEventListener("mouseover", function () {
            if (!gameState[index]) {
                square.classList.add("hover"); // Apply hover effect only if the square is not clicked
            }
        });

        // Handle mouseout event
        square.addEventListener("mouseout", function () {
            square.classList.remove("hover"); // Remove hover effect when the mouse leaves
        });
    });
    
})
