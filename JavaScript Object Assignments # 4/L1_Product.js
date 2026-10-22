
const product = {
    name: "Laptop",
    price: 800,
    stock: 10
};

product.price = 750;
product.stock = product.stock + 5;

console.log("Updated product:", product);
