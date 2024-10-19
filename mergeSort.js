#!/usr/bin/env node


let array = [3, 2, 1, 13, 8, 5, 0, 1];

function mergeSort(array) {
    let mid = Math.floor(array.length / 2); // Take the mid index as reference point and divide in half from there.
    let left = array.slice(0, mid);
    let right = array.slice(mid);
  
    if (array.length == 1) {
        return array;
    } else {
      return mergeArray(mergeSort(left), mergeSort(right)); // Continuously divide the array and merge. After one of the arrays had been emptied concat (join) the other array into it and return the final ouput.
    }
  
  }
  
  function mergeArray(a, b, mergedArray = []) {
    // if any of the subarray is empty add the other subarray to the "mergedArray []"
      if (a.length == 0) {
        return mergedArray.concat(b);
      }
      if (b.length == 0) {
        return mergedArray.concat(a);
      }
      if(a[0] < b[0]) {
        mergedArray.push(a[0]);
        a.shift(); // removes the first element after pushing
      } else { // if they are equal then just push either one, but it will more likely push b[0].
        mergedArray.push(b[0]);
        b.shift();
      } 
      return mergeArray(a, b, mergedArray);
  }
  
  console.log(mergeSort(array));
  
// Divide the array into 2 equal parts, then each part will again be divided into 2 equal parts ... continue until there are no more parts to be divided, base case should be 1