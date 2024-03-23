function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pIndex = 0;
    let pivot = arr[pIndex];
    let left = [];
    let right = [];
    arr.splice(0,1);
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([15,42,12,6,1, 4, 16, 4, 6, 14, 17, 9, 15, 7]));
