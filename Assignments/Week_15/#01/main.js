let selectColors = document.querySelector(".colors");
let selectFamily = document.querySelector(".font-family");
let selectSize = document.querySelector(".font-size");
let h3 = document.querySelector("h3");

let selectFontSize = document.querySelector(".font-size");
for (let i = 16; i <= 30 ; i++) {
    let fontSize = document.createElement("option");
    fontSize.innerHTML = i + "px";
    selectFontSize.append(fontSize);
}

if (window.localStorage.family && window.localStorage.color && window.localStorage.size) {
    document.body.style.backgroundColor = window.localStorage.color;
    h3.style.color = window.localStorage.color;
    selectColors.value = window.localStorage.color;

    document.body.style.fontFamily = window.localStorage.family;
    selectFamily.value = window.localStorage.family;

    h3.style.fontSize = window.localStorage.size;
    selectSize.value = window.localStorage.size;
}


selectColors.onblur = function () {
    window.localStorage.setItem("color", selectColors.value);
    document.body.style.backgroundColor = window.localStorage.color;
    h3.style.color = window.localStorage.color;
}
selectFamily.onblur = function () {
    window.localStorage.setItem("family", selectFamily.value);
    document.body.style.fontFamily = window.localStorage.family;
}
selectSize.onblur = function () {
    window.localStorage.setItem("size", selectSize.value);
    document.body.style.fontSize = window.localStorage.size;
    h3.style.fontSize = window.localStorage.size;
}



