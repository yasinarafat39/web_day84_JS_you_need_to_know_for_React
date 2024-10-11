// Normal function
function add(a = 0, b = 0){
    return a + b;
}
console.log(add(2, 3))


// Arrow Function
const multiply = (a = 0, b = 0) =>{
    return a * b;
}
console.log(multiply(20, 10))

const addArray = (numbers) => {

    if(!Array.isArray(numbers))
        return "Invalid"

    let sum = 0;
    for( let number of numbers){
        sum += number;
        console.log(sum)
    }
}
addArray([15, 20, 54, 30]);