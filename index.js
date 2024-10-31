/* const principalContainer = document.getElementById("container"),
paragraph = document.createElement("p"),
h3 = document.createElement("h3"),
div = document.createElement("div"),
h1 = document.createElement("h1"),
p = document.createElement("p");

paragraph.classList.toggle("redText");
paragraph.innerText = "Hey, I'm red!";

h3.classList.toggle("blueText");
h3.innerText = "I'm a blue h3";

h1.innerText = "I'm in a div!"
p.innerText = "ME TOO"
div.classList.toggle("container");
div.appendChild(h1);
div.appendChild(p)

principalContainer.appendChild(paragraph);
principalContainer.appendChild(h3)
principalContainer.appendChild(div)

 */
const btn = document.querySelector("button")
btn.addEventListener("click", function (e) {
    console.log(e);
    console.log(`coordenada x: ${e.x}, coordenada y: ${e.y}`);
    console.log(e.target)
    e.target.style.background = "blue"
});