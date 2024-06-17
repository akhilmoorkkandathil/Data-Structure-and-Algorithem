
// one for loop and one while loop
// for loop for iterate from 1st positon to length of array
// select NTI
// while loop run from j-1 until it reach 0 and arr[j]>NTI
// in each iteration we insert elment in j th position to j+1 th position
// after ending the while loop we inser NTI into the arr[j] th positon
function insertion(arr){
    for(let i=1;i<arr.length;i++){
        let numerToInser = arr[i]
        let j=i-1;
        while(j>=0 && arr[j]> numerToInser){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=numerToInser
    }
    return arr
}
console.log(insertion([23,-3,-34,54,34,64]));