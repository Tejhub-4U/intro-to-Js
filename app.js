console.log("Helo, World!");

console.log("This is Tejith");

console.log("Iam sudent at SIU")

console.log("we are just stared learning js")

console.log(2 + 2);

console.log(2 - 2);

console.log(2 * 2);

console.log(2 / 2);

const name = "Tejith";
console.log(name);

const age = "18";
console.log(age);

let place = "Sricity";

place = "tirupathi";
console.log(place);

place = "Hyd";
console.log(place);

let college = "SIU";
console.log(college);
console.log(typeof college);

let marks = 101;
console.log(marks);
console.log(typeof marks)

let islighton = true;
console.log(islighton);
console.log(typeof islighton);

let a;
console.log(a);
console.log(typeof a)

let b = null;
console.log(b);
console.log(typeof b);

console.log(`my name is ${name} and I am ${age} years old.`);
console.log(`addition:${2 + 2}`)

let d = 2;

let f = 4;
console.log(`Addition of variable ${d} and ${f} = ${d + f}`);
console.log("Addition of " + d + " and " + f + " = " + (d + f));

let maths = 90;

let physics = 85;

let chemistry = 85;

let san = 80;

let eng = 80;

let total = maths + physics + chemistry + san + eng;

let full = 500;
console.log(`Addition of all subjets : ${total}`);

let avg = total / 5;
console.log(`avg= ${avg} `);

let price = 100;

let quantity = 10;

let totalprice = quantity * price;
console.log(`Total price of ${quantity} products is : ${totalprice}`);

let num1 = 999;

let num2 = 9;

let reminder = num1 % num2;
console.log(`Reminder of ${num1}  and ${num2} is : ${reminder}`);

let item1 = 500;

let amount = 2;

let dic = 100;

let finalPrize = (item1 * amount) - dic;
console.log(`total price = ${finalPrize}`);

// comparison operators

let numberOne = 10;
let numberTwo = 20;
console.log(`${numberOne === numberTwo}`);
console.log(`${numberOne !== numberTwo}`);
console.log(`${numberOne == "11"}`);
console.log(`${numberOne != "11"}`);
console.log(`${numberOne > numberTwo}`);
console.log(`${numberOne < numberTwo}`);
console.log(`${numberOne >= numberTwo}`);
console.log(`${numberOne <= numberTwo}`);

// Logical Operator

let hasComputer = true;
let hasInernet = true;
let isCompletedAssignment = false;

console.log(`${hasComputer && hasInernet}`);
console.log(`${hasComputer || hasInernet}`);
console.log(`${hasComputer || isCompletedAssignment}`);
console.log(`${hasComputer && isCompletedAssignment}`);
console.log(`${hasInernet && isCompletedAssignment}`);
console.log(`${hasInernet || isCompletedAssignment}`);

//ifelse
let yourAge = 20;
if (yourAge >= 18) {
    console.log("Your are elgiblle to vote")

} else {
    console.log("You are eligible")
}
let mark = 50;
let passingMark = 40;
if (mark >= yourAge); {
    console.log("passed")
}

let jeeMainsScore = 80;
if (jeeMainsScore >= 90); {
    console.log("you craked JEE");
}

let isBiryaniAvailable = false;
let isCurdriceAvailablle = true;
let isTamotariceAvailablle = true;
if (isBiryaniAvailable) {
    console.log("Biryani is availablle.");
}
else if (isCurdriceAvailablle) {
    console.log("congrats curdrice is available")
}
else if (isTamotariceAvailablle) {
    console.log("congrats rice is available")
}
else {
    console.log("sorry no biryani");
}


let Number = 9;
let NUMBER = 2;
if (Number % NUMBER === 0) {
    console.log(`Given number ${Number} is Even`)
}
else {
    console.log(`Given number ${Number} is Odd`)
}
let isEven = Number % 2 === 0 ? true : false;
let isEvenNumber = Number % 2 === 0 ? console.log(`Given number ${Number} is Even`) : console.log(`Given number ${Number} is Odd`);

for (let i = 1; i <= 5; i++) {
    console.log(`iteration number: ${i}`);
}

let count = 0;
while (count <= 5) {
    console.log(`count is ${count}`);
    count++;

}

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

//function
function makeACoffee() {
    console.log("Turn on the Gas stove with ligher");
    console.log("put a pan on the stove");
    console.log("Add some water to the pan");
    console.log("Add coffee powder to the boiling water");
    console.log("Add some sugar to the coffe");

    console.log("add milk to the coffee");
    console.log("wait for two o three minues");
    console.log("trun off the stove njoy the coffee");


}
//  makeACoffee()
function makeACoffee(isSugarNeeded, isMilkNeedeed) {
    console.log("Turn on the Gas stove with ligher");
    console.log("put a pan on the stove");
    console.log("Add some water to the pan");
    console.log("Add coffee powder to the boiling water");
    if (isSugarNeeded) {
        console.log("Add some sugar to the coffe");
    }
    if (isMilkNeedeed) {
        console.log("add milk to the coffee");
    }

    console.log("wait for two o three minues");
    console.log("trun off the stove njoy the coffee");


}
makeACoffee(false, true);

function addTwoNumbers(number1, number2) {
    let sum = number1 + number2;
    return sum;
}
let result = addTwoNumbers(5, 10);
console.log(`the sum of 5 and 10 is : ${result}`)

function getMyName(){
    return "Tejith"
}

let myName = getMyName();
console.log(`My name  is : ${myName}`);

// Function expression
const myNameFunction = function(){
      return "Tejith";
}
console.log(`My name  is : ${myNameFunction()}`); 

