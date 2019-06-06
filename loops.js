// for(let i = 1; i <= 20; i++){
//     console.log(i);
// }

// for (let i = 1; i <= 20; i++){
//     console.log(i*3);
// // }
// var nums = [8,2,17,4,5,10,4,8,9,15]
// for(let i = 0; i < nums.length; i++){
//     console.log(nums[i] * 4);
// }
//
// for ( let i = 1; i <= 20; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     } else {
//         console.log("ODD");
//     }
// }
//
// for(let i = 10; i > 0; i--){
//     console.log(i);
// }

// var letters = ["l", "e", "a", "r", "n"]
// for (let i = 0; i < letters.length; i++){
//     console.log(letters[i].toUpperCase());
// }
//
// var str = ["hi","yo","there","what","how","to","are","where","you"]
// for(let i = 0; i < str.length; i++){
//     if(i % 2 === 0){
//         console.log(str[i]);
//     }
// }
//
// for (let i = 0; i <= 15; i++){
//     if (i % 2 === 0){
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }
// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("fizzbuzz");
//     }else if(i % 3 === 0){
//         console.log("fizz");
//     }else if(i % 5 === 0){
//         console.log("buzz");
//     }else{
//         console.log(i);
//     }
//
// }
//
// function marco(){
//     return ("polo")
// }
// console.log(marco());
//
// function greeting(name){
//     return "Welcome " + name
// }
// console.log(greeting("Randy"));
//
// function oddOrEven(num){
//     if(num % 2 === 0){
//         return("even")
//     }else{
//         return("odd")
//     }
// }
// console.log(oddOrEven(16));
//
// function triple(num){
//     return num * 3
// }
//
// console.log(triple(5));
//
// function multiply(num1,num2){
//     return num1 * num2
// }
// console.log(multiply(5,9));
//
// function divisibleBy(num1, num2){
//     if (num1 % num2 === 0){
//         return num1 + " is evenly divisble by " + num2
//     } else {
//         return "It's not"
//     }
// }
// console.log(divisibleBy(10, 3));
//
// function greaterNum(num1,num2){
//     if (num1 > num2){
//         return num1
//     }else{
//         return num2
//     }
//
// }
//
// console.log(greaterNum(100,10));
//
// function helloWorld(language){
//     if (language === "es"){
//         return "Hola Mundo"
//     }else if (language === "de") {
//         return "This is German"
//     }else {
//         return "Hello World"
//     }
// }
//
// // console.log(helloWorld("chinese"));
//
// function assignGrade(grade){
//     if(grade >= 90){
//         return "A"
//     }else if(grade >= 80){
//         return "B"
//     }else if(grade >= 70){
//         return "C"
//     }else if(grade >= 60){
//         return "D"
//     }else{
//         return "F"
//     }
//
// }
// console.log(assignGrade(91));
//
// function pluralizer(num, noun){
//     if (num === 1){
//         return num + " " + noun
//     }else{
//         if (noun === "child"){
//             return num + " " + "children"
//         }
//         return num + " " + noun +"s"
//     }
// }
//
// console.log(pluralizer(2, "child"));
// var array2 = [0, "", "abcd", true, null, false, 0]
//
// function filterArrayValues(arr){
//     var filtered = []
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] !== false && arr[i] !== null && arr[i] !== 0 && arr[i] !== ""){
//             filtered.push(arr[i])
//         }
//     }
//     return filtered
// }
//
// // console.log(filterArrayValues(array2));
// const winNum = Math.floor(Math.random() * 100 + 1)
// function hiLowGame(guess){
//
//     if (guess > winNum){
//         return "Guess too high "
//     }else if (guess < winNum){
//         return "Guess too low"
//     }else {
//         return "You win!"

//     }
// }
//
// console.log(hiLowGame(55));


//create var with arr1 nums
//declare function multi3
//create argument num
//returns num multiplied by 3
// var arr1 = [3,9,15,4,10]
// function multi3(num){
//     newNum = []
//     for(i = 0; i < num.length; i++){
//         newNum.push(num[i] * 3)
//
//     }
//     return newNum
// }
// console.log(multi3(arr1));


//
// //make a test arr1
// var arr2 = [2,7,3,5,8,10,13]
// //declare the function onlyOdd
// function onlyOdd(arr){
//     var newArray = []
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] % 2 !== 0){
//             newArray.push(arr[i])
//         }
//     }
//     return newArray
// }
//
// console.log(onlyOdd(arr2));
// //make a newArray
// //loop through test array
// //if odd, push to new array. if even, ignore
// //return newArray
// //console.log();


// make test string
//declare function newWord
 //takes a str as argument
 //return str as upper case :

//
//
//
// var sent = "Hello There"
// function newWord(str){
//     return str.toUpperCase()
//
// }
// console.log(newWord(sent));

// old_enough = (number) => {
//         return `You are old enough!`
//
//
// }
// console.log(old_enough(22));


//Declare a function greaterNum
//takes two arguments that are both numbers
//compare the two numbers
// return highest number
//call function

// greaterNum = (num1, num2) => {
//     return num1 > num2 ? num1 : num2
// }
// console.log(greaterNum(10,7));

//
// var person = {
//   name: "Alex Keaton",
//   phone: 123456789,
//   getData() { return this.name+"-"+this.phone }
// };
//
// const {name, phone} = person
//
//
// console.log(phone);
//
// combineWord = (...arg1) => {
//     return arg1.join("")
// }
// console.log("H", "i", " ", "t", "h", "e", "r", "e", " ", "C", "h", "a", "r", "l", "i", "e", " ", "C", "l", "a", "s", "s", "!");



// console.log("Challenge 5");
//
// //create an object
// var cat = {
//     name: "Max",
//     color: "Orange",
//     type: "Tabby",
//     meow() {return `Meow! I am a ${this.color} ${this.type} cat named ${this.name}`}
// }
//
// //destructure an object
// const {name, color, type, meow} = cat
//
// //declare a function that takes two arguments as an arrow function
// //return an output using string interpolation
// catReport = (arg1, arg2) => {
//     return `${arg1} ${arg2}`
// }
//
// console.log(catReport(name, color));
// console.log(meow())
//
//
//
// var person = { fName: "Arthur", lastName: "Dent" }

// var person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth",
//     reportPerson(){return `${this.firstName} is from planet ${this.homePlanet}`}
// }
//
// console.log(person.reportPerson());

// var product = { name: "chair", price: 14.99 }
// var product1 = { name: "table", price: 145 }
//
// describeProduct = (item) => {
//     return `The product is a ${item.name}. It costs ${item.price}`
// }
// console.log(describeProduct(product1));

//
// var lunch = {
//     name: "PB and Banana",
//     type: "sandwich",
//     ingredients: ["bread", "peanut butter", "banana"],
//     eat(){return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}`}
// }
//
// // console.log(lunch.ingredients[2]);
// //
// //
// // sandwich = (meal) => {
// //     return `The ingredients for a ${meal.name} ${meal.type} are ${meal.ingredients[0]}, ${meal.ingredients[1]}, and ${meal.ingredients[2]}`
//
// console.log(lunch.eat());

//
// console.log("Write a function that takes in an array and returns a new array with all numbers multiplied by 3.")
//
// var arr1 = [3, 9, 15, 4, 10]
//
// // multipliesByThree = (3) => {
// //     let newArr = []
// //     for (let i = 0; i < arr.length; i++) {
// //         newArr.push(arr[i] * 3)
// //     }
// //     return newArr
// // }
// //
// // console.log(multi






//
// var person = {
//     fName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth",
//     identity(){
//         return `${this.fName} ${this.lastName} is from planet ${this.homePlanet}`
//     }
//
// }
//
// // console.log(person.identity());
// var product = {
//     name: "chair",
//     price: 14.99,
//     describeProduct(product){
//         return `The product is a ${product.name}. It costs ${product.price}.`
//     }
//  }
//
//
// console.log(product.describeProduct(product));


// var lunch = {
//     name: "PB and Banana",
//     type: "sandwich",
//     ingredients: ["bread", "peanut butter", "banana"],
//     // sammy(){
//     //     return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}`
//     }
// sammy = (lun) => {
//     return `The ingredients for a ${lun.name} ${lun.type} are ${lun.ingredients[0]}, ${lun.ingredients[1]}, and ${lun.ingredients[2]}`
// }
// console.log(sammy(lunch))



//
//
// class Coffee {
//   constructor(type, cream=0, sugar=0){
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }
//
//   coffeeProfile() {
//     return `${this.type}: ${this.cream}, ${this.sugar}`
// }
//
//   creams() {
//     if (this.cream > 0){
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }
//
//     sugars(){
//     if (this.sugar > 0){
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }
//
// class Latte{
//     constructor(type, milkType="milk", shots){
//         this.type = type
//         this.milkType = milkType
//         this.shots = shots || 1
//     }
//
//     latteProfile(){
//         return `${this.type}: ${this.milkType}, ${this.shots}`
//     }
// }
//
// const blackCoffee = new Coffee("BLACK", 0, 0)
// const plainCoffee = new Coffee("plain",1, 2)
// const coffeeNoCream = new Coffee("No Cream",0, 2)
// const latte1 = new Latte("boring")
// const regular = new Latte("regular")
// const hazelnut = new Latte("Hazelnut Latte", "almond", 2)
// console.log(hazelnut.latteProfile());
