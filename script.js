let a=document.getElementById("mybutton")
a.onclick=()=>{
    return alert('mybutton')
}
let b=document.getElementById("mybutton1")
b.onmouseenter=()=>{
    return alert('this event is generated')
}
let id1=document.getElementById("id1")
let id2=document.getElementById("id2")
id1.toggleAttribute=()=>{
    id1.classList.toggle("darkmode")
}