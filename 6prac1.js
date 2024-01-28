/*
1.input from user age
2.convert age string datatype into interger using Number.parseInt(variableName)
3.write arrow funciton for use conform method for in if else conditions for conformation 
4.display the message to user 
*/
/*
let age=prompt("Please enter your age ")
let convertNumber=Number.parseInt(age)
//positive age 
const displayMessage=(convertNumber)=>{return (convertNumber>=18)?confirm("Thank you sir/madam"):confirm("Sorry did you want to exit")}
const displayMessageNegative=(convertNumber)=>{if(convertNumber<0){console.error("Sorry your age is negative")}else if(convertNumber>0 && convertNumber<18){alert("Sorry you not good for driveing")}else if(convertNumber>=18){confirm("Yes you can diver sir/madam")}}
// let callFuntion=displayMessage(convertNumber)
const callFunction=displayMessageNegative(convertNumber)*/

/*
1.Take input form user as a number.
2.Convert given number into Interger using Number.parseInt(numberVariable) .
3.Check weather the given number is greater then 4 
3.1.display confirm message towords for google.com
3.2 else disply alert message given number is less than the 4
*/
/*
let number1 = prompt("Enter any number")
let number = Number.parseInt(number1)
const FunctionRedirect=(number)=>{return (number>4)?location.href="https://www.google.com/":alert("Sorry")}
let call =FunctionRedirect(number)
*/
/*
1.Take input from user 
2.change color in DOM based on input
*/
// document.body.style.backgroundColor="green";
document.body.style.backgroundColor = "red"