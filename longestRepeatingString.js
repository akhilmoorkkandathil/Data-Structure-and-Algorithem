let str = "sassaaaaaaafffdfffdddddddddddddddffffff";
let obj = {};
let count = 1
for(let i=0;i<str.length;i++){
    if(str[i]==str[i+1]){
        count++;
    }else{
        count=1;
    }
    if(!obj[str[i]]){
        obj[str[i]] = count;
    }else{
        
        if(count>obj[str[i]]){
            obj[str[i]]=count;
        }
    }
}
console.log(obj);
let max = -Infinity
for(let key of Object.keys(obj)){
    if(obj[key]>max){
        max = obj[key];
        letter = key;
    }
}
let res = "";
for(let i =0;i<max;i++){
    res+=letter;
}
console.log(res);
