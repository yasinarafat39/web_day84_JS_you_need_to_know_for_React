const person = {
    name: "mehedy",
    gender: "male",
    isStudent: true
}


let sentense = "";
if(person.isStudent){
    sentense = "He is a student"
} else{
    sentense = "He is not a student"
}

// person.isStudent? sentense = "He is a student" : sentense = "He is not a student";

console.log(sentense)