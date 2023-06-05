const board = document.getElementById("board");
const colorInput = document.getElementById("color_picker")
let color = "black";
const customSize = document.getElementById("input_size");
const eraserBtn = document.getElementById("eraser_button");
const clearBtn = document.getElementById("clear_button");
const rainbowBtn = document.getElementById("rainbow_button")
const gridSizes = [4, 8, 16, 32, 64]

rainbowBtn.addEventListener("click", () => {color = "rainbow"});
eraserBtn.addEventListener("click", () => {color = "white"})
colorInput.addEventListener("input", () => {color = colorInput.value})
customSize.addEventListener("input", () => {setCustomGrid(customSize.value)})
clearBtn.addEventListener("click", () => {resetBoard()});
gridSizes.forEach(size => {
    const button = document.getElementById(`button_${size}`);
    button.addEventListener("click", () => makeGrid(size));
});

function setCustomGrid(input){
    const warning = document.getElementById("warning_message")
    if (isNaN(input) || input < 2 ||input > 100) {
        warning.classList.remove("hidden")
        return
    }
    warning.classList.add("hidden")
    makeGrid(input)
}

function makeGrid(pixels) {
    resetBoard();
    board.style.gridTemplateColumns = `repeat(${pixels}, 1fr)`
    board.style.gridTemplateRows = `repeat (${pixels}, 1fr)`

    let totalDivs = (pixels * pixels);

    for (let i = 0; i < totalDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", () => draw(div, color))
        board.appendChild(div);
        div.classList.add("grid")
    }
}

function draw(div, color){
    if (color == "rainbow") {
        div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        div.style.border = "none"
        return
    }
    else if (color == "white") {
        div.style.backgroundColor = "white"
        div.style.border = "1px solid rgba(200, 200, 200, 0.25)"
        return
    }
    div.style.backgroundColor = color
    div.style.border = "none"
}


function resetBoard() {
    divs = board.querySelectorAll("div")
    divs.forEach(div => {
        div.remove();
    });
}