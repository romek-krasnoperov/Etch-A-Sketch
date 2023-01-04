// Add logic to add divs to the .grid

const container = document.querySelector(".grid");
const gridSize = document.querySelector(".size-change");
const resetBtn = document.querySelector(".reset");
const blackBtn = document.querySelector(".black");
const randomBtn = document.querySelector(".random");

sizingGrid(30);
creatingDivs(30);

function sizingGrid(grid) {
    container.style.setProperty("--grid-rows", grid);
    container.style.setProperty("--grid-cols", grid);
};

gridSize.addEventListener("click", function () {
    let size = prompt("What grid size you would like to have? (from 1 to 99)");
    if (size > 99) {
        delGrid();
        sizingGrid(25);
        creatingDivs(25);
        return alert("Please enter a number below 99")
    } else {
        delGrid();
        sizingGrid(size);
        creatingDivs(size);
    }
})

function creatingDivs(grid) {
    for (let i = 0; i < grid * grid; i++) {
        let divs = document.createElement("div");
        divs.classList.add("divs");
        container.appendChild(divs);
    }
}

function delGrid() {
    container.innerHTML = "";
}

resetBtn.addEventListener("click", function () {
    const allDivs = document.querySelectorAll(".divs");
    allDivs.forEach((allDivs) => {
        allDivs.style.backgroundColor = "#fefefe"
    })
})


// Set colors

blackBtn.addEventListener("click", () => {
    let color = "black";
    setColor(color);
})

randomBtn.addEventListener("click", () => {
    let color = "random";
    setColor(color);
})

function randomColor() {
    let a = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let c = Math.floor(Math.random() * 255)
    return ("rgb("+a+", "+b+", "+c+")");
}

function setColor(color) {
    const divs = document.querySelectorAll(".divs");
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", function (e) {
            if (color == "black") {
                e.target.style.backgroundColor = "#333";
            } else if (color == "random") {
                e.target.style.backgroundColor = randomColor();
            } else {
                e.target.style.backgroundColor = "#333";
            }
        })
    }
}