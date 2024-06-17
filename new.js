
function mergesort(arr){
    if(arr.length<2) return arr;
    let middle = Math.floor((arr.length/2));
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);

    return merge(mergesort(left),mergesort(right));
}

function merge(left,right){
    let sorted = [];
    while(left.length && right.length){
        if(left[0]<right[0]){
            sorted.push(left.shift());
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right];
}

console.log(mergesort([2,1,5,4,6,7,9,7,1,0,7,5]));


