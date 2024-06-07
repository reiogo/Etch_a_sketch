// Create 16x16 grid.
for (let i=0; i<16; i++) {
    gridDiv = document.createElement("div");
    gridDiv.setAttribute("id", i);
    let container = 
        document.querySelector("#container");
    container.appendChild(gridDiv);
    
}

