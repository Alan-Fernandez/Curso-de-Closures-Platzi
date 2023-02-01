'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    // Write your code here
    for(let i=0; i > n; i++){
        if(((i % 3 )== 0)&&((i%5)== 0)) {
            return('FizzBuzz');
        }
        if (((i % 3)== 0) && (i % 5)!= 0){
            return('Fizz');
        } 
            
        if (((i % 5)== 0) && (i % 3)!= 0){
            return ('Buzz');
        }
        if (((i % 5)!= 0) && (i % 3)!= 0){
            
            return(i);
        } 
    }

}

let n = '12';

function main(n) {
    const n = parseInt(readLine().trim(), 10);

    fizzBuzz(n);
}

console.log(n.main(n))
