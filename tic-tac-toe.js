document.addEventListener("DOMContentLoaded", function (){
    // Get all div elements inside the board
    const boardSquares = document.querySelectorAll("#board div");
    let isXTurn = true; //tracks turns (x goes 1st)
    let gameState = Array(9).fill(null); 

    // Loop through each div and add the class 'square'
    boardSquares.forEach(square => {
        square.classList.add("square");
    });
  // Loop through each square and add click event listener
    boardSquares.forEach ((square,index) => 
    {
        square.addEventListener("click",function ()
    {
        if (!gameState[index]) {
            if (isXTurn) {
                square.textContent = "X"; // Set X
                square.classList.add("X"); // Add X class for styling
                gameState[index] = "X"; // Update the game state
            } else {
                square.textContent = "O"; // Set O
                square.classList.add("O"); // Add O class for styling
                gameState[index] = "O"; // Update the game state
            }
            
            // Alternate the turn
            isXTurn = !isXTurn;
    }
    })
    })
})