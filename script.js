const container = document.querySelector("#container");

let columns = 16;
let rows = 16;

container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let i = 0; i < columns * rows; i++){
        const div = document.createElement('div');
        container.appendChild('div');
    }