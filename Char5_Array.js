let nums=[1,2,3,4]
// let b=num.toString()// b is now string 
// console.log(b , typeof b )
// let c =num.join(" ")
// console.log(c)
// let d =num.pop()
// console.log(d)
// console.log(num)
// let e=num.push(44)// push return the new array length
// console.log(num)
// let f=num.shift()//remove first element 
// console.log(num, f)
// let g= num.unshift(555)//add new element at 0 index
// console.log(num,g )
// delete num[0] //delete an element base on index and {hit: size of array will be (arr.length-no_Elements_Removes)} 
// console.log(num.length)
// copy=[123,123124,8548,221,77787]
// console.log(num.concat(copy))// concat one array to another array 
// let compare=(a,b)=>{
//     return a-b
// }
// let s=num.sort()
// console.log(s)
// console.log(num.reverse())
// let t=nums.filter()
var sum=0;
function add(nums){
    return sum+=nums;
}
let u=nums.filter(add)

// console.log(u)
// console.log(nums.slice(1,3))
//forEach loop is used for array operation
nums.forEach(element => {
    // console.log(element*element*element)
});
// map()
console.log("Map")
let o=nums.map((values)=>{
    // console.log(values+10)
})
let copyarr1=nums.reduce((values)=>{
    return values+100
})
console.log(copyarr1)
const name1=(h)=>{
    return h
}
nums.reduce(name1)
console.log(nums)
