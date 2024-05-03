const laptop1 = {
    type: "Lenovo",
    model: "T470s",
    price: "50,000",
    isOdered: true,
    sayCheap:function(){console.log("This product is out of stock")},
}
const laptop2 = {
    type: "HP",
    model: "Elite book",
    price: "65,000",
    isOdered: false,
    sayExpensive:function(){console.log("Product Still in stock")},
}

laptop1.sayCheap();
laptop2.sayExpensive();

console.log(laptop1.type);
console.log(laptop1.model);
console.log(laptop1.price);
console.log(laptop1.isOdered);

console.log(laptop2.type);
console.log(laptop2.model);
console.log(laptop2.price);
console.log(laptop2.isOdered);