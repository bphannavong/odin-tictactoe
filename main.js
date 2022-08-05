// Gameboard object module
const gameBoard = (() => {

    let tiles = new Array(9).fill(' '); //create tiles with space strings
    const display = document.querySelector('.display');

    function _clear() {
        display.innerHTML = ''; //clear board
    }

    function _render() { //_render tttboard
        let counter = 0;
        _clear();

        for (let tile of tiles) { //create a text node for each array item for display
            const newDiv = document.createElement('div');
            const newContent = document.createTextNode(tile);

            newDiv.classList.add('tile');
            newDiv.setAttribute('data-index', counter++);
            newDiv.addEventListener('click', addTile);
            newDiv.appendChild(newContent);
            display.appendChild(newDiv);
        }        
    }

    function _checkWin() {
        if (_checkColumns() || _checkRows() || _checkDiagonal()){
            if (game.counter % 2 === 0) {
                console.log(`Player 1 Wins`);
            } else {
                console.log(`Player 2 Wins`);
            }
        }
    }

    function _checkRows() {
        for (let i = 0; i < 7; i += 3) {
            if (_isEquals(i, i+1, i+2)) { //check if row is same and not empty
                return tiles[i];
            } 
        }
    }

    function _checkColumns() {
        for (let i = 0; i < 3; i++) {
            if (_isEquals(i, i+3, i+6)) { //check if column is same and not empty
                return tiles[i];
            } 
        }
    }

    function _checkDiagonal() {
        if (_isEquals(0, 4, 8) || _isEquals(2, 4, 6)) {
            return tiles[4];
        } 
    }

    function _isEquals(a, b, c) {
        return (tiles[a] === tiles[b] && tiles[a] === tiles[c] && tiles[a] !== ' ');
    }

    function reset() { //reset array and render
        tiles = new Array(9).fill(' ');
        game.counter = 0;
        _render();
    }

    function addTile(e) {
        const index = e.target.getAttribute('data-index');
        if (tiles[index] === ' ') { // if tile not marked already
            if (game.counter % 2 === 0) {
                tiles[index] = 'x';
            } else {
                tiles[index] = 'o';
            }
            _render();
            _checkWin();
            if (game.counter++ === 9) {
                console.log('tie!');
            }
        }
        console.log(game.counter);
         //check for win every time row is added
    }

    return {reset, addTile};
})();


// Factory Function for Players
const Player = (name, mark) => {
    return {name, mark};
};

// Module object to control game flow
const game = (() => {

    const display = document.querySelector('.display');
    const tiles = document.querySelectorAll('.tile');
    let counter = 0;
    let player1;
    let player2;

    function newGame() {
        gameBoard.reset(); 
        //start turn counter; p1/X on even, p2/O on odd
        // player1 = Player(prompt('name?',''), 'x');
        // player2 = Player(prompt('name?',''), 'o');
        // playingGame();
    }
    
    const btn = document.querySelector('button');
    // btn.addEventListener('click', displayController._renderBoard(gameBoard.tiles));
    btn.addEventListener('click', newGame); 
    
    return {counter, player1, player2}
})();

