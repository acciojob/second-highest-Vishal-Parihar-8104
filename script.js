function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

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

  return secondLargest === -Infinity ? -Infinity : secondLargest;
}

// ✅ Example test cases
console.log(secondHighest([5, 1, 2, 3, 4])); // 4
console.log(secondHighest([-1, -2, -3, -4, -5])); // -2
console.log(secondHighest([])); // -Infinity
console.log(secondHighest([1])); // -Infinity
console.log(secondHighest([1, 1, 1, 1, 1])); // -Infinity
