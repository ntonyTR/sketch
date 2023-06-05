const playBtn = document.getElementById("play_button");
const colorInput = document.getElementById("color_picker")
let color = "black";
const btn4 = document.getElementById("button_4");
const btn8 = document.getElementById("button_8");
const btn16 = document.getElementById("button_16");
const btn32 = document.getElementById("button_32");
const btn64 = document.getElementById("button_64");
const customSize = document.getElementById("custom_size")
let size = ""
customSize.addEventListener("input", () => {
    setCustomGrid(customSize.value)
})

function setCustomGrid(input){
    const warning = document.getElementById("warning_message")
    size = input;
    if (isNaN(size)) {
        warning.style.color = "red"
        return
    }
    warning.style.color = "black"
    makeGrid(input)
}

btn4.addEventListener("click", () => makeGrid(4));
btn8.addEventListener("click", () => makeGrid(8));
btn16.addEventListener("click", () => makeGrid(16));
btn32.addEventListener("click", () => makeGrid(32));
btn64.addEventListener("click", () => makeGrid(64));


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