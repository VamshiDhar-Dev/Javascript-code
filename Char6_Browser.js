// alert("Hello")
console.log("log for display message")//display message 
console.error(" error for display error")//display error message
let a = [1, 2, 34, 5, 6, 10]
let b = a.map((i) => {
    return i * 2
})
console.info("Give information")
console.log("                          ")
console.time("vamshi")//starting of time method
console.timeEnd("vamshi")//ending of timeEnd method
//another example for time and timeEnd method
console.time("WhileLoop")
let i=0
for(i=0;i<100;i++){
    console.log(i)
}
console.timeEnd("WhileLoop")
console.table(a)//send variable as argunment as to table method 

let b1=prompt("Enter any value")
let b3=confirm("please confirm")
if(b3){
document.writeln("Yes")
}else{
    document.writeln("No")
}
//below code is DOM topic releated 
document.body.style.backgroundColor="blue"
//below code is browser topic releated