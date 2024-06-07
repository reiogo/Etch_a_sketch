// Create 16x16 grid.
createGrid(4);

// Function for creating grids.
function createGrid (rowNumber) {
for (let i=0; i<(rowNumber * rowNumber); i++) {
    gridDiv = document.createElement("div");
    gridDiv.setAttribute("id", "gridDiv");
    let container = 
        document.querySelector("#container");
    gridPercentage = 100/rowNumber;
    gridDiv.style = 
        `width: ${gridPercentage}%; aspect-ratio: 1`;
    container.appendChild(gridDiv);
    
}
}

// Change color of divs on hover.
const container = 
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


// Button for changing grid size
const btn = document.createElement("button");
    btn.style.fontSize ="18px";
btn.textContent =
    "Choose a grid size less then 100";
document.body.insertBefore(btn, container);

btn.addEventListener("click", ()=>{
    userAnswer = prompt(
        "Enter a grid size less than 100");
    container.replaceChildren();

    while (userAnswer >= 100) {
        userAnswer = prompt(
            "That wasn't valid, try again: Enter a value less then 100" )
    }
    if (userAnswer < 100) {
    createGrid(userAnswer);
    }

    
    
});


