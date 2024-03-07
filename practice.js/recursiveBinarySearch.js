function binarySearch(arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return 0
    }
    let middle = Math.floor((leftIndex+rightIndex)/2);
    if(arr[middle]==target){
        return middle
    }
    if(target<middle){
        return search(arr,target,leftIndex,middle-1)
    }else{
        return search(arr,target,middle+1,rightIndex)
    }

}
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 8));