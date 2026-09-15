let div = document.createElement("div");
document.body.append(div)
div.innerHTML = "2";
let handle = setInterval(function  () {
    div.innerHTML -= 1 ;
    if (div.innerHTML === "0") {
    clearInterval(handle);
 }
}, 1000);
 