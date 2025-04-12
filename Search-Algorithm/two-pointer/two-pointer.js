// Two Pointer Technique Example: Finding a pair with a given sum in a sorted array

function twoPointerSum(arr, target) {
  let left = 0; // Start pointer
  let right = arr.length - 1; // End pointer

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [arr[left], arr[right]]; // Pair found
    } else if (sum < target) {
      left++; // Move the left pointer to the right
    } else {
      right--; // Move the right pointer to the left
    }
  }

  return null; // No pair found
}

// Example usage
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetSum = 10;

const result = twoPointerSum(sortedArray, targetSum);
console.log(result); // Output: [1, 9]
