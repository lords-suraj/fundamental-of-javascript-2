

// products details

let productsDetails = {
    name:"Oneplus C20 Android Mobile phone",
    Price:30000,
    Color:"gray",
    Harddisk:"128 GB",
};

console.log(" ");
console.log("Below are the product details");
console.log(" ");
for (let keys of Object.keys(productsDetails)){
    console.log(`${keys} : ${productsDetails[keys]}`);
}

