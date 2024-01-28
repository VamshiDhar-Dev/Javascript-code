Name="Please give Rs 1000"
copy=''
for(i=0;i<Name.length;i++){
    if(Name.charAt(i)=='0'||Name.charAt(i)=='1'){
        copy+=Name.charAt(i);
    }
}
console.log(copy)
