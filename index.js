/* session1 value and vairables */
// var myName = "vamshidhar" ;

/*practices set 1*/
// var _myName = "vamshi"
// var _1my__Name = "vamshidhar"
// var 1myName = "karra"
// var $myName = "karra vamshidhar"

// console.log($myName)








/* session 2 DataTypes in javascript */

//string
// let myName = "vamshidhar";
// console.log(typeof(myName));

// //number
// let age = 21;
// console.log(typeof(age))

// //boolean
// let trueFalse = true;
// console.log(typeof(trueFalse))

//undefined
// let undefinVariable;
// console.log(typeof(undefineVariable))

//NaN


/*practices set 2*/
// console.log(10 + "20") //1020
// console.log(9 - "5") //bug 4
// console.log("java" +"script") // javascript without space
// console.log("java " + "script") // java script with space
// console.log(" " + 0) // space + 0 ( 0)
// console.log("vamshi" - "dhar") //NaN this means string - string return NaN
/* 
true => 1
false => 0
*/
// console.log(true + true)   //2
// console.log(true + false)  //1
// console.log(false + true)  //1
// console.log(false -true)  //-1
// console.log(true - true)  //0
// console.log(false - false) //0

// keyword isNaN() method  which return a variable is number or not
// var myPhone = "984938493"
// let myName = "vamshidhar"
// console.log(isNaN(myPhone))
// console.log(isNaN(myName))

/* practice 3 */
// console.log(NaN === NaN)
// console.log(Number.NaN === NaN)
// console.log(isNaN(NaN))
// console.log(isNaN(Number.NaN))
// console.log(Number.isNaN(NaN))







/* session 3 operators and experssion */

//emac script update
// var x = 5;
// var y = 5;
// console.log(' jashfisghaf +${x === y}')

//Arithmetic operator
// console.log(4+5) //addition
// console.log(4-5) //subtracion
// console.log(4*5) //multiplication
// console.log(4/5) //division
// console.log(4%5) //moduler return reminder
//Incerment and decrement
// let number = 15;
// console.log(number++) //pre incerement
// console.log(++number) //post incerement
// console.log(number--) //pre decrement
// console.log(--number) //post  decrement


/*practice 4 */

//1
// console.log(3**3)

// //2 number + string
// console.log(88 + "vamshi")
// console.log(88 - "vamshi")
//3 swap two numbers with third variable
// let a=10;
// let b=2;
// c=b; // c=10
// b=a; // b=5
// a=c; // a=10
// console.log(a)
// console.log(b)

//4 swap two number without third variable
// let a=10;
// let b=5;
// // trick for without third variable
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a)
// console.log(b)

// let num1 = 5;
// let num2 ='5';

// //typeof data
// console.log(typeof(num1)) //number
// console.log(tupeof(num2)) //string
// //double equalto ==
// console.log( "== ",num1 == num2)
// //triple equalto ===
// console.log("===",num1 === num2)







/*  session 4 controle statements and loops  */


//controle statements

// if else
/*
if (conditons){
    //statement 1
} else {
    //statement 2
}
*/
// var tomr = "rain";
// if ( tomr == "rain") {
//     console.log('take a raincoat');
// } else {
//     console.log("do't take raincoat");
// }

// practice 5
//leap year

/*
A leap year is a year that contains an additional day, February 29th, making it 366 days long instead of the usual 365 days.Leap years are necessary to keep our calendar in alignment with the Earth’s revolutions around the Sun.

A year is a leap year if the following conditions are satisfied: 

The year is multiple of 400.
The year is a multiple of 4 and not a multiple of 100.*/
// let year = 2023
//  if (year%4 == 0){
//     if (year %100 === 0) {
//         if (year %400 ===0) {
//             console.log("this year is leap year" , year)
//         } else {
//             console.log("this is year is leap year" , year)
//         }
//     } else {
//         console.log("this year is leap year" , year)
//     }
//  } else {
//     console.log("not leap year " , year)
//  }


//conditional trenary
// let age =21;
// console.log((age >= 18)? "you can vote":"you can't vote")
//loop statements


//switch
// var area = "triangle"
// let l = 9 , b = 8 , pi = 3.142


/*
switch (variable) {
    case condtion :
        //statement
        //break;
    case condtion :
        //statement
        //break;
    default :
    //statement 
    //break;
}
*/


//while loop
/*
while (){
    statement 
    inrc or decr 
}
*/
// let iter = 0;
// while (iter <= 10) {
//     console.log(iter);
//     iter++;
// }
//do while loop

/*
do {
    //statement
    //incr or decr
} while (condtion);
*/

//for loop
/*
for (initialization ; condition ; increment (or) decrement ) {
    //statement 
}
*/
// for (let iter = 0 ; iter <= 5 ; iter++) {
//     console.log(iter);
// }
//practice 6
//print table for
// let number = 7;
// for (let iter = 1 ; iter <=10 ; iter++){
//     console.log( iter, " * ", number," = ",iter*number)
// }
//for in loop
//for of loop




// session 5 functions and methods 
// function sum(a, b) {
//     console.log("add",a+b);
// }
// sum(1,1)
// //function experssion

// function diff(a, b) {
//     return a-b;
// }
// var differ = diff( 1, 2)
// console.log(differ)

// //ananymous function
// let varFn = function(a, b) {
//     return a+b;
// }
// var sum1 = varFn(1,1)
// var sum2 = varFn(2,1)
// console.log( sum1 > sum2) //compare same function value by other variables









/*ECMA SCRIPT 2015 OR ES6 */
// LET VS CONST
// let name1 = "vamshidhar"
// console.log(name1)
// const name2 = "vamshidhar"
// console.log(name2)
// name2 = "vmahsi"



//var vs let
// VAR => Function Scope
// LET and CONST => Block Scope



//Template literal

// let variableTemplate =88987;
// console.log(`hello template literal `); // string
// console.log(`${787}`); //with value
// console.log(`${variableTemplate}`); // variable
// console.log(`variable in template ${variableTemplate}`) // string + variable



// Arrow function

// const varFunction = () => {
//     return `hello arrow function this return statement`
// }
// console.log(varFunction)








/*session 6 Array and it's methods */


// var myName ="vamshidhar"; // store one value at a time

// let pokemonList = ["oshawott" , "dragonite" , "tyranatr"] // storing mulitpule value using array

//storing mulitpule data type value in array
// let multupleArray = ["sharan teja" ,98098 ,909.90 , true ,NaN];

//traversal of an array
// console.log(multupleArray[0]);


// //length of given array
// console.log(multupleArray.length)

// let pokemonList = ["oshawott" , "dragonite" , "tyranatr"] // storing mulitpule value using array 
//using loops
// for (let i = 0; i<pokemonList.length; i++){
//     console.log(pokemonList[i])
// }
// After ES6 for..in loop and for..of loop too


//for..in loop
// for(let iter in pokemonList) {
//     console.log(iter);
// }
// //for..of loop
// for(let iter1 of pokemonList) {
//     console.log(iter1)
// }

// //foreach loop 
// pokemonList.forEach(function(elements , index , array){
//     console.log(elements);
// }); //using nornal function
// pokemonList.forEach((element1 , index, array)=>{
//     console.log(element1)
// }) //using arrow function



//array methods in javascript 

//push method 
// console.log(pokemonList.push('charizard'))//return new length of array 
// console.log(pokemonList)// returning new array list



//unshift 
//EXP 1
// let  numberList = [1,2,3,4]
// console.log(numberList.unshift(0,-1))
// console.log(numberList)
// //EXP2
// const numberList1 = []


//practice 6
// const months = ['jan', 'feb', 'apr','mar','may', 'july', 'aug', 'sep', 'oct', 'nov'];
 //1 add dec to months end of the array
// let ret = months.splice(months.length,0,'dec')

// console.log(months)
// 2 return the value of the splice method
// console.log(ret)

// 3 add March to replace old array
// const updateMonth = months.splice(3, 1, 'March')
// console.log(updateMonth)
// console.log(months)
 // 4 delete 



 //map()
// const array1 = [1,4,9,16,25]

//num>9
// let newArray = array1.map((curElm, index, arr)=>{
//     return curElm >9
// })
// console.log(array1)
// console.log(newArray)

// let newArray1 = array1.map((curElm, index, array) => {
//     return `Index of ${index} and array value ${curElm} it array is ${array}`
// })
// console.log(newArray1)


//reduce()
// let redarray = [5,6,2]
// let sum = redarray.reduce((accumulater, curElm, index, arr)=>{
//     return accumulater *= curElm;
// });
// console.log(sum)

//practice  7 
//find the squaroot of given number is 
// let newArray = [25, 36 ,49 , 64, 81]
// let arraySqr = newArray.map((currElm)=>{
//     return Math.sqrt(currElm)
// })
// console.log(arraySqr)

//multipy each element by 2 and return only those element which is greater than 10?
// let newArray = [2,3,4,6,8];
// let resultArray = newArray.map((currElm)=>{
//     return currElm * 2;
// }).filter((currElm)=>{
//     return currElm > 10;
// })
// console.log(resultArray)




//2d array 

// const arr = [
//     [1,2],
//     [3,4],
//     [5,6]
// ]

//converting the 2d array into 3d array
// let displayArray = arr.reduce((accum, currElm, index, array)=>{
//     return accum.concat(currElm);
// })
// console.log(displayArray) //concatinate array in 1d array
// console.log(arr) //orginal array 







/* Session 7 String in javascript */

//string 

 let str1 = "string 1"
 let str2 = 'string 2'
 let str3 = `string 3`
// console.log(str1)
// console.log(str2)
// console.log(str3)

//backslah escape character

// let espString = 'vamshidhar \'Reddy\''
// console.log(espString)


//find string in a string using indexof() method 
// console.log(espString.indexOf("v",3)) //searching string and index locations
// console.log(espString.indexOf('i')) //searching string


//extracting string part 


//slice()
// console.log(espString.slice(0,7))


//practice 8
// let myTweet = "Elon Musk during his takeover had suggested raising the tweet character count from 280 to 4,000. During the testing process on Wednesday, Twitter probably saw a glitch that let a user exceed even 4,000 characters in a tweet. Looks like Jane Wong made the longest tweet ever on the microblogging site, however, all that has is a series of dots.Can you guess the character count that she hit in the tweet made on February 8, 2023 ? It wasn't a little more than the desired 4,000 character count as Jane revealed that the tweet had \"26927\" characters."
 
// let actualTweet = myTweet.slice(0,myTweet.length-1)
// console.log(actualTweet)
// console.log(myTweet.length)




//substring()
// let copy1 = myTweet.substring(87,340)
// console.timeLog
// console.log(`🤣 `, copy1)


//substr()
// let copy = myTweet.substr(-10)
// console.log(copy)


