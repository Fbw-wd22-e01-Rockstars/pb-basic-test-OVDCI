// Add answers here 

//1
console.log("Los or New?");

function nameOfCity(string){
    if(string.includes("New")||string.includes("Los")){
        return string;
    }else{
        console.log("The city name does not begin with Los or New");
    }
}

console.log(nameOfCity("New York"));

//2
console.log("isDivisible?");

function isDivisible(number){
    if(number%100===0){
        return true;
    }else{
        return false;
    }
}

console.log(isDivisible(100));

//3
console.log("What's the weather?");

function isRaining(boolean){
    return (boolean ? "wet day - you need an umbrella":"dry day - leave your umbrella at home");
}

console.log(isRaining(false));

//4
console.log("Sequence");

function geometricalSequence(){
    for(let i=1; i<=256; i*=2){
        console.log(i);
    }
}

geometricalSequence();

//5
console.log("Multiples");

function multiplesOfThree(){
    for(let i=1; i<=15; i++){
        if(i%3===0){
            console.log(i);
        }
    }
}

multiplesOfThree();

//6
console.log("You've got the power");

function powerOf(number){
    return Math.pow(number,number)
}

console.log(powerOf(4));

//7
console.log("Problem Solving");

const vowelCount = (string => (string.match(/[aeiou]/gi) || []).length);

console.log(vowelCount("hello"));
console.log(vowelCount("test"));
console.log(vowelCount("fbw"));
console.log(vowelCount("HELLO"));

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

