const gridContiner = document.querySelector(".grid-container")

function createGrid(dimension){
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
            rowDiv.appendChild(colDiv)
        }
    }
}

const button = document.querySelector(".popup")
button.addEventListener("click", () => {
    let dimension = prompt("Grid size?");
    createGrid(dimension)
})

