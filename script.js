let color = "black";
const board = document.getElementById("board");

function init(){
    const colorInput = document.getElementById("input_color")
    const sizeInput = document.getElementById("input_size");
    const eraserBtn = document.getElementById("eraser_button");
    const clearBtn = document.getElementById("clear_button");
    const rainbowBtn = document.getElementById("rainbow_button")

    colorInput.addEventListener("input", () => {color = colorInput.value})
    sizeInput.addEventListener("input", () => {validateSizeInput(sizeInput.value)})
    eraserBtn.addEventListener("click", () => {color = "white"})
    clearBtn.addEventListener("click", () => {resetBoard()});
    rainbowBtn.addEventListener("click", () => {color = "rainbow"});
    
    initGridBtns();
}

function initGridBtns() {
    const gridSizes = [4, 8, 16, 32, 64]
    gridSizes.forEach(size => {
        const button = document.getElementById(`button_${size}`);
        button.addEventListener("click", () => makeGrid(size));
    });
}

function validateSizeInput(input){
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
    let divs = board.querySelectorAll("div")
    divs.forEach(div => {
        div.remove();
    });
}

init();