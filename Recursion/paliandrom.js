function paliandrom(str){
    if(str.length<2) return true;
    if(str[0]==str[str.length-1]) return paliandrom(str.substring(1,str.length-1));
    return false;
}
console.log(paliandrom("MALAYALAM"));
