document.addEventListener("DOMContentLoaded", function (){
    // Get all div elements inside the board
    const boardSquares = document.querySelectorAll("#board div");
    let isXTurn = true; //tracks turns (x goes 1st)
    let gameState = Array(9).fill(null); 

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
