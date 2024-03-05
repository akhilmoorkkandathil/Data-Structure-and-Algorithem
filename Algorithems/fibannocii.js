let n=5;
// let fibb=[];
// let prev1=0,prev2=1;
// while(fibb.length<n){
//     fibb.push(prev1);
//     [prev1,prev2]=[prev2,prev1+prev2]
// }
let fibb=[0,1];
for(let i=2;i<n;i++){
    fibb[i]=fibb[i-1]+fibb[i-2]
}
console.log(fibb);