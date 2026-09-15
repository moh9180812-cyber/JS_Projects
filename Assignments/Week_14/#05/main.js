let div = document.createElement("div");
document.body.append(div);
let num = 5;
div.innerHTML = num;
let handle = setInterval(function  () {
    div.innerHTML = --num;
    if (num === 0) {
      clearInterval(handle);
      window.open("https://elzero.org/","_blank","width=400px, height=500px")
    }
}, 1000);
 