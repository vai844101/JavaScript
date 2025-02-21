//100 days of javascript coding challenge
//Day 01

//Longest Word in a String
/*Write a function called longestWordLength that takes in a string as input and returns the longest word in the string. If there are multiple longest words return the first one encounterd.*/
//Comparison function in array but we have string first convert string into array.

//First method to solve
const findLongestWord = (str) => {
    if(str.trim().length === 0){
        return false;
    }

    strArr = str.split(" ");//string to array convert
    // console.log(strArr);
    strArr = strArr.sort((a, b) => b.length - a.length); //comparison function with parameter a and b.
    console.log(strArr);
    // return strArr.at(-1);
    return strArr[0];

};

console.log(findLongestWord("Hello This is an Example String"));

//Second method to solve using reduce method
const findLongestWord = (str) => {
    if(str.trim().length === 0){
        return false;
    }

    strArr = str.split(" ");
    console.log(strArr);

    return strArr.reduce((accum, currWord) => currWord.length > accum.length ? currWord : accum);

}

console.log(findLongestWord("Hello This is an Example String"));

//Day 02
//Hash Tag Generator

//The input atring should be converted to a hash tag format, where each word capitalized and concatenated together without space.

// return false if length is greater tha 280 or whitespace or empty string

//generate hash tag prefixed with #

const hashTagGenerate = (str) => {
    if(str.length > 280 || str.trim().length === 0){
        return false;
    }

    strArr = str.split(" ");
    strArr = strArr.map((currElem) => currElem.replace(currElem[0], currElem[0].toUpperCase()));

    strArr = `#${strArr.join("")}`;
    // console.log(strArr);
    return strArr;

};

console.log(hashTagGenerate("My name is vaibhav kumar"));

// 2nd method

const hashTagGenerate = (str) => {
    if(str.length > 280 || str.trim().length === 0){
        return false;
    }

    strArr = str.split(" ");
    strArr = strArr.map((currElem) => currElem.charAt(0).toUpperCase() + currElem.slice(1));

    strArr = `#${strArr.join("")}`;
    // console.log(strArr);
    return strArr;

};

let str = "My name is vaibhav kumar";
console.log(hashTagGenerate(str));

//Day 03

//Count Occurrences of Character
//function takes two parameters: a string and a character. fuction should return the number of times the specified character appears in the string.

//function should be case sensative and should handle both uppercase and lowercase characters.

const countChar = (str, char) => {
  str = str.toLowerCase();
  char = char.toLowerCase();

  strArr = str.split("");
  totalCountChar = strArr.reduce((accum, currChar) => {
    if (currChar === char) {
      accum++;
    }
    return accum;
  }, 0);

  return totalCountChar;
};

console.log(countChar("MissIssippi", "s"));

//Day4
//Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. the function should return a string indicating the type of triangle: "euilateral", "isosceles", or "scalene".

const checkTriangleType = (a, b, c)=> {
   if(a===b && b===c){
    return "Equilateral"
   }
   else if(a===b || a===c || b===c){
    return "Isosceles"
   }
   return "Scalene";
};

console.log(checkTriangleType(6, 6, 6));//equilateral
console.log(checkTriangleType(6, 5, 6));//isosceles
console.log(checkTriangleType(6, 5, 8));//scalene

//Day 05
//write a function to sort an array of numbers in ascending order.
//not use buit in sort method of js.

const sortAscending = (arr) => {
   return arr.sort((a, b) => a - b);//comparison function.
};

console.log(sortAscending([5, 3, 1, 8]));

//Day 06
//write a function to determine wheather a given string is a palindrome or not. A palindrome is a word, phrase, number, or other squence of characters that reads the same forward and backward, ignoring spaces, punctuation and capitalization.

const isPalindrome = (str) => {
   str = str.toLowerCase().replace(/\W/g, '');//remove all non-word characters and convert to lowercase.
   console.log(str);
   let reverseStr = str.split("").reverse().join("");
   console.log(reverseStr);
   return str === reverseStr ? true : false;
   
}
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

const isPalindrome = (num) => {
   let numStr = num.toString(); 
   let reverseNum = numStr.split("").reverse().join("");
   console.log(reverseNum);
   return numStr === reverseNum ? true : false;
   
}

let num = 343;
if(isPalindrome(num)){
    console.log(num + "is a palindrome.");
}else{
    console.log*(num + " is not a palindrome.");
}


//Day 7
//write a function findMax that takes an array of numbers as input and returns the maximum number in the array.

// method 1
const findMax = (arr) => {
   console.log(...arr);
   return Math.max(...arr);//convert single value using spread operator.
}
console.log(findMax([1, 4, 6, 9, 2, 15]));
console.log(findMax([-1, -4, -6, -9, -2]));

//Only You have a number
const findMax = () => {
    return Math.max(1,32,56,35);
}
console.log(findMax());

//method 2
const findMax = () => {
    if(arr.length === 0){
        return false;
    }
    let max = arr[0];

    for(let i =1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

let arr = [1, 4, 6, 19, 2, 15];
console.log(findMax(arr));

//Day -08
//challenge: Factorial Finder

//write a function factorial that takes a non negative integer num as input and returns its factorial. The factorial of non-negative integer n, denotes as n!, is product of all positive integers less than or requal to n. The factorial of 0 is defined as 1.

//your function should work for any non-negative input.

const factorial = (num) => {
    if(num<0){
        return "Enter positive number";
    }
    let fact = 1;
    for(let i=1; i<=num; i++){
        fact = fact*i;
    }
    return fact;
}
console.log(factorial(5)); //120


// Day - 09
//Calculate the Average of array of numbers as input and returns and average of those numbers.

const avgArray = (array) =>{
    let total = array.reduce((accum, currElem) => accum + currElem , 0);
    return  total/array.length;
}
console.log(avgArray([5, 10, 2, 8]));//6.25

//Day - 10
//write a function arrayAreEqual that takes two arryas arr1 and arr2 as input and returns true if the arrays are equal (contains the same elements in the same order), and false otherwise.

const ArrayAreEqual = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        return false;
    } 
   
    return arr1.every((currVal, index) => currVal === arr2[index]);
}
console.log(ArrayAreEqual([1, 2, 3], [1, 2, 3]));//true
console.log(ArrayAreEqual([1, 2, 3], [1, 2, 4]));//false
console.log(ArrayAreEqual([], []));//true
console.log(ArrayAreEqual([1, 2, 3], [1, 2, 3, 4]));//false

//Day 11
//Write a function that takes an number as input and returns the sum of its digit.
//the number will always be a positive integer.
//the input number can have multiple digits.

const sumOfDigits = (num) => {
    //convert num to  string of array.
    let arr = Array.from(String(num), Number);
    console.log(arr);
    //apply reduce method on array
    //take current element with previous value and add

    return arr.reduce((accum , currEle) => accum += currEle, 0);

}
console.log(sumOfDigits(12345));//15

//Day -12
//Write a function that takes an array of integers as input and removes any duplicates elements returning a new array with only the unique elements.

//Contraints
//The input array may contains both positive and negative integers.
//input array may be empty.
//elements in the input array are not guaranteed to be sorted.
//the output array should retain the original order of elemnts from input array.

const removeDuplicates = (arr) => {
    The new Set() method in javascript creates a new Set of objects. A set is object is collection of unique values. It can store any types of value, whether primitives values or object references.
    let newArr = new Set(arr);
    return [...newArr]; //spread operator
}

console.log(removeDuplicates([1, 2, 3, 2, 1, 4]));
console.log(removeDuplicates([3, 2, 4, 2, 3]));
console.log(removeDuplicates([]));

//Day - 13
/*Write a function that takes a string as input and returns the count of vowels in that string. Consider 'a', 'e' , 'i', 'o', 'u' as vowels (both lowercase and uppercase) */

//Constraints 
//The input string may contains in both uppercase and lowercase.
//The output should be non negative integer representing the count of vowels in the input string.

const countVowels = (str) => {
    let vowels = ["a", "e", "i", "o", "u"];
    let arr = str.split("");
    // console.log(arr);
    
    let count = 0;
    for(char of arr){
        if(vowels.includes(char.toLowerCase())){
            count++;
        }
    }
    return count;
}
console.log(countVowels('Hello World'));//Output: 3
console.log(countVowels("ThE quIck brOwn fOx"));//output: 5
console.log(countVowels("Brrp"));//output: 0 */



//Day - 14
//Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two, and false otherwise.

//The input num will be a positive integer.
//Zero(0) and negative are not consider powers of two.
//The function should return true if the given number is power of 2 otherwise false.

const isPowerOfTwo = (num) =>{
    if(num === 0 || num < 0 ){
        return false;
    }
    let result = false;
    for(let i =1; i<num; i++){
        if(2**i === num){
            result = true;
        }
    }
    return result;
}
console.log(isPowerOfTwo(8));//true
console.log(isPowerOfTwo(7));//false

const isPowerOfTwo = (num) => {
    //using bitwise AND operator.
    if(num>0 && (num & (num-1)) == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isPowerOfTwo(8));//true
console.log(isPowerOfTwo(5));//false

//Day 15
//Write a function to calculate the sum of aquares ofall elements in an array. For example given array [1,2,3], the function return 14 because 1**1+ 2**2+3**3 = 1 + 4 + 9 = 14.

const sumOfSquare = (arr) => {
    return arr.reduce((accum, currEle) => (accum = accum + currEle*currEle) ,0);
};

//2nd method
const sumOfSquare = (arr) => {
    let sum = 0;
    for(let i =0; i<arr.length; i++){
        let power = Math.pow(arr[i],2);
        sum +=power;
    }
    another loop method
    for(let elem of arr){
        sum = sum + (elem * elem);
    }
    return sum;
}
console.log(sumOfSquare([1, 2, 3, 4]));

//Day 16
//Find the Minimum Value in an Array.
//Write a function findMin takes an array of numbers as input and returns the minimum value found in array.

//Constraints
//The input array may contain both positive and negative integers.
//The input array may be empty.
//The input array may contain duplicates vaues.

const findMinValue = (arr) => {
  let min = arr.sort((a, b) => {
    if(a < b) return -1;
  });
  return min[0];
}

//2nd method 
const findMinValue = (arr) => {
    if(arr.length === 0) return "Array is empty";
    return Math.min(...arr);
};

console.log(findMinValue([5, 10, 2, 8]));
console.log(findMinValue([5, -3, 0, 12, -7]));

//Day 17
write a function to convert a string to camelCase & snake_case.

const  toCamelCase = (str) =>{
   str = str.trim().split(" ");
   str = str.map((currEle, index) => {
    if(index === 0){
        return currEle.toLowerCase();
    }
    else{
        return currEle.charAt(0).toUpperCase() + currEle.slice(1).toLowerCase();
    }
    });
    // console.log(str);
    return str.join('');
}
console.log(toCamelCase("hello world"));//helloWorld

//Snake case

const  toCamelCase = (str) =>{
   str = str.trim().split(" ");
   str = str.map((currEle, index) => {
    if(index === 0){
        return currEle.toLowerCase();
    }
    else{
        return currEle.charAt(0).toLowerCase() + currEle.slice(1).toLowerCase();
    }
    });
    // console.log(str);
    return str.join('');
}
console.log(toCamelCase("helloWorld"));//helloworld

//Day 18
//Write a function to check if a character is uppercase or lowercase.

//Constraints:
//the input char will be a single character.
//the character can be any printable ASCII character.
//you can assume that the input will always be a string of length 1.

const isUpperCase = (char) => {
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
        return true;
    }
    return false;
};
console.log(isUpperCase('A'));//true

2nd Method 
const isUpperCase = (char) => {
    return char === char.toUpperCase();
}
console.log(isUpperCase('A'));//true


//Day 19
//Write a function to check if a string starts with a specific subString.

str: A string(eg.. "Hello world").
// subStr: A subString to check if it starts the given string(eg .. "Hello").
// Output: true if the given string starts with the specified subString , otherwise false.


const startsWithSubStr = (str, subStr) => {
    //startsWith is js method.
    return str.toLowerCase().startsWith(subStr.toLowerCase());
}

console.log(startsWithSubStr("Hello world", "hello"));//output : true
console.log(startsWithSubStr("Hello world", "world")); //output : false


//2Nd Method

const startsWithSubStr = (str, subStr) => {
    return str.toLowerCase().slice(0, subStr.length) === subStr.toLowerCase();
}

console.log(startsWithSubStr("Hello world", "Hello"));//output : true
console.log(startsWithSubStr("Hello world", "world")); //output : false

const str = "vaibhav";
const result = str.slice(0,4);
console.log(`The first four characters of ${result}`);


//Day 20
//write a function to reverse a string without using any buit-in methods or libraries. The function should take a string as input and return the reversed string.


const reverseStr = (str) => {
    let r_Str = "";
    for(let i=str.length -1; i>=0; i--){
        r_Str += str[i];
    }
    return r_Str;
};
console.log(reverseStr("Hello World"));//dlroW olleH

function(){
    var a = b = 5;
})();
console.log(b) //5 because not declare let const var with variable b its means it is a global variable.

