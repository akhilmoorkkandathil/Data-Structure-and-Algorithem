// Promise
// function fetchData(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             sum = 10/0
//             res(sum);
//         },2000)
//     })
// }

// fetchData()
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log("Error",error)
// })

//Generator function

// function* GeneratorFunction(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }

// const myGenerator = GeneratorFunction();
// console.log(myGenerator.next().value);
// console.log(myGenerator.next().value);
// console.log(myGenerator.next().value);

// for (let index = 0; index < 10; index++) {
//     var name = "Akhil"
    
// }

// console.log(name);

// const myVariable = 'Hello, world!';

// export { myVariable };


// setTimeout promise and normal synchronous code. Which one work first?
// Helllo()
// let newpromise = promise()
// newpromise.then((data=>{
//     console.log(data);
// }))

// console.log("First");
// function promise(){
//     return new Promise((res,rej)=>{
//         res("Promise")
//     })
// }

// function Helllo(){
//     setTimeout(()=>{
//         console.log("Setimeout");
//     },0)
// }


// console.log("last");


// type of
// let arr = [];
// let a = 1;
// function hello(){}
// let arrow = () =>{}
// console.log(typeof arr); // object
// console.log(typeof hello); //function
// console.log(typeof arrow); //function
// console.log(typeof a); // number

// let a = 10;
// let b = 20;
// let c = 30;

// console.log(a>b>c); // false
// console.log(a<b<c); // true

// console.log(true>1); //false
// console.log(true==1); // true


// const http = require('http');

// const fs = require('fs')


// const port = 3000;


// const server = http.createServer((req,res)=>{
//     // const data = "New data"
//     // fs.readFileSync('file.txt',data,()=>{
//     //     if(err) throw err;
//     //     console.log("file created and data added into the file");
//     // })
// //    res.end("Hellow Akhil")
// //     fs.appendFile('file.txt',data,()=>{
// //         if(err) throw err;
// //         console.log("data append into the file");
// //     })
// //    res.end("Hellow Akhil")
// //  const data = fs.readFileSync('file.txt','utf8');

// // res.end(data)
// })

// server.listen(port,() => {
//     console.log(`Server running at http://localhost:${port}/`);
//     console.log(`Server running at http://localhost:${port}/`);
// });
// "use strict";

// name = "Akhil"

//callback
//In JavaScript, a callback function is a function that is passed as an argument to another function, 
//and it is expected to be executed after some specific action or task has been completed. Callback functions 
//are a fundamental concept in asynchronous programming and event handling in JavaScript.

// function fetchData(callback){
//     setTimeout(()=>{
//         let data = "This is my data"
//         callback(data);
//     },3000)
// }

// function processData(data){
//     console.log(data)
// }
// fetchData(processData)


// const http = require('http');
// const fs = require('fs')
// const port = 3000;

// const server = http.createServer((req,res)=>{
//     const readableStream = fs.createReadStream('newFile.txt');
//     const writeStram = fs.createWriteStream('output.txt');
//     readableStream.pipe(writeStram)
//     writeStram.on('finish', () => {
//         console.log('Finished writing data');
//     });
//     res.write("Hello");
//     res.end();
// })

// server.listen(port,()=>{
//     console.log(`Server is running at http://localhost:${port}`);
// })


// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//     res.send("Good")
// })

// app.listen(3000,()=>{
//     console.log("Running server");
// })
