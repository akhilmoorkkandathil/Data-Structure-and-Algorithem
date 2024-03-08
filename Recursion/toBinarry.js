function toBinary(n,result){
    if(n==0) return result;
    result = n%2+result
    return toBinary(Math.floor(n/2),result)
}

console.log(toBinary(233,""));