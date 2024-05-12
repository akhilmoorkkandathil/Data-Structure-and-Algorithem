function reversedString(str){
    if(str.length<1) return str
    return reversedString(str.slice(1,str.length))+str[0]
}
console.log(reversedString("Hello"));