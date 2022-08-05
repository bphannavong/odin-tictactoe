// Gameboard object module
const gameBoard = (() => {

    let tiles = new Array(9).fill(' '); //create tiles with space strings
    const display = document.querySelector('.display');

    function clear() {
        display.innerHTML = ''; //clear board
    }

    function reset() {
        tiles = new Array(9).fill(' ');
        clear();
    }

    function renderBoard() {
        let counter = 0;
        clear();

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
            tiles[index] = 'x';
            console.log(tiles);
            renderBoard();
        }
    }

    return {renderBoard, reset, clear, addTile};
})();


// Factory Function for Players
const Player = (name) => {
    
    
    
    return {name};
};

// Module object to control game flow
const game = (() => {

    const display = document.querySelector('.display');
    const tiles = document.querySelectorAll('.tile');

    function newGame() {
        gameBoard.reset(); //start turn counter; p1/X on even, p2/O on odd
        gameBoard.renderBoard();
    }
    const btn = document.querySelector('button');
    // btn.addEventListener('click', displayController.renderBoard(gameBoard.tiles));
    btn.addEventListener('click', newGame); 
    
    // console.log(e.target);
    // if (e.target.classList == 'tile') {
    //     e.target.textContent = 'x'; 
    // }
    

})();



// btn.addEventListener('click', game); //left off here
