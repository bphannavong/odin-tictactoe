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
            newDiv.addEventListener('click', addTile);
            newDiv.appendChild(newContent);
            display.appendChild(newDiv);
        }        
    }
    
    function addTile(e, string) {
        const index = e.target.getAttribute('data-index');
        tiles[index] = string;

        renderBoard();
        

    }

    return {renderBoard, clear, addTile};
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
        
    }
    const btn = document.querySelector('button');
    // btn.addEventListener('click', displayController.renderBoard(gameBoard.tiles));
    btn.addEventListener('click', gameBoard.renderBoard()); 
    
    // console.log(e.target);
    // if (e.target.classList == 'tile') {
    //     e.target.textContent = 'x'; 
    // }
    

})();



// btn.addEventListener('click', game); //left off here
