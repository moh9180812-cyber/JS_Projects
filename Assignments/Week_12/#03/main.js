let element = document.querySelector("div.result");
let inp = document.querySelector("input[name='dollar']");


inp.oninput = function () {
  let number = inp.value;
  element.innerHTML = `${number} USD Dollar = ${(number * 16.6).toFixed(2)} Egyptian Pound`;
}

// document.write(input.value);