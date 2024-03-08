function reversedString(str){
    if(str == "") return str
    return reversedString(str.substring(1))+str[0]
}
console.log(reversedString("H"));