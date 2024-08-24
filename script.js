const gridContiner = document.querySelector(".grid-container")

function createGrid(dimension){
    const squares = document.querySelectorAll(".row");
    const squareSize = 420 / dimension;
    squares.forEach((div) => div.remove());
    for (i = 0; i < dimension; i++){
        const rowDiv = document.createElement("div")
        rowDiv.classList.add("row")
        gridContiner.appendChild(rowDiv)
        for (j = 0; j < dimension; j++){
            const colDiv = document.createElement("div")
            colDiv.addEventListener('mouseenter', (event) => {
                colDiv.style.backgroundColor = "black";
                colDiv.style.transition = "background-color"
            })
            colDiv.addEventListener('mouseleave', (event) =>{
                colDiv.style.backgroundColor = "white";
                colDiv.style.transition = "background-color 2s"
            })
            colDiv.classList.add("square")
            colDiv.style.width = `${squareSize}px`;
            colDiv.style.height = `${squareSize}px`;
            rowDiv.appendChild(colDiv)
        }
    }
}

const button = document.querySelector(".popup");
button.addEventListener("click", () => {
    let dimension = prompt("Grid size?");
    if (2 < dimension <= 100){
        createGrid(dimension);
    }
    else {
        console.log("must be in range 2-100")
    }
});

// Initial grid creation
createGrid(16); // You can set an initial grid size