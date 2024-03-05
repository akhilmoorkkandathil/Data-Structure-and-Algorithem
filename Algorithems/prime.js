
// let flag=1;
// if(n<2) console.log(false);
// else{
//     for(let i=2;i<=n/2;i++){
//         if(n!==i && n%i==0){
//            flag=0;
//            break;
//         }
//     }
//     flag ===1?console.log(true):console.log(false);
// }

let prime = (n) => {
    if(n<2) return false;
    for( let i=2 ; i <= n/2  ; i++){
        if(n%i==0) return false;
    }
    return true;
}
console.log(prime(15));

