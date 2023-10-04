

const alluser = [
    "Suraj",
    "John",
    "peter",
    "Neeraj",
    "rajeev",
    "nikhil",
    "james",
    "gourav",
    "Ravi",
    "Mithun"
]

function isUserPresent(user){
    if (alluser.includes(user)){
        console.log(`Yes, ${user} is a valid User`);
        return true;
    }
    else{
        console.log(`No, ${user} is not a valid User`);
        return true;
    }
}

isUserPresent("Mithun");

isUserPresent("someone");

