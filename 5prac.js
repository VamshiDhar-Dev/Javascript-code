let  nums=[1,2,3,4,5]
// let sum=0;
// for(i=0;i<nums.length;i++){
// sum+=nums[i]
// }
// console.log(sum)

// let div=(nums)=>{
// return nums+=nums;
// }
// let arr=[1,2,34,554,665]
// let a=prompt("Enter array values of arr")
// a=Number.parseInt(a) //convert string into integer
// arr.push(a)//pushing the values into array 
// console.log(a)//print arrayvalue pushed 
// console.log(nums)
// let array2;
// array2=nums.filter((values)=>{
//     return values%10==0;    
// })
// console.log(array2)
 

let arr=nums.map((value)=>{
 return value*value
//  console.log(nums)
})
// console.log(arr
q=0
arr.forEach((i)=>{
    console.log(q+"  "+i)
    q++
})
