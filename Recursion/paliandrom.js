function paliandrom(str){
    if(str.length<2) return true;
    if(str[0]==str[str.length-1]) return paliandrom(str.substring(1,str.length-1));
    return false;
}
console.log(paliandrom("MALAYALAM"));
// let a=[
//         [[1,2,3],[1,2,3]],
//         [[1,2,3],[1,2,3]],
//         [[1,2,3],[123]]
//       ]
// console.log(a);