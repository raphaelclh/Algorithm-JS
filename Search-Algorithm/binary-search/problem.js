function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return -1; // Target not found
  // return left; // Return the index where the target would be inserted
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 7;
const result = binarySearch(sortedArray, target);
console.log(result); // Output: 3
