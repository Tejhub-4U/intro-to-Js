console.log("hello world")

// lays  = 10, quantity = 5, discount - 5.

function calculateBill(price, quantity=3, discount = 0) {
    if (price > 0) {
        if (quantity > 0) {
            return price * quantity - discount;
        }else {
        return "quantity should be greater than 0.";
        } 
    } 
    else {
        return "Price and quantity should be greater than 0.";
    }

}

function calculateBill2(price,quantity=3,discount=0){
    if (price<=0) return "Price should be greater  than 0.";
    if (quantity <=0) return "Quantity should be greater than 0.";
    return price*quantity - discount;
}
let bill = calculateBill(10,5);
console.log(bill);
 
let bill2 = calculateBill(10,0,5)
 console.log(bill2);

function ATM(balance,AtmBalance,WithDrawAmount){
    if (WithDrawAmount<=balance && AtmBalance>=WithDrawAmount && WithDrawAmount>0) {return "money withdrawl successfully"
    }else {
    return "Failed to Withdraw"
}
}
let  personOne= ATM(1000,5000,100)
console.log(personOne);

// const college ="SIU"
// let  percentage;
// function student(){
//     console.log(`My college is ${college}`);
//      percentage=80;
//     console.log(`My percentage is ${percentage}`);
//     if (percentage >= 75){
//         let grade = "A";
//         console.log(`My grade is ${grade}`);

//     }
//     console.log(`my grade is ${grade}`);
// }
// student();
// console.log(`My percenttage is ${percentage}`)

//shadow

let total =0;

function addBonus() {
    let total = 100;
    console.log(`Inside  addBonus,total is ${total}`);
}

addBonus();
console.log(`outside add bonus,total is ${total}`)

function formatPrice(amount,currencySymbol = "₹") {
    return `${currencySymbol}${amount.toFixed(2)}`;
}

function describeItem(itemName,price) {
    const priceText = formatPrice(price);
    return `${itemName}:${priceText}`
}

console.log(describeItem("Notebook",149));                 

//Arrays

let fruits=["Apple","Banana","Cherry","Date"];

console.log(fruits[3])
fruits.push("waterMelon")

