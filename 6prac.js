//Function for driveing a car
let age = prompt("Enter your age ")
//convert string to number
const convertNumber=Number.parseInt(age)
//return string value based on given age
const DriveingAge = (convertNumber) => {
    if (convertNumber >= 18 && 100<=convertNumber) {
      return  alert("yes you can drive")
    }
    else if(convertNumber<18){  return alert("No you can drive") }
    else if(convertNumber>100){
        return alter("You are not eligable for driveing because you are immortal")
    }
}
//create a variable for call the function
let callFuntion=DriveingAge(convertNumber)
