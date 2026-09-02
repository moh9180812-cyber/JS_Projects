let length = document.images.length;
for (let i = 0; i < length; i++) {
  if (document.images[i].hasAttribute("alt")) {
    document.images[i].setAttribute("alt", "Old");
  }else if (!document.images[i].hasAttribute("alt")) {
    document.images[i].setAttribute("alt", "Elzero New");
  }
}

console.log(length);