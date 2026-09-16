let form = document.querySelector("form");
let inpText = document.querySelector("input[type='text']");
let inpPass = document.querySelector("input[type='password']");
let inpEmail = document.querySelector("input[type='email']");
let selectBox = document.querySelector("select");

if (window.sessionStorage.inptext) {
    inpText.value = window.sessionStorage.inptext;
}
if (window.sessionStorage.inppass) {
    inpPass.value = window.sessionStorage.inppass;
}
if (window.sessionStorage.inpemail) {
    inpEmail.value = window.sessionStorage.inpemail;
}
if (window.sessionStorage.select) {
    selectBox.value = window.sessionStorage.select;
}

inpText.onblur = function () {
    window.sessionStorage.setItem("inptext", inpText.value);
}

inpPass.onblur = function () {
    window.sessionStorage.setItem("inppass", inpPass.value);
}

inpEmail.onblur = function () {
    window.sessionStorage.setItem("inpemail", inpEmail.value);
}

selectBox.onblur = function () {
    window.sessionStorage.setItem("select", selectBox.value);
}
