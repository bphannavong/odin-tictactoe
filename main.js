// Gameboard object module
const gameBoard = (() => {

    const tiles = ['x', 'o', 'x'];

})();

// Module object to control game flow
const displayController = (() => {

})();

// Factory Function for Players
const Player = () => {

};

const tiles = ['x', 'o', 'x', 'x', 'x', 'o', 'x', 'x', 'o', 'x'];
const tile = document.querySelectorAll('.tile');

const btn = document.querySelector('button');
btn.addEventListener('click', (tile) => {
    for (let i = 0; i < tile.length; i++){
        const newContent = document.createTextNode(tiles[i]);
        tile.appendChild(newContent);
    }
});