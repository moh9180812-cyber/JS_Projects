let p = document.querySelector("p");
p.remove();
let centerDiv = document.querySelector(".our-element");
let beforeEl = document.createElement("div");
beforeEl.setAttribute("class", "start");
beforeEl.setAttribute("title", "start element");
beforeEl.setAttribute("data-value", "start");
beforeEl.innerText = "Start";
let afterEl = document.createElement("div");
afterEl.setAttribute("class", "end");
afterEl.setAttribute("title", "End Element");
afterEl.setAttribute("data-value", "End");
afterEl.innerText = "End";

centerDiv.before(beforeEl);
centerDiv.after(afterEl);