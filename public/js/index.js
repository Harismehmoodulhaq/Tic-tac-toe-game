import Game from "./Game.js";
import GameView from "./GameView.js"
let game = new Game();
let gameView = new GameView();
document.querySelector(".restart").addEventListener("click", () => {
    onRestartGame()
})
let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
        onTileClicked(tile.dataset.index)
    })
})

function onTileClicked(i) {
    game.makeMove(i);
    gameView.updateBoard(game);
    // game.nextTurn()
}

function onRestartGame() {
    game = new Game();
    gameView.updateBoard(game);
}
gameView.updateBoard(game);