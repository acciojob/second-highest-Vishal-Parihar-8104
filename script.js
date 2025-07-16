//your JS code here. If required.

  function secondHighest(arr) {
   if(arr.length<2){
	    return "Array must have at least two elements.";
   }
	  let largest = -Infinity;
  let secondLargest = -Infinity; 
	    for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }

  if (secondLargest === -Infinity) {
    return "No second largest element (all elements may be equal).";
  }

  return secondLargest;
  }

  // ✅ Example test cases (for quick testing in browser console)
  console.log(secondHighest([5, 1, 2, 3, 4])); // 4
  console.log(secondHighest([-1, -2, -3, -4, -5])); // -2
  console.log(secondHighest([])); // -Infinity
  console.log(secondHighest([1])); // -Infinity
  console.log(secondHighest([1, 1, 1, 1, 1]));