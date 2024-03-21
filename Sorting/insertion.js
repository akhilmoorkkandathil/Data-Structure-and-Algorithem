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