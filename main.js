// Gameboard object module
const gameBoard = (() => {

    let tiles = new Array(9).fill(' '); //create tiles with space strings
    const display = document.querySelector('.display');

    function _clear() {
        display.innerHTML = ''; //clear board
    }

    function reset() { //reset array and clear board
        tiles = new Array(9).fill(' ');
        _clear();
    }

    function render() { //render tttboard
        let counter = 0;
        _clear();

        for (tile of tiles) {
            const newDiv = document.createElement('div');
            const newContent = document.createTextNode(tile);

            newDiv.classList.add('tile');
            newDiv.setAttribute('data-index', counter++);
            newDiv.addEventListener('click', addTile);
            newDiv.appendChild(newContent);
            display.appendChild(newDiv);
        }        
    }
    
    function addTile(e) {
        const index = e.target.getAttribute('data-index');
        if (tiles[index] === ' ') { // if tile not marked already
            if (game.counter % 2 === 0) {
                tiles[index] = 'x';
            } else {
                tiles[index] = 'o';
            }
            game.counter++;
            render();
        }
    }

    return {render, reset, addTile};
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
        let counter = 0;
        gameBoard.reset(); //start turn counter; p1/X on even, p2/O on odd
        gameBoard.render();

        // player1 = Player(prompt('name?',''), 'x');
        // player2 = Player(prompt('name?',''), 'o');
        
        counter = 0;
        // playingGame();
    }

    function playingGame() {
        while (counter < 9) {
            
        }
    }

    
    const btn = document.querySelector('button');
    // btn.addEventListener('click', displayController.renderBoard(gameBoard.tiles));
    btn.addEventListener('click', newGame); 
    
    // console.log(e.target);
    // if (e.target.classList == 'tile') {
    //     e.target.textContent = 'x'; 
    // }
    
    return {counter, player1, player2}
})();



// btn.addEventListener('click', game); //left off here
