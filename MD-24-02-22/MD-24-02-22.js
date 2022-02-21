
const number1 = parseInt(prompt("Enter first element of calculation:" , "2, 3 or similar"));
const operator = prompt("Enter operator (+, -, * or /):" , "+, -, * or /");
const number2 = parseInt(prompt("Enter second element of calculation:" , "2, 3 or similar"));

let result;

if (operator == '+') {
    result = number1 + number2;
    console.log("(number1)(operator)(number2) = (result)");
    this.alert("Result is" + result);
}
else if (operator == '-') {
    result = number1 - number2;
    console.log("(number1)(operator)(number2) = (result)");
    this.alert("Result is" + result);
}
else if (operator == '*') {
    result = number1 * number2;
    console.log("(number1)(operator)(number2) = (result)");
    this.alert("Result is" + result);
}
else if (operator == '/') {
    result = number1 / number2;
    console.log("(number1)(operator)(number2) = (result)");
    this.alert("Result is" + result);
}
else (operator !== '-' || '+' || '*' || '/') /// this does not work - the alert shows all of the time..
{
    this.alert("The operation is not correct")
}
 


