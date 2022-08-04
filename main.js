// Gameboard object module
const gameBoard = (() => {

    let tiles = new Array(9).fill(' '); //create tiles with space strings
    const display = document.querySelector('.display');

    function clear() {
        display.innerHTML = ''; //clear board
    }

    function renderBoard() {
        let counter = 0;
        clear();

        for (tile of tiles) {
            const newDiv = document.createElement('div');
            const newContent = document.createTextNode(tile);

            newDiv.classList.add('tile');
            newDiv.setAttribute('data-index', counter++);
            newDiv.appendChild(newContent);
            display.appendChild(newDiv);
        }        
    }
    
    function addTile() {

    }


    return {renderBoard, clear};
})();

// Module object to control game flow
const game = ((e) => {

    const display = document.querySelector('.display');
    const tiles = document.querySelectorAll('.tile');

    console.log(e.target);
    // if (e.target.classList == 'tile') {
    //     e.target.textContent = 'x';
        
    // }
    

})();

// Factory Function for Players
const Player = (name) => {
    return {name};
};

const btn = document.querySelector('button');
// btn.addEventListener('click', displayController.renderBoard(gameBoard.tiles));
btn.addEventListener('click', gameBoard.clear);
btn.addEventListener('click', game(e)); //left off here
gameBoard.renderBoard();