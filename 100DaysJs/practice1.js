//Day 21
//Write a function called calculateMean that takes array of numbers as input and returns the mean (average) of those numbers.

//constraints 
//the input array may contain positive and negative integers.
//the input array may be empty. if it is empty the function should return 0.

/*
const calculateMean = (arr) =>{
    if( arr.length === 0){
        return 0;
    }
    let mean = arr.reduce((accum, currEle) => accum = accum + currEle, 0);
    return mean / arr.length;
}
console.log(calculateMean([1, 2, 3, 4, 5]));//3
console.log(calculateMean([10, 20, 30]));//20
console.log(calculateMean([-1, 0, 1]));
console.log(calculateMean([]));//0
*/

//Day-22
//Write a javascript function findMedian(arr) that takes an array of numbers as input and returns thr median value. if the array has an even number of elements , return the average of the two middle values.

//Sort the array in ascending order.
//if the array has an odd number of elemnts, the median is the middle element.
//if the array has an even number of elemnts, the median is the average of the two middle elements.

/*
const findMedian = (arr) => {
    //sort the array
    const sortedArr = arr.sort((a, b) => a-b);
    console.log(sortedArr);
    //check array length is odd or even
    let length = arr.length;
    let mid = Math.floor(length / 2);
    //for even
    if(length % 2 === 0){
        return (arr[mid] + arr[mid-1]) / 2;
    }
    //for odd
    else{
        return arr[mid];
    }
};

console.log(findMedian([5, 3, 9, 1, 7]));//5
console.log(findMedian([2, 4, 6, 8]));//5
console.log(findMedian([1, 3, 5, 7, 9, 11]));//6
*/

//Day 24
//Write a function called findMode that takes array of numbers as input and return the mode of the array (the number that appers most frequency).

//The input array will always contains at least one element.
//The mode will always be unique (there won't be multiple numbers with the highest frequency).

// function findMode(arr){
//     let counts = {};
//     let maxNum = 0;
//     let mode;

//     for(let element of arr){
//         counts[element] = (counts[element] || 0) + 1;
//         if(counts[element] > maxNum){
//             maxNum = counts[element];
//             mode = element;
//         }
//     }
//     // console.log(counts);
//     return mode;
// }

// console.log(findMode([1, 2, 2 , 3, 1, 4, 2]));//2

//Day 25
// Write a function to calculate the factorial of a number(using Recursion).

//Recursion is programming technique where a function calls itself in order to solve a problem. In essence, it is a function that calls itself with smaller or simpler input until it reaches a base case.

//Base case is the condition in a recursive function that stops the recursion. It is the point at which the function stops calling itself and return a value without further recursion.Without the base case the recusrsive function would continue calling itself indefinitely,leading to what is known as infinite recursion.

//Recursive case is the condition in a recursive function that determines when the function should calls itself again. It is typically an expression or condition that evalutaes to true for certain inputs, indicating that further recursion is neccesssary to solve the problem. Ecah recursive call should move closer to the base case eventually leading to termination of the recursion.

// const factorial = (num) =>{
//     if(num === 0){ //base case
//         return 1;
//     }
//     else{
//         return num*factorial(num-1);
//     }
// }

// console.log(factorial(5))//120.

//Day 26
//write a function to find the nth fibonacci number.

//The fibonacci series is a sequence of numbers in which each number (fibonacci number) is the sum of the two preceding onces.
// It starts with 0 and 1 and the subsequent numbers are calculated by adding the last two numbers. so the fibonacci series looks like this 0, 1 ,1 , 2 ,3, 5, 8, 13, 21.

//Fibonacci number is calculated using the following formula
//F(n) = F(n-1) + F(n-2), where, F(1) = F(2) = 1.

// const fibonacci = (num) => {
//     if(num <= 1){ //base case
//         return num;
//     }
//     else{
//         return fibonacci(num-1) + fibonacci(num-2);
//     }

// }

// console.log(fibonacci(0));//0
// console.log(fibonacci(1));//1
// console.log(fibonacci(2));//1
// console.log(fibonacci(3));//2
// console.log(fibonacci(4));//3
// console.log(fibonacci(5));//5
// console.log(fibonacci(10));//55

//Day 27
//Write a function called repeatString that takes two parameter.
// num: An integer representing the number of times string should be repeated.
// The function should repeat the input string str the specified number of times num and return the resulting string.

//constraints:
//The input string str will contain only alphanumeric characters punctuation marks.
//The input number num will be a non-negative integer.
//The output string length should not exceed the length of str multiplied by num.

//1st method
// const repeatString = (str,num) => {
//     let repeatStr = "";
//     for(let i = 0; i < num; i++){
//         repeatStr += str;
//     }
//     return repeatStr;
// }
// console.log(repeatString("abc", 5));//"abcabcabcabcabc"

//2nd method
// const repeatString = (str,num) => {
//     return num > 0 ? str.repeat(num) : str; //.repeat is method in js
// }
// console.log(repeatString("abc", 5));//"abcabcabcabcabc"

//Day 28
//Truncate a string

//Write a function called truncateString that takes two parameters.

//str: A string that needs to be truncated.
//max length: An integer representing the maximum length of the string allowed.
// The function should truncate the input string str if its length exceeds the specified maxlength.If truncation occurs, the function should add '...' to the end of the truncated string.

//Constraints
//The input string string str will contain only alphanumeric characters and punctuation marks.
//The maximum length maxlength will be a positive integer.
//the output string length should not exceed maxlength + 3 characters due to the addition of '...'.


// const truncateString = (str, count) => {
//     if(count <= 0){
//         return str;
//     }
//     else if(str.length > count){
//         return str.slice(0, count).concat('...');
        //or use substring
        // return str.substring(0, count).concat('...');
//     }
// }

// console.log(truncateString("A-tisket a-tisket A green and yellow basket", 8)); //"A-tisket..."

//2nd Method by using ternary operator.
// const truncateString = (str, count) => {
//     return count <=0 ? str : str.substring(0, count).concat('...');
// }
// console.log(truncateString("A-tisket a-tisket A green and yellow basket", 8)); //"A-tisket..."

//Practice question
//Print the reverse string without reverse the special charater present the string.
//Input -- Ab#c%d
//output --dc#b%A
//using two pointer approach.

// const isAlphabet = (char) => {
//     return ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z") || (char >= 0 && char <= 9));
// }

// const reverseString = (str) => {
//     let arr = str.split("");
//     let i = 0; j= arr.length-1;
//     while(i<j){
//         if(!isAlphabet(arr[i])){
//             i++;
//         }
//         else if(!isAlphabet(arr[j])){
//             j--;
//         }
//         else{
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//             i++;
//             j--;
//         }
//     }
//     return arr.join("");
// }


// console.log(reverseString("DCl1b%a*"));

//Day 29

//Number Range generator

//Write a function called numberRange that generates an array containning consecutive numbers from a to b(inclusive).

// const numberRange = (startNum, endNum) => {
//     let arr = [];
//     while(startNum<=endNum){
//         arr.push(startNum)
//         startNum++;
//     }
//     return arr;
// }
// console.log(numberRange(0, 5));//[0,1,2,3,4,5]
// console.log(numberRange(-3, 3));//[-3,-2,-1,0,1,2,3]

//Day 30
//Number Range generator recursive

// const numberRangeRecursive = (a,b, arr = []) => {
//     if(a<=b){
//         arr.push(a);
//         return numberRangeRecursive(a + 1, b, arr);
//     }
//     return arr;
// }
// console.log(numberRangeRecursive(0, 5));

//Day 31
//Simple Password Validator

//Write a function called simplePasswordValidator that takse a single parameters.

//password -- A string representing the a password the password to be validate.

//The password must should contain at least one lowercase letter , one uppercase letter, and one digit.and its length of password must be at least 8 characters.

//The function should return true if the password meets all the criteria, otherwise it should return false.

//Input -- Password -- A non-empty string representing the password to be validated.

//The input string password will contain only alphanumeric characters and punctuation marks.

// const simplePasswordValidator = (password) => {
//     let hasLowerCase = false;
//     let hasUpperCase = false;
//     let hasNumber = false;

//     for(let char of password){
//         if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
//             hasUpperCase = true;
//         }
//         else if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
//             hasLowerCase = true;
//         }
//         else if(!isNaN(Number(char))){ //convert str char to number --Number()
//             hasNumber = true;
//         }
//     }
//     if(!hasLowerCase || !hasUpperCase || !hasNumber || password.length < 8){
//         return false;
//     }

//     return true;
// }

// console.log(simplePasswordValidator("afkgsdsbj"))//false
// console.log(simplePasswordValidator("afkgsdsbj1"))//false
// console.log(simplePasswordValidator("afkgsdsbj2A"))//true
// console.log(simplePasswordValidator("afkgsdsbj387B"))//true

// 2nd mathod

// function simplePasswordValidator(password) {
//     // Check if the password length is at least 8 characters
//     if (password.length < 8) {
//         return false;
//     }

//     // Initialize variables to check for required characters
//     let hasLowercase = false;
//     let hasUppercase = false;
//     let hasDigit = false;

//     // Loop through each character in the password to check for required characters
//     for (let i = 0; i < password.length; i++) {
//         let char = password[i];
//         if (char >= 'a' && char <= 'z') {
//             hasLowercase = true;
//         } else if (char >= 'A' && char <= 'Z') {
//             hasUppercase = true;
//         } else if (char >= '0' && char <= '9') {
//             hasDigit = true;
//         }

//         // If all conditions are met, no need to continue checking
//         if (hasLowercase && hasUppercase && hasDigit) {
//             return true;
//         }
//     }

//     // Return false if any condition is not met
//     return false;
// }

// // Test cases
// console.log(simplePasswordValidator("Password1")); // true
// console.log(simplePasswordValidator("password1")); // false (no uppercase letter)
// console.log(simplePasswordValidator("PASSWORD1")); // false (no lowercase letter)
// console.log(simplePasswordValidator("Password"));  // false (no digit)
// console.log(simplePasswordValidator("Pass1"));     // false (less than 8 characters)


//Day 33
//Random Hex color Generator

// const randomHexColor = () => {
//     return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
// };

// console.log(randomHexColor())


//Day 34
//Remove the duplicates from an array.

// const removeDuplicates = (arr) => {
//     return [...new Set(arr)];
// }

//In one line
// const removeDuplicates = (arr) => [...new set(arr)];

// console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5]))
// console.log(removeDuplicates(["a", "b", "c", "b", "a"]))

//Day 35
//check object is Emptiness.
//write a function isEmptyObject that takes an object as input and determines it is empty or not. An empty object is defined as an object with no own properties.

//1st method
// const isEmptyObject = (obj) => {
//    for(let key in obj){
//     if(obj.hasOwnProperty(key)){
//         return "It is not empty";
//     }
//    } 
//    return "It is empty";
// };

//2nd method
// const isEmptyObject = (obj) => {
//     if(Object.keys(obj).length == 0){
//         return "It is empty";
//     }
//     return "It is not empty";
// };

//1line code
// const isEmptyObject = (obj) => {return Object.keys(obj) == 0};

// console.log(isEmptyObject({name: "vaibhav" }));
// console.log(isEmptyObject({}));
// console.log(isEmptyObject({keyWithNull : null }));
// console.log(isEmptyObject({keyWithUndefined : undefined }));


//Day 36
//Convert object to Array and Vice versa.
//Convert Object to Array: Write a function objectToArray that takes an object as input and returns an array of key-value pairs, where each elemnt in the array is an array with two elemnts : the key and the corresponding value from the object.

// const obj = {
//     name: "vaibhav",
//     age: 21,
//     gender: "male",
//     city: "patna",
// };

//Convert the object to an array of key-value pairs.
//1st method
// let array = Object.entries(obj);
// console.log(array); // [["name", "vaibhav"], ["age", 21],
// console.log(array.flat());

//2nd method
// const objectToArray = Object.values(obj);
// console.log(objectToArray); //["vaibhav", 21, "male", "patna"]

//3rd method
// const objectToArray = Object.keys(obj).map(key => obj[key]);
// console.log(objectToArray); //["vaibhav", 21, "male", "pat

//Convert the array of key value pairs back to object.
//1st method
// const obj = {
//     name: "vaibhav",
//     age: 21,
//     gender: "male",
//     city: "patna",
// };
// let array = Object.entries(obj);
// console.log(Object.fromEntries(array)); //arr-obj

//2nd method

// let arr = ["vaibhav",21,"patna"];
// const object = Object.assign({}, arr);
// console.log(object);

//Day 37
//Simple Interest Calculator.

// const calculteSimpleInterest = (p,r,t) => {
//     return (p*r*t)/100;
// }
// console.log(calculteSimpleInterest(1000,5,3));

//Day 38
//Numbers of Days Between Two Dates.
//Write  a function calculateDaysBetweenDates that claculates the number of days between two dates. The dates will be provided in the format "YYYY-MM-DD".

//Hint 
//convert time to Days = 24*60*60*1000
//let currDate = new Date()
//currDate.toLocalDateString()
//currDate.toLocalTimeString()

// const calculateDaysBetweenDates = (d1, d2) => {
//     let date1 = new Date(d1);
//     let date2 = new Date(d2);
//     let diff = Math.abs(date1 - date2);//ms-time
//     console.log(diff);
//     let days = diff / (24 * 60 * 60 * 1000);
//     return days;
// }

// console.log(calculateDaysBetweenDates("2024-01-01", "2024-01-31"))//30

//Day 39
//Calculate Age from Birthdate.
//Write a function calculateAge that takes a birthDate as input and returns your age. The birthDate  will be provided in the format "YYYY-MM-DD".

// const calculateAge = (d) => {
//     let birthDate = new Date(d);
//     let today = new Date();

//     //age --year
//     let age = today.getFullYear() - birthDate.getFullYear();
//     // console.log(age);

//     //age --month
//     let month = today.getMonth() - birthDate.getMonth();
//     console.log(month);
//     if(month < 0 || month === 0 && today.getDate() < birthDate.getDate()){
//         age = age - 1;
//     }
//     return age;

// }

// console.log(calculateAge("2002-10-25"));
