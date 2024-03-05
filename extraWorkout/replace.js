let word = "abcdefghijklmnopqrstuvwxyz";
let n=2;
function replace(word,n){
    let arr = [];
for(let i=n;i<word.length;i++){
    arr.push(word[i])
}
for(let i=0;i<n;i++){
    arr.push(word[i])
}
 return arr.join("");
}

const res=replace(word,n);
console.log(res);
