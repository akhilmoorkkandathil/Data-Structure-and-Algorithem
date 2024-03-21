// let arr = ["a","b","c","d","e"];
// let target = "d";
// function binarySearch(arr,target){
//     let leftIndex = 0,rightIndex = arr.length-1;
    
//     while(leftIndex<=rightIndex){
//         let middle = Math.floor((leftIndex+rightIndex)/2)
//         if(arr[middle]==target){
//             return middle;
//         }
//         if(target<arr[middle]){
//             rightIndex = middle-1
            
            
//         }else{
//             leftIndex = middle+1
//         }
//     }
//     return -1
// }

// console.log(binarySearch(arr,target));

// let name = "akhil"

// function reverse(name,result){
//     if(name=="" || name.length ==1){
//         return name;
//     }
//     result = name.substring(1,name.length-1)

//     return reverse()
// }
// console.log(reverse(name,""));

// function reverse(name){
//     if(name.length==1){
//         return name;
//     }
//     return reverse(name.substring(1,name.length))+name[0];
     
// }
// console.log(reverse("Akhil"));

// let arr =[1,4,3,5,3,6,4,6];
// function findBiggest(arr){
//     let count =0
//     if(count>=arr.length){
//         return largest
//     }
//     count++
//     let biggest = arr[0];
//     if(biggest<arr[0]){
//         biggest = arr[0]
//     }
//     return arr.findBiggest(arr.slice(1,arr.length-1))
// }

// Print name n times

// function print(n){
//     if(n==0){
//         return
//     }
//     console.log("Ahkil");
//     return print(n-1)
// }
// print(5)

// function print(n,count=0){
//     if(n==0) return;
//     count++
//     console.log(count);

//     print(n-1,count)
// }
// print(5)

// function x(n){
//     if(n<=1) return
//     x(n-1)
//     console.log(n);
//     x(n-1)
// }
// x(3)
// function sum(n){
//     if(n===1){
//         return n
//     }
//     return n+sum(n-1)
// }
// sum(4)

// function binarySearch(arr,target){
//     let leftIndex=0
//     let rightIndex=arr.length-1;
//     while(leftIndex<=rightIndex){
//         let middle = Math.floor((leftIndex+rightIndex)/2)
//         if(target == arr[middle]){
//             return middle
//         }
//         if(target<arr[middle]){
//             rightIndex = middle -1
//         }else{
//             leftIndex = middle+1
//         }
//     }
//  return -1

// }
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],8));


//Bibary Search
// function binarySearch(arr,target){
//     let leftIndex = 0;
//     let rightIndex = arr.length-1;
//     while(leftIndex<=rightIndex){
//         let middle = Math.floor((leftIndex+rightIndex)/2);
//         if(target == arr[middle]){
//             return middle;
//         }
//         if(target<arr[middle]){
//             rightIndex = middle-1;

//         }else{
//             leftIndex = middle+1
//         }
//     }
// }
// console.log(binarySearch(["a","b","c","d","e","f","g"],"e"));




//Linear Search

// arr = [1,2,3,4,5,6,7,8,9];
// target = 6;


// function LinearSearch(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==target){
//             return i
//         }
//     }
// }
// console.log(LinearSearch([1,2,3,4,5,6,7,8,9],6));

// Binary Search using recursion

// function binarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1
//     }
//     let middle = Math.floor((leftIndex+rightIndex)/2)
//     if(target == arr[middle]){
//         return middle
//     }
//     if(target<arr[middle]){
//         rightIndex = middle-1;
//         return search(arr,target,leftIndex,rightIndex)
//     }else{
//         leftIndex = middle+1
//         return search(arr,target,leftIndex,rightIndex)
//     }
// }
// console.log(binarySearch(["a","b","c","d","e","f","g"],"e"));


// //Reverse String
// function reverseString(str){
//     if(str.length == 0){
//         return "";
//     }
//     return reverseString(str.slice(1))+str[0]
// }
// console.log(reverseString("Akhil"));

//Reverse a string using methods
// str = "Akhil M"
// console.log(str.split("").reverse().join(""));


//Find biggest number in a array using recursion

// function recursionBiggest(arr,biggest=arr[0]){
    
//     if(arr.length ==0 ) return biggest
//     if(arr[0]>biggest){
//         biggest = arr[0]
//     }
//     return recursionBiggest(arr.slice(1),biggest)

// }
// console.log(recursionBiggest([1,4,2,15,5,3,6,8]));

//Find second biggest in an array

// function secondBiggestRecursion(arr,biggest=0,sbiggest=0){
//     if(arr.length == 0 ) return sbiggest;
//     if(arr[0]>biggest){
//         sbiggest = biggest
//         biggest = arr[0]
         
//     }if(arr[0]>sbiggest && arr[0]<biggest){
//         sbiggest = arr[0]
//     }
//     return secondBiggestRecursion(arr.slice(1),biggest,sbiggest)
// }
// console.log(secondBiggestRecursion([1,2,19,3,4,15,5,6,7,8,9]));

// fibanocci
// function fibanocci(n){
//     if(n<2) return n
//     return fibanocci(n-1)+fibanocci(n-2)
// }
// console.log(fibanocci(5));

//Factorial

// function facatorial(n){
//     if(n==1) return n
//     return n*facatorial(n-1)
// }

// console.log(facatorial(5));

// function reverse(str){
//     if(str.length ==0) return ""
//     return reverse(str.slice(1))+str[0];
// }
// console.log(reverse("Akhil is a good boy"));

// function binarySearch(arr,target){
//     let leftIndex  = 0;
//     let rightIndex = arr.length-1
//     if(arr.length == 0){
//         return -1
//     }
//     while(leftIndex<=rightIndex){
//         let middle = Math.floor((leftIndex+rightIndex)/2);
//         if(target == arr[middle]){
//             return middle;
//         }
//         if(target<arr[middle]){
//             rightIndex = middle-1
//         }else{
//             leftIndex = middle+1
//         }
//     }
//     return -1
    
// }

// console.log(binarySearch([1,2,3,4,5,6,7,8,9],1));

// function recursionBinarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1
//     }
//     let middle = Math.floor((leftIndex+rightIndex)/2);
//     if(target == arr[middle]){
//         return middle
//     }
//     if(target<arr[middle]){
//         return search(arr,target,leftIndex,middle-1)
//     }else{
//         return search(arr,target,middle+1,rightIndex)
//     }
// }
// console.log(recursionBinarySearch([1,2,3,4,5,6,7,8,9],9));


//sum of elements
// function recursion(arr,sum=1){
//     if(arr.length == 0) return sum
//     sum *= arr[0];
//     return recursion(arr.slice(1),sum)
// }
// console.log(recursion([]));

// let arr = ["a","b","c","d","e","f"];
// let target = "e"

// function binarySearch(arr,target){
//     let leftIndex = 0;
//     let rightIndex = arr.length-1;
//     while(leftIndex<=rightIndex){
//         let middle = Math.floor((leftIndex+rightIndex)/2);
//         if(target == arr[middle]){
//             return middle
//         }
//         if(target<arr[middle]){
//             rightIndex = middle-1
//         }else{
//             leftIndex = middle+1
//         }
//     }
//     return -1
// }

// console.log(binarySearch(arr,target));

// function recursiveBinary(arr,target){
//     return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1
//     }
//     let middle = Math.floor((leftIndex+rightIndex)/2);
//     if(target == arr[middle]){
//         return middle;
//     }
//     if(target<arr[middle]){
//         return search(arr,target,leftIndex,middle-1)
//     }else{
//         return search(arr,target,middle+1,rightIndex)
//     }
// }

// console.log(recursiveBinary(arr,target));

// let arr = [3,5,7,3,8,5,9,5,0,4];

// function biggestNumber(arr,biggest=arr[0]){
//     if(arr.length==0){
//         return biggest;
//     }
//     if(biggest<arr[0]){
//         biggest = arr[0]
//     }
//     return biggestNumber(arr.slice(1),biggest)
// }
// console.log(biggestNumber(arr));

// let str = "Akhil is a good boy"

// function recursiveReverse(str){
//     if(str.length==1){
//         return str
//     }
//     return recursiveReverse(str.slice(1))+str[0]

// }

// console.log(recursiveReverse(str));

// let arr = ["a","b","c","d","e","f"];
// let target = "f";

// function binarySearch(arr,target){
//     let leftIndex = 0;
//     let rightIndex = arr.length-0;
//     while(leftIndex<=rightIndex){
//         let middle = Math.floor((leftIndex+rightIndex)/2);
//         if(target == arr[middle]){
//             return middle;
//         }
//         if(target<arr[middle]){
//             rightIndex = middle-1
//         }else{
//             leftIndex = middle+1
//         }
//     }
// }

// function binarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1
//     }
//     let middle = Math.floor((leftIndex+rightIndex)/2);
//     if(target==arr[middle]){
//         return middle
//     }
//     if(target<arr[middle]){
//         return search(arr,target,0,middle+1)
//     }else{
//         return search(arr,target,middle+1,rightIndex)
//     }
    
// }
// console.log(binarySearch(arr,target));


// let str = "My name is Akhil"
//  function reverse(str){
//     if(str.length==1){
//         return str
//     }
//     return reverse(str.slice(1))+str[0]
//  }
// console.log( reverse(str));


//Bubble sort

// function bubbleSort(arr){
//     let swapped;
//     do {
//          swapped = false;
//         for(let i = 0 ; i < arr.length - 1; i++) {
//             if( arr[i+1] < arr[i] ){
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//                 swapped = true
//             }
//         }
//     } while(swapped)
//     return arr
// }

// console.log(bubbleSort([4,2,6,9,6,4,7,5,8]));

//Insertion sort


//Insertion sort

// function insertionSort(arr){
//     for(let i = 1; i < arr.length; i++){
//         let NTI = arr[i];
//         let j = i - 1;
//         while( j >= 0 && arr[j] > NTI){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = NTI;
//     }
//     return arr;
// }
// console.log(insertionSort([2,5,7,5,7,4,9,3,5]));

//  [2,5,7,5,7,4,9,3,5] i=1  arr[i]=5    j=0   att[j]=2   NTI= 5
//  [2,5,7,5,7,4,9,3,5] i=2  arr[i]=7    j=1   att[j]=5   NTI= 7
//  [2,5,7,7,7,4,9,3,5] i=3  arr[i]=5    j=1   att[j]=5   NTI= 5
//  [2,5,7,5,7,4,9,3,5] 
//  [2,5,7,5,7,4,9,3,5]
//  [2,5,7,5,7,4,9,3,5]
//  [2,5,7,5,7,4,9,3,5]


//Bubble sort

// function selectinSort(arr){
//     let sorted;
//     do{
//         sorted = false;
//         for(let i=0;i<arr.length;i++){
//             if(arr[i+1]<arr[i]){
//                 [arr[i+1],arr[i]]=[arr[i],arr[i+1]];
//                 sorted=true
//             }
//         }
//     }while(sorted)
//     return arr
// }

// console.log(selectinSort([4,8,5,8,0,5,3,6]));


//Selection sort

// function selectinSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let min = i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min = j
//             }
//         }
//         let temp = arr[i];
//         arr[i]=arr[min];
//         arr[min]=temp
//     }
//     return arr
// }

// console.log(selectinSort([1,5,3,6,43,8,5,8]));

// function quickSort(arr){
//     if(arr.length<2) return arr;
//     let pivotIndex = arr.length-1;
//     let pivotValue = arr[pivotIndex];
//     let left = [];
//     let right = [];
//     arr.splice(pivotIndex,1);
//     //console.log(arr)
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<pivotValue){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSort(left),pivotValue,...quickSort(right)]
// }

// console.log(quickSort([5,6,3,9,8,4,2,1,7]));


//Merge Sort

function mergeSort(arr){
    if(arr.length<2) return arr;
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    let temp = [];
    while(left.length && right.length){
        if(left[0]<right[0]){
            temp.push(left.shift())
        }else{
            temp.push(right.shift())
        }
    }
    return [...temp,...left,...right];
}


console.log(mergeSort([1,4,7,3,9,3,8,2,5,6]));















