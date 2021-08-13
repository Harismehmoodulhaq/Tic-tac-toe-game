export default class GameView {
    constructor () {
        console.log("init game view");
    }
    updateBoard (game) {
        this.updateTurn(game);
        const winner = game.findWinningCombination();
        for (let i = 0; i < game.board.length; i++) {
            const tile = document.querySelector(`.board-tile[data-index="${i}"]`);
            // tile.textContent = game.board[i]

            let tileType = game.board[i] === 'X' ? "tile-x" : "tile-o"

            tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`

            if (winner && winner.includes(i)) {
                tile.classList.add("tile-winner");
            } else {
                tile.classList.remove("tile-winner");
            }

        }
        
    }

    updateTurn(game) {
        let playerx = document.querySelector(".player-x");
        let playero = document.querySelector(".player-o");
        if (game.turn === "X") {
            playerx.classList.add('active');
            playero.classList.remove('active');
        } else {
            playero.classList.add('active');
            playerx.classList.remove('active');
        }
    }

}