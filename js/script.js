const menuicon = document.querySelector("#menuicon")
const mobilemenus = document.querySelector("#mobilemenus")
const displayproducts = document.querySelector("#displayproducts")

let menuheight = false;

menuicon.addEventListener("click", () => {
    if (menuheight) {
        mobilemenus.style.height = "0px"
        menuheight = false;
    } else {

        mobilemenus.style.height = "auto"
        menuheight = true;
    }
})



const productlist = [
    {
        productname: "Red printed t-shirt",
        price: 570
    },
    {
        productname: "Nike Black shoes",
        price: 2000
    },
    {
        productname: "sport jogger",
        price: 1800
    },
    {
        productname: "blue printed t-shirt",
        price: 450
    },
    {
        productname: "white shoes",
        price: 800
    },
    {
        productname: "puma black modern t-shirt",
        price: 1200
    },
    {
        productname: "one-x soxes",
        price: 970
    },
    {
        productname: "titan black 3d",
        price: 4500
    },
    {
        productname: "scoch 1200p black",
        price: 870
    },
    {
        productname: "black sport shoes",
        price: 4360
    },
    {
        productname: "white sneakers extra",
        price: 3100
    },
    {
        productname: "nike new box jogger",
        price: 3400
    }
]

    

productlist.forEach((e, index) => {
    displayproducts.innerHTML += `
    <div>
    <img src="images/product-${index+1}.jpg">
    <p>${e.productname}</p>
    <div class="rate">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </div>
    <p>₹ ${e.price}</p>
</div>     
                `
})