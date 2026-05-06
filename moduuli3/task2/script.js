const target = document.querySelector("#target");

const item1 = document.createElement("li");
item1.innerHTML = "First item";

const item2 = document.createElement("li");
item2.innerHTML = "Second item";

const item3 = document.createElement("li");
item3.innerHTML = "Third item";

target.appendChild(item1);
target.appendChild(item2);
target.appendChild(item3);
