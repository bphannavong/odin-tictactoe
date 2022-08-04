// Gameboard object module
const gameBoard = (() => {

    let tiles = ['x', 'o', 'x', 'x', 'x', 'o', 'x', 'x', 'o'];


    return {tiles};
})();

// Module object to control game flow
const displayController = (() => {

    function renderBoard(tilesArray) {
        const display = document.querySelector('.display');
        for (tile of tilesArray) {
            const newDiv = document.createElement('div');
            const newContent = document.createTextNode(tile);
            newDiv.classList.add('tile');
            newDiv.appendChild(newContent);
            display.appendChild(newDiv);
        }        
    }

    return {renderBoard};
})();

// Factory Function for Players
const Player = () => {

};

const btn = document.querySelector('button');
btn.addEventListener('click', displayController.renderBoard(gameBoard.tiles));