let e1 = document.querySelector("div.one");
let e2 = document.querySelector("div.two");

let t1  = e1.innerHTML;
let t2  = e2.innerHTML;

let a1 = e1.getAttribute("title");
let a2 = e2.getAttribute("title");

e1.innerHTML = t2;
e2.innerHTML = `${t1} 2`;

e1.setAttribute("title", a2);
e2.setAttribute("title", a1);

