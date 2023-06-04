const board = document.getElementById("board");
const play_btn = document.getElementById("play_button");
play_btn.addEventListener("click", () => makeGrid(25));

function makeGrid(pixels) {
    board.style.gridTemplateColumns = `repeat(${pixels}, 1fr)`
    board.style.gridTemplateRows = `repeat (${pixels}, 1fr)`

    let totalDivs = pixels * pixels;

    for (let i = 0; i < totalDivs; i++) {
        let div = document.createElement("div");
        board.appendChild(div);
        div.classList.add("grid")
    }
}