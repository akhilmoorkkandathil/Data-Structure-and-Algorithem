// cmd + p 
// >
//start on current file


// console.log(3+4);

// let arr = [[[[[[[["hekksfjk"]]]]]]]];
// const unwrap = (arr) => Array.isArray(arr)?unwrap(arr[0]):arr;
// console.log(unwrap(arr));


function hashStringToInteger(key,tableSize){
    let hash = 7;
    for (let i = 0; i < key.length; i++) {
        //hash(7) and 17 are two arbitari prime values selected to minimize the collision
       hash =  (hash*17*key.charCodeAt(i))%tableSize
        
    }
    return hash
}



class HashTable{
    table = new Array(3333);
    numItems = 0;
    resize = () => {
        const newTable = new Array(this.table.length*2);
        this.table.forEach(item=>{
            if(item){
                item.forEach(([key,value])=>{
                    const ind = hashStringToInteger(key,newTable.length);
                    if(newTable[ind]){
                        newTable[ind].push([key,value])
                    }else{
                        newTable[ind]=[[key,value]]
                    }
                })
            }
        })
        this.table = newTable;
    }
    setItem=(key,val)=>{
        this.numItems++;
        const loadFactore = this.numItems/this.table.length;
        if(loadFactore>.8){
            this.resize()
        }
        let ind = hashStringToInteger(key,this.table.length)
        if(this.table[ind]){
            this.table[ind].push([key,val])
        }else{
            this.table[ind]=[[key,val]]
        }
    }

    getItm = (key) => {
        let ind = hashStringToInteger(key,this.table.length);
        if(!this.table[ind]) return null;
        return this.table[ind].find(x=>x[0]===key)[1]
    }
}

const myTable = new HashTable();
myTable.setItem("firstName","Akhil");
myTable.setItem("lastName","Moorkkan");
console.log(myTable.table.length);
myTable.setItem("age","12");
console.log(myTable.table.length);
myTable.setItem("dob","sfds");
console.log(myTable.getItm("firstName"));
console.log(myTable.getItm("lastName"));
console.log(myTable.getItm("age"));
console.log(myTable.getItm("dob"));
console.log(myTable.table);

// // Import the url module
// const url = require('url');

// // Your URL
// const urlString = 'https://www.linkedin.com/messaging';

// // Parse the URL to get the hostname
// const parsedUrl = new URL(urlString);
// const hostname = parsedUrl.hostname;

// console.log(hostname);

// // Function to find the most repeating character using a hashtable
// function findMostRepeatingCharacter(str) {
//     const charFrequency = {};

//     // Count the frequency of each character
//     for (const char of str) {
//         if (charFrequency[char]) {
//             charFrequency[char]++;
//         } else {
//             charFrequency[char] = 1;
//         }
//     }

//     // Find the character with the maximum frequency
//     let maxFrequency = 0;
//     let mostFrequentChar = '';

//     for (const char in charFrequency) {
//         if (charFrequency[char] > maxFrequency) {
//             maxFrequency = charFrequency[char];
//             mostFrequentChar = char;
//         }
//     }

//     return mostFrequentChar;
// }

// // Get the most repeating character from the hostname
// const mostRepeatingCharacter = findMostRepeatingCharacter(hostname);

// console.log(mostRepeatingCharacter);


// const url = require('url');

// const linkein = 'https://www.linkedin.com/messaging';
// const parsedUrl = url.parse(linkein);
// const hostname = parsedUrl.hostname
// console.log(hostname);

// function repeatingString(str){
//     let table = {};

//     for (const char of str) {
//         if(!table[char]){
//             table[char]=1
//         }else{
//             table[char]++
//         }   
//     }
    
//     let rLetter = '';
//     let maxCount = 0;

//     for(char in table){
//         if(table[char]>maxCount){
//             maxCount = table[char];
//             rLetter = char;
//         }
//     }

//     return rLetter;
// }
// console.log(repeatingString("linkedinn"));
