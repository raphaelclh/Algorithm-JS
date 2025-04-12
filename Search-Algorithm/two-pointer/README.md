# Two-Pointer Algorithm

This repository demonstrates the **Two-Pointer Algorithm**, a versatile technique for solving problems involving arrays or strings. By using two indices to traverse a data structure, this approach often reduces time complexity and simplifies solutions.

## Overview of Files

### `two-pointer.js`

This file contains reusable implementations of the two-pointer algorithm. Key functionalities include:

- **Finding Pairs with Target Sum**: Identifies pairs in a sorted array whose sum matches a given target.
- **Removing Duplicates**: Eliminates duplicate elements from a sorted array in-place.
- **Partitioning Arrays**: Splits arrays based on specific conditions, such as separating even and odd numbers.

### `problems.js`

This file applies the two-pointer technique to solve specific problems, such as:

- **Maximum Area in a Container**: Calculates the largest area that can be formed between two lines (LeetCode: Container With Most Water).
- **Palindrome Check**: Verifies if a given string reads the same backward as forward.
- **Merging Sorted Arrays**: Combines two sorted arrays into one sorted array efficiently.

## Understanding the Code

- **Two-Pointer Logic**: The algorithm uses two pointers (indices) that move towards or away from each other based on the problem's requirements. This reduces unnecessary iterations and improves performance.
- **Problem-Specific Adjustments**: While the core logic remains consistent, each problem adapts the two-pointer approach to fit its unique constraints and goals.

## Running the Code

To explore the implementations:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Algorithm-JS.git
   cd Algorithm-JS/two-pointer
   ```
2. Execute the files using Node.js:
   ```bash
   node two-pointer.js
   node problems.js
   ```

Each file includes comments and examples to help you understand how the two-pointer technique is applied.

## Contributing

Contributions are welcome! You can submit issues or pull requests to enhance the codebase or add new examples.

## License

This project is licensed under the MIT License.
