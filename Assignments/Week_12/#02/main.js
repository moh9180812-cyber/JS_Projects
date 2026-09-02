
for (let i = 0; i < 10; i++) {
    let parent = document.body.children[i];
    let image = parent.querySelector('img');
    image.setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
    image.setAttribute("alt", "Elzero Logo");
}