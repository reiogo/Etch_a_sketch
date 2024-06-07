// Create 16x16 grid.
for (let i=0; i<16; i++) {
    gridDiv = document.createElement("div");
    gridDiv.setAttribute("id", i);
    let container = 
        document.querySelector("#container");
    gridDiv.style = 
        "width: 25%; aspect-ratio: 1; background-color: red";
    gridDiv.textContent = `hello I'm ${i}`;
    container.appendChild(gridDiv);
    
}

// Change color of divs on hover.
let container = 
    document.querySelector("#container");
container.addEventListener("mouseover", (event)=> {
        let target = event.target;
        console.log(target);
        // Uses randomnum generator
        // to make random hex.
        let randomColor =
            '#'+Math.floor(Math.random()*
                16777215).toString(16);

        target.style.backgroundColor = randomColor;
    })



