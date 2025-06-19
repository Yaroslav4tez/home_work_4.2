let userNumbers = prompt("your three numbers");
userNumbers = userNumbers.trim(userNumbers);
if (!userNumbers || isNaN(+userNumbers) || userNumbers.length !== 3 ||
     userNumbers === null || userNumbers.startsWith("0") || !/^\d+$/.test(userNumbers)) {
    console.log("pleas only numbers or only three numbers");
} else {
    const one = userNumbers[0]; 
    const too = userNumbers[1];
    const three = userNumbers[2];
    
    if (one === too && too === three) {
        console.log("всі числа однакові");
    } else if (one === too || one === three || too === three){
        console.log("присутні однакові числа");
    } else {
    console.log("різні цифри");
    }
}
