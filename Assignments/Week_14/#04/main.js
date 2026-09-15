let div = document.createElement("div");
document.body.append(div);
let num = 4;
div.innerHTML = num;
let handle = setInterval(function  () {
    div.innerHTML = --num;
    if (num === 0) {
      clearInterval(handle);
      location.href = "https://elzero.org/";
    }
}, 1000);
 