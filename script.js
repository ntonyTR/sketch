const playBtn = document.getElementById("play_button");
const colorInput = document.getElementById("color_picker")
let color = "black";

playBtn.addEventListener("click", () => makeGrid(30)); //TODO: que el usuario ingrese la cantidad de columnas y filas, para pasarlas a la funcion makeGrid
colorInput.addEventListener("input", () => {setColor(colorInput.value)})

function makeGrid(pixels) {
    const board = document.getElementById("board");
    board.style.gridTemplateColumns = `repeat(${pixels}, 1fr)`
    board.style.gridTemplateRows = `repeat (${pixels}, 1fr)`

    let totalDivs = (pixels * pixels);

    for (let i = 0; i < totalDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", () => draw(div))
        board.appendChild(div);
    }
}

function draw(div){
    div.style.backgroundColor = color
}

function setColor(colorSelection){
    color = colorSelection;
}