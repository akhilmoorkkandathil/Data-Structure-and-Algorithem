function sumNatural(n){
    if(n<=1) return n;
    return n+sumNatural(n-1)
}
console.log(sumNatural(10));