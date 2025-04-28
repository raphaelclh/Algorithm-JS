// Definition for a binary tree node
class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Depth-First Search (DFS) - Recursive
function dfsRecursive(node) {
  if (!node) return;
  console.log(node.value); // Process the current node
  dfsRecursive(node.left); // Traverse left subtree
  dfsRecursive(node.right); // Traverse right subtree
}

// Breadth-First Search (BFS)
function bfs(root) {
  if (!root) return;
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current.value); // Process the current node
    if (current.left) queue.push(current.left); // Enqueue left child
    if (current.right) queue.push(current.right); // Enqueue right child
  }
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("DFS:");
dfsRecursive(root);

console.log("BFS:");
bfs(root);

// Function to sum up all values in the tree
function sumTreeValues(node) {
  if (!node) return 0;
  return node.value + sumTreeValues(node.left) + sumTreeValues(node.right);
}

console.log("Sum of all values in the tree:", sumTreeValues(root));

// Function to sum up all left leaves in the tree
function sumOfLeftLeaves(node) {
  if (!node) return 0;

  let sum = 0;
  if (node.left && !node.left.left && !node.left.right) {
    sum += node.left.value; // Add the value of the left leaf
  }

  return sum + sumOfLeftLeaves(node.left) + sumOfLeftLeaves(node.right);
}

console.log("Sum of all left leaves in the tree:", sumOfLeftLeaves(root));
