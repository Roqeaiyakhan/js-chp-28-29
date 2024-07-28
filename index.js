// Chapter-28: Converting strings to integers and decimals

// type coercion
// automatic conversion of values from one data type to another, typically
// performed during operations or comparisons involving different data types

// TYPE COERSION VS TYPE CASTING
// COERSION:
// implicit (automatic) type conversion
// jo js khud type conversion karti h usko kehte hn coersion
// CASTING:
// explicit type conversion
// jo ap khud krte ho

// we've already seen
// var age = prompt("Enter your age ");
// console.log(typeof age);
// var yearsEligibleToVote = age - 18;
// console.log(yearsEligibleToVote);

// var result = "200" + 150;
// console.log(result);

// imtihan
// console.log("a" - 10);

// problem, int
// var currentAge = prompt("Enter your age");
// var ageAfterAYear = currentAge + 1;
// console.log(ageAfterAYear);

// NUMBER
// int: without decimal point
// float: with or without decimal point

// solution, int
// var currentAge = prompt("Enter your age");
// var incrementedAge = parseInt(currentAge) + 1;
// console.log(incrementedAge);

// problem, float
// var itemPrice = prompt("Enter price of the item in $");
// var priceAfterAddingTax = itemPrice + 1;
// console.log(priceAfterAddingTax);

// solution, float
// var itemPrice = prompt("Enter price of the item in $");
// var priceAfterAddingTax = parseFloat(itemPrice) + 1;
// console.log(priceAfterAddingTax); 
// ................................................................................................................................................//

// problem

// var result = "123" + "abc";
// var finalresult = parseInt (result);

// console.log(finalresult);

// //problem:2
// var result ="45.67" + "xyz";
// var finalresult = parseFloat (result);
// console.log(finalresult);

//problem:3
// var numString = "123.45";
// var result = Number(numString);
// console.log(typeof result);


//problem:4
// var numString = 789;
// var result = numString.toString()
// console.log(typeof result)

//problem:5
// var num = "257" + "px";
// var result = parseInt(num);
// // console.log(result)
// var finalresult =result.toString;
// console.log(finalresult);
//..............................................................................................................................................//
// Chapter-29: Converting strings to numbers, numbers to strings

// CONVERTING STRING TO NUMBER
// number with string type
// var numString = "25";
// checking type using typeof operator
// console.log(typeof numString);
// example
// var result = numString + 11
// console.log(result)

// converting string to number
// var convertedNumber = Number(numString);
// checking type using typeof operator
// console.log(typeof convertedNumber);
// example
// var result = convertedNumber + 11
// console.log(result)

// CONVERTING NUMBER TO STRING
// var hamaraNumber = 35;

// checking type using typeof opertor
// console.log(typeof hamaraNumber);

// converting number to string
// var convertedString = hamaraNumber.toString();

// cheking type using typeof operator