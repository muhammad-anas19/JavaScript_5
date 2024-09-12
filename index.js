// Function with no parameter
function sayMyName() {
    console.log("Anas");
}
// function use --> then call it.
sayMyName();

function printCounting() {
    for(let i=1; i<=100; i++) {
        console.log(i);
    }
}
printCounting();

// func with parameter
function printNumber(num) {
    console.log("Print Number:", num);
}
printNumber(5);

// multiple parameters
function findAvg(num1, num2, num3) {
    let avg = (num1+num2+num3)/3;
    console.log(avg);
}
findAvg(2,3,7);

// Return Function
function getSum (a,b,c) {
    let sum = a + b + c;
    return sum;
}
let ans = getSum(10,5, 10);
console.log(ans);

function getMyName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return fullName;
}
let myName = getMyName("Anas", "Rajput");
console.log(myName);

// Funtion Expression:
let getMultiplication = function(a,b) {
    return a*b;
}
let ans2 = getMultiplication(2,20);
console.log(ans2);

// Arrow Function:
const getExp = (x,y) => {
    let ans = x**y;
    return ans;
}
console.log(getExp(2,5));

