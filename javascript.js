// Create 16x16 grid.
for (let i=0; i<16; i++) {
    gridDiv = document.createElement("div");
    gridDiv.setAttribute("id", i);
    let container = 
        document.querySelector("#container");
    gridDiv.style = "width: 25vw; height: 300px; background-color: red";
    gridDiv.textContent = `hello I'm ${i}`;
    container.appendChild(gridDiv);
    
}

