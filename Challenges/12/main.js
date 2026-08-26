// Challenge 12 .
let products = [
  "Laptop:25000:Electronics",
  "Phone:15000:Electronics",
  "Chair:1200:Furniture",
  "Desk:3000:Furniture",
  "Headphones:2000:Electronics",
  "Book:300:Education"
];
function searchProducts(products, search, maxP){
  let r = [];
  let s;
  let found = false;

  for (let i = 0; i < products.length; i++) {
    let arrP = products[i].split(":");

    
    if (search.toLowerCase() === arrP[0].toLowerCase() || search.toLowerCase() === arrP[2].toLowerCase()) {
      // r.push(arrP[0], arrP[1], arrP[2]);
      
      if (arrP[1] <= maxP) {
        s = `Product Found
Product : ${arrP[0]}.
Price : ${arrP[1]}.
Category : ${arrP[2]} .`;
      }else if (arrP[1] > maxP) {
        s = `Product Found But Price Is Too High`;
      }
      found = true;
     }  
    else if (i === products.length - 1) {
    if (found === false) {
        s = "Product Not Found";
    }
    }
  }
  console.log(s);
}
let nameP = prompt("Please Enter Product Name Or Category:");
searchProducts(products, nameP, 30000);
