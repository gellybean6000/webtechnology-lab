let addButton = document.querySelector("button");
let itemText = document.querySelector("#input-item");

addButton.addEventListener("click", () =>{
    addItem()
})

const addItem = () => {
    var newItemText = itemText.value.trim(); // Moved inside the function
    if (newItemText !== "") {
        var newItem = document.createElement("li");
        newItem.className = "item";
        newItem.innerHTML = `<span>${newItemText}</span>`;
        document.getElementById("list").appendChild(newItem);
        itemText.value = ""; // Changed newItemText to itemText
    }
}
