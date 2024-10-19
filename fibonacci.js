#!/usr/bin/env node

// Original Fibonacci Formula
function fibonacci(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

// Iterative 
function fibs(n) {
	let fibArr = [1, 1];
	let count = 2;
	for (let index = 2; index < n; index++) {
		fibArr.push(fibArr[count - 1] + fibArr[count - 2]);
		count++;
	}
	return fibArr;
}

// console.log(fibs(8));


function fibsRec(n, arrFib = [1, 1]) {
    if (n == undefined || null) {
      return `Define: 'n'`;
    }
    if (arrFib.length >= n) { 
		  return arrFib.slice(0, n); // We slice if n is initially < arrFib, if not then slice nothing.
    } else {
        // We will push the sum of the last and second last number to our array.
        arrFib.push(arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2]);
    }
    return fibsRec(n, arrFib); // We recursively call our function until arrFib.length is the same as n.

    // n will not be changed here it will remain as it was called. The only thing that will reach the base case and stop the recursion is the array.length.

    // Visualize:

    // 1st call: n = 8, arrFib.length = 3
    // 2nd call: n = 8, arrFib.length = 4
    // and so on ... Until arrFib.length = 8 and we hit the base case returning the entire array.
}
console.log(fibsRec(8)); // [1, 1, 2, 3, 5, 8, 13, 21]


