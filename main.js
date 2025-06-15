let userNumbers = prompt("your three numbers");

let one = userNumbers[0]; 
let too = userNumbers[1];
let three = userNumbers[2];

if (!userNumbers || isNaN(+userNumbers) || userNumbers.length !== 3 || userNumbers === null) {
    console.log("pleas only numbers or only three numbers");
} else if (one === too || one === three || too === one || too === three || three === one || three === too ) {
    console.log("we have same numbers");
}
else {
    console.log("diferents numbers");
}
