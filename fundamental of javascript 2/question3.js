

// function for finding the students is pass in there exam or not

const students = [
{
    name:"suraj",
    marks: 95,
},
{
    name:"Mithun",
    marks: 93,
},
{
    name:"Ravi",
    marks: 90,
},
{
    name:"komal",
    marks: 50,
},
{
    name:"sooraj",
    marks: 80,
},
];

// console.log(students);

let checkResults = (name)=>{
    for (let student of students){
        if(student.name==name){
            return student.marks>90 
            ? console.log(`congratulations ${student.name} , You pass`)
            : console.log(`sorry,${student.name} , you have not clear`)
            
    }
    else{
        console.log("Invalid User !!!");
      
    }


}


}
checkResults("Mithun");
checkResults("komal");
checkResults("Mithun S");

