/**
 * Sliding Window Technique
 * - The sliding window technique is a powerful approach used to solve problems involving arrays or strings.
 * - It involves maintaining a window (a subarray or substring) that can expand and contract based on certain conditions.
 * - This technique is particularly useful for problems that require finding subarrays or substrings with specific properties.
 * - It helps optimize the solution by avoiding unnecessary iterations and reducing time complexity.
 * - The sliding window can be either fixed-size or variable-size, depending on the problem requirements.
 * - The key idea is to use two pointers (or indices) to represent the boundaries of the window.
 * - The left pointer marks the start of the window, while the right pointer marks the end.
 * - As the right pointer moves to explore the array or string, the left pointer may also move to maintain the desired properties of the window.
 * - This allows for efficient traversal and processing of the data without needing nested loops.
 *
 * Time Complexity: O(n) - where n is the length of the input string or array.
 * Space Complexity: O(min(n, m)) - where n is the size of the string and m is the size of the character set.
 *
 * Real-world applications:
 * - Finding the longest substring without repeating characters (e.g., in text processing, data compression).
 * - Analyzing time series data for specific patterns (e.g., stock prices, sensor readings).
 * - Optimizing resource allocation in scheduling problems (e.g., CPU usage, memory management).
 * - Solving problems related to network traffic analysis (e.g., packet loss, bandwidth usage).
 */
function lengthOfLongestSubstring(s) {
  let set = new Set(),
    left = 0,
    maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log("Longest Substring Without Repeating Characters:");
console.log(lengthOfLongestSubstring("abcabcbb")); // 3 -> "abc"
console.log(lengthOfLongestSubstring("bbbbb")); // 1 -> "b"
console.log(lengthOfLongestSubstring("pwwkew")); // 3 -> "wke"

/**
 * Minimum Size Subarray Sum
 * - Given an array of positive integers and a target sum, find the minimal length of a contiguous subarray of which the sum is at least the target sum.
 * - If there isn't one, return 0 instead.
 * Example:
 * Input: target = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 * Note:
 * - The input array has at least one element.
 * - The target sum is a positive integer.
 * - The subarray can be empty.
 * - The subarray can contain negative numbers.
 * - The subarray can contain duplicates.
 * - The subarray can contain zeros.
 * - The subarray can contain positive numbers.
 *
 * Time Complexity: O(n) - where n is the length of the input array.
 * Space Complexity: O(1) - no additional space is used.
 *
 * Real-world applications:
 * - Finding the minimum length of a subarray that meets a certain condition (e.g., sales data, stock prices).
 * - Optimizing resource allocation in scheduling problems (e.g., CPU usage, memory management).
 * - Analyzing time series data for specific patterns (e.g., weather data, sensor readings).
 */

function minSubArrayLen(target, nums) {
  let left = 0,
    sum = 0,
    minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left]; // Shrink from left
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log("Minimum Size Subarray Sum:");
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2 -> [4,3]
console.log(minSubArrayLen(7, [2, 3, 1, 1, 2, 4, 3])); // 2 -> [4,3]
console.log(minSubArrayLen(4, [1, 4, 4])); // 1 -> [4]
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1])); // 0 -> no subarray found
console.log(minSubArrayLen(15, [1, 2, 3, 4, 5])); // 5 -> [1,2,3,4,5]
console.log(minSubArrayLen(3, [1, 1])); // 2 -> [1,1]

/**
 * Maximum Sum of Subarray of Size k
 * - Given an array of integers and a number k, find the maximum sum of a subarray of size k.
 * - A subarray is a contiguous part of an array.
 * - Example:
 *   Input: k = 3, nums = [2, 1, 5, 1, 3, 2]
 *   Output: 9
 *
 * Logic:
 * - Initialize a variable to store the sum of the first k elements.
 * - Iterate through the array, updating the sum by adding the next element and subtracting the first element of the previous window.
 * - Keep track of the maximum sum encountered during the iteration.
 * - Return the maximum sum after processing all elements.
 *
 * Time Complexity: O(n) - where n is the length of the input array.
 * Space Complexity: O(1) - no additional space is used.
 *
 * Real-world applications:
 * - Analyzing time series data for specific patterns (e.g., stock prices, sensor readings).
 * - Optimizing resource allocation in scheduling problems (e.g., CPU usage, memory management).
 * - Finding the maximum sum of a subarray that meets a certain condition (e.g., sales data, stock prices).
 */

function maxSumSubarray(nums, k) {
  let sum = 0,
    maxSum = 0;

  for (let i = 0; i < k; i++) sum += nums[i]; // first window
  maxSum = sum;

  for (let i = k; i < nums.length; i++) {
    sum = sum + nums[i] - nums[i - k]; // slide window
    // nums[i - k] minus out the first element of the previous window
    // and nums[i] add the next element of the current window
    // nums = [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4
    // initialSum = 1 + 4 + 2 + 10 = 17
    // nextSum = 17 + 23 -1 = 39

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

console.log("Maximum Sum of Subarray of Size k:");
console.log(maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Output: 39
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9
console.log(maxSumSubarray([3, 3, 4, 1, 5], 2)); // Output: 7
console.log(maxSumSubarray([1, 2, 3, 4, 5], 2)); // Output: 9
console.log(maxSumSubarray([1, 2, 3, 4, 5], 3)); // Output: 12
console.log(maxSumSubarray([1, 2, 3, 4, 5], 4)); // Output: 14
