const productAlert = document.querySelector("#product-alert");
const closeBtn = document.querySelector("#close-btn");
const productText = document.querySelector("#product-text");
const productImage = document.querySelector("#product-image");
const names = ["John", "Alice", "Bob", "Emma", "Betty"];
const products = [{
        name: "Nike Red Shoes",
        image: "./imgs/product-image-1.jpg"
    },
    {
        name: "Chanel Noir Perfume",
        image: "./imgs/product-image-2.jpg"
    },
    {
        name: "Awesome Black Shirt",
        image: "./imgs/product-image-3.jpg"
    },
    {
        name: "Ray-Ban Sunglasses",
        image: "./imgs/product-image-4.jpg"
    },
    {
        name: "Black Apple Watch",
        image: "./imgs/product-image-5.jpg"
    }
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomTime() {
    return Math.floor(Math.random() * 59) + 1;
}

const getRandomDisplayTime = () => Math.random() * (8 - 3) + 3;
const showAlert = () => {
    const randomName = getRandomItem(names);
    const randomProduct = getRandomItem(products);
    const { name, image } = randomProduct;
    productImage.src = image;
    productText.innerHTML = `<p class="message"> ${randomName} purchased ${name}</p> <p class="time">${getRandomTime()} mins ago</p>`;
    productAlert.style.display = "flex";
}

closeBtn.addEventListener("click", () => {
    productAlert.style.display = "none";
    setTimeout(showAlert, Math.floor(getRandomDisplayTime()) * 1000);
})

setTimeout(showAlert, Math.floor(getRandomDisplayTime()) * 1000)
