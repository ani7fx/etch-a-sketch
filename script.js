const gridContiner = document.querySelector(".grid-container")

for (i = 0; i < 16; i++){
    const rowDiv = document.createElement("div")
    rowDiv.classList.add("row")
    gridContiner.appendChild(rowDiv)
    for (j = 0; j < 16; j++){
        const Coldiv = document.createElement("div")
        Coldiv.classList.add("square")
        Coldiv.style.width = 960/16;
        Coldiv.style.height = 960/16;
        rowDiv.appendChild(Coldiv)
    }
}
