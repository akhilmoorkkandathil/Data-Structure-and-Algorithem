function reverseString(str){
    if (str === "" || str.length === 1) {
        return str;
    }

    return reverseString(str.substring(1)) + str[0];
}

console.log(reverseString("Hello"));
// function reverseString(str) {
//     // Base case: if the string is empty or has only one character, return the string
//     if (str === "" || str.length === 1) {
//         return str;
//     }
//     // Recursive case: concatenate the last character of the string with the reversed substring
//     // (substring excluding the last character) and return the result
//     return reverseString(str.substring(1)) + str[0];
// }

// // Example usage:
// const originalString = "hello";
// const reversedString = reverseString(originalString);
// console.log("Original string:", originalString);
// console.log("Reversed string:", reversedString);
