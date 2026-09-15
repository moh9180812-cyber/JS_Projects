document.body.style = "display: flex; justify-content: center; align-items: center; height: 100vh"
setTimeout(function () {
    let box = document.createElement("div");
    box.style = "display: flex; padding: 20px; flex-direction: column; justify-content: center; align-items: center; position: relative; width: 350px; height: 250px; background-color: #eee";
    let button = document.createElement("button");
    button.innerHTML = "X";
    button.style = "border-radius: 50%; cursor: pointer; padding: 12px 15px; background-color: red; position: absolute; top: -18px; right: -18px; color: white; font-weight: bold; font-size: 16px; border: none;"
    box.append(button);
    let h3 = document.createElement("h3");
    h3.innerHTML = "Welcome";
    h3.style = "font-size: 35px; font-weight: bold; margin-bottom: 20px;";
    box.append(h3);
    let p = document.createElement("p");
    p.style = "font-size: 18px; margin-top: 0px; color: #443f3f; letter-spacing: 4px;";
    p.innerHTML = "Welcome To Elzero Web School";
    box.append(p);
    document.body.append(box);

    button.onclick = function () {
        box.remove();
    }
},5000);