
// let h1 = document.getElementById("h1")
// console.log(h1);

// let h1 = document.querySelector("h1")  // tag
// let h1 = document.querySelector(".h1")  // class
// let h1 = document.querySelector("#h1")    // id
// let h1 = document.querySelectorAll("h1")

// console.log(document.getRootNode());
// console.log(h1);


// let p = document.querySelector("p")

// p.textContent = "Hello dosto kaise ho?"
// p.innerHTML = "<b> Hello dosto</b>"        // very very risky

// console.log(p.textContent);
// console.log(p.innerHTML);
// console.log(p.innerText);

// console.log(p);

// p.setAttribute("style" , "background-color: pink;")

// let btn = document.querySelector("#btn")

// btn.setAttribute("disabled","true")

// btn.removeAttribute("disabled")

// btn.textContent = "Remove"


// let res = btn.getAttribute("disabled")
// console.log(res);


// p.removeAttribute("style")


// p.classList.add("random")

// p.classList.remove("random")

// p.classList.toggle("random")

// console.log(p.classList.contains("random"));


// p.style.backgroundColor = "red"
// p.style.border = "2px solid black"


// p.dataset.hello = "hii"
// console.log(p.dataset.hello);



// let products = [
//     {
//         name : "iphone 18",
//         price : 69599
//     },
//     {
//         name : "samsung 17",
//         price : 65599
//     },
//     {
//         name : "MI-6",
//         price : 20999
//     },
//     {
//         name : "Poco 10",
//         price : 59599
//     },
//     {
//         name : "Lava 12",
//         price : 39999
//     }
// ]


// let div = document.createElement("div")
// let div2 = document.createElement("div")

// div.textContent = "Hello"
// div2.textContent = "div 2"

// let body = document.querySelector("body")

// body.appendChild(div)
// body.appendChild(div2)

// body.append(div,div2)  // insert last in body

// body.prepend   // insert start in body
// console.log(div);



// let productList = document.querySelector("#productList")

// console.log(productList);

// products.forEach((product) =>{
//     const card = document.createElement("p")
//     card.textContent = `${product.name} - ${product.price}`
//     productList.append(card)
// })


// let h2 = document.querySelector("h2")

// let body = document.querySelector("body")

// body.removeChild(h2)   // u have to access parent

// h2.remove()  // directly removing an element

// let clone = productList.cloneNode(true);

// console.log(clone);

// console.log(productList.children);

// const items = productList.children;

// productList.insertBefore(h2, items[2])

// items[2].before(h2)
// items[2].after(h2)