//selection sort


//contain two for loop
//first loop interate from 0 to entire length of array
//set min value as i
//second loop is start from i+1 to teh length of array
// if any value in the array less than the arr[min] set min = j
// swap the element in the i and min positon of array;
function selectinSort(arr){
    for(let i = 0; i<arr.length;i++){
        let min = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        let temp = arr[i];
        arr[i]= arr[min];
        arr[min] = temp;
    }
    return arr;
}

console.log(selectinSort([4,6,2,7,4,7,4,5]));