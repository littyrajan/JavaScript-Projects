// Tic Tac Toe Game Script

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

// Function to place a marker
function placeMarker(index) {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].innerHTML =
            `<img src="images/${currentPlayer}.png" alt="${currentPlayer}" width="80">`;

        // Play place sound
        new Audio("media/Place.mp3").play();

        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

// Function to check for a winner
function checkWinner() {
    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8], // rows
        [0,3,6], [1,4,7], [2,5,8], // columns
        [0,4,8], [2,4,6]           // diagonals
    ];

    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            new Audio("media/Win.mp3").play();
            alert(`${board[a]} Wins!`);
            return;
        }
    }

    // Check for tie
    if (!board.includes("")) {
        gameActive = false;
        new Audio("media/Tie.mp3").play();
        alert("It's a Tie!");
    }
}

// Restart game
function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    let cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        cell.innerHTML = "";
    }
}
