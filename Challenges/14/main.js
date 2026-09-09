/* Challenge 12 In Js Course */

// Start Header .
document.body.style.cssText = "margin: 0";
let header = document.createElement("header");
header.style.cssText = "display: flex; justify-content: space-between; padding: 10px "
document.body.append(header);
let logo = document.createElement("div");
logo.className = "logo";
logo.innerHTML = "Boulder";
logo.style.cssText = "color: green; font-weight: bold; font-size: 24px; text-align: center; display: flex; align-items: center";
header.append(logo);
let  social = document.createElement("ul");
social.className = "social-links";
social.style.cssText = "list-style: none; padding: 0; margin: 0; display: flex";
header.append(social);
let li1 = document.createElement("li");
li1.style.cssText = "color: #777; padding: 10px";
li1.innerHTML = "Home";
social.append(li1);
let li2 = document.createElement("li");
li2.style.cssText = "color: #777; padding: 10px";
li2.innerHTML = "About";
social.append(li2);
let li3 = document.createElement("li");
li3.style.cssText = "color: #777; padding: 10px";
li3.innerHTML = "Service";
social.append(li3);
let li4 = document.createElement("li");
li4.style.cssText = "color: #777; padding: 10px";
li4.innerHTML = "Contact";
social.append(li4);
// End Header .
// Start Content . 
    let content = document.createElement("div");
    content.className = "content";
    content.style.cssText =  "padding: 20px; background-color: #ccc; display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px";
    document.body.append(content);
for (let i = 1; i < 19 ; i++) {
    let product = document.createElement("div");
    product.style.cssText =  "display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px; background-color: white";
    product.className = "product";
    let sP = document.createElement("span");
    sP.className = "Sp";
    sP.innerHTML = "Product";
    sP.style.cssText = "color: #777; font-size: 14px";
    product.append(sP);
    content.append(product);
    let sNum = document.createElement("span");
    sNum.innerHTML = i;
    sNum.style.cssText = "font-size: 25px; font-weight: bold; margin-bottom: 5px";
    product.prepend(sNum);
}
// End Content .
// Start Footer .
let footer = document.createElement("footer");
footer.style.cssText = "background-color: green; text-align: center; color: white; padding: 15px";
footer.innerHTML = "Copyright 2021";
document.body.append(footer);
// End Footer .