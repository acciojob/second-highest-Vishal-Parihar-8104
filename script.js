//your JS code here. If required.

  function secondHighest(arr) {
    // Handle edge cases
    if (arr.length < 2) return -Infinity;

    // Use a Set to remove duplicates
    const unique = [...new Set(arr)];

    if (unique.length < 2) return -Infinity;

    // Sort in descending order
    unique.sort((a, b) => b - a);

    // Return second highest
    return unique[1];
  }

  // ✅ Example test cases (for quick testing in browser console)
  console.log(secondHighest([5, 1, 2, 3, 4])); // 4
  console.log(secondHighest([-1, -2, -3, -4, -5])); // -2
  console.log(secondHighest([])); // -Infinity
  console.log(secondHighest([1])); // -Infinity
  console.log(secondHighest([1, 1, 1, 1, 1]));