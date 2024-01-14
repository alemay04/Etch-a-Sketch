const rows = 16;
const columns = 16;

const gridContainer = document.querySelector("#grid");

for (let i = 0;i<rows;i++){
    const gridRows = document.createElement("div")
    gridRows.className = "grid-row";
    for (let j = 0;j<columns;j++){
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        
        gridRows.appendChild(gridItem);
    }
    gridContainer.appendChild(gridRows);
}
