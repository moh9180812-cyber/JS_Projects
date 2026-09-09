let body = document.querySelector("body");
console.log(body.children[0]);
let children = body.children;
let type;
for (let i = 0 ; i < children.length ; i++) {
    children[i].onclick = function () {
        type = this.tagName;
        console.log(type)
    }
}
