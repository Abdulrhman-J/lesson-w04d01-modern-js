'use strict';




function whoIsTheBestStudent() {
    const studentName = 'Noura';
    console.log(studentName);
}

const addFive = (num) => 5 + num;

const divide = (num1, num2) => num1 / num2;

const whoIsTheBestStudent = () => {
    const studentName = 'Noura';
    console.log(studentName)
}


const fullName = (first, last) => first + last;
const sayHello = (name = 'Hello') => console.log(name + ' World!')

const whatTheWord = (word) => word + `${word} is the word!`;



//forEach
const instructors = ['Usman', 'Reem', 'Hazim', 'Mansour'];
const instructorsCopy = [];

instructors.forEach((item) => { instructorsCopy.push(item); });
////





const friends = ["Aisha", "Abdulrahman", "Sumayah"];
const friendsHi = [];

friends.forEach((item) => { friendsHi.push('Hello ' + item); });

// For each friend in friends, print "Hi friendName!"
// Write your solution here


// That's an array with crazy numbers we can't read 😯
const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
let total = 0;

// Sum all the numbers in nums and save the result in total
// Write your solution here
nums.forEach(function(item) {
    total += nums;
});


// These crazy numbers now are strings 😯 😯  !!  
const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
let totalNumbersUnder4000 = 0;

// Convert numbers from strings to numbers and 
stringNumbers.forEach(function(item) {
    if (item < 4000)
        totalNumbersUnder4000 += Number(item)
});
// sum all numbers under 4000 and store them 
// in totalNumbersUnder4000
//
// Write your solution here

// new
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let times100 = [];

times100 = nums.map(item => item * 100);
// Write your solution here


const iAS = ['alanoud', 'reem', 'hazim', 'mansour'];
let capitalizedIAs = [];

// Write your solution here
capitalizedIAs = iAS.map(function(word) {
    return word.toUpperCase();
});


//new 
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let dayAbbreviations = [];

// Find the abbreviation of all days and add them to dayAbbreviations array
// Write your solution here
dayAbbreviations = days.map(function(day) {
    return day.substring(0, 3).toUpperCase();
});

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 = [];

// century20 should be: [1989, 2000, 1999, 1973]
// Write your solution here

century20 = years.map(x => {
    if (x >= 1900 && x <= 2000) {
        return x;
    }
});


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Write your solution here
console.log(result);
const divisibleBy = nums.filter(x => {
    if (x % 3 === 0) {
        return x
    }
});

// new 

const names = ["Lamees", "Nawal", "Mesfer"];
// Write your solution here
console.log(result);

const nameA = names.filter(x => x.charAt('a'));

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
let sum = arr.reduce((nums) => {
    return nums += sum;
});