const container = document.querySelector("#container");
const button = document.querySelector('#button');

let size = 16;

function createGrid(side){
    container.style.gridTemplateColumns = `repeat(${side}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${side}, 1fr)`;
}

function createGridSquares(side){
    for (let i = 0; i < side * side; i++){
        const div = document.createElement('div');
        div.classList.add('grid');
        div.addEventListener('mouseenter', () => {
            div.classList.add('hover');
        })
        container.appendChild(div);
    }
}

button.addEventListener('click', () => {

    const divs = document.querySelectorAll('.grid');
    let gridSize;
    
    do {
        gridSize = prompt("Enter the size of the grid:");
    } while(gridSize <= 0 || gridSize > 75);

    if (gridSize != null && gridSize <= 75){
        for (let i = 0; i < divs.length; i++){
            divs[i].remove();
        }
        createGrid(gridSize);
        createGridSquares(gridSize);
    }

});

createGrid(size);
createGridSquares(size);