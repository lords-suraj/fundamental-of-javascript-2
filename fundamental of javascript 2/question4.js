

const products = [
    { 
        name:"laptop", 
        price:100000,
    },
    { 
        name:"Phone", 
        price:30000,
    },
    { 
        name:"Macbook", 
        price:80000,
    },
    { 
        name:"Charger", 
        price:5000,
    },
    { 
        name:"tab", 
        price:40000,
    },
    { 
        name:"iphone", 
        price:200,
    },
];

let Maxproduct = { name: "", price:Number.MIN_VALUE};
let minProduct = { name: "", price:Number.MAX_VALUE };

for ( let product of products){
    if ( product.price > Maxproduct.price){
        Maxproduct = product;
    }
    if (product.price < minProduct.price){
        minProduct= product;
    }
    
}
console.log(
    `The product with maximum ammount is ${Maxproduct.name} which is priced at Rs ${Maxproduct.price}`
  );
console.log(
    `The product with minimum ammount is ${minProduct.name} which is priced at Rs ${minProduct.price}`
  );