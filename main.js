let userNumbers = prompt("your three numbers");

if (userNumbers === null) {
    console.log("you canceled input");
} else {
    userNumbers = userNumbers.trim();
    userNumbers = userNumbers.replace(/\s+/g, '');
    const digitsOnly = userNumbers.startsWith('-') ? userNumbers.slice(1) : userNumbers;
    if (!/^\d+$/.test(digitsOnly) || digitsOnly.length !== 3) {
        console.log("pleas only numbers or only three numbers");
    } else {
        const one = digitsOnly[0]; 
        const too = digitsOnly[1];
        const three = digitsOnly[2];
        
        if (one === too && too === three) {
            console.log("all numbers same");
        } else if (one === too || one === three || too === three){
            console.log("some numbers same");
        } else {
            console.log("diferent numbers");
        }
    }
}
