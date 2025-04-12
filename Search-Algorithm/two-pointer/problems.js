// 1. Remove Duplicates from Sorted Array
function removeDuplicates(arr) {
  let index = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[index] = arr[i];
      index++;
    }
  }
  return index;
}
// Example:
let action1 = removeDuplicates([1, 1, 1, 1, 2]); // action1 = 2, array becomes [1, 2, ...]
console.log("1. Remove Duplicates:", action1); // Output: 2

// 2. Container with Most Water
function maxArea(height) {
  let left = 0,
    right = height.length - 1,
    max = 0;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    if (height[left] < height[right]) left++;
    else right--;
  }
  return max;
}
// Example:
let action2 = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // action2 = 49
console.log("2. Max Area:", action2); // Output: 49

// 3. Three Sum Problem
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return result;
}
// Example:
let action3 = threeSum([-1, 0, 1, 2, -1, -4]); // action3 = [[-1, -1, 2], [-1, 0, 1]]
console.log("3. Three Sum:", action3); // Output: [[-1, -1, 2], [-1, 0, 1]]

// 4. Move Zeros to End
function moveZeros(nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[index], nums[i]] = [nums[i], nums[index]];
      index++;
    }
  }
  return nums;
}
// Example:
let nums1 = [0, 1, 0, 3, 12];
moveZeros(nums1); // nums1 = [1, 3, 12, 0, 0]
console.log("4. Move Zeros:", nums1); // Output: [1, 3, 12, 0, 0]

// 5. Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
  let set = new Set(),
    left = 0,
    maxLength = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
// Example:
let action4 = lengthOfLongestSubstring("abcabcbb"); // action4 = 3
console.log("5. Longest Substring:", action4); // Output: 3

// 6. Minimum Window Substring
function minWindow(s, t) {
  const map = {};
  for (const char of t) map[char] = (map[char] || 0) + 1;
  let left = 0,
    right = 0,
    count = t.length,
    minLen = Infinity,
    start = 0;
  while (right < s.length) {
    if (map[s[right]] > 0) count--;
    map[s[right]] = (map[s[right]] || 0) - 1;
    right++;
    while (count === 0) {
      if (right - left < minLen) {
        minLen = right - left;
        start = left;
      }
      map[s[left]]++;
      if (map[s[left]] > 0) count++;
      left++;
    }
  }
  return minLen === Infinity ? "" : s.substring(start, start + minLen);
}
// Example:
let action5 = minWindow("ADOBECODEBANC", "ABC"); // action5 = "BANC"
console.log("6. Minimum Window Substring:", action5); // Output: "BANC"

// 7. Find Intersection of Two Arrays
function intersect(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i = 0,
    j = 0,
    result = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) i++;
    else j++;
  }
  return result;
}
// Example:
let action6 = intersect([1, 2, 2, 1], [2, 2]); // action6 = [2, 2]
console.log("7. Intersection:", action6); // Output: [2, 2]

// 8. Sort Colors (Dutch National Flag Problem)
function sortColors(nums) {
  let low = 0,
    mid = 0,
    high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) mid++;
    else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
  return nums;
}
// Example:
let nums2 = [2, 0, 2, 1, 1, 0];
sortColors(nums2); // nums2 = [0, 0, 1, 1, 2, 2]
console.log("8. Sort Colors:", nums2); // Output: [0, 0, 1, 1, 2, 2]
