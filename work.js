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
















