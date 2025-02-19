console.log("hello world");
console.log("Vaibhav kumar");

let a = 12;
let b = 15;
console.log("sum is:",a + b);

Template literals.

let pencilPrice = 25;
let erasorPrice = 24;
let output = `The total price is : ${pencilPrice + erasorPrice} Rupees.`;
console.log(output);


Arithmetic operator

let a = 10;
let b = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);


Unary Operator

let a = 10;
console.log(a++);

Assignment operator

let sum = 10;
sum+=1;
console.log(sum);

Comparison operator

let age = 18;
console.log(age > 18);
console.log(age >= 18);
console.log(age < 18);
console.log(age <= 18);
console.log(age == 18);
console.log(age != 18);


if statement.
let age =  prompt("Enter the age :");//taking the input from user.

if (age>18){
    console.log("Eligible for vote");
}
else{
   console.log("Not eligible");
}


traffic light system..

let color = prompt("Enter the color :");

if (color=="Red"){
    console.log("Danger");
}
else if (color=="Green"){
    console.log("Clear the path");
 }

else if (color=="Yellow"){
    console.log("Ready for drive");
 }


else if statement 

let score = prompt("Enter the marks :");

if (score>=90){
    console.log("Grade is A");
}
else if(score>=80){
    console.log("Grade is B");
}

else if(score>=70){
    console.log("Grade is C");
}

else if(score>=60){
    console.log("Grade is D");
}

else {
    console.log("Grade is F");
}


let size = prompt("Enter the size of popcorn: ");

if (size=="XL"){
    console.log("Price is Rs.250");
}

else if (size=="L"){
    console.log("Price is Rs.200");
}

else if (size=="M"){
    console.log("Price is Rs.100");
}

else if (size=="S"){
    console.log("Price is Rs.50");
}

Nested if else statement..

customer is eligible for a discount at a store..

let totalPurchase = prompt("Enter total purchase: ");
let loyaltyCard =true;

if (loyaltyCard){
    if (totalPurchase>=100){
        console.log("15% discount");
    }
    else{
        console.log("10% discount");
    }
}else{
    console.log("no discount is applied");
}


Logical operator && operator..

let age = prompt("Enter age: ");

let isStudent = true;

if(isStudent && age>=18 && age<=25){
    console.log("Congratulations! You're eligible for the special offer.");
}
else{
    console.log("Sorry, you're not eligible for the special offer.");
}

good string..start with "a"
and length is greter than 3


let str =  prompt("Enter string: ");

if(str[0]==='a' && str.length>3){
    console.log("string is good");
}else{
    console.log("string is not good");
}


let num = 12;

if ((num%3===0) && ((num+1==15) || (num-1 == 11))){
    console.log("safe");
}
else{
    console.log("unsafe");
}
output is safe..


switch statement..

let color = "red";

switch(color){
    case "red":
        console.log("stop");
        break;

    case "yellow":
        console.log("slow down");
        break;

    case "green":
        console.log("go");
        break;

    default:
        console.log("Broken light");    

}

let userInput = prompt("Enter a number between 1 and 7:");
let day = parseInt(userInput);

switch(day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break; 

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Not any day");
}

alert

alert("Something is wrong!");

console.error("something error!");

console.warn("something warning msg!");


prompt

let firstName = prompt("Enter the name!");
console.log(firstName);


let firstName = prompt("Enter your First name!");
let lastName = prompt("Enter your Last name!");

console.log("Welcome", firstName, lastName,"!" );

Createanumbervariablenumwithsomevalue.Now,print“good”ifthenumberisdivisibleby10andprint“bad”ifitisnot

let num = prompt("Enter the number");
if(num%10==0){
    console.log("Good");
}else{
    console.log("Bad");
}


let userName = prompt("Enter the name!");
let age = prompt("Enter the age!");

alert(`${userName} is ${age} years old`);

let userInput = prompt("Enter the months");
let quarter = parseInt(userInput);


switch(quarter){
    case 1:
    console.log("January","February","March");
    break;

    case 2:
    console.log("April","May","June");
    break;


    case 3:
    console.log("July","August","September");
    break;

    case 4:
    console.log("October","November","December");
    break;

    default:
    console.log("not a month");

}

let str = prompt("Enter the string:");

if(str[0]=='A'|| str[0]=='a',str.length>5){
    console.log("golden string");
}else{
    console.log("not golden string");
}

let num1 = prompt("Enter the num1:");
let num2 = prompt("Enter the num2:");

if(num1%10 == num2%10){
    console.log("Correct number")
}else{
    console.log("Wrong number");
}


let a = prompt("Enter the first no:");
let b = prompt("Enter the second no:");
let c = prompt("Enter the third no:");

if(a>b){
    if(a>c){
        console.log(a,"is largest");}
        else{console.log(c,"is largest");
    }
    }else{

        if(b>c){
            console.log(b,"is largest");}
        else{
            console.log(c,"is largest");
        }    }  


trim method in string..

let password = prompt("set your password")
let newPass = password.trim();
console.log(newPass);

string method
let str = "vaibhav";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

string method with arguements..

let str = "vaibhav";
console.log(str.indexOf("v"));

Method Chaining..

let msg = "  ILoveCoding  ";

let newMsg = msg.trim();
console.log(newMsg);

newMsg = newMsg.toLowerCase();
console.log(newMsg);

let newMsg = msg.trim().toLowerCase();
console.log(newMsg);


slice

let str = "ILoveCoding";

console.log(str.slice(5));
console.log(str.slice(0, 5));
console.log(str.slice(2, str.length));
console.log(str.slice(-2));


replace

let msg = "ILoveCoding";

console.log(msg.replace("love","do"));

repeat 

let str = "Mango";
console.log(str.repeat(4));
console.log(`${str} is delicious`);

practice question..

let msg = " help! ";
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);


let name = "ApnaCollege";

console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna","Our"));

let newName = name.slice(4).replace("l","t");
console.log(newName.replace("l","t"));


Array

let array = ["vaibhav", "yuvraj", "ajit"];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

console.log(array.length);
console.log(typeof(array));

let info = ["vaibhav", 25, 95.5]; //mix array
console.log(info);
console.log(info[0][0]);

let emp = []; //empty array
console.log(emp);



string is immutable
let name = "vaibhav";
console.log(name[0] = 'b');
console.log(name);

arrays are mutable

let fruits = ["apple", "banana", "guava"];
console.log(fruits[0]="litchi",fruits[1]="watermelon",fruits[10]="papaya");
console.log(fruits);


Array method

let cars = ["fortuner","swift","harrier"];
console.log(cars.push("brezza"));
console.log(cars);
console.log(cars.pop());
console.log(cars);

let cars = ["fortuner","swift","harrier"];
console.log(cars.unshift("brezza"));
console.log(cars);

console.log(cars.shift("brezza"));
console.log(cars);


practice question..

let start = ["january","july","march","august"];
console.log(start.shift());
console.log(start.shift());
console.log(start);

console.log(start.unshift("june"));
console.log(start.unshift("july"));
console.log(start);


let start = ["january","july","march","august"];
console.log(start.indexOf("july"));

console.log(start.includes("july")); //true
console.log(start.includes("june")); //false


let primary = ["red", "yellow", "blue"];
let secondary = ["orange","green","violet"];
console.log(primary.concat(secondary));

console.log(primary.reverse());
console.log(secondary.reverse());

let primary = ["red", "yellow", "blue","green"];
console.log(primary.slice());
console.log(primary.slice(2));
console.log(primary.slice(1,2));
console.log(primary.slice(-2));
console.log(primary.slice(4));

let colors = ["red", "yellow", "blue","green","pink"];

console.log(colors.splice(3));
console.log(colors);
console.log(colors.splice(0,1));
console.log(colors);
console.log(colors.splice(0,1,"black","gray"));
console.log(colors);

let colors = ["red", "yellow", "blue","green","pink"];
console.log(colors.sort());

practice question

let start = ["january","july","march","august"];
console.log(start.splice(0,2,"july","june"));
console.log(start);



let language = ["c","c++","html","javascript","python","java","c#","sql"];
console.log(language.reverse());
console.log(language.indexOf("javascript"));

array reference..

let arr = ['a','b'];
let arrCopy = arr;
console.log(arrCopy);

console.log(arrCopy.push('c'));
console.log(arr);

console.log(arr==arrCopy);


nested arrays..

let nums = [[1,2],[3,4],[4,5]];
console.log(nums);
console.log(nums[0]);
console.log(nums[0].length);
console.log(nums[0][0]);
console.log(nums[1][1]);
console.log(nums[2][1]);

tic tactoe..2d array
let game = [['x',null,'0'],[null,'x',null],['0',null,'x']];

console.log(game[0][1]='0');
console.log(game[1][0]='0');
console.log(game[1][2]='0');
console.log(game[2][1]='0');
console.log(game);


let arr = [7, 9, 0, -2];
console.log(arr.slice(0,3));

let arr = [7, 9, 0, -2];
console.log(arr.slice(arr.length-3));

let str = prompt("please enter the string");

if(str.length==0){
    console.log("string is empty");
}
else{
    console.log("string is not empty");
}

let str = prompt("please enter the string");

console.log(`original string = ${str}`);
console.log(`string without space = ${str.trim()}`);


loop in javascript..

for(let i=0; i<=5; i++){
  console.log(i);
}

reverse loop

for(let i=5; i>=1; --i){
    console.log(i)
}

for(let i=5; i>=1; i=i-3){
        console.log(i)
    }


print all odd number (1 to 15)

let i = 1;
for(let i=1; i<=15; i++){
    if(i%2==1){
        console.log(`${i} is an odd`);
    }
}

let i =1;
for(let i=15; i>=1; i-=2){
    console.log(i);
}


print even number (2 to 10)

let i = 2;
for(let i=2; i<=10; i+=2){
    console.log(i);
}


let i = 2;
for(let i=10; i>=1; i-=2){
    console.log(i);
}

print multiplication table of n...


let n = prompt("enter the number");
n = parseInt(n);
for(i=n; i<=n*10; i=i+n){
    console.log(i);


for(let i=1; i<+3; i++){
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}

for(let i=1; i<=3; i++){
    console.log(`outer loop ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}

while loop..

let i=10;
while(i<=20){
    console.log(i);
    i++;
}


favorite movie...

const favMovie = "Avitar";

let guess = prompt("guess the favourite movie");

while(guess!=favMovie && guess!="quit"){
    guess = prompt("wrong guess. please try again");

}if(guess == favMovie){
   console.log("congrats!!");
}else{
    console.log("you quit the game");
}

break keyword

let i = 1;
while(i<=5){
    if(i==3){
      break;
    }
    console.log(i);
    i++;
}


const favMovie = "Avitar";

let guess = prompt("guess the favourite movie");

while(guess!=favMovie){
    if(guess=="quit"){
        console.log('You Quit');
        break;
    }
    guess = prompt("wrong guess. please try again");

}if(guess == favMovie){
   console.log("congrats!!");
}


loops with array..

let fruits = ["mango","litch","pineapple","banana","orange"];
fruits.push("apple");
for(let i=0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}


let fruits = ["mango","litch","pineapple","banana","orange"];

for(let i=fruits.length-1; i>=0; i--){
    console.log(i, fruits[i]);
}

js object literals..

const student ={
    name:"vaibhav",
    age:21,
    marks:85,
    city:"hajipur"
};

const item = {
    price:100,
    discount:25,
    colors:["red","yellow"]
};


object of objects..


const classInfo ={
    aman: {
        grade:"A",
        city: "delhi"
    },
    vaibhav:{
        grade:"A+",
        city:"hajipur"
    },
    rohit:{
        garde:"B",
        city:"bhopal"
    },
};

array of objects..

const classInfo =[
    {   name:"aman",
        grade:"A",
        city: "delhi"
    },
    {   name:"vaibhav",
        grade:"A+",
        city:"hajipur"
    },
    {   name:"rohit",
        garde:"B",
        city:"bhopal"
    }

];


math object..
console.log(Math.PI);
console.log(Math.E);
console.log(Math.pow(2,3));
console.log(Math.floor(3.256));
console.log(Math.ceil(3.256));
console.log(Math.random(3));


random intergers..

let num = Math.random();

num= num*10;
num=Math.floor(num);
num=num+1;


practice question..


Generate a random number between 1 to 100..

Math.floor(Math.floor()*100)+1;


Guessing number/game..


const max = prompt("Enter the max number");

const random = Math.floor(Math.random()*max)+1;


let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("you are right congrats! random number was :", random);
        break;
    }
    else if(guess<random){
        guess = prompt("hint:your guess was too small.please try again");
    }
    else{
        guess = prompt("hint:your guess was too large. please try again");
     }

else{
   guess = prompt("your guess was wrong. please try again");
}
}


function in js..


function hello(){ //function declare
    console.log('hello world');
}
hello(); //function call

loop in function..

function print1to10(){
    for (let i=1 ;i<=5; i++) {
        console.log(i);
}
}print1to10();

conditional statement in function..

let age = prompt("enter the age");
function isAdult(){
    if(age>18){
        console.log("Adult");
    }else{
        console.log("not adult");
    }
}isAdult();


create a function that prints a poem..


function printPoem(){
    console.log("Twinkle Twinkle little star");
    console.log("How I wonder what you are");
}
printPoem();


ceate a function to roll a dice and always display the value of the dice(1 to 6)..

function dice(){
    var randomNumber = Math.floor((Math.random() * 6)+1);//generate number between one-six using math.random method
    console.log(randomNumber);
}dice();


let num = 6;
let random = Math.floor(Math.random()*6)+1;
console.log(random);


function with arguments..


function printName(name,address){
    console.log(name,address);
}printName("vaibhav");
printName("hajipur");


function sum(num1,num2){
    console.log(num1+num2);
}sum(25,15);


create a function that gives us the averge of 3 numbers..

function avg3_No(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}avg3_No(5,10,15);

create a function that prints the multiplication table of a number.

function table(n){
    for(let i=n;i<=n*10; i=i+n ){
        console.log(i);
}
}table(5);


return keyword..


function sum(a,b){
    return(a+b);

}sum(10,5);


create a function that returns the sum of number from 1 to n.

function sum_of_1to_n(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum = sum+i;
    }return sum;
}

create a function that returns the concatenation of all strings in an array..

let arr = ["vaibhav","is","goodboy"];
function concat(arr){
    let result;
    for(let i=0; i<arr.length; i++){
       result+=arr[i];
    }
    return result;
}


function scope..

function calSum(a,b){
    let sum=(a+b);
    calSum();
}


practice question..

let greet = "hello"; //global scope
function changeGreet(){//function scope
    let greet = "namaste";
    console.log(greet);

    function innerGreen(){
        console.log(greet);//lexical scope
    }
innerGreen();
}
console.log(greet); 
changeGreet();


function expression..


let sum = function(a,b){
    console.log("sum is "+ (a + b));
return a+b;
}
sum(10,15);

let str = function(){
    console.log("vaibhav");
}
str();

higher order function...

function multipleGreet(func,n){
    for(let i=0;i<=n;i++){
        func();
    }
}

let greet = function(){
    console.log('Hello');
}

multipleGreet(greet,20);



let request = "odd";
function oddOrEvenFactory(request){
    if(request == odd){
        let odd = function(n){
            console.log(!(n%2==0));
        }
         return odd;
    }else if(request == even){
        let even = function(n){
           console.log(n%2==0);
        }
        return even;
    }else{
       console.log("wrong request");
    }
}

method..

const calculator = {
    num:25,

    add: function(a,b){
        return a+b;
    },

    sub: function(a,b){
        return a-b;
    },

    mul: function(a,b){
        return a*b;
    }

};

count the no vowels in string argument..
let str = "VAIBHAV";
str= str.toLowerCase();

function countVowels(str){

    let count = 0;

    for(let i=0; i<str.length;i++){
        if(
            str[i] === "a"||
            str[i] === "e"||
            str[i] === "i"||
            str[i] === "o"||
            str[i] === "u"
            ){
               count++;
            }
    }

    return count;     
    }


this keyword..

let student = {
    name:"vaibhav",
    age:21,
    eng:56,
    math:68,
    phsics:86,

    getAvg(){
      let avg = (this.eng+ this.math+ this.phsics)/3;
       console.log(avg);
    }

}



try and catch..

console.log("hello");
console.log(a);

try{
    console.log(a);
}catch{
    console.log("caught an error.. a is not defined");
}

console.log("hello2");


arrow function..

let sum = (a,b) => {
    console.log(a+b);
}

let cube = (n) =>{
console.log(n*n*n);
    return n*n*n;
}

implicit return ..

const mul = (a,b) => (a*b);


setTimeOut function..

console.log("vaibhav kr");

setTimeOut(function,timeout)..

setTimeout(() => {
    console.log('hi');
}, 4000); 


setInterval..
setInterval(() => {
    console.log('vaibhav kumar');
}, 4000); 

let id1 = setInterval(() => {
    console.log('vaibhav kumar');
}, 4000);

console.log(id1);
clearInterval(id1);


this with arrow functions..

const student = {
    name:"vaibhav",
    marks:85,
    prop:this, //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent's scope -> window
        return this.marks;
    },

    getInfo1: function () {
        setTimeout(() => {
            console.log(this); //student
        }, 2000);
    },

    getInfo2: function () {
        setInterval(() => {
            console.log(this); //window
        }, 2000);
    },
} 


write an arrow function that returns the square of a number 'n'...

const square = (n) => (n*n);
console.log(square(5));

write a function that prints "HELLO WORLD" 5 times at interval of 2s each..

let helloworld = 0;
let intervalId = setInterval(() => {
    console.log("hello world");
    helloworld++;


if(helloworld == 5){
   clearInterval(intervalId);
}
}, 2000);


let id = setInterval(() => {
    console.log('Hello World');
}, 2000);

setTimeout(() =>{
    clearInterval(id);
    console.log("clear interval ran");
}, 10000);



// Write an arrow function named array Average that accept sum array of numbers and returns the average of those numbers..

let arr = [1,2,3,4,5,6];
const arrayAverage = (arr) => {
    let sum = 0;
    for(let i=1;i<=arr.length; i++){
        sum+=i;
    }
    return sum / arr.length;
};
console.log(arrayAverage(arr));




// Write an arrow function named is Even() that takes a single number as argumentand returns if it is even or..not

let isEven = (n) => {
    if((n % 2)===0 ){
        console.log("even no");
    //   return true;
}else{
    console.log("odd no");
    // return false;
}
};

let isEven = (num) => (num % 2 == 0 );



const object = {
    message: "hello world!",

    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);



setTimeout(() =>{
    console.log("hello i am here");
    setTimeout(()=>{
        console.log("hello vaibhav");
    },1000);
},1000);

const bob = (a) => (a+100);

const func = (n) =>{
    return n*n;
}



Array Method..

let arr = [1, 2, 3, 4, 5];

arr.forEach(function (element) {
    console.log(element);
});

arrow function 

arr.forEach((element) => {
    console.log(element);
});

let number = [1,2,3];
number.forEach((num) => console.log(num));

for array object..

let arr = [{
    name: "vaibhav",
    marks: 85,
},
{
    name: "mohan",
    marks: 95,
},

{    name: "rohan",
    marks: 75,
}
];

arr.forEach((student) => {
    console.log(student.name,student.marks);
});

map..method

let num=[1 ,2, 3, 4, 5] ;

let double = num.map((element) =>{
    return element * 2;
});


let students = [{
    name: "vaibhav",
    marks: 85,
},
{
    name: "mohan",
    marks: 95,
},

{    name: "rohan",
    marks: 75,
}
];

let gpa = students.map((el) =>{
    return el.marks / 10;
});


filter..method

let nums = [1,2,3,4,5,6,7,8,9,10,11,12];

let even = nums.filter((el) => {
    return (el % 2 == 0 );
});



Every method..

let arr = [1,2,3,4];
let even = arr.every((el) =>{
    return (el % 2 == 0 );  //false
});

let arr=[2,4];
 let even = arr.every((el) =>{
    return (el % 2 == 0); //false
});


reduce..method

let arr = [1,2,3,4];

let finalValue = arr.reduce((res,el) =>{
    console.log(res);
    return (res + el); ///10
    
});
console.log(finalValue);


// find the maximum element in array..

let arr = [1,5,6,8,9,4,2];

let max = -1;

for(let i=0; i<arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
    }
}
console.log(max);

find tha maximum using reduce method..

let arr = [1,5,6,8,9,4,2];

let result = arr.reduce((max,el) =>{
    if(max<el){
        return el;
    }
    else{
        return max;
    }
})
console.log(result);


/every numbers in array are multiples of 10 or not..

let arr = [1,2,4,10,20];

let result = arr.every((el) => {
    return (el%10==0);
})
console.log(result);


min number in an array..

let arr = [2,3,4,5,1,6];

let result = arr.reduce((min,el) =>{
    if(min>el){
        return el;
    }
    else{
        return min;
    }
})
console.log(result);

using function..

let arr = [2,3,4,5,1,6];
function getMin(arr){
    let result = arr.reduce((min,el) =>{
        if(min>el){
            return el;
        }
        else{
            return min;
        }
        
    });
    return result;  
    
};
console.log(getMin(arr));


default parameter..


function sum(a, b=5){
    return (a+b);
}
console.log(sum(4));
 
spread in js..

let str = ("vaibhav kumar");
console.log(...str);//this is called spread operator...

spread with array literals..

let arr = [1,2,3,4,5];
console.log(...arr);

let char = ("vaibhav kumar");
console.log(...char);

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];
let nums = [...[1,3,5,7,9]]
console.log([...odd,...even]);


spread with object literals..

let data ={
    email:"kumarvaibhav@gmail.com",
    password:"vai123",
};
let dataCopy = {...data, id:123};

array in terms of object literals..

let arr = [1,2,3,4,5]; //key are indexes and value are index values
console.log({...arr});


let char= {..."vaibhav kumar" };

Rest..

function sum(...args){ //Arguments.
   for(let i=0; i<args.length;i++){
    console.log("you gave us: ",args[i]);
   }
}

function num(a,b,c,d){
    console.log(arguments); //Arguments is collection..
}


function min(...args){
    return args.reduce((min,el) =>{
    if (el < min ) {
        return el;
    }
    else{
        return min;
    }
    }); 
}


Destructing..

let names = ["vaibhav","rohan","mohan","sohan"];
let [winner,runnerup,losser] = names;
console.log(winner,runnerup,losser);

let names = ["vaibhav","rohan","mohan","sohan","gita","sunita","mita","sita"];

let [winner,runnerup,losser,...others] = names;


destructing for objects..

const student = {
    name: "vaibhav",
    age: 21,
    class:"b.tech",
    subjects:["dsa","pla","toc","coding"],
    username: "vai@879456",
    password: "as12345",
};

let { username, password} = student;

const student = {
    name: "vaibhav",
    age: 21,
    class:"b.tech",
    subjects:["dsa","pla","toc","coding"],
    username: "vai@879456",
    password: "as12345"
};

let { username:user, password:secrets} = student;

function abcd(){
    let num =24;
    return function(){
        console.log(num);
    }
}
let result =  abcd();
result();

event bubbling.

document.querySelector(".parent")
.addEventListener("click", function(){
    alert("Hello");
});

event capturing

document.querySelector(".parent")
.addEventListener("click", function(){
    alert("Hello");
}, true);

document.querySelector(".child")
.addEventListener("click", function(){
    alert("Hello2");
});

document.addEventListener('DOMContentLoaded', function () {
    const profileBtn = document.getElementById('profileBtn');
    const profileSection = document.getElementById('profileSection');

    profileBtn.addEventListener('click', function () {
        profileSection.classList.toggle('hidden');
    });
});



Encoding and decoding using Base64 function..
base64 means A-Z 26, a-z 26, 0-9 10, + , /

const str = "Welcome to coding dunia with javascript";
const encodedStr = btoa(str);

console.log(encodedStr);

const decodedStr = atob(encodedStr);

console.log(decodedStr);




convert the background color using prompt in js.

const color = prompt("Enter the color");
if(color){
    document.body.style.backgroundColor = color;
}
else{
    alert("please enter the color");
}

convert text into speech in javascript.

const speakBtn = document.querySelector("#play-btn");
const query = document.querySelector("#text");


speakBtn.addEventListener("click", playSpeech);
function playSpeech() {
    const speech = new SpeechSynthesisUtterance(query.value);
    speechSynthesis.speak(speech);
}    



find the year is leap year or not in js

const userYearInput = prompt("Enter a year:");
let year = parseInt(userYearInput);

if(!isNaN(year)){
    if(year%4===0){
        if (year%400!==0) {
            console.log(`${year} is Leap Year`);
        }else{
            console.log(`${year} is Not Leap Year`);
        }   
    }
    else{
        console.log(`${year} is Not Leap Year`);
    }
}else{
    alert("Please Enter Valid Input")
}

let a = "4";
let b = +a;

console.log(typeof b);


password generator

let passwordGenerator = (length) => {
    let temp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";
    let password = "";
    for (i=1 ; i <= length ; i++ ){
        let randomNumber = Math.floor(Math.random() * temp.length);
        password += temp[randomNumber];
    }
     return password;
}
console.log(passwordGenerator(8));


person become 100 year's old.

let userAge = prompt("Enter your age:");
useAge = parseInt(userAge);

if(isNaN(userAge)) {
    alert("Please enter a valid age as a number.");
}else{
  let currentYear = new Date().getFullYear();
  let yearOfBirth = currentYear - userAge;
  let yearWhen100 = yearOfBirth + 100;
  console.log(yearOfBirth);

  alert("You will turn 100 years old in this year " + yearWhen100 + ".");
}


form handling in js 

let form = document.getElementById("myForm");
form.addEventListener("submit", function(e) {
    e.preventDefault();//stop page reload
    let formData = new FormData(e.target);
    let formObj = Object.fromEntries(formData);
    console.log(formObj);
    console.log(JSON.stringify(formObj));
});


practice interview question

let num = 2;

let a = !--num;
let b = !--num;

console.log(a);
console.log(b);


function quizScope(){
    if(true){
        var x = 5;
    }
    console.log(x);
}
quizScope();

OTP generator

function otpGenerator(length){
    let otp = '';

    for (let i=0;i<length;i++){
        otp += Math.floor(Math.random()*10).toString();
    }

    return otp;

}
console.log(otpGenerator(4));

print the object value with idx and values in table form.
console.table(
    {name:"vaibhav",age:36,city:"Delhi"},
);

//Array of object
const name = [
    {name:"Vaibhav", age:36, city:"bhopal"},
    {name:"John", age:28, city:"delhi"},
    {name:"Emily", age:24, city:"patna"},
];

console.table(name);

























