let count = 0;

function addGrocery() {
    count++;
    let Grocerytemplate = `<li class="item list-group-item">Grocery item ${count}</li>`;
    let element = document.getElementById("list");
    element.innerHTML += Grocerytemplate;
}