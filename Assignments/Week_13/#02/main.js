// Access to div.assign .
let parent = document.querySelector(".assign");

// Access to div.current .
let curr = document.querySelector(".assign .element");

// Access to inputs 1 , 2 .
let inp1 = document.querySelector(".classes-to-add");
let inp2 = document.querySelector(".classes-to-remove");

// Access to div what show classes in it .
let showV = document.querySelector(".assign .classes-list div");

function addElement() {
    showV.innerHTML = "";
    Array.from(curr.classList).sort().forEach(function (el) {
       let newSpan = document.createElement("span");
       newSpan.innerText = el;
       showV.append(newSpan);
    });
}
inp1.addEventListener("blur", function () {
    let value1 = inp1.value.trim().toLowerCase();

    if(value1 === "") {
        return;
    }

    let classes = value1.split(/\s+/);

    curr.classList.add(...classes);

    addElement();

    inp1.value = "";    
})

inp2.addEventListener("blur", function () {
    let value2 = inp2.value.trim().toLowerCase();
    
    if (value2 === "") {
        return;
    }

    let classes = value2.split(/\s+/);

    curr.classList.remove(...classes);
    
    addElement();

    inp2.value = "";

    if (curr.classList.length === 0) {
        let noClasses = document.createElement("p");
    
        noClasses.innerText = "No Classes To Show";
    
        showV.append(noClasses);
    }
});

addElement();