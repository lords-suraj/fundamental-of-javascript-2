
//How to get difference of 2 dates in JavaScript? 


let currentDate = new Date();

let MyCreateDate = new Date ( 2023 , 6, 31);

let Mydate =  MyCreateDate.getTime()
let Current =  currentDate.getTime()

const Mydiff = Current - Mydate;

const aDayInMs = 24* 60* 60* 1000

const Diff = Math.round(
    Mydiff/aDayInMs
)
console.log(Diff);

