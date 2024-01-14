

const gridValue = document.querySelector("#size");
const input = document.createElement("input");
const button = document.querySelector("button");

input.setAttribute("type","number");
input.defaultValue = 6;
gridValue.appendChild(input)

let rows = Number(input.value);
let columns = rows;

const gridContainer = document.querySelector("#grid");

function updateGridSize() {
        // Get the current input value
        rows = Number(input.value);
        columns = rows;


        gridContainer.innerHTML = "";

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
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach( gridItem => {
    gridItem.addEventListener("mouseover", () =>{
        gridItem.setAttribute("style","background-color: black;")
    })
});
}
function clear(){
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach( gridItem =>{
        gridItem.setAttribute("style","background-color: white;")
    })
}
updateGridSize()
input.addEventListener("input", updateGridSize);
button.addEventListener("click", clear);






