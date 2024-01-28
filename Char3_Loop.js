/*
Five type of loops exist in javascript:
1.for loop
2.for in loop
3.for of loop
4.while loop
5.do while loop
*/

//1. For loop

for(var i=0;i<10;i++){
    console.log(i)
} 


//do-while loop
var i=11
do{
    console.log(i)
}while(i<10);

//for in loop 
variable={
    name:"hello",
    jod:"assin",
    title:"babayaga",
    excommunicat:"yes"
}
for(i in variable){
    console.log(variable[i])
}
//for of loop
