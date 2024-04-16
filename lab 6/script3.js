let addButton = document.querySelector("button");
let itemText = document.querySelector("#input-item");
let itemList = document.getElementById("list");
let accessCountDisplay = document.getElementById("access-count");

let accessCount = parseInt(localStorage.getItem("accessCount")) || 0;
accessCount++;
localStorage.setItem("accessCount", accessCount);
accessCountDisplay.textContent = `Access Count: ${accessCount}`;

document.addEventListener("DOMContentLoaded", () => {
    loadItems();
});

addButton.addEventListener("click", () =>{
    addItem()
})

const addItem = () => {
    var newItemText = itemText.value.trim();
    if (newItemText !== "") {
        var newItem = document.createElement("li");
        newItem.className = "item";
        newItem.innerHTML = `<span>${newItemText}</span>`;
        itemList.appendChild(newItem);
        saveItems();
        itemText.value = "";
    }
}

const saveItems = () => {
    localStorage.setItem("items", itemList.innerHTML);
}

const loadItems = () => {
    const savedItems = localStorage.getItem("items");
    if (savedItems) {
        itemList.innerHTML = savedItems;
    }
}