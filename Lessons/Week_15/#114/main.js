// style of body .
document.body.style = "display: flex; justify-content: center; flex-direction: column";

// create form container and style it .
let form = document.createElement("div");
form.className = "form";
form.style = "background-color: #ddd; margin-top: 20px; padding: 20px; border-radius: 10px; display: flex; justify-content: space-between; gap: 20px";

// create input and style it .
let taskInp = document.createElement("input");
taskInp.type = "text";
taskInp.style = "width: 300px; padding: 10px; border-radius: 10px; border:none";

// create add btn and style it .
let addBtn = document.createElement("button");
addBtn.innerHTML = "Add Task";
addBtn.style = "padding: 10px; background-color: red; color: white; font-size: 16px; font-weight: bold; border-radius: 10px; cursor: pointer";

// append form's elements .
form.append(taskInp);
form.append(addBtn);

// append form in body .
document.body.append(form);