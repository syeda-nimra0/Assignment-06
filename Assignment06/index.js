// QUESTION # 01;
var multiArray = [[], [], []];
// QUESTION # 02;
let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];

document.write("<h3>Matrix:</h3>");

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    document.write(matrix[i][j] + " ");
  }
  document.write("<br>");
}
// QUESTION # 03;
for (let k = 1; k <= 10; k++) {
  document.write(k + "<br>")
}
// QUESTION # 04;
let num = +prompt("Enter a number for multiplication table:");
let len = +prompt("Mention the length of multiplication table:");
document.write("<h1>Multiplication Table of " + num + "</h1>");
for (let i = 1; i <= len; i++) {
  document.write(num + " x " + i + " = " + (num * i) + "<br>");
}
// QUESTION # 05;
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<h3>Fruits List:</h3>");
for (let a = 0; a < fruits.length; a++) {
  document.write(fruits[a] + "<br>");
  document.write("Element at index " + a + " is " + fruits[a] + "<br>");
}
// QUESTION # 06;
// part 1;
document.write("<h3><b>Counting:</b></h3>");
for (let b = 1; b <= 15; b++) {
  document.write(b + ",");
}
// part 2;
document.write("<h3><b>Reverse Counting:</b></h3>");
for (let c = 10; c >= 1; c--) {
  document.write(c + ",");
}
// part 3;
document.write("<h3><b>Even Numbers:</b></h3>");
for (let d = 0; d <= 20; d += 2) {
  if (d < 20) {
    document.write(d + ",");
  } else {
    document.write(d);
  }
}
// part 4;
document.write("<h3><b>Odd Numbers:</b></h3>");
for (let e = 1; e <= 20; e += 2) {
  if (e < 20) {
    document.write(e + ",");
  } else {
    document.write(e);
  }
}
// part 5;
document.write("<h3><b>Series:</b></h3>");
for (let f = 2; f <= 20; f += 2) {
  if (f < 20) {
    document.write(f + "k" + ",");
  } else {
    document.write(f + "k");
  }
}
document.write("<br>");
// QUESTION # 07;
let items = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Welcome! what do you want to order?");
let itemFound = false;
for (let product = 0; product <= items.length; product++) {
  if (userInput === items) {
    itemFound = true;
    document.write(userInput + " is available at index " + product + " in our bakery");
    break;
  }
}
if (itemFound === false) {
  alert("We are sorry " + userInput + " is not available in our bakery");
}
// QUESTION # 08;
let A = [24, 53, 78, 91, 12];
let largestnum = [0];
for (let g = 0; g < A.length; g++) {
  if (A[g] > largestnum) {
    largestnum = A[g];
  }
}
document.write("Array items: 24,53,78,91,12<br>");
document.write("<h3> The largest number is: " + largestnum + "</h3>");
// QUESTION # 09: finding smallest number;
let smallestNum = A[0];
for (let h = 1; h < A.length; h++) {
  if (A[h] < smallestNum) {
    smallestNum = A[h];
  }
}
document.write("Array items: 24,53,78,91,12<br>");
document.write("<h3> The smallest number is: " + smallestNum + "</h3>");
// QUESTION # 10;
document.write("<h3>Multiple of 5 from 1 to 100:</h3>");
for (let n = 5; n <= 100; n += 5) {
  if (n > 5) {
    document.write(n + ", ");
  } else {
    document.write(n);
  }
}

// ======end=======

// Chapter 21-25: STRING METHODS;
// QUESTION # 01;
let firstName = prompt("Enter your 1st name:");
let lastName = prompt("Enter your 2nd name:");
let fullName = firstName + " " + lastName;
alert("Welcome " + fullName + "!");
// QUESTION # 06;
let fullName2 = firstName.concat(" ", lastName);
alert("Welcome " + fullName2 + "! (Its concatinated)")
// QUESTION # 02;
let favMobile = prompt("Enter your favourite mobile model name:").toLowerCase();
let userFav = favMobile.length;
document.write("<h3>My favourite phone is: " + favMobile + "</h3>");
document.write("String index: " + userFav + "<br>");
// QUESTION # 03;
let word = "Pakistani";
let indexOfword = word.indexOf("n");
document.write("<h3>String:" + word + "</h3>");
document.write("<h4>Index of 'n' is :" + indexOfword + "</h4>");
// question # 04;
let word2 = "Hello World";
let wordlastIndex = word2.lastIndexOf("l");
document.write("<h3>String:" + word2 + "</h3>");
document.write("<h4>The last Index of 'l' is :" + wordlastIndex + "</h4>");
// QUESTION # 05;
let word3 = "Pakistani";
let charIndex = word3.charAt(3);
document.write("<h3>String:" + word3 + "</h3>");
document.write("<h4>Character at index 3 is :" + charIndex + "</h4>");
// QUESTION # 07;
let originalCity = "Hyderabad";
let newCity = originalCity.replace("Hyder", "Islam");
document.write("<h3>Original City is :" + originalCity + "</h3>");
document.write("<h4>After replacement :" + newCity + "</h4>");
// QUESTION # O8;
let message = "Ali and Sami are best friends. They play cricket and football together.";
let newMessage = message.replace(/and/g, "&");
document.write("<h3>Original Message :" + message + "</h3>");
document.write("<h4>Updated message :" + newMessage + "</h4>");
// QUESTION # 09;
var value = "472";
document.write("Value:" + value + "<br>");
document.write("Type of value before conversion: " + typeof value + "<br>");
let value2 = Number(value);
document.write("Converted value: " + value2 + "<br>");
document.write("Type of value after conversion: " + typeof value2 + "<br>");
// QUESTION # 10;
var userText = prompt("enter any text:");
var capitalText = userText.toUpperCase();
document.write("Original text: " + userText + "<br>");
document.write("Converted text: " + capitalText + "<br>");
// QUESTION # 11;
let userInput2 = prompt("Enter any text:");
let titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
document.write("Original: " + userInput + "<br>");
document.write("Title case: " + titleCase + "<br>");
// QUESTION # 12;
var numS = 35.36;               
var str = num.toString();      
var result = str.replace(".", "");  
document.write("Result: " + result); 
// QUESTION # 13;
let username = prompt("Enter your username:");
let invalidChars = ['@', '.', ',', '!'];
let isValid = true;
for (let i = 0; i < username.length; i++) {
  if (invalidChars.includes(username[i])) {
    isValid = false;
    break;
  }
}
if (!isValid) {
  alert("Please enter a valid username");
} else {
  alert("Username accepted: " + username);
}
// QUESTION # 14;
let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
let userSearch = prompt("Welcome! What do you want to order?").toLowerCase();
let found = false;
for (let i = 0; i < bakeryItems.length; i++) {
  if (userSearch === bakeryItems[i]) {
    found = true;
    alert(userSearch + " is available at index " + i + " in our bakery");
    break;
  }
}
if (!found) {
  alert("We are sorry, " + userSearch + " is not available in our bakery.");
}
// QUESTION # 15;
let password = prompt("Enter your password:");
let hasLetter = false;
let hasNumber = false;
for (let i = 0; i < password.length; i++) {
  let char = password[i];
  if (isNaN(char)) {
    hasLetter = true;
  } else {
    hasNumber = true;
  }
}
if (password.length < 6) {
  alert("Password must be at least 6 characters long.");
} else if (!isNaN(password[0])) {
  alert("Password should not start with a number.");
} else if (!(hasLetter && hasNumber)) {
  alert("Password must contain both letters and numbers.");
} else {
  alert("Password is valid!");
}
// QUESTION # 16;
let uni = "University of Karachi";
let splitArr = uni.split("");
for (let i = 0; i < splitArr.length; i++) {
  document.write(splitArr[i] + "<br>");
}
// QUESTION # 17;
let userInput3 = prompt("Enter anything:");
let lastChar = userInput[userInput.length - 1];
document.write("Last character of input: " + lastChar);
// QUESTION # 18;
let sentence = "The quick brown fox jumps over the lazy dog";
let lowerSentence = sentence.toLowerCase();
let wordArr = lowerSentence.split(" ");
let count = 0;
for (let i = 0; i < wordArr.length; i++) {
  if (wordArr[i] === "the") {
    count++;
  }
}
document.write("Text: " + sentence + "<br>");
document.write("There are " + count + " occurrence(s) of word 'the'");
                    //======END======
























