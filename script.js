window.addEventListener('load', function() { // When everything is loaded
    var board = new Board([]); // Create an empty board

    var cells = [];
    for (var i = 0; i < 5*5; i++) {
        var cell = new Cell();
        cell.letter = randomLetter();
        cells.push(cell);
    }; // Make an array of 5*5 = 25 new Cell objects

    board.cells = cells; // and load the cells into the board

    document.body.appendChild(board.html); // Then actually put the Board's HTML into the document
});

function randomLetter() {
  // the alphabet
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // get random number in range (based on http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range)
  n = Math.floor(Math.random() * 26);

  // get the nth letter from the letters string
  return letters[n];
}
