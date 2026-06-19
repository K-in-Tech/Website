export const problems = [
  {
    slug: "two-sum",
    title: "Two Sum",
    category: "Arrays",
    difficulty: "Easy",
    shortDescription: "Find two numbers that add up to target.",
    description: "Given an array nums and target, return indices.",
    tags: ["Array", "HashMap"],
    intuition: "Use hashmap to store complements.",
    example: {
      input: "[2,7,11,15], 9",
      output: "[0,1]",
      explanation: "2 + 7 = 9"
    },
    hints: [
      "Try brute force first",
      "Optimize using hashmap"
    ],
    testCases: [
      { input: "[2,7,11,15], 9", output: "[0,1]" },
      { input: "[3,2,4], 6", output: "[1,2]" }
    ],
    leetcode: "https://leetcode.com/problems/two-sum/",
    gfg: "https://www.geeksforgeeks.org/check-if-pair-with-given-sum-exists-in-array/"
  },

  {
    slug: "reverse-linked-list",
    title: "Reverse Linked List",
    category: "Linked List",
    difficulty: "Easy",
    shortDescription: "Reverse a singly linked list.",
    description: "Given head of linked list, reverse it.",
    tags: ["Linked List", "Pointers"],
    intuition: "Use 3 pointers: prev, curr, next.",
    example: {
      input: "1->2->3->4",
      output: "4->3->2->1",
      explanation: "Iterative pointer reversal"
    },
    hints: [
      "Track previous node",
      "Change links step by step"
    ],
    testCases: [
      { input: "1->2->3", output: "3->2->1" }
    ],
    leetcode: "https://leetcode.com/problems/reverse-linked-list/",
    gfg: "https://www.geeksforgeeks.org/reverse-a-linked-list/"
  },

  {
    slug: "valid-parentheses",
    title: "Valid Parentheses",
    category: "Stack",
    difficulty: "Easy",
    shortDescription: "Check if brackets are valid.",
    description: "Given a string with brackets, validate it.",
    tags: ["Stack"],
    intuition: "Use stack to match pairs.",
    example: {
      input: "()[]{}",
      output: "true",
      explanation: "All brackets match"
    },
    hints: [
      "Push opening brackets",
      "Pop and match closing"
    ],
    testCases: [
      { input: "()[]{}", output: "true" },
      { input: "(]", output: "false" }
    ],
    leetcode: "https://leetcode.com/problems/valid-parentheses/",
    gfg: "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/"
  },

  {
    slug: "maximum-subarray",
    title: "Maximum Subarray",
    category: "Dynamic Programming",
    difficulty: "Medium",
    shortDescription: "Find subarray with maximum sum.",
    description: "Kadane’s algorithm problem.",
    tags: ["DP", "Array"],
    intuition: "Keep running sum and reset if negative.",
    example: {
      input: "[-2,1,-3,4,-1,2,1,-5,4]",
      output: "6",
      explanation: "Subarray [4,-1,2,1]"
    },
    hints: [
      "Try Kadane’s algorithm",
      "Track max ending here"
    ],
    testCases: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", output: "6" }
    ],
    leetcode: "https://leetcode.com/problems/maximum-subarray/",
    gfg: "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/"
  },

  {
    slug: "binary-search",
    title: "Binary Search",
    category: "Search",
    difficulty: "Easy",
    shortDescription: "Search element in sorted array.",
    description: "Classic divide and conquer search.",
    tags: ["Binary Search"],
    intuition: "Divide array into halves.",
    example: {
      input: "[1,2,3,4,5], target=3",
      output: "2",
      explanation: "Index of 3"
    },
    hints: [
      "Use left and right pointers",
      "Reduce search space"
    ],
    testCases: [
      { input: "[1,2,3,4,5], 3", output: "2" }
    ],
    leetcode: "https://leetcode.com/problems/binary-search/",
    gfg: "https://www.geeksforgeeks.org/binary-search/"
  },

  {
    slug: "valid-palindrome",
    title: "Valid Palindrome",
    category: "Strings",
    difficulty: "Easy",
    shortDescription: "Check if string reads same backward.",
    description: "Determine if a string is a palindrome, ignoring case and non-alphanumeric characters.",
    tags: ["String", "Two Pointers"],
    intuition: "Use two pointers from both ends moving inward.",
    example: {
      input: "\"A man, a plan, a canal: Panama\"",
      output: "true",
      explanation: "\"amanaplanacanalpanama\" is a palindrome"
    },
    hints: [
      "Clean the string first to remove spaces and punctuation",
      "Compare characters from start and end simultaneously"
    ],
    testCases: [
      { input: "\"A man, a plan, a canal: Panama\"", output: "true" },
      { input: "\"race a car\"", output: "false" }
    ],
    leetcode: "https://leetcode.com/problems/valid-palindrome/",
    gfg: "https://www.geeksforgeeks.org/sentence-palindrome-given-string-containing-alphanumeric-characters/"
  },

  {
    slug: "container-with-most-water",
    title: "Container With Most Water",
    category: "Two Pointers",
    difficulty: "Medium",
    shortDescription: "Find two lines that trap most water.",
    description: "Given an array of heights, find two lines that form a container containing the most water.",
    tags: ["Array", "Two Pointers"],
    intuition: "Maximize width first, then shift the pointer pointing to the shorter line.",
    example: {
      input: "[1,8,6,2,5,4,8,3,7]",
      output: "49",
      explanation: "Lines at index 1 and 8 hold max area 7 * 7 = 49"
    },
    hints: [
      "Start with maximum width using two pointers",
      "Move the shorter boundary inward to look for taller lines"
    ],
    testCases: [
      { input: "[1,8,6,2,5,4,8,3,7]", output: "49" },
      { input: "[1,1]", output: "1" }
    ],
    leetcode: "https://leetcode.com/problems/container-with-most-water/",
    gfg: "https://www.geeksforgeeks.org/container-with-most-water/"
  },

  {
    slug: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    category: "Trees",
    difficulty: "Easy",
    shortDescription: "Find the height of a binary tree.",
    description: "Find the number of nodes along the longest path from the root node down to the farthest leaf node.",
    tags: ["Tree", "DFS", "Binary Tree"],
    intuition: "Depth of current node is 1 plus max depth of its left and right children.",
    example: {
      input: "[3,9,20,null,null,15,7]",
      output: "3",
      explanation: "Longest path is 3 -> 20 -> 15 (or 7)"
    },
    hints: [
      "Solve recursively for left and right subtrees",
      "Base case is when node is null, return 0"
    ],
    testCases: [
      { input: "[3,9,20,null,null,15,7]", output: "3" },
      { input: "[1,null,2]", output: "2" }
    ],
    leetcode: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    gfg: "https://www.geeksforgeeks.org/find-the-maximum-depth-or-height-of-a-tree/"
  },

  {
    slug: "subsets",
    title: "Subsets",
    category: "Backtracking",
    difficulty: "Medium",
    shortDescription: "Generate all possible subsets.",
    description: "Given an integer array of unique elements, return all possible subsets (the power set).",
    tags: ["Array", "Backtracking", "Bit Manipulation"],
    intuition: "For each element, we choose to either include it or exclude it.",
    example: {
      input: "[1,2,3]",
      output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
      explanation: "All 2^3 combinations generated"
    },
    hints: [
      "Use recursion to branch into include/exclude decisions",
      "Pop the last element after tracking to backtrack cleanly"
    ],
    testCases: [
      { input: "[1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" },
      { input: "[0]", output: "[[],[0]]" }
    ],
    leetcode: "https://leetcode.com/problems/subsets/",
    gfg: "https://www.geeksforgeeks.org/power-set/"
  },

  {
    slug: "number-of-islands",
    title: "Number of Islands",
    category: "Graphs",
    difficulty: "Medium",
    shortDescription: "Count distinct island groups in grid.",
    description: "Given an m x n 2D binary grid representing a map of '1's (land) and '0's (water), return the number of islands.",
    tags: ["Array", "DFS", "BFS", "Matrix"],
    intuition: "Trigger a DFS/BFS whenever land is found, marking all connected land pieces as visited.",
    example: {
      input: "[[\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\"],[\"0\",\"0\",\"0\"]]",
      output: "1",
      explanation: "All connected 1s form a single island"
    },
    hints: [
      "Traverse the grid linearly and launch a DFS/BFS when hitting a '1'",
      "Sink visited land by turning '1' to '0' to avoid using extra space for tracking"
    ],
    testCases: [
      { input: "[[\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\"],[\"0\",\"0\",\"0\"]]", output: "1" }
    ],
    leetcode: "https://leetcode.com/problems/number-of-islands/",
    gfg: "https://www.geeksforgeeks.org/find-the-number-of-islands-using-dfs/"
  },
  {
    slug: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    category: "Strings",
    difficulty: "Medium",
    shortDescription: "Find length of longest unique substring.",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    tags: ["String", "Sliding Window", "HashMap"],
    intuition: "Use a sliding window with a left and right pointer, expanding the window and storing character indices.",
    example: {
      input: "\"abcabcbb\"",
      output: "3",
      explanation: "The answer is \"abc\", with the length of 3."
    },
    hints: [
      "Use a sliding window to maintain a window of unique characters",
      "When a duplicate is found, shrink the window from the left"
    ],
    testCases: [
      { input: "\"abcabcbb\"", output: "3" },
      { input: "\"bbbbb\"", output: "1" }
    ],
    leetcode: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    gfg: "https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/"
  },
  {
    "slug": "longest-common-prefix",
    "title": "Longest Common Prefix",
    "category": "Arrays & Strings",
    "difficulty": "Easy",
    "shortDescription": "Find the longest common prefix string amongst an array of strings.",
    "description": "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string \"\".",
    "tags": ["String", "Trie"],
    "intuition": "Sort the array to compare only the first and last strings, or horizontally scan characters across all strings simultaneously.",
    "example": {
      "input": "[\"flower\",\"flow\",\"flight\"]",
      "output": "\"fl\"",
      "explanation": "The longest prefix shared by all input strings is 'fl'."
    },
    "hints": [
      "Compare strings character by character vertically.",
      "If the array is sorted alphabetically, the common prefix of the entire array is just the common prefix of the first and last strings."
    ],
    "testCases": [
      { "input": "[\"flower\",\"flow\",\"flight\"]", "output": "\"fl\"" },
      { "input": "[\"dog\",\"racecar\",\"car\"]", "output": "\"\"" }
    ],
    "leetcode": "https://leetcode.com/problems/longest-common-prefix/",
    "gfg": "https://www.geeksforgeeks.org/longest-common-prefix-using-sorting/"
  },
  {
    "slug": "replace-elements-with-greatest-element-on-right-side",
    "title": "Replace Elements with Greatest Element on Right Side",
    "category": "Arrays & Strings",
    "difficulty": "Easy",
    "shortDescription": "Replace each element with the maximum element to its right.",
    "description": "Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.",
    "tags": ["Array"],
    "intuition": "Iterating from right to left allows us to keep track of the maximum value seen so far in linear time.",
    "example": {
      "input": "[17,18,5,4,6,1]",
      "output": "[18,6,6,6,1,-1]",
      "explanation": "The maximum to the right of 17 is 18, right of 18 is 6, right of 5 is 6, right of 4 is 6, right of 6 is 1, and the last element is always -1."
    },
    "hints": [
      "Loop backwards from the end of the array.",
      "Maintain a running maximum variable and update the array in place."
    ],
    "testCases": [
      { "input": "[17,18,5,4,6,1]", "output": "[18,6,6,6,1,-1]" },
      { "input": "[400]", "output": "[-1]" }
    ],
    "leetcode": "https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/",
    "gfg": "https://www.geeksforgeeks.org/replace-every-element-with-the-greatest-element-on-right-side/"
  },
  {
    "slug": "is-subsequence",
    "title": "Is Subsequence",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "shortDescription": "Check if a string is a subsequence of another.",
    "description": "Given two strings s and t, return true if s is a subsequence of t, or false otherwise.",
    "tags": ["Two Pointers", "String", "Dynamic Programming"],
    "intuition": "Use two pointers to scan both strings. If characters match, move both pointers; otherwise, only move the target string pointer.",
    "example": {
      "input": "s = \"abc\", t = \"ahbgdc\"",
      "output": "true",
      "explanation": "'abc' can be formed by deleting 'h', 'g', and 'd' from 'ahbgdc'."
    },
    "hints": [
      "Assign one pointer to s and one pointer to t.",
      "If the pointer for s reaches the end, then s is a valid subsequence."
    ],
    "testCases": [
      { "input": "s = \"abc\", t = \"ahbgdc\"", "output": "true" },
      { "input": "s = \"axc\", t = \"ahbgdc\"", "output": "false" }
    ],
    "leetcode": "https://leetcode.com/problems/is-subsequence/",
    "gfg": "https://www.geeksforgeeks.org/given-two-strings-find-first-string-subsequence-second/"
  },
  {
    "slug": "sort-an-array",
    "title": "Sort an Array",
    "category": "Sorting",
    "difficulty": "Medium",
    "shortDescription": "Sort an array of integers in ascending order without built-ins.",
    "description": "Given an array of integers nums, sort the array in ascending order and return it. You must solve the problem without using any built-in functions in O(nlog(n)) time complexity.",
    "tags": ["Array", "Divide and Conquer", "Merge Sort", "Heap Sort"],
    "intuition": "Use an efficient divide-and-conquer sorting algorithm like Merge Sort or Heap Sort to handle large constraints safely.",
    "example": {
      "input": "[5,2,3,1]",
      "output": "[1,2,3,5]",
      "explanation": "The elements are rearranged in non-decreasing order."
    },
    "hints": [
      "Avoid Quick Sort if pivot selection is not randomized, as adversarial test cases can force O(n^2).",
      "Merge Sort or Heap Sort guarantees O(n log n) worst-case performance."
    ],
    "testCases": [
      { "input": "[5,2,3,1]", "output": "[1,2,3,5]" },
      { "input": "[5,1,1,2,0,0]", "output": "[0,0,1,1,2,5]" }
    ],
    "leetcode": "https://leetcode.com/problems/sort-an-array/",
    "gfg": "https://www.geeksforgeeks.org/merge-sort/"
  },
  {
    "slug": "find-all-numbers-disappeared-in-an-array",
    "title": "Find All Numbers Disappeared in an Array",
    "category": "Arrays & Strings",
    "difficulty": "Easy",
    "shortDescription": "Find all elements of [1, n] missing from an array of size n.",
    "description": "Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums. Solve it without extra space.",
    "tags": ["Array", "Hash Table"],
    "intuition": "Treat values as indices. Mark visited positions by making the element at that index negative.",
    "example": {
      "input": "[4,3,2,7,8,2,3,1]",
      "output": "[5,6]",
      "explanation": "The numbers 5 and 6 do not appear in the input array of size 8."
    },
    "hints": [
      "Use the input array elements as pointers to indices within the same array.",
      "Any index that remains positive after marking has a missing value equal to index + 1."
    ],
    "testCases": [
      { "input": "[4,3,2,7,8,2,3,1]", "output": "[5,6]" },
      { "input": "[1,1]", "output": "[2]" }
    ],
    "leetcode": "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
    "gfg": "https://www.geeksforgeeks.org/find-missing-elements-from-1-to-max-element/"
  },
  {
    "slug": "next-permutation",
    "title": "Next Permutation",
    "category": "Arrays & Strings",
    "difficulty": "Medium",
    "shortDescription": "Find the next lexicographically greater permutation of numbers.",
    "description": "Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers. If such an arrangement is not possible, it must rearrange it as the lowest possible order.",
    "tags": ["Array", "Two Pointers"],
    "intuition": "Find the first decreasing element from the right, swap it with the next larger element on its right, and reverse the remaining suffix.",
    "example": {
      "input": "[1,2,3]",
      "output": "[1,3,2]",
      "explanation": "The next lexicographically larger arrangement of [1,2,3] is [1,3,2]."
    },
    "hints": [
      "Scan from right to left to find the first element that drops in value.",
      "Swap this element with the smallest element to its right that is larger than it, then reverse everything to its right."
    ],
    "testCases": [
      { "input": "[1,2,3]", "output": "[1,3,2]" },
      { "input": "[3,2,1]", "output": "[1,2,3]" }
    ],
    "leetcode": "https://leetcode.com/problems/next-permutation/",
    "gfg": "https://www.geeksforgeeks.org/next-permutation/"
  },
  {
    "slug": "subarray-sum-equals-k",
    "title": "Subarray Sum Equals K",
    "category": "Advanced Data Structures",
    "difficulty": "Medium",
    "shortDescription": "Find total number of continuous subarrays whose sum equals k.",
    "description": "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.",
    "tags": ["Array", "Hash Table", "Prefix Sum"],
    "intuition": "Use prefix sums. If the difference between the current prefix sum and a previous prefix sum is equal to k, a valid subarray exists.",
    "example": {
      "input": "nums = [1,1,1], k = 2",
      "output": "2",
      "explanation": "The subarrays [1,1] at index (0,1) and index (1,2) both sum up to 2."
    },
    "hints": [
      "Maintain a running sum as you iterate through the array.",
      "Store frequencies of previously seen prefix sums in a hash map to look up (current_sum - k)."
    ],
    "testCases": [
      { "input": "nums = [1,1,1], k = 2", "output": "2" },
      { "input": "nums = [1,2,3], k = 3", "output": "2" }
    ],
    "leetcode": "https://leetcode.com/problems/subarray-sum-equals-k/",
    "gfg": "https://www.geeksforgeeks.org/number-subarrays-sum-exactly-equal-k/"
  },
  {
    "slug": "brick-wall",
    "title": "Brick Wall",
    "category": "Arrays & Strings",
    "difficulty": "Medium",
    "shortDescription": "Find the line that crosses the least number of bricks.",
    "description": "There is a rectangular brick wall. Find a vertical line from the top to the bottom that crosses the least number of bricks. You cannot draw a line down the far left or right edges.",
    "tags": ["Array", "Hash Table"],
    "intuition": "A line crosses the least bricks where it crosses the most brick edges. Track edge positions using a hash map.",
    "example": {
      "input": "[[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]",
      "output": "2",
      "explanation": "Drawing a vertical line at index 4 crosses only 2 bricks."
    },
    "hints": [
      "Calculate the cumulative prefix sums of brick widths for each row to find edge positions.",
      "The answer is the total number of rows minus the maximum frequency of any single edge position."
    ],
    "testCases": [
      { "input": "[[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]", "output": "2" },
      { "input": "[[1],[1],[1]]", "output": "3" }
    ],
    "leetcode": "https://leetcode.com/problems/brick-wall/",
    "gfg": "https://www.geeksforgeeks.org/brick-wall-problem/"
  },
  {
    "slug": "grid-game",
    "title": "Grid Game",
    "category": "Arrays & Strings",
    "difficulty": "Medium",
    "shortDescription": "Minimize the maximum points the second robot can collect.",
    "description": "You are given a 2D array grid of size 2 x n. Two robots are playing a game starting at (0,0) and ending at (1, n-1). Robot 1 wants to minimize the points Robot 2 can collect, while Robot 2 wants to maximize its points.",
    "tags": ["Array", "Matrix", "Prefix Sum"],
    "intuition": "Robot 1 clears a path that splits the remaining points into a top-right suffix and a bottom-left prefix. Robot 2 will optimally choose the max of these two paths.",
    "example": {
      "input": "[[2,5,4],[1,5,1]]",
      "output": "4",
      "explanation": "Robot 1 takes (0,0) -> (0,1) -> (1,1) -> (1,2). Robot 2 is forced to take the top-right remaining value 4."
    },
    "hints": [
      "Use prefix and suffix sums to track remaining values in row 0 and row 1.",
      "Iterate through every possible column index where Robot 1 could turn down."
    ],
    "testCases": [
      { "input": "[[2,5,4],[1,5,1]]", "output": "4" },
      { "input": "[[3,3,1],[8,5,2]]", "output": "4" }
    ],
    "leetcode": "https://leetcode.com/problems/grid-game/",
    "gfg": "https://www.geeksforgeeks.org/grid-game-problem/"
  },
  {
    "slug": "find-the-duplicate-number",
    "title": "Find the Duplicate Number",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "shortDescription": "Find the duplicate number in an array of n + 1 integers.",
    "description": "Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive, there is only one repeated number in nums, return this repeated number. You must not modify the array and use only constant extra space.",
    "tags": ["Array", "Two Pointers", "Binary Search", "Bit Manipulation"],
    "intuition": "Treat the array as a linked list where indices point to values. The duplicate number acts as the entrance to a cycle.",
    "example": {
      "input": "[1,3,4,2,2]",
      "output": "2",
      "explanation": "The number 2 appears twice in the array."
    },
    "hints": [
      "Apply Floyd's Tortoise and Hare cycle detection algorithm.",
      "Find the intersection point of the slow and fast pointers, then reset one pointer to the start to locate the cycle entrance."
    ],
    "testCases": [
      { "input": "[1,3,4,2,2]", "output": "2" },
      { "input": "[3,1,3,4,2]", "output": "3" }
    ],
    "leetcode": "https://leetcode.com/problems/find-the-duplicate-number/",
    "gfg": "https://www.geeksforgeeks.org/find-the-duplicate-number-from-an-array-of-n1-integers/"
  },
  {
    "slug": "encode-and-decode-strings",
    "title": "Encode and Decode Strings",
    "category": "Arrays & Strings",
    "difficulty": "Medium",
    "shortDescription": "Design an algorithm to encode and decode a list of strings.",
    "description": "Design an algorithm to encode a list of strings to a single string. The encoded string is then sent over the network and is decoded back to the original list of strings.",
    "tags": ["Array", "String"],
    "intuition": "Prepend each string with its length followed by a special delimiter (like '#') to safely parse strings containing any character.",
    "example": {
      "input": "[\"hello\",\"world\"]",
      "output": "[\"hello\",\"world\"]",
      "explanation": "Encoding results in '5#hello5#world', which can be reliably split back into individual words."
    },
    "hints": [
      "Using a single delimiter character fails if that character is inside an input string.",
      "Combine the length of the string + a delimiter character to create a definitive tracking header."
    ],
    "testCases": [
      { "input": "[\"hello\",\"world\"]", "output": "[\"hello\",\"world\"]" },
      { "input": "[\"\"]", "output": "[\"\"]" }
    ],
    "leetcode": "https://leetcode.com/problems/encode-and-decode-strings/",
    "gfg": "https://www.geeksforgeeks.org/encode-and-decode-an-array-of-strings/"
  },
  {
    "slug": "check-if-a-string-contains-all-binary-codes-of-size-k",
    "title": "Check If a String Contains All Binary Codes of Size K",
    "category": "Arrays & Strings",
    "difficulty": "Medium",
    "shortDescription": "Check if a string contains every binary code of length k.",
    "description": "Given a binary string s and an integer k, return true if every binary code of length k is a substring of s. Otherwise, return false.",
    "tags": ["Hash Table", "String", "Bit Manipulation", "Rolling Hash"],
    "intuition": "There are 2^k unique binary codes of length k. Extract all substrings of length k and check if the total unique count equals 2^k.",
    "example": {
      "input": "s = \"00110110\", k = 2",
      "output": "true",
      "explanation": "The binary codes of length 2 are '00', '01', '10', and '11', which all appear in s."
    },
    "hints": [
      "Use a sliding window of size k to extract substrings.",
      "Insert substrings into a Hash Set. If the size of the set reaches 1 << k, return true early."
    ],
    "testCases": [
      { "input": "s = \"00110110\", k = 2", "output": "true" },
      { "input": "s = \"0110\", k = 2", "output": "false" }
    ],
    "leetcode": "https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/",
    "gfg": "https://www.geeksforgeeks.org/check-if-a-binary-string-contains-all-binary-codes-of-size-k/"
  },
  {
    "slug": "continuous-subarray-sum",
    "title": "Continuous Subarray Sum",
    "category": "Advanced Data Structures",
    "difficulty": "Medium",
    "shortDescription": "Find a continuous subarray of size at least two that sums to a multiple of k.",
    "description": "Given an integer array nums and an integer k, return true if nums has a good subarray of size at least two whose elements sum up to a multiple of k.",
    "tags": ["Array", "Hash Table", "Math", "Prefix Sum"],
    "intuition": "If the prefix sum modulo k repeats itself at two different indices, the subarray between them sums to a multiple of k.",
    "example": {
      "input": "nums = [23,2,4,6,7], k = 6",
      "output": "true",
      "explanation": "[2, 4] is a continuous subarray of size 2 whose elements sum up to 6, which is a multiple of 6."
    },
    "hints": [
      "Store the remainder of prefix_sum % k in a hash map mapping to its first seen index.",
      "Ensure the difference between the current index and the stored index is greater than or equal to 2."
    ],
    "testCases": [
      { "input": "nums = [23,2,4,6,7], k = 6", "output": "true" },
      { "input": "nums = [23,2,6,4,7], k = 6", "output": "true" }
    ],
    "leetcode": "https://leetcode.com/problems/continuous-subarray-sum/",
    "gfg": "https://www.geeksforgeeks.org/continuous-subarray-sum-exists-not/"
  },
  {
    "slug": "push-dominoes",
    "title": "Push Dominoes",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "shortDescription": "Simulate the final state of falling dominoes.",
    "description": "There are n dominoes placed vertically in a line. Given a string dominoes representing their initial state ('L', 'R', or '.'), simulate the forces acting on them and return their final state.",
    "tags": ["Two Pointers", "String", "Dynamic Programming"],
    "intuition": "Track the distance to the closest falling domino from both the left and right directions, or look at blocks of '.' surrounded by 'L' or 'R'.",
    "example": {
      "input": "\".L.R...LR..L..\"",
      "output": "\"LL.RR.LLRRLL..\"",
      "explanation": "Dominoes fall under directional forces; elements in the middle of opposite forces cancel out if equidistant."
    },
    "hints": [
      "Calculate the force exerted on each index from the left and right.",
      "Alternatively, use a two-pointer approach to check boundary configurations like 'R...R', 'L...L', 'R...L', and 'L...R'."
    ],
    "testCases": [
      { "input": "\".L.R...LR..L..\"", "output": "\"LL.RR.LLRRLL..\"" },
      { "input": "\"RR.L\"", "output": "\"RR.L\"" }
    ],
    "leetcode": "https://leetcode.com/problems/push-dominoes/",
    "gfg": "https://www.geeksforgeeks.org/push-dominoes/"
  },
  {
    "slug": "naming-a-company",
    "title": "Naming a Company",
    "category": "Arrays & Strings",
    "difficulty": "Hard",
    "shortDescription": "Find the number of valid distinct company names.",
    "description": "You are given an array of strings ideas representing names. Select two distinct strings from ideas, swap their first characters. If both new strings do not appear in the original ideas list, it forms a valid company name.",
    "tags": ["Array", "Hash Table", "String", "Bit Manipulation"],
    "intuition": "Group words by their initial character. For any two groups, the valid swaps depend on words that don't share identical suffixes.",
    "example": {
      "input": "[\"coffee\",\"donuts\",\"time\",\"toffee\"]",
      "output": "6",
      "explanation": "Valid pairs include ('coffee', 'donuts') -> 'doffee' and 'conuts', etc. 'coffee' and 'toffee' share suffixes, so they can't swap."
    },
    "hints": [
      "Create a set of suffixes for each starting character from 'a' to 'z'.",
      "Count the intersection of suffixes between every pair of characters. Valid names are formed using (sizeA - intersect) * (sizeB - intersect)."
    ],
    "testCases": [
      { "input": "[\"coffee\",\"donuts\",\"time\",\"toffee\"]", "output": "6" },
      { "input": "[\"lack\",\"back\"]", "output": "0" }
    ],
    "leetcode": "https://leetcode.com/problems/naming-a-company/",
    "gfg": "https://www.geeksforgeeks.org/number-of-valid-company-names-by-swapping-first-characters/"
  }
,  {
    slug: "validate-binary-search-tree",
    title: "Validate Binary Search Tree",
    category: "Trees",
    difficulty: "Medium",
    shortDescription: "Check if a tree is a valid BST.",
    description: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
    tags: ["Tree", "DFS", "Binary Search Tree"],
    intuition: "Pass a valid range (min, max) down to each node during recursion.",
    example: {
      input: "[2,1,3]",
      output: "true",
      explanation: "Root is 2, left child 1 is smaller, right child 3 is larger."
    },
    hints: [
      "A node's value must be strictly between its allowed min and max bounds",
      "Update bounds recursively when moving to left and right children"
    ],
    testCases: [
      { input: "[2,1,3]", output: "true" },
      { input: "[5,1,4,null,null,3,6]", output: "false" }
    ],
    leetcode: "https://leetcode.com/problems/validate-binary-search-tree/",
    gfg: "https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/"
  },

  {
    slug: "kth-largest-element-in-an-array",
    title: "Kth Largest Element in an Array",
    category: "Heap",
    difficulty: "Medium",
    shortDescription: "Find the kth largest element.",
    description: "Given an integer array nums and an integer k, return the kth largest element in the array.",
    tags: ["Array", "Divide and Conquer", "Sorting", "Heap"],
    intuition: "Keep a Min-Heap of size k. The top of the heap will be the kth largest element.",
    example: {
      input: "[3,2,1,5,6,4], k=2",
      output: "5",
      explanation: "The sorted array is [1,2,3,4,5,6] and the 2nd largest is 5."
    },
    hints: [
      "You can sort the array, but that takes O(N log N) time",
      "Optimize to O(N log K) using a Min-Heap of size k"
    ],
    testCases: [
      { input: "[3,2,1,5,6,4], 2", output: "5" },
      { input: "[3,2,3,1,2,4,5,5,6], 4", output: "4" }
    ],
    leetcode: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    gfg: "https://www.geeksforgeeks.org/k-largest-elements-elements-in-array-in-min-heap/"
  },

  {
    slug: "rotate-image",
    title: "Rotate Image",
    category: "Matrix",
    difficulty: "Medium",
    shortDescription: "Rotate an n x n matrix 90 degrees.",
    description: "You have to rotate an n x n 2D matrix representing an image by 90 degrees clockwise in-place.",
    tags: ["Array", "Math", "Matrix"],
    intuition: "Transpose the matrix first (swap rows and columns), then reverse each row.",
    example: {
      input: "[[1,2],[3,4]]",
      output: "[[3,1],[4,2]]",
      explanation: "1 moves to 2's spot, 2 moves to 4's spot, etc."
    },
    hints: [
      "Try to find a mathematical transformation pattern",
      "Transposing and then reversing avoids using an extra grid"
    ],
    testCases: [
      { input: "[[1,2],[3,4]]", output: "[[3,1],[4,2]]" }
    ],
    leetcode: "https://leetcode.com/problems/rotate-image/",
    gfg: "https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/"
  },

  {
    slug: "merge-intervals",
    title: "Merge Intervals",
    category: "Intervals",
    difficulty: "Medium",
    shortDescription: "Merge overlapping intervals.",
    description: "Given an array of intervals, merge all overlapping intervals and return the non-overlapping intervals.",
    tags: ["Array", "Sorting"],
    intuition: "Sort intervals by their start time, then merge adjacent intervals if they overlap.",
    example: {
      input: "[[1,3],[2,6],[8,10]]",
      output: "[[1,6],[8,10]]",
      explanation: "Intervals [1,3] and [2,6] overlap, so they merge into [1,6]."
    },
    hints: [
      "Sorting helps ensure overlapping elements are right next to each other",
      "Compare the current interval's start with the previous interval's end"
    ],
    testCases: [
      { input: "[[1,3],[2,6],[8,10]]", output: "[[1,6],[8,10]]" },
      { input: "[[1,4],[4,5]]", output: "[[1,5]]" }
    ],
    leetcode: "https://leetcode.com/problems/merge-intervals/",
    gfg: "https://www.geeksforgeeks.org/merging-intervals/"
  },
  {
    slug: "climbing-stairs",
    title: "Climbing Stairs",
    category: "Dynamic Programming",
    difficulty: "Easy",
    shortDescription: "Find distinct ways to reach top.",
    description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    tags: ["Math", "Dynamic Programming", "Memoization"],
    intuition: "To reach step n, you can come from step n-1 or step n-2. This is the Fibonacci sequence pattern.",
    example: {
      input: "3",
      output: "3",
      explanation: "There are three ways: [1,1,1], [1,2], [2,1]"
    },
    hints: [
      "Think about the base cases: 1 step has 1 way, 2 steps have 2 ways",
      "The recurrence relation is dp[i] = dp[i-1] + dp[i-2]"
    ],
    testCases: [
      { input: "2", output: "2" },
      { input: "3", output: "3" }
    ],
    leetcode: "https://leetcode.com/problems/climbing-stairs/",
    gfg: "https://www.geeksforgeeks.org/count-ways-reach-nth-stair/"
  },

  {
    slug: "product-of-array-except-self",
    title: "Product of Array Except Self",
    category: "Arrays",
    difficulty: "Medium",
    shortDescription: "Calculate products without division.",
    description: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i] without using division.",
    tags: ["Array", "Prefix Sum"],
    intuition: "Construct prefix products moving forward and suffix products moving backward.",
    example: {
      input: "[1,2,3,4]",
      output: "[24,12,8,6]",
      explanation: "For index 1: 1 * 3 * 4 = 12"
    },
    hints: [
      "Use an array to keep track of the product of all elements to the left",
      "Multiply by the running product of all elements to the right dynamically"
    ],
    testCases: [
      { input: "[1,2,3,4]", output: "[24,12,8,6]" },
      { input: "[-1,1,0,-3,3]", output: "[0,0,9,0,0]" }
    ],
    leetcode: "https://leetcode.com/problems/product-of-array-except-self/",
    gfg: "https://www.geeksforgeeks.org/a-product-array-puzzle/"
  },

  {
    slug: "coin-change",
    title: "Coin Change",
    category: "Dynamic Programming",
    difficulty: "Medium",
    shortDescription: "Fewer coins needed to make amount.",
    description: "Given an integer array coins representing coins of different denominations and an integer amount, return the fewest number of coins that you need to make up that amount.",
    tags: ["Array", "Dynamic Programming"],
    intuition: "For each amount from 1 to target, try utilizing every coin value and minimize the count.",
    example: {
      input: "coins = [1,2,5], amount = 11",
      output: "3",
      explanation: "11 = 5 + 5 + 1"
    },
    hints: [
      "Use bottom-up DP where dp[i] is the minimum coins needed for amount i",
      "Initialize DP array with a large value like amount + 1"
    ],
    testCases: [
      { input: "[1,2,5], 11", output: "3" },
      { input: "[2], 3", output: "-1" }
    ],
    leetcode: "https://leetcode.com/problems/coin-change/",
    gfg: "https://www.geeksforgeeks.org/coin-change-dp-7/"
  },

  {
    slug: "3sum",
    title: "3Sum",
    category: "Two Pointers",
    difficulty: "Medium",
    shortDescription: "Find triplets that sum to zero.",
    description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and their sum equals zero.",
    tags: ["Array", "Two Pointers", "Sorting"],
    intuition: "Sort the array, fix one element, and use a standard Two Pointer approach for the remaining pair.",
    example: {
      input: "[-1,0,1,2,-1,-4]",
      output: "[[-1,-1,2],[-1,0,1]]",
      explanation: "The unique triplets sum up to 0."
    },
    hints: [
      "Sorting helps easily skip duplicate elements to ensure unique triplets",
      "After fixing nums[i], use two pointers at i+1 and end of array"
    ],
    testCases: [
      { input: "[-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
      { input: "[0,1,1]", output: "[]" }
    ],
    leetcode: "https://leetcode.com/problems/3sum/",
    gfg: "https://www.geeksforgeeks.org/find-triplets-with-zero-sum/"
  },

  {
    slug: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    category: "Linked List",
    difficulty: "Easy",
    shortDescription: "Merge two sorted lists into one.",
    description: "Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.",
    tags: ["Linked List", "Recursion"],
    intuition: "Compare the head nodes of both lists, append the smaller one, and move forward.",
    example: {
      input: "1->2->4, 1->3->4",
      output: "1->1->2->3->4->4",
      explanation: "Merged sequentially"
    },
    hints: [
      "Use a dummy head node to simplify list assembly logic",
      "Don't forget to append remaining nodes when one list runs out"
    ],
    testCases: [
      { input: "1->2->4, 1->3->4", output: "1->1->2->3->4->4" }
    ],
    leetcode: "https://leetcode.com/problems/merge-two-sorted-lists/",
    gfg: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/"
  },

  {
    slug: "lowest-common-ancestor-of-a-binary-tree",
    title: "Lowest Common Ancestor of a Binary Tree",
    category: "Trees",
    difficulty: "Medium",
    shortDescription: "Find shared ancestor of two nodes.",
    description: "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes, p and q.",
    tags: ["Tree", "Depth-First Search", "Binary Tree"],
    intuition: "Search recursively down the tree. If a node discovers p or q in both its subtrees, it is their LCA.",
    example: {
      input: "root = [3,5,1,...], p = 5, q = 1",
      output: "3",
      explanation: "The LCA of nodes 5 and 1 is 3."
    },
    hints: [
      "If the current node is null or equals p or q, return the current node",
      "Look for matches in both left and right directions up the recursion stack"
    ],
    testCases: [
      { input: "[3,5,1,6,2,0,8,null,null,7,4], 5, 1", output: "3" }
    ],
    leetcode: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    gfg: "https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree/"
  },

  {
    slug: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    category: "Search",
    difficulty: "Medium",
    shortDescription: "Search element in rotated array.",
    description: "Given a sorted integer array rotated at an unknown pivot, find the index of a target value in O(log n) time.",
    tags: ["Array", "Binary Search"],
    intuition: "In any rotation, one half of the array will always remain completely sorted. Use that to drop halves.",
    example: {
      input: "nums = [4,5,6,7,0,1,2], target = 0",
      output: "4",
      explanation: "0 is located at index 4"
    },
    hints: [
      "Find which half of the array (left or right) is normally sorted",
      "Check if the target falls within the boundaries of that sorted half"
    ],
    testCases: [
      { input: "[4,5,6,7,0,1,2], 0", output: "4" },
      { input: "[4,5,6,7,0,1,2], 3", output: "-1" }
    ],
    leetcode: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    gfg: "https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-rotated-array/"
  },

  {
    slug: "implement-trie-prefix-tree",
    title: "Implement Trie (Prefix Tree)",
    category: "Design",
    difficulty: "Medium",
    shortDescription: "Design efficient string prefix map.",
    description: "Implement a trie with insert, search, and startsWith methods.",
    tags: ["Design", "Trie", "Hash Table", "String"],
    intuition: "Use an object mapping characters to child Trie nodes along with a boolean terminal flag.",
    example: {
      input: "insert('apple'), search('apple'), startsWith('app')",
      output: "null, true, true",
      explanation: "'apple' exists, and 'app' is its valid prefix."
    },
    hints: [
      "Each node should contain an array or map of size 26 for alphabet letters",
      "Use an 'isEndWord' attribute to flag complete words"
    ],
    testCases: [
      { input: "['insert','search','startsWith'], ['apple', 'apple', 'app']", output: "[null, true, true]" }
    ],
    leetcode: "https://leetcode.com/problems/implement-trie-prefix-tree/",
    gfg: "https://www.geeksforgeeks.org/trie-insert-and-search/"
  },

  {
    slug: "min-stack",
    title: "Min Stack",
    category: "Design",
    difficulty: "Medium",
    shortDescription: "Stack retrieving minimum in O(1) time.",
    description: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
    tags: ["Stack", "Design"],
    intuition: "Keep an auxiliary stack that mirrors changes but only logs the current absolute minimums.",
    example: {
      input: "push(-2), push(0), push(-3), getMin()",
      output: "null, null, null, -3",
      explanation: "Returns -3 as it's the lowest value pushed so far."
    },
    hints: [
      "You can pair each pushed value with the minimum value at that stage",
      "Alternatively, use a secondary stack dedicated only to trackers"
    ],
    testCases: [
      { input: "['push','push','getMin'], [-2, 0, -2]", output: "[null, null, -2]" }
    ],
    leetcode: "https://leetcode.com/problems/min-stack/",
    gfg: "https://www.geeksforgeeks.org/design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space/"
  },

  {
    slug: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    category: "Heap",
    difficulty: "Medium",
    shortDescription: "Find the most frequent numbers.",
    description: "Given an integer array nums and an integer k, return the k most frequent elements.",
    tags: ["Array", "Hash Table", "Sorting", "Heap", "Bucket Sort"],
    intuition: "Count item frequencies with a hash map, then group items using Bucket Sort or a Max-Heap.",
    example: {
      input: "nums = [1,1,1,2,2,3], k = 2",
      output: "[1,2]",
      explanation: "1 appears 3 times, 2 appears 2 times."
    },
    hints: [
      "First create a frequency map of elements",
      "Bucket sort array where index represents frequency works in O(N) time"
    ],
    testCases: [
      { input: "[1,1,1,2,2,3], 2", output: "[1,2]" },
      { input: "[1], 1", output: "[1]" }
    ],
    leetcode: "https://leetcode.com/problems/top-k-frequent-elements/",
    gfg: "https://www.geeksforgeeks.org/find-k-numbers-occurrences-given-array/"
  },

  {
    slug: "course-schedule",
    title: "Course Schedule",
    category: "Graphs",
    difficulty: "Medium",
    shortDescription: "Detect cyclic dependencies in graph.",
    description: "Given dependencies for courses, determine if you can finish all courses without a deadlock loop.",
    tags: ["Depth-First Search", "Breadth-First Search", "Graph", "Topological Sort"],
    intuition: "Represent schedules as a directed graph. The problem boils down to checking if the graph has a cycle.",
    example: {
      input: "numCourses = 2, prerequisites = [[1,0]]",
      output: "true",
      explanation: "To take course 1 you should have finished course 0. Valid."
    },
    hints: [
      "Use Kahn's algorithm (indegree tracking BFS) to look for cyclic traps",
      "Standard DFS tracking using visited/processing states works as well"
    ],
    testCases: [
      { input: "2, [[1,0]]", output: "true" },
      { input: "2, [[1,0],[0,1]]", output: "false" }
    ],
    leetcode: "https://leetcode.com/problems/course-schedule/",
    gfg: "https://www.geeksforgeeks.org/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/"
  },

  {
    slug: "house-robber",
    title: "House Robber",
    category: "Dynamic Programming",
    difficulty: "Medium",
    shortDescription: "Maximize loot without breaking alerts.",
    description: "Rob houses along a street. Cannot rob adjacent houses. Maximize your total stash amount safely.",
    tags: ["Array", "Dynamic Programming"],
    intuition: "At each house, choose whether to rob it (adding value to house-2 total) or skip it entirely.",
    example: {
      input: "[1,2,3,1]",
      output: "4",
      explanation: "Rob house 1 (money=1) and house 3 (money=3). Total = 4."
    },
    hints: [
      "The formula is dp[i] = max(dp[i-1], nums[i] + dp[i-2])",
      "You can optimize storage down to two variables instead of a full DP array"
    ],
    testCases: [
      { input: "[1,2,3,1]", output: "4" },
      { input: "[2,7,9,3,1]", output: "12" }
    ],
    leetcode: "https://leetcode.com/problems/house-robber/",
    gfg: "https://www.geeksforgeeks.org/find-maximum-sum-such-that-no-two-elements-are-adjacent/"
  },

  {
    slug: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    category: "Dynamic Programming",
    difficulty: "Medium",
    shortDescription: "Find longest strictly increasing subarray.",
    description: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
    tags: ["Array", "Binary Search", "Dynamic Programming"],
    intuition: "Maintain an active sequence list. Swap or append values using Binary Search (Patience Sorting).",
    example: {
      input: "[10,9,2,5,3,7,101,18]",
      output: "4",
      explanation: "The longest increasing subsequence is [2,3,7,101], therefore length is 4."
    },
    hints: [
      "O(N^2) dynamic programming solution matches each pair elements",
      "O(N log N) optimization uses tails arrays tracking valid entries via binary search"
    ],
    testCases: [
      { input: "[10,9,2,5,3,7,101,18]", output: "4" }
    ],
    leetcode: "https://leetcode.com/problems/longest-increasing-subsequence/",
    gfg: "https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/"
  },

  {
    slug: "network-delay-time",
    title: "Network Delay Time",
    category: "Graphs",
    difficulty: "Medium",
    shortDescription: "Calculate graph signal transmission time.",
    description: "Given network travel times between nodes, calculate the min time for all nodes to receive a signal from a source node.",
    tags: ["Depth-First Search", "Breadth-First Search", "Graph", "Dijkstra", "Shortest Path"],
    intuition: "Find the shortest path from the source node to all other nodes using Dijkstra's algorithm.",
    example: {
      input: "times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2",
      output: "2",
      explanation: "Signal reaches all nodes in 2 units of time."
    },
    hints: [
      "Use a Min-Heap/Priority Queue to extract the closest unvisited node",
      "The final answer will be the maximum value among all shortest paths"
    ],
    testCases: [
      { input: "[[2,1,1],[2,3,1],[3,4,1]], 4, 2", output: "2" }
    ],
    leetcode: "https://leetcode.com/problems/network-delay-time/",
    gfg: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/"
  },

  {
    slug: "counting-bits",
    title: "Counting Bits",
    category: "Bit Manipulation",
    difficulty: "Easy",
    shortDescription: "Count binary set bits for numbers range.",
    description: "Given an integer n, return an array of length n + 1 where each element is the number of 1s in the binary representation of that index.",
    tags: ["Dynamic Programming", "Bit Manipulation"],
    intuition: "An even number has the same number of bits as index/2. An odd number has one more bit than index/2.",
    example: {
      input: "2",
      output: "[0,1,1]",
      explanation: "0 has 0 bits, 1 has 1 bit, 2 has 1 bit (10 in binary)"
    },
    hints: [
      "Leverage bit shifting: dynamic programming lookup using `i >> 1`",
      "Look for recurring binary patterns in multiples of 2"
    ],
    testCases: [
      { input: "2", output: "[0,1,1]" },
      { input: "5", output: "[0,1,1,2,1,2]" }
    ],
    leetcode: "https://leetcode.com/problems/counting-bits/",
    gfg: "https://www.geeksforgeeks.org/count-set-bits-in-an-integer/"
  },

  {
    slug: "word-search",
    title: "Word Search",
    category: "Backtracking",
    difficulty: "Medium",
    shortDescription: "Search if word exists in matrix grid.",
    description: "Given an m x n grid of characters and a string word, return true if the word exists in the grid.",
    tags: ["Array", "Backtracking", "Matrix"],
    intuition: "Use DFS from every matching start letter, checking up, down, left, right while tracking paths.",
    example: {
      input: "board = [['A','B','C','E'],['S','F','C','S']], word = 'ABCCED'",
      output: "true",
      explanation: "Word can be traced sequentially along borders."
    },
    hints: [
      "Temporarily change character cells to '#' during DFS to avoid reusing them",
      "Backtrack by reverting the cell to its original value if exploration fails"
    ],
    testCases: [
      { input: "[['A','B','C','E'],['S','F','C','S']], 'ABCCED'", output: "true" }
    ],
    leetcode: "https://leetcode.com/problems/word-search/",
    gfg: "https://www.geeksforgeeks.org/search-a-word-in-a-2d-grid-of-characters/"
  },

  {
    slug: "non-overlapping-intervals",
    title: "Non-overlapping Intervals",
    category: "Intervals",
    difficulty: "Medium",
    shortDescription: "Remove minimum intervals to clear overlap.",
    description: "Given an array of intervals, return the minimum number of intervals you need to remove to make the rest non-overlapping.",
    tags: ["Array", "Dynamic Programming", "Greedy", "Sorting"],
    intuition: "Sort intervals by their end times. Always prioritize keeping intervals that finish earliest to preserve space.",
    example: {
      input: "[[1,2],[2,3],[3,4],[1,3]]",
      output: "1",
      explanation: "[1,3] needs to be removed as it overlaps other sections."
    },
    hints: [
      "This is identical to the classic Interval Scheduling Maximization problem",
      "Track the end time of the last non-overlapping interval"
    ],
    testCases: [
      { input: "[[1,2],[2,3],[3,4],[1,3]]", output: "1" }
    ],
    leetcode: "https://leetcode.com/problems/non-overlapping-intervals/",
    gfg: "https://www.geeksforgeeks.org/maximal-set-of-non-overlapping-intervals/"
  },

  {
    slug: "spiral-matrix",
    title: "Spiral Matrix",
    category: "Matrix",
    difficulty: "Medium",
    shortDescription: "Return all matrix elements in spiral order.",
    description: "Given an m x n matrix, return all elements of the matrix in spiral order.",
    tags: ["Array", "Matrix", "Simulation"],
    intuition: "Maintain 4 boundaries (top, bottom, left, right) and traverse incrementally inward.",
    example: {
      input: "[[1,2,3],[4,5,6],[7,8,9]]",
      output: "[1,2,3,6,9,8,7,4,5]",
      explanation: "Reads elements moving clockwise from outer ring inside."
    },
    hints: [
      "Shrink boundaries after finishing a row or column traversal sweep",
      "Ensure boundaries don't cross over when transitioning directions mid-loop"
    ],
    testCases: [
      { input: "[[1,2,3],[4,5,6],[7,8,9]]", output: "[1,2,3,6,9,8,7,4,5]" }
    ],
    leetcode: "https://leetcode.com/problems/spiral-matrix/",
    gfg: "https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/"
  },

  {
    slug: "linked-list-cycle",
    title: "Linked List Cycle",
    category: "Linked List",
    difficulty: "Easy",
    shortDescription: "Determine if a linked list contains loops.",
    description: "Given head, the head of a linked list, determine if the linked list has a cycle in it.",
    tags: ["Linked List", "Two Pointers", "Hash Table"],
    intuition: "Use Floyd's Cycle Finding Algorithm (two pointers moving at different speeds).",
    example: {
      input: "head = [3,2,0,-4], pos = 1",
      output: "true",
      explanation: "There is a cycle where the tail connects to the 1st node."
    },
    hints: [
      "Move the slow pointer by 1 step and the fast pointer by 2 steps",
      "If there's a loop, they will eventually bump into each other"
    ],
    testCases: [
      { input: "[3,2,0,-4]", output: "true" },
      { input: "[1]", output: "false" }
    ],
    leetcode: "https://leetcode.com/problems/linked-list-cycle/",
    gfg: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/"
  },

  {
    slug: "subsets-ii",
    title: "Subsets II",
    category: "Backtracking",
    difficulty: "Medium",
    shortDescription: "Generate all unique subsets from duplicate list.",
    description: "Given an integer array nums that may contain duplicates, return all possible subsets (the power set) without duplicates.",
    tags: ["Array", "Backtracking", "Bit Manipulation"],
    intuition: "Sort the items first. In backtracking loops, skip duplicate instances next to each other.",
    example: {
      input: "[1,2,2]",
      output: "[[],[1],[1,2],[1,2,2],[2],[2,2]]",
      explanation: "Duplicates are carefully managed to keep output variations unique."
    },
    hints: [
      "Sort the entry array at the very beginning",
      "Inside the subset building recursion, if `i > start` and `nums[i] == nums[i-1]`, skip the loop iteration"
    ],
    testCases: [
      { input: "[1,2,2]", output: "[[],[1],[1,2],[1,2,2],[2],[2,2]]" }
    ],
    leetcode: "https://leetcode.com/problems/subsets-ii/",
    gfg: "https://www.geeksforgeeks.org/find-all-unique-subsets-of-a-given-set/"
  },
  {
    slug: "fizz-buzz",
    title: "Fizz Buzz",
    category: "Math",
    difficulty: "Easy",
    shortDescription: "Return string array based on multiples.",
    description: "Given an integer n, return a string array answer where answer[i] is 'FizzBuzz', 'Fizz', 'Buzz', or the number itself depending on divisibility by 3 and 5.",
    tags: ["Math", "String", "Simulation"],
    intuition: "Loop from 1 to n and check conditions using the modulo operator.",
    example: {
      input: "3",
      output: "[\"1\",\"2\",\"Fizz\"]",
      explanation: "3 is divisible by 3, so it becomes 'Fizz'."
    },
    hints: [
      "Check the condition for both 3 and 5 first",
      "Order of conditions matters to avoid skipping FizzBuzz"
    ],
    testCases: [
      { input: "3", output: "[\"1\",\"2\",\"Fizz\"]" },
      { input: "5", output: "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\"]" }
    ],
    leetcode: "https://leetcode.com/problems/fizz-buzz/",
    gfg: "https://www.geeksforgeeks.org/fizz-buzz-implementation/"
  },

  {
    slug: "contains-duplicate",
    title: "Contains Duplicate",
    category: "Arrays",
    difficulty: "Easy",
    shortDescription: "Check if any value appears twice.",
    description: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    tags: ["Array", "Hash Table", "Sorting"],
    intuition: "Use a Hash Set to track seen numbers. If a number is already in the set, a duplicate exists.",
    example: {
      input: "[1,2,3,1]",
      output: "true",
      explanation: "1 appears twice in the array."
    },
    hints: [
      "A Hash Set provides O(1) average time complexity for lookups",
      "Alternatively, sorting the array takes O(N log N) but uses O(1) space"
    ],
    testCases: [
      { input: "[1,2,3,1]", output: "true" },
      { input: "[1,2,3,4]", output: "false" }
    ],
    leetcode: "https://leetcode.com/problems/contains-duplicate/",
    gfg: "https://www.geeksforgeeks.org/check-if-array-contains-all-elements-of-another-array/"
  },

  {
    slug: "valid-anagram",
    title: "Valid Anagram",
    category: "Strings",
    difficulty: "Easy",
    shortDescription: "Check if two strings are anagrams.",
    description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    tags: ["Hash Table", "String", "Sorting"],
    intuition: "Count character frequencies for both strings. If the frequencies match exactly, they are anagrams.",
    example: {
      input: "s = \"anagram\", t = \"nagaram\"",
      output: "true",
      explanation: "Both strings contain the exact same characters with the same counts."
    },
    hints: [
      "Use a fixed-size array of size 26 to track frequency counts for lowercase English letters",
      "Increment counts for string s and decrement for string t"
    ],
    testCases: [
      { input: "\"anagram\", \"nagaram\"", output: "true" },
      { input: "\"rat\", \"car\"", output: "false" }
    ],
    leetcode: "https://leetcode.com/problems/valid-anagram/",
    gfg: "https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/"
  },

  {
    slug: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    category: "Arrays",
    difficulty: "Easy",
    shortDescription: "Maximize profit from single stock trade.",
    description: "Given an array prices where prices[i] is the price of a given stock on the ith day, find the maximum profit you can achieve from a single transaction.",
    tags: ["Array", "Dynamic Programming"],
    intuition: "Track the minimum price seen so far and calculate the potential profit at each subsequent day.",
    example: {
      input: "[7,1,5,3,6,4]",
      output: "5",
      explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5."
    },
    hints: [
      "Keep a running minimum value as you traverse the array",
      "Maximize the difference between the current element and the running minimum"
    ],
    testCases: [
      { input: "[7,1,5,3,6,4]", output: "5" },
      { input: "[7,6,4,3,1]", output: "0" }
    ],
    leetcode: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    gfg: "https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/"
  },
  {
    "slug": "find-peak-element",
    "title": "Find Peak Element",
    "category": "Binary Search",
    "difficulty": "Medium",
    "shortDescription": "Find a peak element that is strictly greater than its neighbors.",
    "description": "A peak element is an element that is strictly greater than its neighbors. Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks. You must write an algorithm that runs in O(log n) time.",
    "tags": ["Array", "Binary Search"],
    "intuition": "Use binary search. If the middle element is less than its right neighbor, a peak must exist on the right side; otherwise, a peak exists on the left side.",
    "example": {
      "input": "nums = [1,2,3,1]",
      "output": "2",
      "explanation": "3 is a peak element and your function should return the index number 2."
    },
    "hints": [
      "Compare nums[mid] with its neighbor nums[mid + 1].",
      "If nums[mid] < nums[mid + 1], you are walking uphill, so a peak is guaranteed to be found to your right."
    ],
    "testCases": [
      { "input": "nums = [1,2,3,1]", "output": "2" },
      { "input": "nums = [1,2,1,3,5,6,4]", "output": "5" }
    ],
    "leetcode": "https://leetcode.com/problems/find-peak-element/",
    "gfg": "https://www.geeksforgeeks.org/find-a-peak-in-a-given-array/"
  },
  {
    "slug": "koko-eating-bananas",
    "title": "Koko Eating Bananas",
    "category": "Binary Search",
    "difficulty": "Medium",
    "shortDescription": "Find the minimum eating speed to finish all bananas within h hours.",
    "description": "Koko loves to eat bananas. There are n piles of bananas. She can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile and eats k bananas from it. Return the minimum integer k such that she can eat all the bananas within h hours.",
    "tags": ["Array", "Binary Search"],
    "intuition": "The search space for the speed ranges from 1 to the max pile size. Use binary search to find the lowest speed that safely allows finishing within h hours.",
    "example": {
      "input": "piles = [3,6,7,11], h = 8",
      "output": "4",
      "explanation": "With a speed of 4, Koko can finish all piles in exactly 8 hours (1 + 2 + 2 + 3)."
    },
    "hints": [
      "The minimum speed is 1, and the maximum speed is max(piles).",
      "For a candidate speed mid, compute the total hours as ceil(pile / mid) for all piles. If total hours <= h, look for a smaller valid speed."
    ],
    "testCases": [
      { "input": "piles = [3,6,7,11], h = 8", "output": "4" },
      { "input": "piles = [30,11,23,4,20], h = 5", "output": "30" }
    ],
    "leetcode": "https://leetcode.com/problems/koko-eating-bananas/",
    "gfg": "https://www.geeksforgeeks.org/koko-eating-bananas/"
  },
  {
    "slug": "capacity-to-ship-packages-within-d-days",
    "title": "Capacity To Ship Packages Within D Days",
    "category": "Binary Search",
    "difficulty": "Medium",
    "shortDescription": "Find the minimum ship capacity to ship all packages within d days.",
    "description": "A conveyor belt has packages that must be shipped from one port to another within d days. The ith package has a weight of weights[i]. Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within d days.",
    "tags": ["Array", "Binary Search"],
    "intuition": "Binary search for the capacity. The minimum possible capacity is the heaviest package, and the maximum is the sum of all package weights.",
    "example": {
      "input": "weights = [1,2,3,4,5,6,7,8,9,10], days = 5",
      "output": "15",
      "explanation": "A ship capacity of 15 is the minimum to split the load into 5 days: [1,2,3,4,5], [6,7], [8], [9], [10]."
    },
    "hints": [
      "Set your lower bound to max(weights) and upper bound to sum(weights).",
      "For each checked capacity mid, loop through weights to check how many days it takes to pack everything sequentially."
    ],
    "testCases": [
      { "input": "weights = [1,2,3,4,5,6,7,8,9,10], days = 5", "output": "15" },
      { "input": "weights = [3,2,2,4,1,4], days = 3", "output": "6" }
    ],
    "leetcode": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
    "gfg": "https://www.geeksforgeeks.org/capacity-to-ship-packages-within-d-days/"
  },
  {
    "slug": "single-element-in-a-sorted-array",
    "title": "Single Element in a Sorted Array",
    "category": "Binary Search",
    "difficulty": "Medium",
    "shortDescription": "Find the single element in a sorted array where every other element appears twice.",
    "description": "You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once in O(log n) time.",
    "tags": ["Array", "Binary Search"],
    "intuition": "Before the single element, pairs always start on an even index and end on an odd index. After the single element, pairs start on an odd index and end on an even index.",
    "example": {
      "input": "nums = [1,1,2,3,3,4,4,8,8]",
      "output": "2",
      "explanation": "2 is the unique element that doesn't appear twice."
    },
    "hints": [
      "Use binary search and look at the index parity of mid.",
      "If mid is even and nums[mid] == nums[mid + 1], the single element is further right. Otherwise, it is on the left."
    ],
    "testCases": [
      { "input": "nums = [1,1,2,3,3,4,4,8,8]", "output": "2" },
      { "input": "nums = [3,3,7,7,10,11,11]", "output": "10" }
    ],
    "leetcode": "https://leetcode.com/problems/single-element-in-a-sorted-array/",
    "gfg": "https://www.geeksforgeeks.org/find-the-element-that-appears-once-in-a-sorted-array/"
  },
  {
    "slug": "search-in-rotated-sorted-array-ii",
    "title": "Search in Rotated Sorted Array II",
    "category": "Binary Search",
    "difficulty": "Medium",
    "shortDescription": "Search for a target value in a rotated sorted array containing duplicates.",
    "description": "Given the array nums after a rotation and an integer target, return true if target is in nums, or false if it is not. nums may contain duplicates, which can affect the time complexity.",
    "tags": ["Array", "Binary Search"],
    "intuition": "Identify which half of the array is sorted. Duplicates can cause ambiguity when nums[left] == nums[mid] == nums[right], in which case we must incrementally shrink our boundaries.",
    "example": {
      "input": "nums = [2,5,6,0,0,1,2], target = 0",
      "output": "true",
      "explanation": "0 is present in the rotated sorted array."
    },
    "hints": [
      "Handle the edge case where nums[left] == nums[mid] == nums[right] by moving both pointers inwards (left++, right--).",
      "Otherwise, proceed with standard rotated binary search checks."
    ],
    "testCases": [
      { "input": "nums = [2,5,6,0,0,1,2], target = 0", "output": "true" },
      { "input": "nums = [2,5,6,0,0,1,2], target = 3", "output": "false" }
    ],
    "leetcode": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
    "gfg": "https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-rotated-array-with-duplicates/"
  },
  {
    "slug": "time-based-key-value-store",
    "title": "Time Based Key-Value Store",
    "category": "Binary Search",
    "difficulty": "Medium",
    "shortDescription": "Design a key-value store that supports multiple timestamps.",
    "description": "Design a time-based key-value data structure that can store multiple values for the same key at different timestamps and retrieve the key's value at a certain timestamp.",
    "tags": ["Hash Table", "String", "Binary Search", "Design"],
    "intuition": "Map each key to a list of pairs `(timestamp, value)`. Since timestamps are added strictly in increasing order, use binary search (upper bound / floor) to retrieve the correct historical value.",
    "example": {
      "input": "set(\"foo\", \"bar\", 1), get(\"foo\", 1), get(\"foo\", 3)",
      "output": "[\"bar\", \"bar\"]",
      "explanation": "At timestamp 1, 'foo' is 'bar'. At timestamp 3, the latest valid state before or at 3 is at timestamp 1, which returns 'bar'."
    },
    "hints": [
      "Use a hash map to map string keys to dynamic arrays/lists.",
      "Use binary search on the timestamp array to locate the largest timestamp element less than or equal to the target timestamp."
    ],
    "testCases": [
      { "input": "set(\"love\", \"high\", 10), set(\"love\", \"low\", 20), get(\"love\", 5)", "output": "\"\"" }
    ],
    "leetcode": "https://leetcode.com/problems/time-based-key-value-store/",
    "gfg": "https://www.geeksforgeeks.org/design-a-time-based-key-value-store/"
  },
  {
    "slug": "find-first-and-last-position-of-element-in-sorted-array",
    "title": "Find First and Last Position of Element in Sorted Array",
    "category": "Binary Search",
    "difficulty": "Medium",
    "shortDescription": "Find the starting and ending position of a given target value.",
    "description": "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1]. You must write an O(log n) runtime algorithm.",
    "tags": ["Array", "Binary Search"],
    "intuition": "Run binary search twice. Modifying the target checking condition allows isolating the leftmost insertion point and rightmost insertion point separately.",
    "example": {
      "input": "nums = [5,7,7,8,8,10], target = 8",
      "output": "[3,4]",
      "explanation": "The target 8 starts at index 3 and ends at index 4."
    },
    "hints": [
      "To find the first position, when nums[mid] == target, treat it as if target is smaller and continue searching left.",
      "To find the last position, when nums[mid] == target, treat it as if target is larger and continue searching right."
    ],
    "testCases": [
      { "input": "nums = [5,7,7,8,8,10], target = 8", "output": "[3,4]" },
      { "input": "nums = [5,7,7,8,8,10], target = 6", "output": "[-1,-1]" }
    ],
    "leetcode": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    "gfg": "https://www.geeksforgeeks.org/find-first-and-last-positions-of-an-element-in-a-sorted-array/"
  },
  {
    "slug": "arranging-coins",
    "title": "Arranging Coins",
    "category": "Binary Search",
    "difficulty": "Easy",
    "shortDescription": "Find the total number of complete rows that can be formed using n coins.",
    "description": "You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. Given the integer n, return the number of complete rows of the staircase you will build.",
    "tags": ["Math", "Binary Search"],
    "intuition": "The total coins needed for $k$ rows is given by the formula $\\frac{k(k + 1)}{2}$. We can binary search for the largest integer $k$ that satisfies this inequality $\\le n$.",
    "example": {
      "input": "n = 5",
      "output": "2",
      "explanation": "The staircase rows look like: (o), (o, o), (o, o). The third row is incomplete, so we return 2."
    },
    "hints": [
      "The boundary space ranges from 1 to n.",
      "For a middle row count mid, check if mid * (mid + 1) / 2 <= n. If true, look for a larger number of complete rows."
    ],
    "testCases": [
      { "input": "n = 5", "output": "2" },
      { "input": "n = 8", "output": "3" }
    ],
    "leetcode": "https://leetcode.com/problems/arranging-coins/",
    "gfg": "https://www.geeksforgeeks.org/arranging-coins/"
  },
  {
    "slug": "search-insert-position",
    "title": "Search Insert Position",
    "category": "Binary Search",
    "difficulty": "Easy",
    "shortDescription": "Find index of target if found, or where it would be inserted.",
    "description": "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must write an algorithm with O(log n) runtime.",
    "tags": ["Array", "Binary Search"],
    "intuition": "Standard binary search returns the target index if it exists. If it does not exist, the 'left' boundary pointer will naturally settle at the correct insertion index location.",
    "example": {
      "input": "nums = [1,3,5,6], target = 5",
      "output": "2",
      "explanation": "5 is found at index 2."
    },
    "hints": [
      "Use basic binary search with low and high pointers.",
      "If the loop ends without finding target, the value of the low pointer is the insertion index."
    ],
    "testCases": [
      { "input": "nums = [1,3,5,6], target = 5", "output": "2" },
      { "input": "nums = [1,3,5,6], target = 2", "output": "1" }
    ],
    "leetcode": "https://leetcode.com/problems/search-insert-position/",
    "gfg": "https://www.geeksforgeeks.org/search-insert-position-of-k-in-a-sorted-array/"
  },
  {
    "slug": "divide-chocolate",
    "title": "Divide Chocolate",
    "category": "Binary Search",
    "difficulty": "Hard",
    "shortDescription": "Maximize the minimum sweetness of the chocolate bar you get.",
    "description": "You have one chocolate bar that consists of some chunks. Each chunk has its own sweetness given by the array sweetness. You want to share the chocolate with your k friends. Return the maximum total sweetness of the piece you can get.",
    "tags": ["Array", "Binary Search"],
    "intuition": "This is a 'maximize the minimum allocation' problem. Binary search on the minimum acceptable sweetness level you want to guarantee for each piece.",
    "example": {
      "input": "sweetness = [1,2,3,4,5,6,7,8,9], k = 5",
      "output": "6",
      "explanation": "You can divide the chocolate into chunks like [1,2,3], [4,5], [6], [7], [8], [9]. The minimum sweetness is 6."
    },
    "hints": [
      "The minimum sweetness possible is min(sweetness) and max is sum(sweetness) / (k + 1).",
      "Greedily group adjacent chunks together until their sweetness matches or exceeds the checked mid value. See if you can get at least k + 1 pieces."
    ],
    "testCases": [
      { "input": "sweetness = [1,2,3,4,5,6,7,8,9], k = 5", "output": "6" }
    ],
    "leetcode": "https://leetcode.com/problems/divide-chocolate/",
    "gfg": "https://www.geeksforgeeks.org/divide-chocolate-problem/"
  },
  {
    "slug": "linked-lists",
    "title": "Reverse Linked List",
    "category": "Linked List",
    "difficulty": "Easy",
    "shortDescription": "Reverse a singly linked list.",
    "description": "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    "tags": ["Linked List", "Recursion"],
    "intuition": "Iterate through the list while changing each node's next pointer to point to its previous node instead of its next node.",
    "example": {
      "input": "head = [1,2,3,4,5]",
      "output": "[5,4,3,2,1]",
      "explanation": "All list directions are entirely inverted."
    },
    "hints": [
      "Maintain tracking variables for prev, curr, and next.",
      "Save curr.next before updating it to point backward, then step forward."
    ],
    "testCases": [
      { "input": "[1,2,3]", "output": "[3,2,1]" },
      { "input": "[]", "output": "[]" }
    ],
    "leetcode": "https://leetcode.com/problems/reverse-linked-list/",
    "gfg": "https://www.geeksforgeeks.org/reverse-a-linked-list/"
  },
  {
    "slug": "remove-linked-list-elements",
    "title": "Remove Linked List Elements",
    "category": "Linked List",
    "difficulty": "Easy",
    "shortDescription": "Remove all elements from a linked list that have a given value.",
    "description": "Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.",
    "tags": ["Linked List", "Recursion"],
    "intuition": "Use a dummy node pointing to the head of the list to easily process deletions even if the target elements occur at the very beginning of the list.",
    "example": {
      "input": "head = [1,2,6,3,4,5,6], val = 6",
      "output": "[1,2,3,4,5]",
      "explanation": "All nodes containing value 6 are deleted from the chain."
    },
    "hints": [
      "Initialize a dummy node such that dummy.next = head.",
      "Traverse the list: if curr.next.val == val, skip it by setting curr.next = curr.next.next."
    ],
    "testCases": [
      { "input": "head = [1,2,6,3,4,5,6], val = 6", "output": "[1,2,3,4,5]" },
      { "input": "head = [7,7,7,7], val = 7", "output": "[]" }
    ],
    "leetcode": "https://leetcode.com/problems/remove-linked-list-elements/",
    "gfg": "https://www.geeksforgeeks.org/remove-all-occurrences-of-a-given-key-in-linked-list/"
  },
  {
    "slug": "swapping-nodes-in-a-linked-list",
    "title": "Swapping Nodes in a Linked List",
    "category": "Linked List",
    "difficulty": "Medium",
    "shortDescription": "Swap the values of the kth node from beginning and end.",
    "description": "You are given the head of a linked list, and an integer k. Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).",
    "tags": ["Linked List", "Two Pointers"],
    "intuition": "Use two pointers to locate the targets. Find the kth node from the start first, then use a sliding window approach to find the kth node from the end.",
    "example": {
      "input": "head = [1,2,3,4,5], k = 2",
      "output": "[1,4,3,2,5]",
      "explanation": "The 2nd node from the front (2) and 2nd node from the end (4) have swapped values."
    },
    "hints": [
      "Move a pointer `first` to the kth node.",
      "Set another pointer `second` to the head, and move both `first` and `second` until `first` hits the end. Now `second` is at the kth node from the end."
    ],
    "testCases": [
      { "input": "head = [1,2,3,4,5], k = 2", "output": "[1,4,3,2,5]" }
    ],
    "leetcode": "https://leetcode.com/problems/swapping-nodes-in-a-linked-list/",
    "gfg": "https://www.geeksforgeeks.org/swap-kth-node-from-beginning-with-kth-node-from-end-in-a-linked-list/"
  },
  {
    "slug": "partition-list",
    "title": "Partition List",
    "category": "Linked List",
    "difficulty": "Medium",
    "shortDescription": "Partition a list around a value x.",
    "description": "Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x. You should preserve the original relative order of the nodes in each of the two partitions.",
    "tags": ["Linked List", "Two Pointers"],
    "intuition": "Maintain two separate chains using dummy nodes: one chain for nodes smaller than x and another for nodes greater than or equal to x. Merge them at the end.",
    "example": {
      "input": "head = [1,4,3,2,5,2], x = 3",
      "output": "[1,2,2,4,3,5]",
      "explanation": "All nodes less than 3 are pulled left while preserving initial ordering."
    },
    "hints": [
      "Instantiate two dummy headers: `before_head` and `after_head`.",
      "Iterate through the list attaching nodes to their respective category list, then set the last node of the 'after' list to null."
    ],
    "testCases": [
      { "input": "head = [1,4,3,2,5,2], x = 3", "output": "[1,2,2,4,3,5]" }
    ],
    "leetcode": "https://leetcode.com/problems/partition-list/",
    "gfg": "https://www.geeksforgeeks.org/partitioning-a-linked-list-around-a-given-value-and-keeping-the-original-order/"
  },
  {
    "slug": "rotate-list",
    "title": "Rotate List",
    "category": "Linked List",
    "difficulty": "Medium",
    "shortDescription": "Rotate the list to the right by k places.",
    "description": "Given the head of a linked list, rotate the list to the right by k places.",
    "tags": ["Linked List", "Two Pointers"],
    "intuition": "Connect the tail of the list to the head to form a temporary cycle. Calculate the true length, compute the effective shift using $k \\pmod{\\text{length}}$, and break the loop at the new tail.",
    "example": {
      "input": "head = [1,2,3,4,5], k = 2",
      "output": "[4,5,1,2,3]",
      "explanation": "Rotating by 2 places brings 4 and 5 to the front."
    },
    "hints": [
      "Find the length of the list and link the tail node to the head.",
      "The new head is at index position: length - (k % length)."
    ],
    "testCases": [
      { "input": "head = [1,2,3,4,5], k = 2", "output": "[4,5,1,2,3]" },
      { "input": "head = [0,1,2], k = 4", "output": "[2,0,1]" }
    ],
    "leetcode": "https://leetcode.com/problems/rotate-list/",
    "gfg": "https://www.geeksforgeeks.org/rotate-a-linked-list/"
  },
  {
    "slug": "add-two-numbers-ii",
    "title": "Add Two Numbers II",
    "category": "Linked List",
    "difficulty": "Medium",
    "shortDescription": "Add two numbers represented by linked lists where digits are not reversed.",
    "description": "You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    "tags": ["Linked List", "Math", "Stack"],
    "intuition": "Since numbers are processed from least significant to most significant digit, use stacks to reverse the access order of the nodes without modifying the original lists.",
    "example": {
      "input": "l1 = [7,2,4,3], l2 = [5,6,4]",
      "output": "[7,8,0,7]",
      "explanation": "7243 + 564 = 7807."
    },
    "hints": [
      "Push all nodes of both lists into two separate stacks.",
      "Pop values one by one, compute the sum and carry, and build the resultant linked list backward."
    ],
    "testCases": [
      { "input": "l1 = [7,2,4,3], l2 = [5,6,4]", "output": "[7,8,0,7]" }
    ],
    "leetcode": "https://leetcode.com/problems/add-two-numbers-ii/",
    "gfg": "https://www.geeksforgeeks.org/add-two-numbers-represented-by-linked-lists/"
  },
  {
    "slug": "design-linked-list",
    "title": "Design Linked List",
    "category": "Linked List",
    "difficulty": "Medium",
    "shortDescription": "Design your own singly or doubly linked list.",
    "description": "Design your implementation of the linked list. You can choose to use a singly linked list or a doubly linked list. Support basic operations like get, addAtHead, addAtTail, addAtIndex, and deleteAtIndex.",
    "tags": ["Linked List", "Design"],
    "intuition": "Implement a helper Node class. Track the size of the list and a dummy head node to simplify boundary additions and edge deletions.",
    "example": {
      "input": "addAtHead(1), addAtTail(3), addAtIndex(1, 2), get(1)",
      "output": "2",
      "explanation": "The list becomes 1->2->3. Getting index 1 returns 2."
    },
    "hints": [
      "Keep track of an explicit `size` property to handle index out-of-bounds scenarios quickly.",
      "Carefully link node references when doing insertion or deletion at arbitrary index positions."
    ],
    "testCases": [
      { "input": "[\"MyLinkedList\",\"addAtHead\",\"addAtTail\",\"get\"], [[],[1],[3],[1]]", "output": "[null,null,null,3]" }
    ],
    "leetcode": "https://leetcode.com/problems/design-linked-list/",
    "gfg": "https://www.geeksforgeeks.org/implementation-of-singly-linked-list-in-menu-driven-program/"
  },
  {
    "slug": "design-browser-history",
    "title": "Design Browser History",
    "category": "Linked List",
    "difficulty": "Medium",
    "shortDescription": "Design a browser history utility with forward and back capabilities.",
    "description": "You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.",
    "tags": ["Array", "Linked List", "Stack", "Design", "Doubly Linked List"],
    "intuition": "A doubly linked list perfectly models browser history. Visiting a new URL deletes all forward history nodes ahead of the current node.",
    "example": {
      "input": "visit(\"google.com\"), visit(\"leetcode.com\"), back(1)",
      "output": "\"google.com\"",
      "explanation": "Moving back 1 step transitions current location from leetcode.com to google.com."
    },
    "hints": [
      "A doubly linked list node should store a string URL, a prev pointer, and a next pointer.",
      "When visiting a new page, overwrite the current node's `next` pointer, effectively cutting off any old forward pages."
    ],
    "testCases": [
      { "input": "[\"BrowserHistory\",\"visit\",\"back\"], [[\"a.com\"],[\"b.com\"],[1]]", "output": "[null,null,\"a.com\"]" }
    ],
    "leetcode": "https://leetcode.com/problems/design-browser-history/",
    "gfg": "https://www.geeksforgeeks.org/design-browser-history-system/"
  },
  {
    "slug": "reverse-nodes-in-even-length-groups",
    "title": "Reverse Nodes in Even Length Groups",
    "category": "Linked List",
    "difficulty": "Medium",
    "shortDescription": "Reverse nodes in groups that have an even length.",
    "description": "You are given the head of a linked list. The nodes in the linked list are sequentially assigned to groups of increasing lengths (1, 2, 3, 4...). Reverse the nodes in each group if its length is even.",
    "tags": ["Linked List"],
    "intuition": "Traverse the list group by group while tracking group lengths. For the final group, look at the actual count of nodes left, not the theoretical group size.",
    "example": {
      "input": "head = [5,2,6,3,9,1,7,3,8,4]",
      "output": "[5,6,2,3,9,1,4,8,3,7]",
      "explanation": "Group 1 (size 1: odd) stays. Group 2 (size 2: even) reverses [2,6]->[6,2]. Group 3 (size 3: odd) stays. Group 4 (actual remaining size 4: even) reverses."
    },
    "hints": [
      "Track the expected length of the group, which increases by 1 each iteration.",
      "Preview ahead to count actual available nodes in the group. If the final count is even, isolate and reverse that sub-segment."
    ],
    "testCases": [
      { "input": "head = [1,1,0,6]", "output": "[1,0,1,6]" }
    ],
    "leetcode": "https://leetcode.com/problems/reverse-nodes-in-even-length-groups/",
    "gfg": "https://www.geeksforgeeks.org/reverse-nodes-in-even-length-groups-of-linked-list/"
  }
,  {
    slug: "single-number",
    title: "Single Number",
    category: "Bit Manipulation",
    difficulty: "Easy",
    shortDescription: "Find the non-duplicate element.",
    description: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one using linear runtime and constant extra space.",
    tags: ["Array", "Bit Manipulation"],
    intuition: "XORing a number with itself results in 0. XORing all elements together cancels out pairs, leaving only the single number.",
    example: {
      input: "[4,1,2,1,2]",
      output: "4",
      explanation: "1 and 2 cancel out via XOR, leaving 4."
    },
    hints: [
      "Recall bitwise operations properties: A ^ A = 0, and A ^ 0 = A",
      "Initialize a variable to 0 and XOR it with every element in the array"
    ],
    testCases: [
      { input: "[2,2,1]", output: "1" },
      { input: "[4,1,2,1,2]", output: "4" }
    ],
    leetcode: "https://leetcode.com/problems/single-number/",
    gfg: "https://www.geeksforgeeks.org/find-element-appears-once-array-every-element-appears-twice/"
  },

  {
    slug: "merge-sorted-array",
    title: "Merge Sorted Array",
    category: "Arrays",
    difficulty: "Easy",
    shortDescription: "Merge two sorted arrays in-place.",
    description: "Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array in-place.",
    tags: ["Array", "Two Pointers", "Sorting"],
    intuition: "Start comparing elements from the back of both arrays to fill nums1 from highest to lowest without overwriting values.",
    example: {
      input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
      output: "[1,2,2,3,5,6]",
      explanation: "Elements are merged directly into the back indices of nums1."
    },
    hints: [
      "Use three pointers: one at index m-1, one at n-1, and one at m+n-1",
      "Process backward to avoid using temporary array memory"
    ],
    testCases: [
      { input: "[1,2,3,0,0,0], 3, [2,5,6], 3", output: "[1,2,2,3,5,6]" }
    ],
    leetcode: "https://leetcode.com/problems/merge-sorted-array/",
    gfg: "https://www.geeksforgeeks.org/merge-two-sorted-arrays-o1-extra-space/"
  },

  {
    slug: "palindrome-linked-list",
    title: "Palindrome Linked List",
    category: "Linked List",
    difficulty: "Easy",
    shortDescription: "Check if a linked list reads same backward.",
    description: "Given the head of a singly linked list, return true if it is a palindrome or false otherwise.",
    tags: ["Linked List", "Two Pointers", "Stack", "Recursion"],
    intuition: "Find the middle of the linked list, reverse the second half, and compare it with the first half.",
    example: {
      input: "1->2->2->1",
      output: "true",
      explanation: "The values match forward and backward."
    },
    hints: [
      "Use slow and fast pointer strategy to locate the midpoint node",
      "Reverse the second half in-place and compare values pointer-by-pointer"
    ],
    testCases: [
      { input: "1->2->2->1", output: "true" },
      { input: "1->2", output: "false" }
    ],
    leetcode: "https://leetcode.com/problems/palindrome-linked-list/",
    gfg: "https://www.geeksforgeeks.org/check-if-a-linked-list-is-palindrome/"
  },

  {
    slug: "invert-binary-tree",
    title: "Invert Binary Tree",
    category: "Trees",
    difficulty: "Easy",
    shortDescription: "Flip a binary tree horizontally.",
    description: "Given the root of a binary tree, invert the tree (create its mirror image) and return its root.",
    tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
    intuition: "Recursively swap the left and right children for every single node in the tree.",
    example: {
      input: "[4,2,7,1,3,6,9]",
      output: "[4,7,2,9,6,3,1]",
      explanation: "Left and right subtrees are completely mirrored."
    },
    hints: [
      "A simple post-order or pre-order traversal works perfectly here",
      "Base case: if root is null, return null"
    ],
    testCases: [
      { input: "[4,2,7,1,3,6,9]", output: "[4,7,2,9,6,3,1]" }
    ],
    leetcode: "https://leetcode.com/problems/invert-binary-tree/",
    gfg: "https://www.geeksforgeeks.org/write-an-efficient-c-function-to-convert-a-binary-tree-into-its-mirror-tree/"
  },

  {
    slug: "missing-number",
    title: "Missing Number",
    category: "Math",
    difficulty: "Easy",
    shortDescription: "Find missing element in range.",
    description: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
    tags: ["Array", "Hash Table", "Math", "Binary Search", "Bit Manipulation"],
    intuition: "Calculate the expected mathematical sum of numbers from 0 to n using Gauss' formula, then subtract the actual sum of the array.",
    example: {
      input: "[3,0,1]",
      output: "2",
      explanation: "n=3, sum from 0 to 3 is 6. Actual array sum is 4. 6 - 4 = 2."
    },
    hints: [
      "Expected Sum formula is: n * (n + 1) / 2",
      "Can also be solved using XOR bit manipulation to avoid integer overflow"
    ],
    testCases: [
      { input: "[3,0,1]", output: "2" },
      { input: "[0,1]", output: "2" }
    ],
    leetcode: "https://leetcode.com/problems/missing-number/",
    gfg: "https://www.geeksforgeeks.org/find-the-missing-number/"
  },

  {
    slug: "move-zeroes",
    title: "Move Zeroes",
    category: "Two Pointers",
    difficulty: "Easy",
    shortDescription: "Shift zeroes to end of array.",
    description: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements in-place.",
    tags: ["Array", "Two Pointers"],
    intuition: "Maintain a pointer for the position of the next non-zero element. Iterate through the array and write non-zero elements to that pointer.",
    example: {
      input: "[0,1,0,3,12]",
      output: "[1,3,12,0,0]",
      explanation: "Relative order of 1, 3, 12 is preserved, and zeroes are pushed to the rear."
    },
    hints: [
      "Use a write pointer that only advances when a non-zero element is placed",
      "Fill the remaining positions with zeroes up to the array length"
    ],
    testCases: [
      { input: "[0,1,0,3,12]", output: "[1,3,12,0,0]" },
      { input: "[0]", output: "[0]" }
    ],
    leetcode: "https://leetcode.com/problems/move-zeroes/",
    gfg: "https://www.geeksforgeeks.org/move-zeroes-end-array/"
  },

  {
    slug: "intersection-of-two-linked-lists",
    title: "Intersection of Two Linked Lists",
    category: "Linked List",
    difficulty: "Easy",
    shortDescription: "Find node where two lists merge.",
    description: "Given the heads of two singly linked lists, return the node at which the two lists intersect. If they do not intersect, return null.",
    tags: ["Linked List", "Two Pointers", "Hash Table"],
    intuition: "Use two pointers running through both paths. When a pointer reaches the end of a list, redirect it to the head of the opposite list.",
    example: {
      input: "intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]",
      output: "Reference to node with value 8",
      explanation: "Pointers match after balancing differences in list lengths."
    },
    hints: [
      "Redirecting pointers switch coordinates, offsetting differences in path lengths",
      "They will either collide at the intersection node or terminate at null simultaneously"
    ],
    testCases: [
      { input: "[4,1,8,4,5], [5,6,1,8,4,5]", output: "8" }
    ],
    leetcode: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    gfg: "https://www.geeksforgeeks.org/write-a-function-to-get-the-intersection-point-of-two-linked-lists/"
  },

  {
    slug: "majority-element",
    title: "Majority Element",
    category: "Arrays",
    difficulty: "Easy",
    shortDescription: "Find element appearing > n/2 times.",
    description: "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times.",
    tags: ["Array", "Hash Table", "Divide and Conquer", "Sorting", "Counting"],
    intuition: "Boyer-Moore Voting Algorithm: Track a candidate and a count variable, incrementing or decrementing based on matches.",
    example: {
      input: "[3,2,3]",
      output: "3",
      explanation: "3 appears twice, which is greater than 3/2 format thresholds."
    },
    hints: [
      "If count reaches zero, update the current candidate to the current element",
      "Since a majority element is guaranteed to exist, the final candidate is the answer"
    ],
    testCases: [
      { input: "[3,2,3]", output: "3" },
      { input: "[2,2,1,1,1,2,2]", output: "2" }
    ],
    leetcode: "https://leetcode.com/problems/majority-element/",
    gfg: "https://www.geeksforgeeks.org/majority-element/"
  },

  {
    slug: "reverse-bits",
    title: "Reverse Bits",
    category: "Bit Manipulation",
    difficulty: "Easy",
    shortDescription: "Reverse bits of a 32-bit integer.",
    description: "Reverse bits of a given 32-bit unsigned integer.",
    tags: ["Divide and Conquer", "Bit Manipulation"],
    intuition: "Iterate 32 times, shifting the result to the left and adding the least significant bit of the input number.",
    example: {
      input: "00000010100101000001111010011100",
      output: "00111001011110000010100101000000",
      explanation: "The binary representation is strictly reversed."
    },
    hints: [
      "Extract the rightmost bit using `n & 1`",
      "Shift the input right (`n >>> 1`) and the output left (`result << 1`) inside the loop"
    ],
    testCases: [
      { input: "43261596", output: "964176192" }
    ],
    leetcode: "https://leetcode.com/problems/reverse-bits/",
    gfg: "https://www.geeksforgeeks.org/reverse-bits-of-a-32-bit-unsigned-integer/"
  },

  {
    slug: "square-root",
    title: "Sqrt(x)",
    category: "Search",
    difficulty: "Easy",
    shortDescription: "Compute integer square root.",
    description: "Given a non-negative integer x, return the square root of x rounded down to the nearest integer. Do not use built-in functions.",
    tags: ["Math", "Binary Search"],
    intuition: "Use Binary Search between 1 and x to locate the integer value whose square is less than or equal to x.",
    example: {
      input: "8",
      output: "2",
      explanation: "The square root of 8 is 2.8284..., rounded down to the nearest integer is 2."
    },
    hints: [
      "Look for values where mid * mid <= x",
      "Use division logic `mid <= x / mid` to avoid variable numerical integer overflow boundaries"
    ],
    testCases: [
      { input: "4", output: "2" },
      { input: "8", output: "2" }
    ],
    leetcode: "https://leetcode.com/problems/sqrtx/",
    gfg: "https://www.geeksforgeeks.org/square-root-of-an-integer/"
  },

  {
    slug: "remove-duplicates-from-sorted-array",
    title: "Remove Duplicates from Sorted Array",
    category: "Two Pointers",
    difficulty: "Easy",
    shortDescription: "Deduplicate unique entries in-place.",
    description: "Given a sorted array nums, remove the duplicates in-place such that each unique element appears only once, returning the new length.",
    tags: ["Array", "Two Pointers"],
    intuition: "Keep a unique-element pointer tracking where the last verified distinct entry was written.",
    example: {
      input: "[1,1,2]",
      output: "2",
      explanation: "The unique array is [1, 2] with length 2."
    },
    hints: [
      "Iterate through the array starting from index 1",
      "Compare the current element with the element at the unique-element pointer position"
    ],
    testCases: [
      { input: "[1,1,2]", output: "2" },
      { input: "[0,0,1,1,1,2,2,3,3,4]", output: "5" }
    ],
    leetcode: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    gfg: "https://www.geeksforgeeks.org/remove-duplicates-sorted-array/"
  },

  {
    slug: "cloned-tree-node",
    title: "Find a Corresponding Node of a Binary Tree in a Clone of That Tree",
    category: "Trees",
    difficulty: "Easy",
    shortDescription: "Locate identical target node in cloned tree.",
    description: "Given two binary trees original and cloned, and a target node in the original tree, find the corresponding node in the cloned tree.",
    tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
    intuition: "Traverse both trees simultaneously. When the current node in the original tree matches target, return the current node from the cloned tree.",
    example: {
      input: "tree = [7,4,3,null,null,6,19], target = Node(3)",
      output: "Node(3) from cloned tree",
      explanation: "The matching reference inside the cloned instance configuration structure is retrieved."
    },
    hints: [
      "Any standard tree traversal (DFS or BFS) works as long as you pass both node nodes synchronously",
      "Compare nodes by reference, not just by value"
    ],
    testCases: [
      { input: "[7,4,3,null,null,6,19], node_3", output: "node_3_cloned" }
    ],
    leetcode: "https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/",
    gfg: "https://www.geeksforgeeks.org/find-corresponding-node-in-a-cloned-binary-tree/"
  },

  {
    slug: "pascals-triangle",
    title: "Pascal's Triangle",
    category: "Dynamic Programming",
    difficulty: "Easy",
    shortDescription: "Generate rows of Pascal's triangle.",
    description: "Given an integer numRows, return the first numRows of Pascal's triangle.",
    tags: ["Array", "Dynamic Programming"],
    intuition: "Each element in a row is the sum of the two elements directly above it in the previous row.",
    example: {
      input: "5",
      output: "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]",
      explanation: "Rows are built iteratively starting from row 1."
    },
    hints: [
      "The first and last elements of every row are always 1",
      "Compute middle elements using values from the row at index `i-1`"
    ],
    testCases: [
      { input: "1", output: "[[1]]" },
      { input: "5", output: "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]" }
    ],
    leetcode: "https://leetcode.com/problems/pascals-triangle/",
    gfg: "https://www.geeksforgeeks.org/pascals-triangle/"
  },

  {
    slug: "valid-palindrome-ii",
    title: "Valid Palindrome II",
    category: "Strings",
    difficulty: "Easy",
    shortDescription: "Check if palindrome allowing one deletion.",
    description: "Given a string s, return true if the s can be palindrome after deleting at most one character from it.",
    tags: ["Two Pointers", "String"],
    intuition: "Use standard two pointers. On the first mismatch encounter, check if the remaining substring becomes a palindrome if you skip either the left or right character.",
    example: {
      input: "\"aba\"",
      output: "true",
      explanation: "Already a palindrome without deleting any characters."
    },
    hints: [
      "Isolate palindrome checking logic into a helper function",
      "When `s[left] !== s[right]`, return `isValid(left+1, right) || isValid(left, right-1)`"
    ],
    testCases: [
      { input: "\"aba\"", output: "true" },
      { input: "\"abca\"", output: "true" },
      { input: "\"abc\"", output: "false" }
    ],
    leetcode: "https://leetcode.com/problems/valid-palindrome-ii/",
    gfg: "https://www.geeksforgeeks.org/valid-palindrome-by-removing-at-most-one-character/"
  },

  {
    slug: "remove-linked-list-elements",
    title: "Remove Linked List Elements",
    category: "Linked List",
    difficulty: "Easy",
    shortDescription: "Delete all nodes matching target val.",
    description: "Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.",
    tags: ["Linked List", "Recursion"],
    intuition: "Use a sentinel/dummy node pointing to head to cleanly manage corner cases where the head node itself needs to be removed.",
    example: {
      input: "head = [1,2,6,3,4,5,6], val = 6",
      output: "[1,2,3,4,5]",
      explanation: "All nodes with value 6 are dropped from links structural array."
    },
    hints: [
      "Maintain a `curr` tracking variable and check `curr.next.val` matching constraints",
      "Skip elements by altering pointers: `curr.next = curr.next.next`"
    ],
    testCases: [
      { input: "[1,2,6,3,4,5,6], 6", output: "[1,2,3,4,5]" }
    ],
    leetcode: "https://leetcode.com/problems/remove-linked-list-elements/",
    gfg: "https://www.geeksforgeeks.org/delete-occurrences-given-key-linked-list/"
  },

  {
    slug: "symmetric-tree",
    title: "Symmetric Tree",
    category: "Trees",
    difficulty: "Easy",
    shortDescription: "Check if tree mirror image of itself.",
    description: "Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
    tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
    intuition: "Two trees are mirror images if their roots match, and the left subtree of one is a mirror of the right subtree of the other.",
    example: {
      input: "[1,2,2,3,4,4,3]",
      output: "true",
      explanation: "The tree structure reads symmetrically from left to right."
    },
    hints: [
      "Write a helper function `isMirror(node1, node2)`",
      "Compare `node1.left` with `node2.right` and `node1.right` with `node2.left` recursively"
    ],
    testCases: [
      { input: "[1,2,2,3,4,4,3]", output: "true" },
      { input: "[1,2,2,null,3,null,3]", output: "false" }
    ],
    leetcode: "https://leetcode.com/problems/symmetric-tree/",
    gfg: "https://www.geeksforgeeks.org/symmetric-tree-tree-which-is-mirror-image-of-itself/"
  },

  {
    slug: "diameter-of-binary-tree",
    title: "Diameter of Binary Tree",
    category: "Trees",
    difficulty: "Easy",
    shortDescription: "Find longest path distance in tree.",
    description: "Given the root of a binary tree, return the length of the diameter of the tree (the length of the longest path between any two nodes).",
    tags: ["Tree", "Depth-First Search", "Binary Tree"],
    intuition: "The diameter at a given node is the sum of the max depths of its left and right subtrees. Compute this value for all nodes.",
    example: {
      input: "[1,2,3,4,5]",
      output: "3",
      explanation: "Longest path is [4,2,1,3] or [5,2,1,3] containing 3 edge transitions."
    },
    hints: [
      "Update a global or scoped maximum tracking variable during depth calculations",
      "Return the max depth of the current node up the recursion stack: `1 + max(left_depth, right_depth)`"
    ],
    testCases: [
      { input: "[1,2,3,4,5]", output: "3" }
    ],
    leetcode: "https://leetcode.com/problems/diameter-of-binary-tree/",
    gfg: "https://www.geeksforgeeks.org/diameter-of-a-binary-tree/"
  },

  {
    slug: "plus-one",
    title: "Plus One",
    category: "Arrays",
    difficulty: "Easy",
    shortDescription: "Increment large integer digit array.",
    description: "Given a non-empty array of digits representing a non-negative integer, increment the integer by one.",
    tags: ["Array", "Math"],
    intuition: "Traverse the digit array from right to left. If a digit is less than 9, increment it and return. If it is 9, turn it into 0 and carry over.",
    example: {
      input: "[1,2,3]",
      output: "[1,2,4]",
      explanation: "123 + 1 = 124."
    },
    hints: [
      "Handle carry values systematically moving backward",
      "If all digits are 9, create a new array with size + 1 and place a 1 at the front"
    ],
    testCases: [
      { input: "[1,2,3]", output: "[1,2,4]" },
      { input: "[9,9]", output: "[1,0,0]" }
    ],
    leetcode: "https://leetcode.com/problems/plus-one/",
    gfg: "https://www.geeksforgeeks.org/add-1-to-a-number-represented-as-array/"
  },

  {
    slug: "add-binary",
    title: "Add Binary",
    category: "Math",
    difficulty: "Easy",
    shortDescription: "Sum two binary strings.",
    description: "Given two binary strings a and b, return their sum as a binary string.",
    tags: ["Math", "String", "Bit Manipulation", "Simulation"],
    intuition: "Perform structural column addition using two pointers starting from the rightmost character along with a carry flag.",
    example: {
      input: "a = \"11\", b = \"1\"",
      output: "\"100\"",
      explanation: "3 + 1 = 4, which is 100 in binary form."
    },
    hints: [
      "Compute sum = bitA + bitB + carry at each step",
      "Append `sum % 2` to your result string and compute new carry as `Math.floor(sum / 2)`"
    ],
    testCases: [
      { input: "\"11\", \"1\"", output: "\"100\"" },
      { input: "\"1010\", \"1011\"", output: "\"10101\"" }
    ],
    leetcode: "https://leetcode.com/problems/add-binary/",
    gfg: "https://www.geeksforgeeks.org/program-to-add-two-binary-strings/"
  },

  {
    slug: "length-of-last-word",
    title: "Length of Last Word",
    category: "Strings",
    difficulty: "Easy",
    shortDescription: "Find length of final word in string.",
    description: "Given a string s consisting of words and spaces, return the length of the last word in the string.",
    tags: ["String"],
    intuition: "Trim trailing whitespace, then count characters moving backward until hitting a space.",
    example: {
      input: "\"Hello World  \"",
      output: "5",
      explanation: "The last word is 'World' with length 5."
    },
    hints: [
      "Start from the end of the string to save processing steps",
      "Ignore initial trailing spaces before initiating your character counter variable"
    ],
    testCases: [
      { input: "\"Hello World\"", output: "5" },
      { input: "\"   fly me   to   the moon  \"", output: "4" }
    ],
    leetcode: "https://leetcode.com/problems/length-of-last-word/",
    gfg: "https://www.geeksforgeeks.org/length-of-last-word-in-a-string/"
  },

  {
    slug: "intersection-of-two-arrays",
    title: "Intersection of Two Arrays",
    category: "Arrays",
    difficulty: "Easy",
    shortDescription: "Find common unique values in arrays.",
    description: "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique.",
    tags: ["Array", "Hash Table", "Two Pointers", "Binary Search", "Sorting"],
    intuition: "Convert the first array into a Set for quick lookups. Iterate through the second array, collecting common elements into a unique result set.",
    example: {
      input: "nums1 = [1,2,2,1], nums2 = [2,2]",
      output: "[2]",
      explanation: "2 is the only distinct overlapping value found in both datasets."
    },
    hints: [
      "A set collection filters duplicates out automatically",
      "Can also sort both arrays and use a standard matching dual pointer configuration"
    ],
    testCases: [
      { input: "[1,2,2,1], [2,2]", output: "[2]" }
    ],
    leetcode: "https://leetcode.com/problems/intersection-of-two-arrays/",
    gfg: "https://www.geeksforgeeks.org/find-union-and-intersection-of-two-unsorted-arrays/"
  },
  {
    slug: "longst-palindromic-substring",
    title: "Longest Palindromic Substring",
    category: "Strings",
    difficulty: "Medium",
    shortDescription: "Find the longest palindrome in a string.",
    description: "Given a string s, return the longest palindromic substring in s.",
    tags: ["String", "Dynamic Programming"],
    intuition: "Expand around center: treat each character (and gap between chars) as a potential center of a palindrome.",
    example: {
      input: "\"babad\"",
      output: "\"bab\"",
      explanation: "\"aba\" is also a valid answer."
    },
    hints: [
      "A palindrome mirrors around its center.",
      "There are 2n-1 possible centers for a string of length n."
    ],
    testCases: [
      { input: "\"babad\"", output: "\"bab\"" },
      { input: "\"cbbd\"", output: "\"bb\"" }
    ],
    leetcode: "https://leetcode.com/problems/longest-palindromic-substring/",
    gfg: "https://www.geeksforgeeks.org/longest-palindromic-substring/"
  },


  {
    slug: "permutations",
    title: "Permutations",
    category: "Backtracking",
    difficulty: "Medium",
    shortDescription: "Generate all possible permutations.",
    description: "Given an array nums of distinct integers, return all the possible permutations.",
    tags: ["Array", "Backtracking"],
    intuition: "Swap elements into the first position and recursively permute the remaining suffix.",
    example: {
      input: "[1,2,3]",
      output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
      explanation: "All 3! (6) arrangements are produced."
    },
    hints: [
      "Use a 'used' boolean array to track which elements are in current path.",
      "Remember to pop from your path list before returning from recursion."
    ],
    testCases: [
      { input: "[1,2,3]", output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" }
    ],
    leetcode: "https://leetcode.com/problems/permutations/",
    gfg: "https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/"
  },

  {
    slug: "remove-nth-node-from-end-of-list",
    title: "Remove Nth Node From End of List",
    category: "Linked List",
    difficulty: "Medium",
    shortDescription: "Delete node at specific offset from tail.",
    description: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
    tags: ["Linked List", "Two Pointers"],
    intuition: "Use two pointers with a gap of n. When the fast pointer hits the end, the slow pointer is just before the target.",
    example: {
      input: "head = [1,2,3,4,5], n = 2",
      output: "[1,2,3,5]",
      explanation: "The second node from the end is 4."
    },
    hints: [
      "A dummy head helps handle the case where you remove the actual head.",
      "Advance fast pointer n+1 steps first to position slow correctly."
    ],
    testCases: [
      { input: "[1,2,3,4,5], 2", output: "[1,2,3,5]" }
    ],
    leetcode: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    gfg: "https://www.geeksforgeeks.org/nth-node-from-the-end-of-a-linked-list/"
  },

  {
    slug: "coin-change-ii",
    title: "Coin Change II",
    category: "Dynamic Programming",
    difficulty: "Medium",
    shortDescription: "Total combinations to make amount.",
    description: "Given an array of coins and an amount, return the number of combinations that make up that amount.",
    tags: ["Array", "Dynamic Programming"],
    intuition: "Unbounded Knapsack: Iterate through each coin and update the DP table for all achievable amounts.",
    example: {
      input: "amount = 5, coins = [1,2,5]",
      output: "4",
      explanation: "5=5, 5=2+2+1, 5=2+1+1+1, 5=1+1+1+1+1"
    },
    hints: [
      "Avoid double counting by iterating through coins in the outer loop.",
      "dp[i] += dp[i - coin]"
    ],
    testCases: [
      { input: "5, [1,2,5]", output: "4" }
    ],
    leetcode: "https://leetcode.com/problems/coin-change-ii/",
    gfg: "https://www.geeksforgeeks.org/coin-change-dp-7/"
  },

  {
    slug: "word-break",
    title: "Word Break",
    category: "Dynamic Programming",
    difficulty: "Medium",
    shortDescription: "Can string be segmented into words?",
    description: "Given a string and a dictionary, determine if the string can be segmented into a space-separated sequence of dictionary words.",
    tags: ["Hash Table", "String", "Dynamic Programming", "Memoization"],
    intuition: "For every index i, check if any prefix [0...j] is breakable and the suffix [j...i] is in the dictionary.",
    example: {
      input: "s = \"leetcode\", wordDict = [\"leet\",\"code\"]",
      output: "true",
      explanation: "Can be split into 'leet' and 'code'."
    },
    hints: [
      "Use a DP boolean array where dp[i] means s[0...i] is segmentable.",
      "Convert dictionary to a Set for O(1) lookups."
    ],
    testCases: [
      { input: "\"leetcode\", [\"leet\",\"code\"]", output: "true" }
    ],
    leetcode: "https://leetcode.com/problems/word-break/",
    gfg: "https://www.geeksforgeeks.org/word-break-problem-dp-32/"
  },

  {
    slug: "pacific-atlantic-water-flow",
    title: "Pacific Atlantic Water Flow",
    category: "Graphs",
    difficulty: "Medium",
    shortDescription: "Find cells that can reach both oceans.",
    description: "Find coordinates where rain can flow to both the Pacific and Atlantic oceans.",
    tags: ["Array", "DFS", "BFS", "Matrix"],
    intuition: "Work backwards: start from the edges (oceans) and see how far 'up' the water can go.",
    example: {
      input: "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1]]",
      output: "[[0,4],[1,3],[1,4],...]",
      explanation: "Water flows from these points to both boundaries."
    },
    hints: [
      "Run two separate traversals: one for Pacific, one for Atlantic.",
      "The intersection of reachable cells is your answer."
    ],
    testCases: [
      { input: "[[1,1],[1,1]]", output: "[[0,0],[0,1],[1,0],[1,1]]" }
    ],
    leetcode: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    gfg: "https://www.geeksforgeeks.org/pacific-atlantic-water-flow/"
  },


  {
    slug: "find-minimum-in-rotated-sorted-array",
    title: "Find Minimum in Rotated Sorted Array",
    category: "Search",
    difficulty: "Medium",
    shortDescription: "Locate pivot point in rotated array.",
    description: "Find the minimum element in an array that has been rotated.",
    tags: ["Array", "Binary Search"],
    intuition: "Compare the middle element with the rightmost element to decide which half contains the pivot.",
    example: {
      input: "[3,4,5,1,2]",
      output: "1",
      explanation: "The original sorted array was [1,2,3,4,5]."
    },
    hints: [
      "If nums[mid] > nums[right], the minimum is in the right half.",
      "If nums[mid] < nums[right], the minimum is at mid or to the left."
    ],
    testCases: [
      { input: "[3,4,5,1,2]", output: "1" },
      { input: "[4,5,6,7,0,1,2]", output: "0" }
    ],
    leetcode: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    gfg: "https://www.geeksforgeeks.org/find-minimum-element-in-a-sorted-and-rotated-array/"
  },

  {
    slug: "lru-cache",
    title: "LRU Cache",
    category: "Design",
    difficulty: "Medium",
    shortDescription: "Design Least Recently Used cache.",
    description: "Implement a data structure for Least Recently Used (LRU) cache with O(1) get and put.",
    tags: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"],
    intuition: "Combine a Hash Map for fast lookup with a Doubly Linked List to maintain usage order.",
    example: {
      input: "LRUCache(2), put(1,1), put(2,2), get(1), put(3,3)",
      output: "null, null, null, 1, null",
      explanation: "Key 2 is evicted when 3 is added because 1 was accessed."
    },
    hints: [
      "When a key is accessed or added, move its node to the 'head'.",
      "Remove from 'tail' when capacity is exceeded."
    ],
    testCases: [
      { input: "['LRUCache', 'put', 'get'], [[2], [1, 10], [1]]", output: "[null, null, 10]" }
    ],
    leetcode: "https://leetcode.com/problems/lru-cache/",
    gfg: "https://www.geeksforgeeks.org/lru-cache-implementation/"
  },

  {
    slug: "combination-sum",
    title: "Combination Sum",
    category: "Backtracking",
    difficulty: "Medium",
    shortDescription: "Find combinations that add to target.",
    description: "Return all unique combinations of candidates where the chosen numbers sum to target. Elements can be reused.",
    tags: ["Array", "Backtracking"],
    intuition: "Recursive exploration: at each step, either include the current number (and stay at current index) or move to the next.",
    example: {
      input: "candidates = [2,3,6,7], target = 7",
      output: "[[2,2,3],[7]]",
      explanation: "2+2+3 = 7 and 7 = 7."
    },
    hints: [
      "Sorting candidates can help with pruning (stopping recursion early).",
      "If current sum exceeds target, stop that branch."
    ],
    testCases: [
      { input: "[2,3,6,7], 7", output: "[[2,2,3],[7]]" }
    ],
    leetcode: "https://leetcode.com/problems/combination-sum/",
    gfg: "https://www.geeksforgeeks.org/combination-sum/"
  },

  {
    slug: "longest-common-subsequence",
    title: "Longest Common Subsequence",
    category: "Dynamic Programming",
    difficulty: "Medium",
    shortDescription: "Find length of shared subsequence.",
    description: "Find the length of the longest subsequence present in both strings.",
    tags: ["String", "Dynamic Programming"],
    intuition: "2D DP: If chars match, add 1 to the result of the diagonal. If not, take the max of top or left.",
    example: {
      input: "text1 = \"abcde\", text2 = \"ace\"",
      output: "3",
      explanation: "The LCS is \"ace\"."
    },
    hints: [
      "dp[i][j] represents the LCS of text1[0...i] and text2[0...j].",
      "The formula is: dp[i][j] = (s1[i] == s2[j]) ? 1 + dp[i-1][j-1] : max(dp[i-1][j], dp[i][j-1])"
    ],
    testCases: [
      { input: "\"abcde\", \"ace\"", output: "3" }
    ],
    leetcode: "https://leetcode.com/problems/longest-common-subsequence/",
    gfg: "https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/"
  },

  {
    slug: "jump-game",
    title: "Jump Game",
    category: "Greedy",
    difficulty: "Medium",
    shortDescription: "Can you reach the last index?",
    description: "Given an array of max jump lengths, determine if you can reach the last index starting from the first.",
    tags: ["Array", "Greedy", "Dynamic Programming"],
    intuition: "Keep track of the 'farthest' index reachable so far while iterating.",
    example: {
      input: "[2,3,1,1,4]",
      output: "true",
      explanation: "Jump 1 step from 0 to 1, then 3 steps to the end."
    },
    hints: [
      "If your current index exceeds 'farthest', you can't proceed.",
      "Update farthest = max(farthest, i + nums[i])."
    ],
    testCases: [
      { input: "[2,3,1,1,4]", output: "true" },
      { input: "[3,2,1,0,4]", output: "false" }
    ],
    leetcode: "https://leetcode.com/problems/jump-game/",
    gfg: "https://www.geeksforgeeks.org/minimum-number-of-jumps-to-reach-end-of-a-given-array/"
  },



  {
    slug: "longest-repeating-character-replacement",
    title: "Longest Repeating Character Replacement",
    category: "Strings",
    difficulty: "Medium",
    shortDescription: "Longest string after k replacements.",
    description: "Find the length of the longest substring containing the same letter you can get after performing at most k character replacements.",
    tags: ["Hash Table", "String", "Sliding Window"],
    intuition: "Maintain a sliding window where the count of characters excluding the most frequent one is <= k.",
    example: {
      input: "s = \"ABAB\", k = 2",
      output: "4",
      explanation: "Replace both 'A's with 'B's or vice versa."
    },
    hints: [
      "window_size - max_freq_char_count <= k.",
      "Shrink window from left if the condition fails."
    ],
    testCases: [
      { input: "\"ABAB\", 2", output: "4" }
    ],
    leetcode: "https://leetcode.com/problems/longest-repeating-character-replacement/",
    gfg: "https://www.geeksforgeeks.org/maximum-length-substring-having-all-same-characters-after-k-changes/"
  },


  {
    slug: "unique-paths",
    title: "Unique Paths",
    category: "Dynamic Programming",
    difficulty: "Medium",
    shortDescription: "Total paths to bottom-right in grid.",
    description: "Find the number of unique paths from top-left to bottom-right of an m x n grid.",
    tags: ["Math", "Dynamic Programming", "Combinatorics"],
    intuition: "Paths to (i, j) = Paths to (i-1, j) + Paths to (i, j-1).",
    example: {
      input: "m = 3, n = 7",
      output: "28",
      explanation: "There are 28 distinct ways to navigate."
    },
    hints: [
      "Initialize top row and first column with 1.",
      "This can also be solved using combinations: (m+n-2) choose (m-1)."
    ],
    testCases: [
      { input: "3, 7", output: "28" }
    ],
    leetcode: "https://leetcode.com/problems/unique-paths/",
    gfg: "https://www.geeksforgeeks.org/count-possible-paths-top-left-bottom-right-nxm-matrix/"
  },

  {
    slug: "construct-binary-tree-from-preorder-and-inorder-traversal",
    title: "Construct Binary Tree from Preorder and Inorder Traversal",
    category: "Trees",
    difficulty: "Medium",
    shortDescription: "Rebuild tree from traversal lists.",
    description: "Given preorder and inorder traversals, construct the binary tree.",
    tags: ["Array", "Hash Table", "Divide and Conquer", "Tree", "Binary Tree"],
    intuition: "Preorder's first element is always root. Inorder splits root into left and right subtrees.",
    example: {
      input: "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
      output: "[3,9,20,null,null,15,7]",
      explanation: "Recursively build subtrees using calculated boundaries."
    },
    hints: [
      "Use a hash map for inorder indices to find the root location in O(1).",
      "Pass slice indices to the recursive calls."
    ],
    testCases: [
      { input: "[3,9,20,15,7], [9,3,15,20,7]", output: "[3,9,20,null,null,15,7]" }
    ],
    leetcode: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    gfg: "https://www.geeksforgeeks.org/construct-tree-from-given-inorder-and-preorder-traversal/"
  },

  {
    slug: "redundant-connection",
    title: "Redundant Connection",
    category: "Graphs",
    difficulty: "Medium",
    shortDescription: "Find edge making graph cyclic.",
    description: "Find an edge that can be removed so that the resulting graph is a tree of n nodes.",
    tags: ["DFS", "BFS", "Union Find", "Graph"],
    intuition: "Union-Find: If two nodes of an edge already belong to the same set, that edge is the redundant cycle-maker.",
    example: {
      input: "[[1,2],[1,3],[2,3]]",
      output: "[2,3]",
      explanation: "Edge [2,3] closes the loop."
    },
    hints: [
      "Process edges one by one.",
      "The first edge that connects two nodes already in the same component is your answer."
    ],
    testCases: [
      { input: "[[1,2],[1,3],[2,3]]", output: "[2,3]" }
    ],
    leetcode: "https://leetcode.com/problems/redundant-connection/",
    gfg: "https://www.geeksforgeeks.org/redundant-connection-problem/"
  },
  {
    slug: "longest-palindromic-substring",
    title: "Longest Palindromic Substring",
    category: "Strings",
    difficulty: "Medium",
    shortDescription: "Find the longest palindrome within a string.",
    description: "Given a string s, return the longest palindromic substring in s.",
    tags: ["String", "Dynamic Programming"],
    intuition: "Expand around center: treat each character (and the gap between) as a potential palindrome midpoint.",
    example: {
      input: "\"babad\"",
      output: "\"bab\"",
      explanation: "\"aba\" is also a valid answer."
    },
    hints: [
      "There are 2n-1 potential centers for a palindrome",
      "Check both odd-length and even-length palindromes for every index"
    ],
    testCases: [
      { input: "\"babad\"", output: "\"bab\"" },
      { input: "\"cbbd\"", output: "\"bb\"" }
    ],
    leetcode: "https://leetcode.com/problems/longest-palindromic-substring/",
    gfg: "https://www.geeksforgeeks.org/longest-palindromic-substring/"
  },

  {
    slug: "group-anagrams",
    title: "Group Anagrams",
    category: "Hash Table",
    difficulty: "Medium",
    shortDescription: "Group strings with identical character counts.",
    description: "Given an array of strings, group the anagrams together. You can return the answer in any order.",
    tags: ["Array", "Hash Table", "String", "Sorting"],
    intuition: "Categorize strings by their sorted version or character frequency map as the hash key.",
    example: {
      input: "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
      output: "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]",
      explanation: "Words with same letters are grouped into sub-arrays."
    },
    hints: [
      "Use a sorted string as a key in a HashMap",
      "Alternatively, use an array of size 26 converted to a string as a key"
    ],
    testCases: [
      { input: "[\"eat\",\"tea\",\"tan\"]", output: "[[\"eat\",\"tea\"],[\"tan\"]]" }
    ],
    leetcode: "https://leetcode.com/problems/group-anagrams/",
    gfg: "https://www.geeksforgeeks.org/given-a-sequence-of-words-print-all-anagrams-together/"
  },

  {
    slug: "add-two-numbers",
    title: "Add Two Numbers",
    category: "Linked List",
    difficulty: "Medium",
    shortDescription: "Sum numbers represented by linked lists.",
    description: "Two non-empty linked lists represent two non-negative integers. The digits are stored in reverse order. Add them and return the sum as a linked list.",
    tags: ["Linked List", "Math", "Recursion"],
    intuition: "Simulate elementary addition digit-by-digit from the head, carrying over values to the next node.",
    example: {
      input: "l1=[2,4,3], l2=[5,6,4]",
      output: "[7,0,8]",
      explanation: "342 + 465 = 807."
    },
    hints: [
      "Handle the carry variable across each node addition",
      "Watch out for cases where the carry creates a new node at the very end"
    ],
    testCases: [
      { input: "[2,4,3], [5,6,4]", output: "[7,0,8]" }
    ],
    leetcode: "https://leetcode.com/problems/add-two-numbers/",
    gfg: "https://www.geeksforgeeks.org/add-two-numbers-represented-by-linked-lists/"
  },

  {
    slug: "copy-list-with-random-pointer",
    title: "Copy List with Random Pointer",
    category: "Linked List",
    difficulty: "Medium",
    shortDescription: "Deep copy list with extra random links.",
    description: "Construct a deep copy of a linked list where each node contains an additional pointer to a random node in the list.",
    tags: ["Hash Table", "Linked List"],
    intuition: "Use a hashmap to map original nodes to their cloned counterparts to resolve random pointers.",
    example: {
      input: "[[7,null],[13,0],[11,4]]",
      output: "[[7,null],[13,0],[11,4]]",
      explanation: "A new identical structure is created in memory."
    },
    hints: [
      "First pass: create nodes and store them in a Map",
      "Second pass: connect the next and random pointers using the Map"
    ],
    testCases: [
      { input: "[[1,1],[2,1]]", output: "[[1,1],[2,1]]" }
    ],
    leetcode: "https://leetcode.com/problems/copy-list-with-random-pointer/",
    gfg: "https://www.geexksforgeeks.org/a-linked-list-with-next-and-arbit-pointer/"
  },

  {
    slug: "binary-tree-level-order-traversal",
    title: "Binary Tree Level Order Traversal",
    category: "Trees",
    difficulty: "Medium",
    shortDescription: "Traverse tree level by level (BFS).",
    description: "Given the root of a binary tree, return the level order traversal of its nodes' values.",
    tags: ["Tree", "BFS", "Binary Tree"],
    intuition: "Use a queue to process nodes level by level, tracking the size of the queue at each step.",
    example: {
      input: "[3,9,20,null,null,15,7]",
      output: "[[3],[9,20],[15,7]]",
      explanation: "Each nested array represents a horizontal level."
    },
    hints: [
      "Queue-based BFS is the standard approach",
      "Capture the queue size at the start of each level loop"
    ],
    testCases: [
      { input: "[3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" }
    ],
    leetcode: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    gfg: "https://www.geeksforgeeks.org/level-order-tree-traversal/"
  },

  {
    slug: "k-closest-points-to-origin",
    title: "K Closest Points to Origin",
    category: "Heap",
    difficulty: "Medium",
    shortDescription: "Find coordinates closest to (0,0).",
    description: "Given an array of points and an integer k, return the k closest points to the origin (0, 0).",
    tags: ["Array", "Math", "Divide and Conquer", "Geometry", "Heap", "Quickselect"],
    intuition: "Use the Euclidean distance formula and maintain a Max-Heap of size k.",
    example: {
      input: "[[1,3],[-2,2]], k=1",
      output: "[[-2,2]]",
      explanation: "(-2,2) is closer to origin than (1,3)."
    },
    hints: [
      "Distance is x^2 + y^2 (no need for sqrt during comparison)",
      "Max-Heap helps keep the smallest distances effectively"
    ],
    testCases: [
      { input: "[[1,3],[-2,2]], 1", output: "[[-2,2]]" }
    ],
    leetcode: "https://leetcode.com/problems/k-closest-points-to-origin/",
    gfg: "https://www.geeksforgeeks.org/find-k-closest-points-to-the-origin/"
  },
  {
    "slug": "find-center-of-star-graph",
    "title": "Find Center of Star Graph",
    "category": "Graphs",
    "difficulty": "Easy",
    "shortDescription": "Identify the center node of a star graph using its edges.",
    "description": "There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node. Given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi, return the center of the given star graph.",
    "tags": ["Graph"],
    "intuition": "Since the center node must connect to every other node, it will appear in every single edge. Therefore, you only need to look at the first two edges; the common node between them is the center.",
    "example": {
      "input": "edges = [[1,2],[2,3],[4,2]]",
      "output": "2",
      "explanation": "The node 2 is connected to every other node, so it is the center."
    },
    "hints": [
      "You do not need to check all edges or build an adjacency list.",
      "Just check if `edges[0][0]` matches either `edges[1][0]` or `edges[1][1]`. If it does, that is your center; otherwise, it is `edges[0][1]`."
    ],
    "testCases": [
      { "input": "edges = [[1,2],[2,3],[4,2]]", "output": "2" },
      { "input": "edges = [[1,2],[5,1],[1,3],[1,4]]", "output": "1" }
    ],
    "leetcode": "https://leetcode.com/problems/find-center-of-star-graph/",
    "gfg": "https://www.geeksforgeeks.org/find-the-center-of-a-star-graph/"
  },
  {
    "slug": "find-if-path-exists-in-graph",
    "title": "Find if Path Exists in Graph",
    "category": "Graphs",
    "difficulty": "Easy",
    "shortDescription": "Determine if there is a valid path between a source and destination in an undirected graph.",
    "description": "There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1. Given the edges and two vertices source and destination, determine if there is a valid path from source to destination.",
    "tags": ["Graph", "Depth-First Search", "Breadth-First Search", "Union Find"],
    "intuition": "This is a reachability problem. You can build an adjacency list and use standard traversal algorithms like BFS or DFS starting from the source to see if you can visit the destination, or use a Disjoint Set Union (DSU) to check if both share the same representative.",
    "example": {
      "input": "n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2",
      "output": "true",
      "explanation": "There are two paths from 0 to 2: 0 -> 2 and 0 -> 1 -> 2."
    },
    "hints": [
      "Remember to track visited nodes to avoid infinite loops during traversal.",
      "Union-Find is highly efficient here if you process all edges first."
    ],
    "testCases": [
      { "input": "n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2", "output": "true" },
      { "input": "n = 6, edges = [[0,1],[0,2],[3,5],[5,4]], source = 0, destination = 5", "output": "false" }
    ],
    "leetcode": "https://leetcode.com/problems/find-if-path-exists-in-graph/",
    "gfg": "https://www.geeksforgeeks.org/find-if-there-is-a-path-between-two-vertices-in-a-given-graph/"
  },
  {
    "slug": "island-perimeter",
    "title": "Island Perimeter",
    "category": "Graphs",
    "difficulty": "Easy",
    "shortDescription": "Calculate the perimeter of the island in a grid map.",
    "description": "You are given row x col grid representing a map where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island. Determine the perimeter of the island.",
    "tags": ["Array", "Matrix", "Depth-First Search", "Breadth-First Search"],
    "intuition": "Every land cell contributes 4 edges to the perimeter. However, for each adjacent pair of land cells (either horizontally or vertically shared), 2 of those edges overlap and disappear. You can count total land cells and subtract shared boundaries.",
    "example": {
      "input": "grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]",
      "output": "16",
      "explanation": "The perimeter is the 16 yellow edges in the grid image."
    },
    "hints": [
      "Iterate through the grid. When you find a 1, add 4 to your answer. Then check its right and down neighbors; if they are also 1, subtract 2.",
      "This can be done in a single pass without full graph traversal algorithms."
    ],
    "testCases": [
      { "input": "grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]", "output": "16" },
      { "input": "grid = [[1]]", "output": "4" }
    ],
    "leetcode": "https://leetcode.com/problems/island-perimeter/",
    "gfg": "https://www.geeksforgeeks.org/find-perimeter-island-making-given-matrix/"
  },
  {
    "slug": "number-of-provinces",
    "title": "Number of Provinces",
    "category": "Graphs",
    "difficulty": "Medium",
    "shortDescription": "Find the total number of connected components in an adjacency matrix.",
    "description": "There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c. A province is a group of directly or indirectly connected cities and no other cities outside of the group. Given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise, return the total number of provinces.",
    "tags": ["Depth-First Search", "Breadth-First Search", "Union Find", "Graph"],
    "intuition": "This problem asks for the count of distinct connected components in an undirected graph. Loop through all nodes; if a node has not been visited, initiate a DFS/BFS traversal to mark all reachable nodes, and increment the component counter.",
    "example": {
      "input": "isConnected = [[1,1,0],[1,1,0],[0,0,1]]",
      "output": "2",
      "explanation": "City 0 and City 1 are connected, forming the first province. City 2 is isolated, forming the second province."
    },
    "hints": [
      "The input is an adjacency matrix, meaning `isConnected[i][j] == 1` indicates an edge between node $i$ and node $j$.",
      "Be careful to track components globally using a visited boolean array of size $n$."
    ],
    "testCases": [
      { "input": "isConnected = [[1,1,0],[1,1,0],[0,0,1]]", "output": "2" },
      { "input": "isConnected = [[1,0,0],[0,1,0],[0,0,1]]", "output": "3" }
    ],
    "leetcode": "https://leetcode.com/problems/number-of-provinces/",
    "gfg": "https://www.geeksforgeeks.org/number-of-provinces-in-a-graph/"
  },
  {
    "slug": "keys-and-rooms",
    "title": "Keys and Rooms",
    "category": "Graphs",
    "difficulty": "Medium",
    "shortDescription": "Check if you can unlock and visit all rooms starting from room 0.",
    "description": "There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms. Given an array rooms where rooms[i] is the list of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.",
    "tags": ["Depth-First Search", "Breadth-First Search", "Graph"],
    "intuition": "Treat the rooms as nodes and keys as directed edges. Perform a graph traversal (DFS/BFS) starting from room 0. Maintain a set or boolean array of visited rooms. At the end, check if the number of visited rooms equals $n$.",
    "example": {
      "input": "rooms = [[1],[2],[3],[]]",
      "output": "true",
      "explanation": "We start in room 0, get key 1. Visit room 1, get key 2. Visit room 2, get key 3. Visit room 3. All rooms visited."
    },
    "hints": [
      "Use a queue for BFS or a stack/recursion for DFS to handle incoming keys systematically.",
      "An unvisited check before adding a key to the collection avoids redundant expansions."
    ],
    "testCases": [
      { "input": "rooms = [[1],[2],[3],[]]", "output": "true" },
      { "input": "rooms = [[1,3],[3,0,1],[2],[0]]", "output": "false" }
    ],
    "leetcode": "https://leetcode.com/problems/keys-and-rooms/",
    "gfg": "https://www.geeksforgeeks.org/keys-and-rooms-problem/"
  },
  {
    "slug": "minimum-number-of-vertices-to-reach-all-nodes",
    "title": "Minimum Number of Vertices to Reach All Nodes",
    "category": "Graphs",
    "difficulty": "Medium",
    "shortDescription": "Find the smallest set of vertices from which all nodes in a DAG are reachable.",
    "description": "Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [from_i, to_i] represents a directed edge from node from_i to node to_i. Find the smallest set of vertices from which all nodes in the graph are reachable.",
    "tags": ["Graph"],
    "intuition": "In a Directed Acyclic Graph (DAG), any node that has an incoming edge can be reached from somewhere else. However, nodes with an in-degree of 0 cannot be reached from any other node, meaning they must be included in our starting set. Conveniently, this set of 0 in-degree nodes can reach all nodes.",
    "example": {
      "input": "n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]",
      "output": "[0,3]",
      "explanation": "Nodes 0 and 3 have no incoming edges, so they must be part of the starting set. Every other node can be reached from them."
    },
    "hints": [
      "The problem boils down to identifying all vertices with an in-degree of 0.",
      "Create a boolean array or hash set to track nodes that appear as a destination (`to_i`) in the edges list."
    ],
    "testCases": [
      { "input": "n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]", "output": "[0,3]" }
    ],
    "leetcode": "https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/",
    "gfg": "https://www.geeksforgeeks.org/minimum-number-of-vertices-to-reach-all-nodes/"
  },
  {
    "slug": "count-sub-islands",
    "title": "Count Sub Islands",
    "category": "Graphs",
    "difficulty": "Medium",
    "shortDescription": "Count how many islands in grid2 are entirely contained within islands of grid1.",
    "description": "You are given two m x n binary matrices grid1 and grid2 containing only 0's (water) and 1's (land). An island in grid2 is considered a sub-island if every cell of this island is also part of an island in grid1. Return the number of islands in grid2 that are considered sub-islands.",
    "tags": ["Array", "Matrix", "Depth-First Search", "Breadth-First Search", "Union Find"],
    "intuition": "Traverse grid2 to discover its distinct islands. For each island found in grid2, check every cell within it via DFS/BFS. If all of those matching coordinates are also land (1) in grid1, then that entire island counts as a sub-island.",
    "example": {
      "input": "grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]",
      "output": "3",
      "explanation": "There are three islands in grid2 that are fully contained by land in grid1."
    },
    "hints": [
      "Use a boolean flag during your DFS traversal of grid2. If you hit a cell where `grid1[r][c] == 0`, set the flag to false, but make sure to finish traversing the rest of the island so you don't double count it later.",
      "Modify the cells of grid2 to 0 as you visit them to keep track of visited areas in place."
    ],
    "testCases": [
      { "input": "grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]", "output": "3" }
    ],
    "leetcode": "https://leetcode.com/problems/count-sub-islands/",
    "gfg": "https://www.geeksforgeeks.org/count-sub-islands-in-a-given-matrix/"
  },
  {
    "slug": "maximal-network-rank",
    "title": "Maximal Network Rank",
    "category": "Graphs",
    "difficulty": "Medium",
    "shortDescription": "Find the maximum network rank achievable by any pair of cities.",
    "description": "There is an infrastructure of n cities with some number of roads. The network rank of two different cities is the total number of directly connected roads to either city. If a road is directly connected to both cities, it is only counted once. The maximal network rank of the infrastructure is the maximum network rank of all pairs of different cities.",
    "tags": ["Graph"],
    "intuition": "The rank of a pair of cities $i$ and $j$ is nearly the sum of their individual degrees: $\\text{deg}(i) + \\text{deg}(j)$. If there is a direct road connecting them, that road is counted twice, so you must subtract 1 from the total sum.",
    "example": {
      "input": "n = 4, roads = [[0,1],[0,3],[1,2],[1,3]]",
      "output": "4",
      "explanation": "The network rank of cities 0 and 1 is 4 because they have 4 unique roads connected to them."
    },
    "hints": [
      "Count the degree of each node and store the actual edge connections using a 2D boolean array or adjacency set.",
      "Since $n$ is relatively small ($n \\le 100$), an $O(n^2)$ exhaustive search over all pairs is perfectly acceptable."
    ],
    "testCases": [
      { "input": "n = 4, roads = [[0,1],[0,3],[1,2],[1,3]]", "output": "4" },
      { "input": "n = 5, roads = [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]", "output": "5" }
    ],
    "leetcode": "https://leetcode.com/problems/maximal-network-rank/",
    "gfg": "https://www.geeksforgeeks.org/maximal-network-rank-of-a-graph/"
  },
  {
    "slug": "path-with-maximum-probability",
    "title": "Path with Maximum Probability",
    "category": "Graphs",
    "difficulty": "Medium",
    "shortDescription": "Find the path between two nodes that yields the highest success probability.",
    "description": "You are given an undirected weighted graph of n nodes (0-indexed), represented by an edge list where edges[i] = [a, b] is an undirected edge connecting the nodes a and b with a probability of success of traversing that edge succProd[i]. Given two nodes start and end, find the path with the maximum probability of success to go from start to end and return its success probability.",
    "tags": ["Graph"],
    "intuition": "This is a variant of the shortest path problem. Since probabilities are multiplied and lie between 0 and 1, we want to maximize the product. We can adapt Dijkstra's algorithm using a max-heap to extract the node with the highest probability at each step.",
    "example": {
      "input": "n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2",
      "output": "0.25000",
      "explanation": "Path 0 -> 1 -> 2 has probability 0.5 * 0.5 = 0.25. Path 0 -> 2 has probability 0.2. Max is 0.25."
    },
    "hints": [
      "Initialize a probabilities tracking array with 0, and set `prob[start] = 1.0`.",
      "If the current path probability to a node is less than the already recorded maximum for that node, skip processing its neighbors."
    ],
    "testCases": [
      { "input": "n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2", "output": "0.25" }
    ],
    "leetcode": "https://leetcode.com/problems/path-with-maximum-probability/",
    "gfg": "https://www.geeksforgeeks.org/maximum-probability-path-in-a-graph/"
  },
  {
    "slug": "find-eventual-safe-states",
    "title": "Find Eventual Safe States",
    "category": "Graphs",
    "difficulty": "Medium",
    "shortDescription": "Identify all nodes that will eventually lead to a terminal state.",
    "description": "There is a directed graph of n nodes with each node labeled from 0 to n - 1. A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node or another safe node. Return an array containing all the safe nodes of the graph sorted in ascending order.",
    "tags": ["Depth-First Search", "Breadth-First Search", "Graph", "Topological Sort"],
    "intuition": "A node is unsafe if it can lead into a cycle. This problem can be modeled as finding nodes that are not part of any cycle. You can either use a three-color DFS variant to detect cycles, or reverse the graph edges and apply Kahn's algorithm (BFS topological sort) starting from the terminal nodes.",
    "example": {
      "input": "graph = [[1,2],[2,3],[5],[0],[5],[],[]]",
      "output": "[2,4,5,6]",
      "explanation": "Nodes 5 and 6 are terminal nodes. Processing backwards helps identify that 2 and 4 are also completely safe."
    },
    "hints": [
      "In the three-color DFS technique: 0 = unvisited, 1 = visiting (in current path), 2 = completely safe.",
      "If a node encounters a neighbor marked as 1 during DFS, it is part of a cycle and is marked unsafe."
    ],
    "testCases": [
      { "input": "graph = [[1,2],[2,3],[5],[0],[5],[],[]]", "output": "[2,4,5,6]" }
    ],
    "leetcode": "https://leetcode.com/problems/find-eventual-safe-states/",
    "gfg": "https://www.geeksforgeeks.org/find-eventual-safe-states-in-a-directed-graph/"
  },
  {
    "slug": "relative-ranks",
    "title": "Relative Ranks",
    "category": "Heaps",
    "difficulty": "Easy",
    "shortDescription": "Assign placement ranks and medals to athletes based on scores.",
    "description": "You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique. Return an array answer of size n where answer[i] is the rank of the ith athlete.",
    "tags": ["Array", "Sorting", "Heap (Priority Queue)"],
    "intuition": "Sort the scores in descending order while maintaining their original indices. Assign special strings (\"Gold Medal\", \"Silver Medal\", \"Bronze Medal\") to the top 3 scores, and numerical placement indices for the rest.",
    "example": {
      "input": "score = [10,3,8,9,4]",
      "output": "[\"Gold Medal\",\"5\",\"Bronze Medal\",\"Silver Medal\",\"4\"]",
      "explanation": "Ranks are: 10 -> Gold, 9 -> Silver, 8 -> Bronze, 4 -> 4th, 3 -> 5th."
    },
    "hints": [
      "A max-heap or storing score-index pairs in a custom array sorted by score works efficiently.",
      "Ranks are 1-indexed, meaning the 4th highest score gets string \"4\"."
    ],
    "testCases": [
      { "input": "score = [10,3,8,9,4]", "output": "[\"Gold Medal\",\"5\",\"Bronze Medal\",\"Silver Medal\",\"4\"]" }
    ],
    "leetcode": "https://leetcode.com/problems/relative-ranks/",
    "gfg": "https://www.geeksforgeeks.org/relative-ranks-problem/"
  },
  {
    "slug": "kth-largest-element-in-a-stream",
    "title": "Kth Largest Element in a Stream",
    "category": "Heaps",
    "difficulty": "Easy",
    "shortDescription": "Maintain the Kth largest element in a dynamic stream of values.",
    "description": "Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element. Implement KthLargest class.",
    "tags": ["Tree", "Design", "Binary Search Tree", "Heap (Priority Queue)", "Data Stream"],
    "intuition": "Use a min-heap of size $k$ to track the largest elements seen so far. The root of the min-heap will always represent the $k$-th largest element in the entire data set.",
    "example": {
      "input": "[\"KthLargest\", \"add\", \"add\"], [[3, [4, 5, 8, 2]], [3], [5]]",
      "output": "[null, 4, 5]",
      "explanation": "Heap stores [4, 5, 8]. Adding 3 does not change top -> returns 4. Adding 5 replaces 4 -> returns 5."
    },
    "hints": [
      "When a new element is added, if the heap size is under $k$, push it. If it is larger than the root of the heap when size is $k$, pop the root and push the new element.",
      "The min-heap top element is always our target value."
    ],
    "testCases": [
      { "input": "[\"KthLargest\", \"add\"], [[3, [4, 5, 8, 2]], [3]]", "output": "[null, 4]" }
    ],
    "leetcode": "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    "gfg": "https://www.geeksforgeeks.org/kth-largest-element-in-a-stream/"
  },
  {
    "slug": "make-array-zero-by-subtracting-equal-amounts",
    "title": "Make Array Zero by Subtracting Equal Amounts",
    "category": "Heaps",
    "difficulty": "Easy",
    "shortDescription": "Find the number of operations to make all elements zero.",
    "description": "You are given a non-negative integer array nums. In one operation, you must choose a positive integer x such that x is less than or equal to the minimum non-zero element in nums. Subtract x from every positive element in nums. Return the minimum number of operations to make every element in nums equal to 0.",
    "tags": ["Array", "Hash Table", "Sorting", "Heap (Priority Queue)", "Simulation"],
    "intuition": "Each reduction operation targets the smallest unique non-zero value and zeroes it out along with any duplicates. Thus, the total number of operations required is exactly equal to the number of unique positive integers in the array.",
    "example": {
      "input": "nums = [1,5,0,3,5]",
      "output": "3",
      "explanation": "Unique positive values are 1, 3, and 5. It will take 3 steps to eliminate them."
    },
    "hints": [
      "Using a hash set to count unique values strictly greater than 0 yields an $O(n)$ time complexity solution.",
      "You don't need to actually perform the subtractions."
    ],
    "testCases": [
      { "input": "nums = [1,5,0,3,5]", "output": "3" },
      { "input": "nums = [0]", "output": "0" }
    ],
    "leetcode": "https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/",
    "gfg": "https://www.geeksforgeeks.org/make-array-zero-by-subtracting-equal-amounts/"
  },
  {
    "slug": "reduce-array-size-to-the-half",
    "title": "Reduce Array Size to The Half",
    "category": "Heaps",
    "difficulty": "Medium",
    "shortDescription": "Find the minimum number of unique elements to remove to reduce array size by half.",
    "description": "You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array. Return the minimum size of the set so that at least half of the integers of the array are removed.",
    "tags": ["Array", "Hash Table", "Greedy", "Sorting", "Heap (Priority Queue)"],
    "intuition": "To reach half the size in the fewest steps, we should greedily remove the elements with the highest frequencies. Count the frequencies, sort them in descending order, and remove elements until the total count reaches at least $n / 2$.",
    "example": {
      "input": "arr = [3,3,3,3,5,5,5,2,2,7]",
      "output": "2",
      "explanation": "Removing {3} and {5} removes 4 + 3 = 7 elements, which is more than half of the array size (10 / 2 = 5)."
    },
    "hints": [
      "Use a map to count element frequencies, then place frequencies into a max-heap or an array to sort them.",
      "Track your accumulated removed count alongside a counter representing unique items picked."
    ],
    "testCases": [
      { "input": "arr = [3,3,3,3,5,5,5,2,2,7]", "output": "2" },
      { "input": "arr = [7,7,7,7,7,7]", "output": "1" }
    ],
    "leetcode": "https://leetcode.com/problems/reduce-array-size-to-the-half/",
    "gfg": "https://www.geeksforgeeks.org/reduce-array-size-to-the-half/"
  },
  {
    "slug": "top-k-frequent-words",
    "title": "Top K Frequent Words",
    "category": "Heaps",
    "difficulty": "Medium",
    "shortDescription": "Find the k most frequent words sorted by frequency and lexicographical order.",
    "description": "Given an array of strings words and an integer k, return the k most frequent strings. Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.",
    "tags": ["Hash Table", "String", "Trie", "Sorting", "Heap (Priority Queue)", "Bucket Sort"],
    "intuition": "Count the frequency of each word using a hash map. Then, insert them into a priority queue designed with a custom comparator: higher frequencies come first; if frequencies are equal, lexicographically smaller words come first.",
    "example": {
      "input": "words = [\"i\",\"love\",\"leetcode\",\"i\",\"love\",\"coding\"], k = 2",
      "output": "[\"i\",\"love\"]",
      "explanation": "\"i\" and \"love\" have a frequency of 2, appearing more than the other words."
    },
    "hints": [
      "If using a min-heap of size $k$ to optimize space, the comparator rule must be inverted: lower frequency at the top, and for equal frequencies, lexicographically larger word at the top.",
      "Don't forget to reverse the list if extracting from a min-heap."
    ],
    "testCases": [
      { "input": "words = [\"i\",\"love\",\"leetcode\",\"i\",\"love\",\"coding\"], k = 2", "output": "[\"i\",\"love\"]" }
    ],
    "leetcode": "https://leetcode.com/problems/top-k-frequent-words/",
    "gfg": "https://www.geeksforgeeks.org/find-k-most-frequent-words-from-a-file/"
  },
  {
    "slug": "single-threaded-cpu",
    "title": "Single-Threaded CPU",
    "category": "Heaps",
    "difficulty": "Medium",
    "shortDescription": "Simulate a single-threaded CPU processing tasks based on availability and processing time.",
    "description": "You are given n tasks labeled from 0 to n - 1 represented by a 2D integer array tasks, where tasks[i] = [enqueueTime_i, processingTime_i]. You have a single-threaded CPU that can process at most one task at a time. Simulate the CPU processing order based on specific dispatch rules.",
    "tags": ["Array", "Sorting", "Heap (Priority Queue)"],
    "intuition": "Sort all tasks by their enqueue times. Maintain a system timer. When the CPU is idle, add all available tasks (enqueue time $\\le$ current time) to a min-heap ordered by processing time (and then by index). Extract the top task, process it, and advance the timer.",
    "example": {
      "input": "tasks = [[1,2],[2,4],[3,2],[4,1]]",
      "output": "[0,2,3,1]",
      "explanation": "At time 1, task 0 is available and processed until time 3. At time 3, tasks 1 and 2 are available; task 2 is shorter so it goes next, etc."
    },
    "hints": [
      "If the min-heap is empty but there are remaining tasks, advance your system time directly to the enqueue time of the next available task.",
      "Preserve the original task indices before sorting by enqueue time."
    ],
    "testCases": [
      { "input": "tasks = [[1,2],[2,4],[3,2],[4,1]]", "output": "[0,2,3,1]" }
    ],
    "leetcode": "https://leetcode.com/problems/single-threaded-cpu/",
    "gfg": "https://www.geeksforgeeks.org/single-threaded-cpu-problem/"
  },
  {
    "slug": "design-twitter",
    "title": "Design Twitter",
    "category": "Heaps",
    "difficulty": "Medium",
    "shortDescription": "Design a simplified version of Twitter with user feeds and follow functionality.",
    "description": "Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and see the 10 most recent tweets in the user's news feed.",
    "tags": ["Hash Table", "Linked List", "Design", "Heap (Priority Queue)"],
    "intuition": "Use a global timestamp to track tweet ordering. Maintain a map of user IDs to their posted tweets (linked lists or arrays) and another map tracking their follow relationships. To generate a news feed, aggregate tweets from the user and their followees, then use a max-heap to select the 10 most recent.",
    "example": {
      "input": "[\"Twitter\", \"postTweet\", \"getNewsFeed\", \"follow\", \"postTweet\", \"getNewsFeed\"], [[], [1, 5], [1], [1, 2], [2, 6], [1]]",
      "output": "[null, null, [5], null, null, [6, 5]]",
      "explanation": "User 1 posts tweet 5. User 1 follows user 2. User 2 posts tweet 6. User 1 feed contains [6, 5]."
    },
    "hints": [
      "This problem can be treated similarly to merging $k$ sorted linked lists where each list is a user's timeline.",
      "Ensure a user can always see their own tweets in their news feed."
    ],
    "testCases": [
      { "input": "[\"Twitter\", \"postTweet\", \"getNewsFeed\"], [[], [1, 5], [1]]", "output": "[null, null, [5]]" }
    ],
    "leetcode": "https://leetcode.com/problems/design-twitter/",
    "gfg": "https://www.geeksforgeeks.org/design-twitter-problem/"
  },
  {
    "slug": "longest-happy-string",
    "title": "Longest Happy String",
    "category": "Heaps",
    "difficulty": "Medium",
    "shortDescription": "Generate the longest string with characters 'a', 'b', and 'c' without three consecutive identical characters.",
    "description": "A string s is called happy if it does not contain 'aaa', 'bbb', or 'ccc' as a substring. Given three integers a, b, and c, return the longest possible happy string.",
    "tags": ["Greedy", "Heap (Priority Queue)", "String"],
    "intuition": "Greedily choose the character with the highest remaining count. Store the character counts in a max-heap. If using the most frequent character would violate the 'no three consecutive identical characters' rule, pick the second most frequent character instead.",
    "example": {
      "input": "a = 1, b = 1, c = 7",
      "output": "\"ccbccacc\"",
      "explanation": "\"ccabcabc\" is also a valid answer."
    },
    "hints": [
      "Always try to append the character with the largest remaining count.",
      "If the last two characters in your output string match this character, pop the second most frequent character from the heap to break the streak."
    ],
    "testCases": [
      { "input": "a = 1, b = 1, c = 7", "output": "\"ccbccacc\"" }
    ],
    "leetcode": "https://leetcode.com/problems/longest-happy-string/",
    "gfg": "https://www.geeksforgeeks.org/longest-happy-string/"
  },
  {
    "slug": "divisor-game",
    "title": "Divisor Game",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "shortDescription": "Determine the winner of the divisor game assuming optimal play.",
    "description": "Alice and Bob take turns playing a game, with Alice starting first. Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of finding any x with 0 < x < n and n % x == 0, then replacing n with n - x. If a player cannot make a move, they lose. Return true if Alice wins the game, assuming both players play optimally.",
    "tags": ["Math", "Dynamic Programming", "Brainteaser", "Game Theory"],
    "intuition": "If $n$ is even, Alice can always subtract 1 to pass an odd number to Bob. An odd number only has odd divisors, so any move Bob makes will subtract an odd number from an odd number, forcing $n$ back to an even number. Alice will eventually hand Bob 1, and Bob will lose. Thus, Alice wins if and only if $n$ is even.",
    "example": {
      "input": "n = 2",
      "output": "true",
      "explanation": "Alice chooses 1, and Bob has no more moves."
    },
    "hints": [
      "This problem can be mathematically simplified to `return n % 2 == 0`.",
      "Can also be solved using dynamic programming to track winning/losing states up to $n$."
    ],
    "testCases": [
      { "input": "n = 2", "output": "true" },
      { "input": "n = 3", "output": "false" }
    ],
    "leetcode": "https://leetcode.com/problems/divisor-game/",
    "gfg": "https://www.geeksforgeeks.org/divisor-game-problem/"
  },
  {
    "slug": "min-cost-climbing-stairs",
    "title": "Min Cost Climbing Stairs",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "shortDescription": "Find the minimum cost to reach the top of the staircase.",
    "description": "You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps. You can see the floor at index 0, or index 1. Return the minimum cost to reach the top of the floor.",
    "tags": ["Array", "Dynamic Programming"],
    "intuition": "To reach step $i$, you could have either jumped from step $i-1$ or step $i-2$. The recurrence relation is $\\text{dp}[i] = \\text{cost}[i] + \\min(\\text{dp}[i-1], \\text{dp}[i-2])$. The final answer is the minimum of the last two steps.",
    "example": {
      "input": "cost = [10,15,20]",
      "output": "15",
      "explanation": "You will start at index 1, pay 15, and climb two steps to reach the top."
    },
    "hints": [
      "You can optimize the space complexity to $O(1)$ by keeping track of only the previous two steps' costs.",
      "The top of the stairs is considered to be one position past the end of the array."
    ],
    "testCases": [
      { "input": "cost = [10,15,20]", "output": "15" },
      { "input": "cost = [1,100,1,1,1,100,1,1,100,1]", "output": "6" }
    ],
    "leetcode": "https://leetcode.com/problems/min-cost-climbing-stairs/",
    "gfg": "https://www.geeksforgeeks.org/minimize-cost-of-climbing-stairs/"
  },
  {
    "slug": "counting-bits",
    "title": "Counting Bits",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "shortDescription": "Calculate the number of 1 bits for every number up to n.",
    "description": "Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1 bits in the binary representation of i.",
    "tags": ["Dynamic Programming", "Bit Manipulation"],
    "intuition": "The number of set bits in $i$ is closely related to $i / 2$. Specifically, $i$ has the same number of bits as $i >> 1$ (which is $i / 2$) plus 1 if $i$ is odd (`i % 2`). This forms a direct dynamic programming relationship: $\\text{dp}[i] = \\text{dp}[i >> 1] + (i \\& 1)$.",
    "example": {
      "input": "n = 2",
      "output": "[0,1,1]",
      "explanation": "0 -> 0 bits; 1 -> 1 bit; 2 (10 in binary) -> 1 bit."
    },
    "hints": [
      "This pattern lets you solve the problem in a single linear pass $O(n)$ without recalculating bit counts from scratch.",
      "Bitwise operation `i & 1` safely checks if a number is odd."
    ],
    "testCases": [
      { "input": "n = 2", "output": "[0,1,1]" },
      { "input": "n = 5", "output": "[0,1,1,2,1,2]" }
    ],
    "leetcode": "https://leetcode.com/problems/counting-bits/",
    "gfg": "https://www.geeksforgeeks.org/count-set-bits-in-an-integer/"
  },
  {
    "slug": "n-th-tribonacci-number",
    "title": "N-th Tribonacci Number",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "shortDescription": "Compute the N-th Tribonacci number using previous terms.",
    "description": "The Tribonacci sequence Tn is defined as follows: T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0. Given n, return the value of Tn.",
    "tags": ["Math", "Dynamic Programming", "Memoization"],
    "intuition": "This is a simple extension of the Fibonacci sequence. Each term is the sum of the preceding three terms. You can compute this iteratively using three tracking variables to achieve $O(1)$ space.",
    "example": {
      "input": "n = 4",
      "output": "4",
      "explanation": "T3 = 0 + 1 + 1 = 2. T4 = 1 + 1 + 2 = 4."
    },
    "hints": [
      "Handle the base cases for $n=0, 1, 2$ explicitly.",
      "Update your sliding variables at each step: `d = a + b + c`, then shift `a = b`, `b = c`, `c = d`."
    ],
    "testCases": [
      { "input": "n = 4", "output": "4" },
      { "input": "n = 25", "output": "1389537" }
    ],
    "leetcode": "https://leetcode.com/problems/n-th-tribonacci-number/",
    "gfg": "https://www.geeksforgeeks.org/tribonacci-numbers/"
  },
  {
    "slug": "best-time-to-buy-and-sell-stock-ii",
    "title": "Best Time to Buy and Sell Stock II",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "shortDescription": "Maximize stock trading profit with unlimited transactions.",
    "description": "You are given an integer array prices where prices[i] is the price of a given stock on the ith day. On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. Find and return the maximum profit you can achieve.",
    "tags": ["Array", "Dynamic Programming", "Greedy"],
    "intuition": "Since you can buy and sell on the same day or execute multiple transactions, you can simply capture every upward price movement. Iterate through the array and add any positive difference between consecutive days (`prices[i] - prices[i-1]`) to your profit.",
    "example": {
      "input": "prices = [7,1,5,3,6,4]",
      "output": "7",
      "explanation": "Buy on day 2 (price=1) and sell on day 3 (price=5), profit = 4. Buy on day 4 (price=3) and sell on day 5 (price=6), profit = 3. Total profit = 7."
    },
    "hints": [
      "This greedy approach perfectly reflects optimal dynamic programming decisions across linear stock timelines.",
      "Ignore any days where the price drops compared to the previous day."
    ],
    "testCases": [
      { "input": "prices = [7,1,5,3,6,4]", "output": "7" },
      { "input": "prices = [1,2,3,4,5]", "output": "4" }
    ],
    "leetcode": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
    "gfg": "https://www.geeksforgeeks.org/stock-buy-sell-maximum-profit-with-cooldown/"
  },
  {
    "slug": "partition-array-for-maximum-sum",
    "title": "Partition Array for Maximum Sum",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "shortDescription": "Partition an array into subarrays of max length k to maximize the total sum.",
    "description": "Given an integer array arr, partition the array into (contiguous) subarrays of length at most k. After partitioning, each subarray has their values changed to become the maximum value of that subarray. Return the largest sum of the given array after partitioning.",
    "tags": ["Array", "Dynamic Programming"],
    "intuition": "Let $\\text{dp}[i]$ be the maximum sum possible for the prefix ending at index $i-1$. To compute $\\text{dp}[i]$, look back up to $k$ elements, tracking the maximum value in that window, and find the choice that maximizes $\\text{dp}[i-j] + \\text{max\\_val} \\times j$.",
    "example": {
      "input": "arr = [1,15,7,9,2,5,10], k = 3",
      "output": "84",
      "explanation": "Partitioning into [1, 15, 7] -> [15, 15, 15] and [9, 2, 5] -> [9, 9, 9] and [10] -> [10] yields 45 + 27 + 10 = 82. The absolute optimal setup reaches 84."
    },
    "hints": [
      "The inner loop checks backward configurations up to length $k$, ensuring you stay within array bounds.",
      "This uses 1D linear state exploration over array splits."
    ],
    "testCases": [
      { "input": "arr = [1,15,7,9,2,5,10], k = 3", "output": "84" }
    ],
    "leetcode": "https://leetcode.com/problems/partition-array-for-maximum-sum/",
    "gfg": "https://www.geeksforgeeks.org/partition-array-for-maximum-sum/"
  },
  {
    "slug": "integer-break",
    "title": "Integer Break",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "shortDescription": "Break an integer into a sum of at least two positive integers to maximize their product.",
    "description": "Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers. Return the maximum product you can get.",
    "tags": ["Math", "Dynamic Programming"],
    "intuition": "Mathematically, breaking a number into factors of 3 yields the maximum product, followed by factors of 2. Alternatively, this can be modeled with dynamic programming where $\\text{dp}[i]$ stores the maximum product for breaking number $i$, calculated by evaluating $\\max(j \\times (i - j), j \\times \\text{dp}[i - j])$ for all $j < i$.",
    "example": {
      "input": "n = 10",
      "output": "36",
      "explanation": "10 = 3 + 3 + 4, and 3 * 3 * 4 = 36."
    },
    "hints": [
      "For the math approach, handle small inputs ($n \\le 3$) carefully since they must be broken into at least two positive integers.",
      "For $n > 4$, keep factorizing out 3s until the remaining value is 2 or 4."
    ],
    "testCases": [
      { "input": "n = 2", "output": "1" },
      { "input": "n = 10", "output": "36" }
    ],
    "leetcode": "https://leetcode.com/problems/integer-break/",
    "gfg": "https://www.geeksforgeeks.org/maximum-product-obtained-by-breaking-number-in-several-parts/"
  },
  {
    "slug": "perfect-squares",
    "title": "Perfect Squares",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "shortDescription": "Find the minimum number of perfect square numbers that sum to n.",
    "description": "Given an integer n, return the least number of perfect square numbers that sum to n. A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.",
    "tags": ["Math", "Dynamic Programming", "Breadth-First Search"],
    "intuition": "This can be modeled as a variant of the Coin Change problem. Let $\\text{dp}[i]$ be the minimum number of perfect squares needed to sum to $i$. For each number $i$ up to $n$, try subtracting every perfect square $j \\times j \\le i$ and update $\\text{dp}[i] = \\min(\\text{dp}[i], \\text{dp}[i - j \\times j] + 1)$.",
    "example": {
      "input": "n = 12",
      "output": "3",
      "explanation": "12 = 4 + 4 + 4."
    },
    "hints": [
      "Initialize $\\text{dp}[0] = 0$ and all other entries to infinity.",
      "Lagrange's Four-Square Theorem states that any number can be represented by at most 4 perfect squares, which allows for an $O(\\sqrt{n})$ math solution."
    ],
    "testCases": [
      { "input": "n = 12", "output": "3" },
      { "input": "n = 13", "output": "2" }
    ],
    "leetcode": "https://leetcode.com/problems/perfect-squares/",
    "gfg": "https://www.geeksforgeeks.org/minimum-number-of-squares-whose-sum-equals-to-given-number-n/"
  },
  {
    "slug": "minimum-falling-path-sum",
    "title": "Minimum Falling Path Sum",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "shortDescription": "Find the minimum sum of a falling path through a square matrix.",
    "description": "Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix. A falling path starts at any element in the first row and chooses the element in the next row that is either directly below, or diagonally left/right.",
    "tags": ["Array", "Dynamic Programming", "Matrix"],
    "intuition": "Use dynamic programming directly in the matrix or in a separate DP table. For each cell `matrix[r][c]` (starting from row 1 down to $n-1$), the minimum cost to reach it is its own value plus the minimum of its three upper neighbors: `matrix[r-1][c-1]`, `matrix[r-1][c]`, and `matrix[r-1][c+1]`.",
    "example": {
      "input": "matrix = [[2,1,3],[6,5,4],[7,8,9]]",
      "output": "13",
      "explanation": "The minimum falling path is 1 -> 4 -> 8 (sum 13) or 1 -> 5 -> 7 (sum 13)."
    },
    "hints": [
      "Be careful to handle boundaries for the first and last columns to avoid indexing out of bounds.",
      "The final answer is the minimum value found in the last row of your matrix after processing."
    ],
    "testCases": [
      { "input": "matrix = [[2,1,3],[6,5,4],[7,8,9]]", "output": "13" }
    ],
    "leetcode": "https://leetcode.com/problems/minimum-falling-path-sum/",
    "gfg": "https://www.geeksforgeeks.org/minimum-falling-path-sum-in-a-matrix/"
  },
  {
    "slug": "longest-palindromic-subsequence",
    "title": "Longest Palindromic Subsequence",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "shortDescription": "Find the length of the longest palindromic subsequence in a string.",
    "description": "Given a string s, find the longest palindromic subsequence's length in s. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.",
    "tags": ["String", "Dynamic Programming"],
    "intuition": "This can be solved by finding the Longest Common Subsequence (LCS) between the original string $s$ and its reversed version. Alternatively, use standard 2D intervals where $\\text{dp}[i][j]$ represents the answer for substring $s[i \\dots j]$. If $s[i] == s[j]$, $\\text{dp}[i][j] = \\text{dp}[i+1][j-1] + 2$, else $\\max(\\text{dp}[i+1][j], \\text{dp}[i][j-1])$.",
    "example": {
      "input": "s = \"bbbab\"",
      "output": "4",
      "explanation": "One possible longest palindromic subsequence is \"bbbb\"."
    },
    "hints": [
      "All single characters are palindromes of length 1, so the base cases are $\\text{dp}[i][i] = 1$.",
      "Iterate through lengths from 2 up to $n$ to fill the DP table properly."
    ],
    "testCases": [
      { "input": "s = \"bbbab\"", "output": "4" },
      { "input": "s = \"cbbd\"", "output": "2" }
    ],
    "leetcode": "https://leetcode.com/problems/longest-palindromic-subsequence/",
    "gfg": "https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/"
  },
  {
    "slug": "maximum-length-of-pair-chain",
    "title": "Maximum Length of Pair Chain",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "shortDescription": "Find the longest chain of intervals that can be formed.",
    "description": "You are given an array of n pairs pairs where pairs[i] = [left_i, right_i] and left_i < right_i. A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion. Return the length longest chain which can be formed.",
    "tags": ["Array", "Dynamic Programming", "Greedy", "Sorting"],
    "intuition": "This is equivalent to the Interval Scheduling Maximization problem. Sort the pairs by their second element (end time) in ascending order. Traverse through the sorted pairs and greedily pick a pair whenever its start time is strictly greater than the end time of the previously selected pair.",
    "example": {
      "input": "pairs = [[1,2],[2,3],[3,4]]",
      "output": "2",
      "explanation": "The longest chain is [1,2] -> [3,4]."
    },
    "hints": [
      "While it can be solved with an $O(n^2)$ dynamic programming approach, sorting by end times allows for a faster $O(n \\log n)$ greedy solution.",
      "Track the end value of the current chain during traversal to evaluate incoming links."
    ],
    "testCases": [
      { "input": "pairs = [[1,2],[2,3],[3,4]]", "output": "2" }
    ],
    "leetcode": "https://leetcode.com/problems/maximum-length-of-pair-chain/",
    "gfg": "https://www.geeksforgeeks.org/maximum-length-chain-of-pairs-dp-20/"
  },
  {
    "slug": "maximum-product-subarray",
    "title": "Maximum Product Subarray",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "shortDescription": "Find the contiguous subarray within an array that has the largest product.",
    "description": "Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.",
    "tags": ["Array", "Dynamic Programming"],
    "intuition": "Multiplying by a negative number can turn a very small negative value into a large positive value. Therefore, at each index, you should maintain both a running maximum product and a running minimum product. When you encounter a negative number, swap the maximum and minimum before multiplying.",
    "example": {
      "input": "nums = [2,3,-2,4]",
      "output": "6",
      "explanation": "[2,3] has the largest product 6."
    },
    "hints": [
      "Update your tracking variables using: $\\text{max\\_prod} = \\max(\\text{num}, \\text{max\\_prod} \\times \\text{num})$ and a similar rule for $\\text{min\\_prod}$.",
      "Keep a global variable to track the maximum product seen across the entire traversal."
    ],
    "testCases": [
      { "input": "nums = [2,3,-2,4]", "output": "6" },
      { "input": "nums = [-2,0,-1]", "output": "0" }
    ],
    "leetcode": "https://leetcode.com/problems/maximum-product-subarray/",
    "gfg": "https://www.geeksforgeeks.org/maximum-product-subarray/"
  },
  {
    "slug": "crawler-log-folder",
    "title": "Crawler Log Folder",
    "category": "Stacks",
    "difficulty": "Easy",
    "shortDescription": "Find the minimum number of operations to return to the main folder.",
    "description": "The LeetCode file system keeps a log of every time the user performs a change folder operation. The operations are described as a list of strings logs where '../' moves to the parent folder, './' remains in the same folder, and 'x/' moves to the child folder 'x'. Return the minimum number of steps to go back to the main folder after all operations.",
    "tags": ["Array", "String", "Stack", "Simulation"],
    "intuition": "Track your current depth from the main folder. Increment by 1 for a child folder, decrement by 1 (clamped at 0) for a parent folder, and ignore operations that point to the same folder.",
    "example": {
      "input": "logs = [\"d1/\",\"d2/\",\"../\",\"d21/\",\"./\"]",
      "output": "2",
      "explanation": "Move to d1 -> depth 1. Move to d2 -> depth 2. Go back -> depth 1. Move to d21 -> depth 2. Stay -> depth 2."
    },
    "hints": [
      "You don't need a full stack; an integer counter tracking depth is sufficient.",
      "Ensure depth never drops below 0 when processing '../'."
    ],
    "testCases": [
      { "input": "logs = [\"d1/\",\"d2/\",\"../\",\"d21/\",\"./\"]", "output": "2" },
      { "input": "logs = [\"d1/\",\"../\",\"../\",\"./\"]", "output": "0" }
    ],
    "leetcode": "https://leetcode.com/problems/crawler-log-folder/",
    "gfg": "https://www.geeksforgeeks.org/crawler-log-folder-problem/"
  },
  {
    "slug": "build-an-array-with-stack-operations",
    "title": "Build an Array With Stack Operations",
    "category": "Stacks",
    "difficulty": "Easy",
    "shortDescription": "Simulate the stack operations required to build the target array.",
    "description": "You are given an array target and an integer n. You have an empty stack and a stream of integers from 1 to n. In each step, you can read the next number from the stream and execute a 'Push' or 'Pop' operation. Return the stack operations needed to build target.",
    "tags": ["Array", "Stack", "Simulation"],
    "intuition": "Iterate through the stream numbers sequentially. If the current stream number matches the current element of the target, push it and move to the next target element. If it doesn't match, it means it must be pushed and immediately popped.",
    "example": {
      "input": "target = [1,3], n = 3",
      "output": "[\"Push\",\"Push\",\"Pop\",\"Push\"]",
      "explanation": "Read 1: Match -> Push. Read 2: Mismatch -> Push, Pop. Read 3: Match -> Push. Target array completed."
    },
    "hints": [
      "Stop processing as soon as you have matched all elements in the target array.",
      "Every number in the stream up to your max target element will generate at least a 'Push'."
    ],
    "testCases": [
      { "input": "target = [1,3], n = 3", "output": "[\"Push\",\"Push\",\"Pop\",\"Push\"]" },
      { "input": "target = [1,2,3], n = 3", "output": "[\"Push\",\"Push\",\"Push\"]" }
    ],
    "leetcode": "https://leetcode.com/problems/build-an-array-with-stack-operations/",
    "gfg": "https://www.geeksforgeeks.org/build-an-array-with-stack-operations/"
  },
  {
    "slug": "removing-stars-from-a-string",
    "title": "Removing Stars From a String",
    "category": "Stacks",
    "difficulty": "Medium",
    "shortDescription": "Remove characters to the left of stars progressively.",
    "description": "You are given a string s, which contains stars '*'. In one operation, you can choose a star in s, remove the closest non-star character to its left, as well as remove the star itself. Return the string after all stars have been removed.",
    "tags": ["String", "Stack", "Simulation"],
    "intuition": "Use a stack to build the string. When iterating, if the current character is a normal letter, push it. If it is a star, pop the last character added.",
    "example": {
      "input": "s = \"leet**cod*e\"",
      "output": "\"lecoe\"",
      "explanation": "The first two stars erase 'e' and 't' resulting in \"lee\". The third star erases 'd' resulting in \"lecoe\"."
    },
    "hints": [
      "A standard string builder or an array pointer can simulate the stack efficiently in-place.",
      "The input guarantees that the operations will always be valid (no star will attempt to pop an empty container)."
    ],
    "testCases": [
      { "input": "s = \"leet**cod*e\"", "output": "\"lecoe\"" },
      { "input": "s = \"erase***\"", "output": "\"\"" }
    ],
    "leetcode": "https://leetcode.com/problems/removing-stars-from-a-string/",
    "gfg": "https://www.geeksforgeeks.org/removing-stars-from-a-string/"
  },
  {
    "slug": "minimum-remove-to-make-valid-parentheses",
    "title": "Minimum Remove to Make Valid Parentheses",
    "category": "Stacks",
    "difficulty": "Medium",
    "shortDescription": "Remove the minimum number of parentheses to make the input string valid.",
    "description": "Given a string s of '(' , ')' and lowercase English characters, remove the minimum number of parentheses in any positions so that the resulting parentheses string is valid and return any valid string.",
    "tags": ["String", "Stack"],
    "intuition": "Track the indices of opening and closing parentheses. Use a stack to pair them up. Any unpaired closing parenthesis or remaining opening parenthesis indices are marked invalid and removed.",
    "example": {
      "input": "s = \"lee(t(c)o)de)\"",
      "output": "\"lee(t(c)o)de\"",
      "explanation": "\"lee(t(c)o)de\" is valid. Removing the final closing parenthesis satisfies the condition."
    },
    "hints": [
      "Push indices of '(' onto a stack. When encountering ')', pop from the stack if it's not empty; otherwise, mark the current index for removal.",
      "After scanning the string, anything left in the stack must also be removed."
    ],
    "testCases": [
      { "input": "s = \"lee(t(c)o)de)\"", "output": "\"lee(t(c)o)de\"" },
      { "input": "s = \"a)b(c)d\"", "output": "\"ab(c)d\"" }
    ],
    "leetcode": "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/",
    "gfg": "https://www.geeksforgeeks.org/minimum-remove-to-make-valid-parentheses/"
  },
  {
    "slug": "maximum-width-ramp",
    "title": "Maximum Width Ramp",
    "category": "Stacks",
    "difficulty": "Medium",
    "shortDescription": "Find the maximum width of a ramp where nums[i] <= nums[j] and i < j.",
    "description": "A ramp in an integer array nums is a pair (i, j) for which i < j and nums[i] <= nums[j]. The width of such a ramp is j - i. Given an integer array nums, return the maximum width of a ramp in nums. If there is no ramp, return 0.",
    "tags": ["Array", "Two Pointers", "Stack", "Monotonic Stack"],
    "intuition": "Build a decreasing monotonic stack of indices from left to right. These represent potential optimal start positions. Then, traverse the array from right to left, popping from the stack to maximize the width whenever the condition is met.",
    "example": {
      "input": "nums = [6,0,8,2,1,5]",
      "output": "4",
      "explanation": "The maximum width ramp is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5, with a width of 5 - 1 = 4."
    },
    "hints": [
      "Only values that are smaller than all elements to their left are worth tracking as the start of a ramp.",
      "Iterating from right to left ensures that when you pop an element from the stack, you have found its furthest valid matching index."
    ],
    "testCases": [
      { "input": "nums = [6,0,8,2,1,5]", "output": "4" },
      { "input": "nums = [9,8,1,0,1,9,4,0,4,1]", "output": "7" }
    ],
    "leetcode": "https://leetcode.com/problems/maximum-width-ramp/",
    "gfg": "https://www.geeksforgeeks.org/maximum-width-ramp/"
  },
  {
    "slug": "next-greater-element-ii",
    "title": "Next Greater Element II",
    "category": "Stacks",
    "difficulty": "Medium",
    "shortDescription": "Find the next greater element for each element in a circular array.",
    "description": "Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums. The next greater number of a number x is the first greater number to its traversing-order next in the array.",
    "tags": ["Array", "Stack", "Monotonic Stack"],
    "intuition": "Simulate a circular array by looping through indices up to $2n - 1$. Maintain a monotonic decreasing stack of indices. Pop elements from the stack when the current number is greater than the element at the index on top of the stack.",
    "example": {
      "input": "nums = [1,2,1]",
      "output": "[2,-1,2]",
      "explanation": "The next greater element for the first 1 is 2; for 2 there is no greater element; for the second 1, searching circularly yields 2."
    },
    "hints": [
      "Use modulo operation `i % n` to map the index back into bounds during the second pass simulation.",
      "Store indices in the stack rather than the actual values to update your results array accurately."
    ],
    "testCases": [
      { "input": "nums = [1,2,1]", "output": "[2,-1,2]" },
      { "input": "nums = [3,8,4,1,2]", "output": "[8,-1,8,2,3]" }
    ],
    "leetcode": "https://leetcode.com/problems/next-greater-element-ii/",
    "gfg": "https://www.geeksforgeeks.org/next-greater-element-in-circular-array/"
  },
  {
    "slug": "final-prices-with-a-special-discount-in-a-shop",
    "title": "Final Prices With a Special Discount in a Shop",
    "category": "Stacks",
    "difficulty": "Easy",
    "shortDescription": "Apply a discount to item prices based on the next smaller or equal item price.",
    "description": "You are given an integer array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop. If you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i]. Return the final prices.",
    "tags": ["Array", "Stack", "Monotonic Stack"],
    "intuition": "This is a variant of the Next Smaller Element problem. Use a monotonic increasing stack to maintain indices of items waiting for a valid discount.",
    "example": {
      "input": "prices = [8,4,6,2,3]",
      "output": "[4,2,4,2,3]",
      "explanation": "Item 0 gets discount from item 1 -> 8 - 4 = 4. Item 1 gets discount from item 3 -> 4 - 2 = 2. Item 2 gets discount from item 3 -> 6 - 2 = 4, etc."
    },
    "hints": [
      "Iterate through the prices array. While the current price is less than or equal to the price at the stack's top index, pop and apply the current price as a discount.",
      "The items remaining in the stack at the end receive no discount."
    ],
    "testCases": [
      { "input": "prices = [8,4,6,2,3]", "output": "[4,2,4,2,3]" },
      { "input": "prices = [1,2,3,4,5]", "output": "[1,2,3,4,5]" }
    ],
    "leetcode": "https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/",
    "gfg": "https://www.geeksforgeeks.org/final-prices-with-a-special-discount-in-a-shop/"
  },
  {
    "slug": "guess-number-higher-or-lower",
    "title": "Guess Number Higher or Lower",
    "category": "Binary Search",
    "difficulty": "Easy",
    "shortDescription": "Find the hidden number using binary search and feedback hints.",
    "description": "We are playing the Guess Game. The game is as follows: I pick a number from 1 to n. You have to guess which number I picked. Every time you guess wrong, I will tell you whether the number I picked is higher or lower via a pre-defined API guess(int num). Return the number I picked.",
    "tags": ["Binary Search", "Interactive"],
    "intuition": "The search space is sorted from 1 to $n$. Apply binary search to check the midpoint. Adjust the boundaries based on the API feedback (-1, 1, or 0).",
    "example": {
      "input": "n = 10, pick = 6",
      "output": "6",
      "explanation": "Binary search evaluates midpoints until guess(mid) returns 0."
    },
    "hints": [
      "Calculate mid using `mid = low + (high - low) / 2` to prevent integer overflow.",
      "If guess(mid) returns -1, set high to mid - 1. If it returns 1, set low to mid + 1."
    ],
    "testCases": [
      { "input": "n = 10, pick = 6", "output": "6" }
    ],
    "leetcode": "https://leetcode.com/problems/guess-number-higher-or-lower/",
    "gfg": "https://www.geeksforgeeks.org/guess-number-higher-or-lower-game/"
  },
  {
    "slug": "first-bad-version",
    "title": "First Bad Version",
    "category": "Binary Search",
    "difficulty": "Easy",
    "shortDescription": "Find the earliest defective version using the minimum number of API calls.",
    "description": "You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad. Find the first bad version.",
    "tags": ["Binary Search", "Interactive"],
    "intuition": "This is equivalent to finding the first true value in a sorted boolean array `[false, false, ..., true, true]`. Use binary search to isolate the boundary.",
    "example": {
      "input": "n = 5, bad = 4",
      "output": "4",
      "explanation": "isBadVersion(3) -> false, isBadVersion(4) -> true. The first bad version is 4."
    },
    "hints": [
      "If `isBadVersion(mid)` is true, the first bad version is at `mid` or to its left, so set `high = mid`.",
      "If it's false, the bad version is strictly to the right, so set `low = mid + 1`."
    ],
    "testCases": [
      { "input": "n = 5, bad = 4", "output": "4" }
    ],
    "leetcode": "https://leetcode.com/problems/first-bad-version/",
    "gfg": "https://www.geeksforgeeks.org/first-bad-version/"
  },
  {
    "slug": "valid-perfect-square",
    "title": "Valid Perfect Square",
    "category": "Binary Search",
    "difficulty": "Easy",
    "shortDescription": "Determine if a positive integer is a perfect square without using built-in functions.",
    "description": "Given a positive integer num, return true if num is a perfect square or false otherwise. Do not use any built-in library function such as sqrt.",
    "tags": ["Math", "Binary Search"],
    "intuition": "The square root of `num` lies between 1 and `num`. Perform a binary search in this range, checking if $mid \\times mid == num$.",
    "example": {
      "input": "num = 16",
      "output": "true",
      "explanation": "16 = 4 * 4, so it is a perfect square."
    },
    "hints": [
      "Use long data types for computing $mid \\times mid$ to avoid integer overflow issues.",
      "Alternatively, you can use the mathematical property that the sum of the first $n$ odd numbers equals $n^2$."
    ],
    "testCases": [
      { "input": "num = 16", "output": "true" },
      { "input": "num = 14", "output": "false" }
    ],
    "leetcode": "https://leetcode.com/problems/valid-perfect-square/",
    "gfg": "https://www.geeksforgeeks.org/check-if-a-number-is-perfect-square-without-using-sqrt-function/"
  },
  {
    "slug": "find-smallest-letter-greater-than-target",
    "title": "Find Smallest Letter Greater Than Target",
    "category": "Binary Search",
    "difficulty": "Easy",
    "shortDescription": "Find the smallest character in a sorted array that is lexicographically larger than the target.",
    "description": "Given a characters array letters that is sorted in non-decreasing order, and a character target, return the smallest character in the array that is larger than target. If no such character exists, return the first character in letters.",
    "tags": ["Array", "Binary Search"],
    "intuition": "Use binary search to look for the insertion point of the target. If the target is greater than or equal to the last letter in the array, wrap around to return the first letter.",
    "example": {
      "input": "letters = [\"c\",\"f\",\"j\"], target = \"a\"",
      "output": "\"c\"",
      "explanation": "The smallest letter strictly larger than 'a' in the list is 'c'."
    },
    "hints": [
      "This is a standard upper bound binary search implementation.",
      "The condition for advancing the lower bound is `letters[mid] <= target`."
    ],
    "testCases": [
      { "input": "letters = [\"c\",\"f\",\"j\"], target = \"a\"", "output": "\"c\"" },
      { "input": "letters = [\"c\",\"f\",\"j\"], target = \"c\"", "output": "\"f\"" }
    ],
    "leetcode": "https://leetcode.com/problems/find-smallest-letter-greater-than-target/",
    "gfg": "https://www.geeksforgeeks.org/small-character-greater-than-target/"
  },
  {
    "slug": "special-array-with-x-elements-greater-than-or-equal-x",
    "title": "Special Array With X Elements Greater Than or Equal X",
    "category": "Binary Search",
    "difficulty": "Easy",
    "shortDescription": "Find a number X such that there are exactly X elements greater than or equal to X.",
    "description": "You are given an array of non-negative integers nums. nums is considered special if there exists a number x such that there are exactly x elements in nums that are greater than or equal to x. x does not have to be an element in nums. Return x, or -1 if impossible.",
    "tags": ["Array", "Binary Search", "Sorting"],
    "intuition": "The value of $x$ must fall between 1 and the length of the array $n$. You can binary search for $x$ in this range and count how many numbers are $\\ge mid$ to adjust search constraints.",
    "example": {
      "input": "nums = [3,5]",
      "output": "2",
      "explanation": "There are 2 values (3 and 5) that are greater than or equal to 2. Thus, x = 2."
    },
    "hints": [
      "Sort the array to speed up the count of elements greater than or equal to a value using binary search.",
      "Alternatively, use a counting array (bucket sort approach) to keep track of element frequencies."
    ],
    "testCases": [
      { "input": "nums = [3,5]", "output": "2" },
      { "input": "nums = [0,4,3,0,4]", "output": "3" }
    ],
    "leetcode": "https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/",
    "gfg": "https://www.geeksforgeeks.org/special-array-with-x-elements-greater-than-or-equal-x/"
  },
  {
    "slug": "the-k-weakest-rows-in-a-matrix",
    "title": "The K Weakest Rows in a Matrix",
    "category": "Binary Search",
    "difficulty": "Easy",
    "shortDescription": "Find the indices of the k weakest rows in a binary matrix.",
    "description": "You are given an m x n binary matrix mat of 1's (soldiers) and 0's (civilians). The soldiers are positioned in each row to the left. A row i is weaker than a row j if the number of soldiers in row i is less than the number of soldiers in row j, or if the counts are equal and i < j. Return the indices of the k weakest rows.",
    "tags": ["Array", "Binary Search", "Sorting", "Heap (Priority Queue)", "Matrix"],
    "intuition": "Since the soldiers (1s) always appear before civilians (0s), count the number of soldiers in each row using binary search. Then, sort the rows by their strength and index to extract the top $k$ items.",
    "example": {
      "input": "mat = [[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]], k = 3",
      "output": "[2,0,3]",
      "explanation": "Soldier counts per row: Row 0: 2, Row 1: 4, Row 2: 1, Row 3: 2, Row 4: 5. Sorted indices by ascending strength: 2, 0, 3."
    },
    "hints": [
      "Use binary search (`binary search for the first 0`) to find the number of 1s in $O(\\log n)$ time per row.",
      "A min-heap or a simple custom sort can track row combinations dynamically."
    ],
    "testCases": [
      { "input": "mat = [[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]], k = 3", "output": "[2,0,3]" }
    ],
    "leetcode": "https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/",
    "gfg": "https://www.geeksforgeeks.org/k-weakest-rows-in-a-matrix/"
  },
  {
    "slug": "peak-index-in-a-mountain-array",
    "title": "Peak Index in a Mountain Array",
    "category": "Binary Search",
    "difficulty": "Medium",
    "shortDescription": "Find the index of the peak element in a mountain array.",
    "description": "An array arr is a mountain array if it rises to a single peak and then falls. Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].",
    "tags": ["Array", "Binary Search"],
    "intuition": "Use binary search to find the peak. Compare `arr[mid]` with `arr[mid + 1]`. If `arr[mid] < arr[mid + 1]`, you are on the ascending slope, so move your lower bound right. Otherwise, you are on the descending slope.",
    "example": {
      "input": "arr = [0,1,0]",
      "output": "1",
      "explanation": "The maximum element is 1, located at index 1."
    },
    "hints": [
      "The peak condition satisfies `arr[i] > arr[i-1]` and `arr[i] > arr[i+1]`.",
      "This problem can be safely solved in $O(\\log n)$ because of the monotonic trends on both sides of the peak."
    ],
    "testCases": [
      { "input": "arr = [0,1,0]", "output": "1" },
      { "input": "arr = [0,2,1,0]", "output": "1" }
    ],
    "leetcode": "https://leetcode.com/problems/peak-index-in-a-mountain-array/",
    "gfg": "https://www.geeksforgeeks.org/find-peak-element-in-a-mountain-array/"
  },
  {
    "slug": "search-a-2d-matrix-ii",
    "title": "Search a 2D Matrix II",
    "category": "Binary Search",
    "difficulty": "Medium",
    "shortDescription": "Search for a target value in a matrix sorted row-wise and column-wise.",
    "description": "Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has rows sorted in ascending order from left to right, and columns sorted in ascending order from top to bottom.",
    "tags": ["Array", "Binary Search", "Divide and Conquer", "Matrix"],
    "intuition": "Start from the top-right corner of the matrix. If the current element equals the target, return true. If it's greater, move left to find smaller values. If it's smaller, move down to find larger values.",
    "example": {
      "input": "matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22]], target = 5",
      "output": "true",
      "explanation": "Target 5 is found at index row 1, col 1."
    },
    "hints": [
      "Starting at top-right (or bottom-left) allows you to prune either an entire row or an entire column in each step.",
      "This search approach runs in $O(m + n)$ time complexity."
    ],
    "testCases": [
      { "input": "matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22]], target = 5", "output": "true" },
      { "matrix": [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22]], "target": 20, "output": "false" }
    ],
    "leetcode": "https://leetcode.com/problems/search-a-2d-matrix-ii/",
    "gfg": "https://www.geeksforgeeks.org/search-in-row-wise-and-column-wise-sorted-matrix/"
  },
  {
    "slug": "find-right-interval",
    "title": "Find Right Interval",
    "category": "Binary Search",
    "difficulty": "Medium",
    "shortDescription": "Find the interval that starts earliest after or at the end of each interval.",
    "description": "You are given an array of intervals, where intervals[i] = [starti, endi]. For each interval i, check if there exists an interval j whose startj >= endi and which has the minimum startj. Return an array of indices.",
    "tags": ["Array", "Binary Search", "Sorting"],
    "intuition": "Store each interval's start time alongside its original index, then sort this mapping. For each interval's end time, use binary search to locate the smallest valid start time in the sorted list.",
    "example": {
      "input": "intervals = [[3,4],[2,3],[1,2]]",
      "output": "[-1,0,1]",
      "explanation": "There is no right interval for [3,4]. For [2,3], the right interval is [3,4] (index 0). For [1,2], the right interval is [2,3] (index 1)."
    },
    "hints": [
      "Use a binary search method like lower bound to find the first element $\\ge \\text{end}_i$.",
      "If no such interval is found, default the index entry to -1."
    ],
    "testCases": [
      { "input": "intervals = [[3,4],[2,3],[1,2]]", "output": "[-1,0,1]" }
    ],
    "leetcode": "https://leetcode.com/problems/find-right-interval/",
    "gfg": "https://www.geeksforgeeks.org/find-right-interval-for-each-given-interval/"
  },
  {
    "slug": "minimum-limit-of-balls-in-a-bag",
    "title": "Minimum Limit of Balls in a Bag",
    "category": "Binary Search",
    "difficulty": "Medium",
    "shortDescription": "Minimize the maximum number of balls in a bag after up to maxOperations splits.",
    "description": "You are given an integer array nums where the ith bag contains nums[i] balls. You are also given an integer maxOperations. You can perform operations where you split a bag of balls into two new bags. Minimize the maximum number of balls in a bag after performing at most maxOperations splits.",
    "tags": ["Array", "Binary Search"],
    "intuition": "Binary search over the answer space (the maximum bag size, ranging from 1 to $\\max(nums)$). For a target size $mid$, calculate the total number of operations required to reduce all bags to at most $mid$ balls.",
    "example": {
      "input": "nums = [9], maxOperations = 2",
      "output": "3",
      "explanation": "Split 9 into 6 and 3, then split 6 into 3 and 3. Max size is 3, using 2 operations."
    },
    "hints": [
      "The formula for operations needed to split a bag of size $v$ into chunks of size $mid$ is $\\lfloor(v - 1) / mid\\rfloor$.",
      "If total operations required is $\\le \\text{maxOperations}$, try a smaller target size by setting `high = mid - 1`."
    ],
    "testCases": [
      { "input": "nums = [9], maxOperations = 2", "output": "3" },
      { "input": "nums = [2,4,8,2], maxOperations = 4", "output": "2" }
    ],
    "leetcode": "https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/",
    "gfg": "https://www.geeksforgeeks.org/minimize-the-maximum-output-after-performing-given-operations/"
  },
  {
    "slug": "delete-node-in-a-linked-list",
    "title": "Delete Node in a Linked List",
    "category": "Linked List",
    "difficulty": "Medium",
    "shortDescription": "Delete a given node from a singly-linked list without access to the head.",
    "description": "There is a singly-linked list head and we want to delete a node node in it. You are given the node to be deleted node directly. You will not be given access to the head of the list.",
    "tags": ["Linked List"],
    "intuition": "Since you don't have access to the previous node, copy the value of the next node into the current node, then delete the next node by skipping it.",
    "example": {
      "input": "head = [4,5,1,9], node = 5",
      "output": "[4,1,9]",
      "explanation": "The value 5 is overwritten with 1, and the node containing the original 1 is unlinked."
    },
    "hints": [
      "Set `node.val = node.next.val`.",
      "Set `node.next = node.next.next`."
    ],
    "testCases": [
      { "input": "head = [4,5,1,9], node = 5", "output": "[4,1,9]" }
    ],
    "leetcode": "https://leetcode.com/problems/delete-node-in-a-linked-list/",
    "gfg": "https://www.geeksforgeeks.org/delete-a-given-node-in-linked-list-under-given-constraints/"
  },
  {
    "slug": "middle-of-the-linked-list",
    "title": "Middle of the Linked List",
    "category": "Linked List",
    "difficulty": "Easy",
    "shortDescription": "Find the middle node of a linked list.",
    "description": "Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.",
    "tags": ["Linked List", "Two Pointers"],
    "intuition": "Use the fast and slow pointer technique (Tortoise and Hare). The slow pointer moves one step at a time while the fast pointer moves two steps. When the fast pointer reaches the end, the slow pointer will be at the middle.",
    "example": {
      "input": "head = [1,2,3,4,5]",
      "output": "[3,4,5]",
      "explanation": "The middle node of the list is 3."
    },
    "hints": [
      "Initialize both pointers to `head`.",
      "The loop condition should be `fast != null && fast.next != null`."
    ],
    "testCases": [
      { "input": "head = [1,2,3,4,5]", "output": "[3,4,5]" },
      { "input": "head = [1,2,3,4,5,6]", "output": "[4,5,6]" }
    ],
    "leetcode": "https://leetcode.com/problems/middle-of-the-linked-list/",
    "gfg": "https://www.geeksforgeeks.org/find-fractional-node-linked-list/"
  },
  {
    "slug": "convert-binary-number-in-a-linked-list-to-integer",
    "title": "Convert Binary Number in a Linked List to Integer",
    "category": "Linked List",
    "difficulty": "Easy",
    "shortDescription": "Convert a binary number represented by a linked list into a decimal integer.",
    "description": "Given head which is a reference node to a singly-linked list. The value of each node in the list is either 0 or 1. The linked list holds the binary representation of a number. Return the decimal value of the number in the list.",
    "tags": ["Linked List", "Math", "Bit Manipulation"],
    "intuition": "Traverse the linked list from left to right. Maintain a running sum initialized to 0. For each node, shift the running sum left by 1 (or multiply by 2) and add the node's value.",
    "example": {
      "input": "head = [1,0,1]",
      "output": "5",
      "explanation": "Binary expression: (101) in base 2 = 5 in base 10."
    },
    "hints": [
      "Use bitwise operations: `ans = (ans << 1) | node.val`.",
      "This process computes the value in a single traversal without storing intermediate representations."
    ],
    "testCases": [
      { "input": "head = [1,0,1]", "output": "5" },
      { "input": "head = [0]", "output": "0" }
    ],
    "leetcode": "https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/",
    "gfg": "https://www.geeksforgeeks.org/decimal-equivalent-of-binary-linked-list/"
  },
  {
    "slug": "merge-nodes-in-between-zeros",
    "title": "Merge Nodes in Between Zeros",
    "category": "Linked List",
    "difficulty": "Medium",
    "shortDescription": "Merge all nodes between consecutive zero nodes into a single node.",
    "description": "You are given the head of a modified linked list which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0. For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.",
    "tags": ["Linked List", "Simulation"],
    "intuition": "Traverse the list while tracking a running sum. When you hit a non-zero node, add its value to the sum. When you hit a zero node, modify the current position to store the accumulated sum and link it to the next segment.",
    "example": {
      "input": "head = [0,3,1,0,4,5,2,0]",
      "output": "[4,11]",
      "explanation": "The nodes between the first two zeros sum to 3 + 1 = 4. The nodes between the next zeros sum to 4 + 5 + 2 = 11."
    },
    "hints": [
      "You can perform the modification in-place to optimize space complexity.",
      "Update your tracking pointer's next references to bypass the original structural blocks."
    ],
    "testCases": [
      { "input": "head = [0,3,1,0,4,5,2,0]", "output": "[4,11]" }
    ],
    "leetcode": "https://leetcode.com/problems/merge-nodes-in-between-zeros/",
    "gfg": "https://www.geeksforgeeks.org/merge-nodes-in-between-zeros-of-a-linked-list/"
  },
  {
    "slug": "remove-nodes-from-linked-list",
    "title": "Remove Nodes From Linked List",
    "category": "Linked List",
    "difficulty": "Medium",
    "shortDescription": "Remove every node that has a node with a strictly greater value anywhere to its right.",
    "description": "You are given the head of a linked list. Remove every node which has a node with a greater value anywhere to the right side of it in the list. Return the head of the modified linked list.",
    "tags": ["Linked List", "Stack", "Recursion", "Monotonic Stack"],
    "intuition": "This problem is simplified if processed from right to left. Reverse the linked list, traverse it while tracking the maximum value seen so far, and filter out nodes that are smaller than that maximum. Reverse back at the end.",
    "example": {
      "input": "head = [5,2,13,3,8]",
      "output": "[13,8]",
      "explanation": "13 is greater than 5 and 2, so they are removed. 8 is greater than 3, so 3 is removed."
    },
    "hints": [
      "Alternatively, use recursion to process nodes from the end up to the front.",
      "A monotonic decreasing stack can also collect valid nodes during a single forward pass."
    ],
    "testCases": [
      { "input": "head = [5,2,13,3,8]", "output": "[13,8]" }
    ],
    "leetcode": "https://leetcode.com/problems/remove-nodes-from-linked-list/",
    "gfg": "https://www.geeksforgeeks.org/delete-nodes-which-have-a-greater-value-on-right-side/"
  },
  {
    "slug": "maximum-twin-sum-of-a-linked-list",
    "title": "Maximum Twin Sum of a Linked List",
    "category": "Linked List",
    "difficulty": "Medium",
    "shortDescription": "Find the maximum twin sum in a linked list of even length.",
    "description": "In a linked list of size n where n is even, the ith node (0-indexed) is the twin of the (n-1-i)th node. The twin sum is defined as the sum of a node and its twin. Given an even-length linked list, return the maximum twin sum.",
    "tags": ["Linked List", "Two Pointers", "Stack"],
    "intuition": "Find the middle of the linked list using the slow/fast pointer approach. Reverse the second half of the list, then compute the sums of paired elements by traversing both halves simultaneously.",
    "example": {
      "input": "head = [5,4,2,1]",
      "output": "6",
      "explanation": "Twins are 5 and 1 (sum 6), 4 and 2 (sum 6). The maximum twin sum is 6."
    },
    "hints": [
      "Reversing the second half allows you to compare the start elements and end elements efficiently with $O(1)$ auxiliary space.",
      "Don't forget to restore or properly handle termination pointers."
    ],
    "testCases": [
      { "input": "head = [5,4,2,1]", "output": "6" },
      { "input": "head = [4,2,2,3]", "output": "7" }
    ],
    "leetcode": "https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/",
    "gfg": "https://www.geeksforgeeks.org/maximum-twin-sum-of-a-linked-list/"
  },
  {
    "slug": "double-a-number-represented-as-a-linked-list",
    "title": "Double a Number Represented as a Linked List",
    "category": "Linked List",
    "difficulty": "Medium",
    "shortDescription": "Double the numerical value represented by a linked list.",
    "description": "You are given the head of a non-empty linked list representing a non-negative integer without leading zeroes. Double the number and return the head of the modified linked list.",
    "tags": ["Linked List", "Math", "Stack"],
    "intuition": "Multiply by 2 can produce a carry. You can reverse the list to process addition and carry from right to left, or look ahead at the next node's value: if the next node is $\\ge 5$, the current node will receive a carry of 1.",
    "example": {
      "input": "head = [1,8,9]",
      "output": "[3,7,8]",
      "explanation": "189 doubled is 378."
    },
    "hints": [
      "If the head node's value is $\\ge 5$, you must insert a new node with value 1 at the front of the list.",
      "Update each node's value using `(node.val * 2 + (node.next != null && node.next.val >= 5 ? 1 : 0)) % 10`."
    ],
    "testCases": [
      { "input": "head = [1,8,9]", "output": "[3,7,8]" },
      { "input": "head = [9,9,9]", "output": "[1,9,9,8]" }
    ],
    "leetcode": "https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/",
    "gfg": "https://www.geeksforgeeks.org/double-a-number-represented-as-a-linked-list/"
  },
  {
    "slug": "split-linked-list-in-parts",
    "title": "Split Linked List in Parts",
    "category": "Linked List",
    "difficulty": "Medium",
    "shortDescription": "Split a linked list into k consecutive parts of nearly equal length.",
    "description": "Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts. The length of each part should be as equal as possible, and the remaining nodes should be distributed one per part among the first parts.",
    "tags": ["Linked List"],
    "intuition": "First, calculate the total length of the list $N$. The base size of each part is $\\lfloor N / k \\rfloor$, and the first $N \\pmod k$ parts get an extra node. Traverse the list and break the links accordingly.",
    "example": {
      "input": "head = [1,2,3], k = 5",
      "output": "[[1],[2],[3],[],[]]",
      "explanation": "Since there are fewer nodes than parts, each node forms its own part, and the remaining segments are empty."
    },
    "hints": [
      "Keep track of the previous node to sever the list link via `prev.next = null` after formatting a group.",
      "Initialize your results array with null or empty values upfront."
    ],
    "testCases": [
      { "input": "head = [1,2,3], k = 5", "output": "[[1],[2],[3],[],[]]" }
    ],
    "leetcode": "https://leetcode.com/problems/split-linked-list-in-parts/",
    "gfg": "https://www.geeksforgeeks.org/split-linked-list-in-parts/"
  },
  {
    "slug": "minimum-depth-of-binary-tree",
    "title": "Minimum Depth of Binary Tree",
    "category": "Trees",
    "difficulty": "Easy",
    "shortDescription": "Find the minimum depth from the root node down to the nearest leaf node.",
    "description": "Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node. A leaf is a node with no children.",
    "tags": ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
    "intuition": "Use BFS to traverse the tree level by level. The first leaf node you encounter guarantees the shortest path from the root.",
    "example": {
      "input": "root = [3,9,20,null,null,15,7]",
      "output": "2",
      "explanation": "The shortest path is 3 -> 9, which has a length of 2."
    },
    "hints": [
      "If using DFS, handle cases where a node has only one child: the path must extend to a valid leaf node.",
      "If a node's left child is null, recurse on the right child and add 1 (and vice versa)."
    ],
    "testCases": [
      { "input": "root = [3,9,20,null,null,15,7]", "output": "2" }
    ],
    "leetcode": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
    "gfg": "https://www.geeksforgeeks.org/find-minimum-depth-of-a-binary-tree/"
  },
  {
    "slug": "binary-tree-inorder-traversal",
    "title": "Binary Tree Inorder Traversal",
    "category": "Trees",
    "difficulty": "Easy",
    "shortDescription": "Return the inorder traversal of a binary tree's nodes.",
    "description": "Given the root of a binary tree, return the inorder traversal of its nodes' values. (Left, Root, Right).",
    "tags": ["Stack", "Tree", "Depth-First Search", "Binary Tree"],
    "intuition": "Traverse the tree recursively by visiting the left subtree, recording the root node's value, and then visiting the right subtree.",
    "example": {
      "input": "root = [1,null,2,3]",
      "output": "[1,3,2]",
      "explanation": "Left is empty -> visit 1 -> move right to 2 -> visit its left child 3 -> visit 2."
    },
    "hints": [
      "Can be solved iteratively using an explicit stack structure.",
      "Morris traversal can solve this with $O(1)$ auxiliary space by creating temporary links."
    ],
    "testCases": [
      { "input": "root = [1,null,2,3]", "output": "[1,3,2]" }
    ],
    "leetcode": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    "gfg": "https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion/"
  },
  {
    "slug": "binary-tree-preorder-traversal",
    "title": "Binary Tree Preorder Traversal",
    "category": "Trees",
    "difficulty": "Easy",
    "shortDescription": "Return the preorder traversal of a binary tree's nodes.",
    "description": "Given the root of a binary tree, return the preorder traversal of its nodes' values. (Root, Left, Right).",
    "tags": ["Stack", "Tree", "Depth-First Search", "Binary Tree"],
    "intuition": "Process the root node immediately, then recursively call the traversal function on the left child followed by the right child.",
    "example": {
      "input": "root = [1,null,2,3]",
      "output": "[1,2,3]",
      "explanation": "Visit 1 -> move right to 2 -> visit 2 -> move left to 3 -> visit 3."
    },
    "hints": [
      "For an iterative solution, use a stack and push the right child before the left child.",
      "Ensure you handle the base case where the root is null."
    ],
    "testCases": [
      { "input": "root = [1,null,2,3]", "output": "[1,2,3]" }
    ],
    "leetcode": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
    "gfg": "https://www.geeksforgeeks.org/preorder-tree-traversal-without-recursion/"
  },
  {
    "slug": "binary-tree-postorder-traversal",
    "title": "Binary Tree Postorder Traversal",
    "category": "Trees",
    "difficulty": "Easy",
    "shortDescription": "Return the postorder traversal of a binary tree's nodes.",
    "description": "Given the root of a binary tree, return the postorder traversal of its nodes' values. (Left, Right, Root).",
    "tags": ["Stack", "Tree", "Depth-First Search", "Binary Tree"],
    "intuition": "Traverse the left subtree, then the right subtree, and finally record the value of the parent root node.",
    "example": {
      "input": "root = [1,null,2,3]",
      "output": "[3,2,1]",
      "explanation": "Traverse subtrees completely before recording the root node 1."
    },
    "hints": [
      "To solve iteratively, modify a preorder traversal strategy (Root-Right-Left) and reverse the final list.",
      "Use helper structures to track whether a node's right child has been visited."
    ],
    "testCases": [
      { "input": "root = [1,null,2,3]", "output": "[3,2,1]" }
    ],
    "leetcode": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
    "gfg": "https://www.geeksforgeeks.org/postorder-tree-traversal-without-recursion/"
  },
  {
    "slug": "univalued-binary-tree",
    "title": "Univalued Binary Tree",
    "category": "Trees",
    "difficulty": "Easy",
    "shortDescription": "Check if all nodes in a binary tree have the exact same value.",
    "description": "A binary tree is univalued if every node in the tree has the same value. Given the root of a binary tree, return true if the given tree is univalued, or false otherwise.",
    "tags": ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
    "intuition": "Perform a tree traversal (DFS or BFS). Compare the value of every child node with its parent node's value. If any mismatch is found, return false.",
    "example": {
      "input": "root = [1,1,1,1,1,null,1]",
      "output": "true",
      "explanation": "Every node in this tree matches the root value of 1."
    },
    "hints": [
      "Pass the expected root value down into your recursive function calls.",
      "The base case returns true if the current node is null."
    ],
    "testCases": [
      { "input": "root = [1,1,1,1,1,null,1]", "output": "true" },
      { "input": "root = [2,2,2,5,2]", "output": "false" }
    ],
    "leetcode": "https://leetcode.com/problems/univalued-binary-tree/",
    "gfg": "https://www.geeksforgeeks.org/check-if-a-binary-tree-is-univalued-or-not/"
  },
  {
    "slug": "evaluate-boolean-binary-tree",
    "title": "Evaluate Boolean Binary Tree",
    "category": "Trees",
    "difficulty": "Easy",
    "shortDescription": "Evaluate a full binary tree based on boolean values and logical operators.",
    "description": "You are given the root of a full binary tree with the following properties: Leaf nodes have either the value 0 (False) or 1 (True). Non-leaf nodes have either the value 2 (OR) or 3 (AND). Evaluate the tree and return the boolean result.",
    "tags": ["Tree", "Depth-First Search", "Binary Tree"],
    "intuition": "This is a postorder evaluation problem. Recursively evaluate the left and right subtrees, then apply the current node's logical operator (AND / OR) to those results.",
    "example": {
      "input": "root = [2,3,5,0,1,null,null]",
      "output": "true",
      "explanation": "Leaf nodes evaluate to False and True. Parent node is 3 (AND) -> False AND True = False. Root node is 2 (OR) -> False OR True = True."
    },
    "hints": [
      "Leaf nodes can be identified when `node.left == null && node.right == null`.",
      "Directly map values 2 to `||` and 3 to `&&` in your conditional return logic."
    ],
    "testCases": [
      { "input": "root = [2,3,5,0,1,null,null]", "output": "true" }
    ],
    "leetcode": "https://leetcode.com/problems/evaluate-boolean-binary-tree/",
    "gfg": "https://www.geeksforgeeks.org/evaluate-boolean-binary-tree/"
  },
  {
    "slug": "maximum-difference-between-node-and-ancestor",
    "title": "Maximum Difference Between Node and Ancestor",
    "category": "Trees",
    "difficulty": "Medium",
    "shortDescription": "Find the maximum absolute difference between a node and any of its ancestors.",
    "description": "Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where a is an ancestor of b and v = |a.val - b.val|.",
    "tags": ["Tree", "Depth-First Search", "Binary Tree"],
    "intuition": "Traverse from the root down to the leaves. Track the minimum and maximum values encountered along the path. At each leaf node, the maximum difference for that path is simply $\\text{max} - \\text{min}$.",
    "example": {
      "input": "root = [8,3,10,1,6,null,14,null,null,4,7,13]",
      "output": "7",
      "explanation": "The maximum difference is achieved between 8 and 1 (|8 - 1| = 7) or 3 and 10."
    },
    "hints": [
      "Pass updated running min and max values as parameters down your recursive calls.",
      "The global maximum difference will be the maximum result among all root-to-leaf paths."
    ],
    "testCases": [
      { "input": "root = [8,3,10,1,6,null,14,null,null,4,7,13]", "output": "7" }
    ],
    "leetcode": "https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/",
    "gfg": "https://www.geeksforgeeks.org/maximum-absolute-difference-between-a-node-and-its-ancestor-in-a-binary-tree/"
  },
  {
    "slug": "step-by-step-directions-from-a-binary-tree-node-to-another",
    "title": "Step-By-Step Directions From a Binary Tree Node to Another",
    "category": "Trees",
    "difficulty": "Medium",
    "shortDescription": "Find the shortest path directions from a start node to a destination node.",
    "description": "You are given the root of a binary tree, a startValue, and a destValue. Find the step-by-step directions of the shortest path from the start node to the destination node. Steps are 'U' (up), 'L' (left), or 'R' (right).",
    "tags": ["String", "Tree", "Depth-First Search", "Binary Tree"],
    "intuition": "Find the paths from the root to both the start node and the destination node. Find the Lowest Common Ancestor (LCA) by matching the prefixes of both paths. Convert all steps from the start node up to the LCA into 'U's, then append the path from the LCA to the destination node.",
    "example": {
      "input": "root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6",
      "output": "\"UURL\"",
      "explanation": "Path from 3 to root goes up twice ('UU'), then right to 2 ('R'), then left to 6 ('L')."
    },
    "hints": [
      "Generate root-to-node paths as strings of 'L' and 'R'.",
      "Remove the common prefix from both strings before building the final result direction path."
    ],
    "testCases": [
      { "input": "root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6", "output": "\"UURL\"" }
    ],
    "leetcode": "https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/",
    "gfg": "https://www.geeksforgeeks.org/step-by-step-directions-from-a-binary-tree-node-to-another/"
  },
  {
    "slug": "delete-leaves-with-a-given-value",
    "title": "Delete Leaves With a Given Value",
    "category": "Trees",
    "difficulty": "Medium",
    "shortDescription": "Prune leaf nodes that match a target value cleanly from the bottom up.",
    "description": "Given a binary tree root and an integer target, delete all the leaf nodes with value target. Note that if after deleting a leaf node with value target, its parent node becomes a leaf node and has the value target, it should also be deleted.",
    "tags": ["Tree", "Depth-First Search", "Binary Tree"],
    "intuition": "Use a postorder traversal (bottom-up approach). Recursively prune the left and right subtrees first. Afterward, check if the current node has become a leaf node and matches the target value.",
    "example": {
      "input": "root = [1,2,3,2,null,2,4], target = 2",
      "output": "[1,null,3,null,4]",
      "explanation": "Leaf nodes with value 2 are removed first. This causes their parent node (which also has a value of 2) to become a leaf, triggering its removal as well."
    },
    "hints": [
      "Assign recursive returns back to child pointers: `node.left = removeLeafNodes(node.left, target)`.",
      "A node is a leaf if both its left and right pointers are null."
    ],
    "testCases": [
      { "input": "root = [1,2,3,2,null,2,4], target = 2", "output": "[1,null,3,null,4]" }
    ],
    "leetcode": "https://leetcode.com/problems/delete-leaves-with-a-given-value/",
    "gfg": "https://www.geeksforgeeks.org/remove-all-leaf-nodes-with-the-given-value/"
  },
  {
    "slug": "distribute-coins in-binary-tree",
    "title": "Distribute Coins in Binary Tree",
    "category": "Trees",
    "difficulty": "Medium",
    "shortDescription": "Find the minimum number of moves to distribute coins evenly across all nodes.",
    "description": "You are given the root of a binary tree with n nodes where each node in the tree has node.coins coins. There are n coins in total throughout the whole tree. In one move, we may choose two adjacent nodes and move one coin from one node to another. Return the minimum number of moves required to make every node have exactly one coin.",
    "tags": ["Tree", "Depth-First Search", "Binary Tree"],
    "intuition": "Use a postorder traversal. For each subtree, calculate its coin balance (excess or deficit) using the formula $\\text{balance} = \\text{node.coins} - 1 + \\text{left\\_balance} + \\text{right\\_balance}$. The number of coins that must cross the root of this subtree is equal to $|\\text{balance}|$.",
    "example": {
      "input": "root = [3,0,0]",
      "output": "2",
      "explanation": "From the root, move one coin to the left child and one coin to the right child, requiring 2 total moves."
    },
    "hints": [
      "Accumulate the absolute balance values from all subtrees into a global moves counter.",
      "A negative balance indicates a deficit of coins that must be moved into the subtree."
    ],
    "testCases": [
      { "input": "root = [3,0,0]", "output": "2" },
      { "input": "root = [0,3,0]", "output": "3" }
    ],
    "leetcode": "https://leetcode.com/problems/distribute-coins-in-binary-tree/",
    "gfg": "https://www.geeksforgeeks.org/distribute-coins-in-a-binary-tree/"
  }
,
  {
    slug: "gas-station",
    title: "Gas Station",
    category: "Greedy",
    difficulty: "Medium",
    shortDescription: "Find starting point for circular trip.",
    description: "Given gas and cost arrays, find the starting gas station's index if you can travel around the circuit once.",
    tags: ["Array", "Greedy"],
    intuition: "If total gas is less than total cost, it's impossible. Otherwise, a start point always exists where gas never dips below zero.",
    example: {
      input: "gas=[1,2,3,4,5], cost=[3,4,5,1,2]",
      output: "3",
      explanation: "Start at station 3 (index 3) and you can finish the circuit."
    },
    hints: [
      "Keep track of total surplus and current tank surplus",
      "If tank becomes negative, reset start index to i + 1"
    ],
    testCases: [
      { input: "[1,2,3,4,5], [3,4,5,1,2]", output: "3" }
    ],
    leetcode: "https://leetcode.com/problems/gas-station/",
    gfg: "https://www.geeksforgeeks.org/check-if-a-given-circuit-is-completable-starting-from-any-point/"
  },

  {
    slug: "daily-temperatures",
    title: "Daily Temperatures",
    category: "Stack",
    difficulty: "Medium",
    shortDescription: "Days until a warmer temperature.",
    description: "Given an array of temperatures, return an array such that result[i] is the number of days you have to wait until a warmer temperature.",
    tags: ["Array", "Stack", "Monotonic Stack"],
    intuition: "Use a decreasing monotonic stack to keep track of indices that haven't found a warmer day yet.",
    example: {
      input: "[73,74,75,71,69,72,76,73]",
      output: "[1,1,4,2,1,1,0,0]",
      explanation: "For 75, the next warmer day is 76 (4 days later)."
    },
    hints: [
      "Store indices in the stack, not the values themselves",
      "Pop from stack when the current temperature is warmer than the stack's top"
    ],
    testCases: [
      { input: "[30,40,50,60]", output: "[1,1,1,0]" }
    ],
    leetcode: "https://leetcode.com/problems/daily-temperatures/",
    gfg: "https://www.geeksforgeeks.org/next-greater-element/"
  },

  {
    slug: "partition-labels",
    title: "Partition Labels",
    category: "Greedy",
    difficulty: "Medium",
    shortDescription: "Partition string into max unique parts.",
    description: "Partition a string into as many parts as possible so that each letter appears in at most one part.",
    tags: ["Two Pointers", "String", "Greedy", "Hash Table"],
    intuition: "Record the last occurrence of each character. A partition must be at least as long as the last occurrence of any character within it.",
    example: {
      input: "\"ababcbacadefegdehijhklij\"",
      output: "[9,7,8]",
      explanation: "Partitions: \"ababcbaca\", \"defegde\", \"hijhklij\"."
    },
    hints: [
      "Find the 'last seen' index for all 26 characters first",
      "Update the end of the current partition as you iterate"
    ],
    testCases: [
      { input: "\"ababcbacadefegdehijhklij\"", output: "[9,7,8]" }
    ],
    leetcode: "https://leetcode.com/problems/partition-labels/",
    gfg: "https://www.geeksforgeeks.org/partition-a-string-into-maximum-number-of-substrings-such-that-each-letter-appears-in-at-most-one-part/"
  },


  {
    slug: "generate-parentheses",
    title: "Generate Parentheses",
    category: "Backtracking",
    difficulty: "Medium",
    shortDescription: "Generate all valid n-pair parentheses.",
    description: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    tags: ["String", "Dynamic Programming", "Backtracking"],
    intuition: "Keep track of the number of open and closed brackets used. Only add ')' if it doesn't exceed '('.",
    example: {
      input: "3",
      output: "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]",
      explanation: "All valid ways to arrange 3 pairs."
    },
    hints: [
      "Stop when open == n and close == n",
      "You can only add a '(' if open < n"
    ],
    testCases: [
      { input: "3", output: "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]" }
    ],
    leetcode: "https://leetcode.com/problems/generate-parentheses/",
    gfg: "https://www.geeksforgeeks.org/print-all-combinations-of-balanced-parentheses/"
  },

  {
    slug: "sort-colors",
    title: "Sort Colors",
    category: "Arrays",
    difficulty: "Medium",
    shortDescription: "Sort 0s, 1s, and 2s in-place.",
    description: "Sort an array with 0s, 1s, and 2s in-place. Often called the Dutch National Flag problem.",
    tags: ["Array", "Two Pointers", "Sorting"],
    intuition: "Use three pointers (low, mid, high) to swap 0s to the front and 2s to the back in one pass.",
    example: {
      input: "[2,0,2,1,1,0]",
      output: "[0,0,1,1,2,2]",
      explanation: "Sorted in ascending order without using library sort."
    },
    hints: [
      "0 is the low boundary, 2 is the high boundary",
      "Iterate with the 'mid' pointer and swap accordingly"
    ],
    testCases: [
      { input: "[2,0,2,1,1,0]", output: "[0,0,1,1,2,2]" }
    ],
    leetcode: "https://leetcode.com/problems/sort-colors/",
    gfg: "https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/"
  },


  {
    slug: "house-robber-ii",
    title: "House Robber II",
    category: "Dynamic Programming",
    difficulty: "Medium",
    shortDescription: "Maximize loot in circular street.",
    description: "Same as House Robber, but houses are arranged in a circle. The first and last houses are neighbors.",
    tags: ["Array", "Dynamic Programming"],
    intuition: "Run the original House Robber logic twice: once excluding the first house, once excluding the last.",
    example: {
      input: "[2,3,2]",
      output: "3",
      explanation: "Cannot rob house 1 and 3 because they are connected."
    },
    hints: [
      "Calculate max(Rob[0 to n-2], Rob[1 to n-1])",
      "Reuse your original House Robber logic as a helper"
    ],
    testCases: [
      { input: "[2,3,2]", output: "3" }
    ],
    leetcode: "https://leetcode.com/problems/house-robber-ii/",
    gfg: "https://www.geeksforgeeks.org/find-maximum-sum-such-that-no-two-elements-are-adjacent-circular/"
  },

  {
    slug: "longest-consecutive-sequence",
    title: "Longest Consecutive Sequence",
    category: "Hash Table",
    difficulty: "Medium",
    shortDescription: "Length of longest consecutive range.",
    description: "Given an unsorted array of integers, find the length of the longest consecutive elements sequence in O(n) time.",
    tags: ["Array", "Hash Table", "Union Find"],
    intuition: "Use a Set for O(1) lookups. Only start counting a sequence if the current number is the start (num-1 is not in Set).",
    example: {
      input: "[100,4,200,1,3,2]",
      output: "4",
      explanation: "Longest sequence is [1, 2, 3, 4]."
    },
    hints: [
      "Check if `num - 1` exists to avoid redundant counting",
      "While `num + 1` exists, keep incrementing the length"
    ],
    testCases: [
      { input: "[100,4,200,1,3,2]", output: "4" }
    ],
    leetcode: "https://leetcode.com/problems/longest-consecutive-sequence/",
    gfg: "https://www.geeksforgeeks.org/longest-consecutive-subsequence/"
  },

  {
    slug: "search-a-2d-matrix",
    title: "Search a 2D Matrix",
    category: "Search",
    difficulty: "Medium",
    shortDescription: "Binary search on a sorted grid.",
    description: "Write an efficient algorithm that searches for a value in an m x n matrix where rows are sorted and the first integer of a row is greater than the last of the previous row.",
    tags: ["Array", "Binary Search", "Matrix"],
    intuition: "Treat the 2D matrix as a virtual 1D array and perform a single Binary Search.",
    example: {
      input: "matrix=[[1,3,5,7],[10,11,16,20]], target=3",
      output: "true",
      explanation: "3 is found in the first row."
    },
    hints: [
      "Index in 1D `i` maps to `[i / cols][i % cols]` in 2D",
      "The total elements are m * n"
    ],
    testCases: [
      { input: "[[1,3,5,7],[10,11,16,20]], 3", output: "true" }
    ],
    leetcode: "https://leetcode.com/problems/search-a-2d-matrix/",
    gfg: "https://www.geeksforgeeks.org/search-in-a-sorted-2d-matrix/"
  },

  {
    slug: "set-matrix-zeroes",
    title: "Set Matrix Zeroes",
    category: "Matrix",
    difficulty: "Medium",
    shortDescription: "Propagate zeroes in rows/columns.",
    description: "Given an m x n integer matrix, if an element is 0, set its entire row and column to 0. Do it in-place.",
    tags: ["Array", "Hash Table", "Matrix"],
    intuition: "Use the first row and first column as markers to store whether a specific row/col needs to be zeroed.",
    example: {
      input: "[[1,1,1],[1,0,1],[1,1,1]]",
      output: "[[1,0,1],[0,0,0],[1,0,1]]",
      explanation: "Middle zero affects the second row and column."
    },
    hints: [
      "Use two boolean variables to track if the first row/col themselves need zeroing",
      "Zero the rest of the matrix based on markers, then handle the first row/col"
    ],
    testCases: [
      { input: "[[1,1,1],[1,0,1],[1,1,1]]", output: "[[1,0,1],[0,0,0],[1,0,1]]" }
    ],
    leetcode: "https://leetcode.com/problems/set-matrix-zeroes/",
    gfg: "https://www.geeksforgeeks.org/a-boolean-matrix-question/"
  },

  {
    slug: "find-all-anagrams-in-a-string",
    title: "Find All Anagrams in a String",
    category: "Strings",
    difficulty: "Medium",
    shortDescription: "Find all starting indices of anagrams.",
    description: "Given two strings s and p, return an array of all the start indices of p's anagrams in s.",
    tags: ["Hash Table", "String", "Sliding Window"],
    intuition: "Sliding window with two frequency maps (or arrays). Update the window map as you move and compare with p's map.",
    example: {
      input: "s=\"cbaebabacd\", p=\"abc\"",
      output: "[0,6]",
      explanation: "Index 0 is 'cba', index 6 is 'bac'."
    },
    hints: [
      "Fixed-size sliding window of length `p.length`",
      "Comparing two 26-size arrays is O(1)"
    ],
    testCases: [
      { input: "\"cbaebabacd\", \"abc\"", output: "[0,6]" }
    ],
    leetcode: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
    gfg: "https://www.geeksforgeeks.org/anagram-substring-search-search-permutations/"
  },

  {
    slug: "rotting-oranges",
    title: "Rotting Oranges",
    category: "Graphs",
    difficulty: "Medium",
    shortDescription: "Time until all oranges rot.",
    description: "In a grid of oranges, rotting oranges (2) spread to neighbors (1) every minute. Return min minutes until no fresh oranges remain.",
    tags: ["Array", "BFS", "Matrix"],
    intuition: "Multi-source BFS: add all initial rotten oranges to a queue and process level by level.",
    example: {
      input: "[[2,1,1],[1,1,0],[0,1,1]]",
      output: "4",
      explanation: "Minutes passed until all are rotten."
    },
    hints: [
      "Count fresh oranges initially to know if completion is possible",
      "BFS level represents the time in minutes"
    ],
    testCases: [
      { input: "[[2,1,1],[1,1,0],[0,1,1]]", output: "4" }
    ],
    leetcode: "https://leetcode.com/problems/rotting-oranges/",
    gfg: "https://www.geeksforgeeks.org/minimum-time-required-so-that-all-oranges-become-rotten/"
  },

  {
    slug: "kth-smallest-element-in-a-bst",
    title: "Kth Smallest Element in a BST",
    category: "Trees",
    difficulty: "Medium",
    shortDescription: "Find kth value in sorted tree order.",
    description: "Given the root of a binary search tree and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.",
    tags: ["Tree", "DFS", "Binary Search Tree"],
    intuition: "An in-order traversal of a BST visits nodes in strictly increasing order.",
    example: {
      input: "root=[3,1,4,null,2], k=1",
      output: "1",
      explanation: "1 is the smallest node."
    },
    hints: [
      "In-order: Left -> Root -> Right",
      "Stop early once you reach the kth node"
    ],
    testCases: [
      { input: "[3,1,4,null,2], 1", output: "1" }
    ],
    leetcode: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    gfg: "https://www.geeksforgeeks.org/find-k-th-smallest-element-in-bst-order-statistics-in-bst/"
  },


  {
    slug: "course-schedule-ii",
    title: "Course Schedule II",
    category: "Graphs",
    difficulty: "Medium",
    shortDescription: "Return valid course completion order.",
    description: "Return the ordering of courses you should take to finish all courses given prerequisites. If impossible, return an empty array.",
    tags: ["DFS", "BFS", "Graph", "Topological Sort"],
    intuition: "Perform a topological sort using Kahn's algorithm (BFS with indegree).",
    example: {
      input: "numCourses=2, prerequisites=[[1,0]]",
      output: "[0,1]",
      explanation: "Must take course 0 before course 1."
    },
    hints: [
      "If the result array length < total courses, there was a cycle",
      "Add nodes with 0 indegree to the queue first"
    ],
    testCases: [
      { input: "2, [[1,0]]", output: "[0,1]" }
    ],
    leetcode: "https://leetcode.com/problems/course-schedule-ii/",
    gfg: "https://www.geeksforgeeks.org/topological-sorting/"
  },

  {
    slug: "reorder-list",
    title: "Reorder List",
    category: "Linked List",
    difficulty: "Medium",
    shortDescription: "Reorder L0→Ln→L1→Ln-1.",
    description: "Reorder a linked list so it becomes L0 → Ln → L1 → Ln-1 → L2 → Ln-2...",
    tags: ["Linked List", "Two Pointers", "Stack"],
    intuition: "Split the list in half, reverse the second half, and merge the two halves alternately.",
    example: {
      input: "1->2->3->4",
      output: "1->4->2->3",
      explanation: "Tail moves after head, then next node."
    },
    hints: [
      "Use slow/fast pointers to find the middle",
      "Reverse the second half in-place"
    ],
    testCases: [
      { input: "1->2->3->4", output: "1->4->2->3" }
    ],
    leetcode: "https://leetcode.com/problems/reorder-list/",
    gfg: "https://www.geeksforgeeks.org/reorder-a-linked-list-in-place/"
  },

  {
    slug: "validate-ip-address",
    title: "Validate IP Address",
    category: "Strings",
    difficulty: "Medium",
    shortDescription: "Check if string is IPv4 or IPv6.",
    description: "Given a string queryIP, return 'IPv4' if it is valid, 'IPv6' if valid, or 'Neither'.",
    tags: ["String"],
    intuition: "Use string splitting and check specific constraints (numerical range for IPv4, hex characters for IPv6).",
    example: {
      input: "\"172.16.254.1\"",
      output: "\"IPv4\"",
      explanation: "Valid four decimal parts."
    },
    hints: [
      "IPv4: no leading zeros in parts, 0-255 range",
      "IPv6: parts up to 4 hex chars, case-insensitive"
    ],
    testCases: [
      { input: "\"172.16.254.1\"", output: "\"IPv4\"" },
      { input: "\"2001:0db8:85a3:0:0:8A2E:0370:7334\"", output: "\"IPv6\"" }
    ],
    leetcode: "https://leetcode.com/problems/validate-ip-address/",
    gfg: "https://www.geeksforgeeks.org/program-to-validate-an-ip-address/"
  },
  {
    slug: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    category: "Search",
    difficulty: "Hard",
    shortDescription: "Find median of two sorted arrays in O(log(m+n)).",
    description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays in logarithmic runtime.",
    tags: ["Array", "Binary Search", "Divide and Conquer"],
    intuition: "Partition both arrays such that the left half elements are always smaller than or equal to the right half elements, then run a binary search on the partition split.",
    example: {
      input: "nums1 = [1,3], nums2 = [2]",
      output: "2.00000",
      explanation: "Merged array is [1,2,3] and median is 2."
    },
    hints: [
      "Binary search on the smaller array to optimize runtime constraints",
      "Ensure the max elements of the left partitions are smaller than the min elements of the right partitions"
    ],
    testCases: [
      { input: "[1,3], [2]", output: "2.0" },
      { input: "[1,2], [3,4]", output: "2.5" }
    ],
    leetcode: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    gfg: "https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/"
  },

  {
    slug: "trapping-rain-water",
    title: "Trapping Rain Water",
    category: "Two Pointers",
    difficulty: "Hard",
    shortDescription: "Compute trapped water after a rainfall.",
    description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    tags: ["Array", "Two Pointers", "Dynamic Programming", "Stack", "Monotonic Stack"],
    intuition: "The water trapped above any bar is limited by the maximum heights to its left and right. Use two pointers starting from both ends to systematically process boundaries.",
    example: {
      input: "[0,1,0,2,1,0,1,3,2,1,2,1]",
      output: "6",
      explanation: "6 units of rain water are trapped within the valleys."
    },
    hints: [
      "Maintain left_max and right_max variables as you advance your pointers",
      "Move the pointer pointing to the smaller maximum height boundary inward"
    ],
    testCases: [
      { input: "[0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" },
      { input: "[4,2,0,3,2,5]", output: "9" }
    ],
    leetcode: "https://leetcode.com/problems/trapping-rain-water/",
    gfg: "https://www.geeksforgeeks.org/trapping-rain-water/"
  },

  {
    slug: "regular-expression-matching",
    title: "Regular Expression Matching",
    category: "Dynamic Programming",
    difficulty: "Hard",
    shortDescription: "Implement regex matching with '.' and '*'.",
    description: "Given an input string s and a pattern p, implement regular expression matching with support for '.' (matches single char) and '*' (matches zero or more of preceding char).",
    tags: ["String", "Dynamic Programming", "Recursion"],
    intuition: "Use dynamic programming where dp[i][j] signifies if the prefix of string s matches the prefix of pattern p. Evaluate wildcards dynamically.",
    example: {
      input: "s = \"aa\", p = \"a*\"",
      output: "true",
      explanation: "'*' means zero or more of the preceding element 'a'."
    },
    hints: [
      "When encountering '*', check two paths: matching 0 occurrences of the character, or matching 1 or more",
      "Store results in a 2D matrix to prevent exponential time complexity via backtracking"
    ],
    testCases: [
      { input: "\"aa\", \"a*\"", output: "true" },
      { input: "\"ab\", \".*\"", output: "true" }
    ],
    leetcode: "https://leetcode.com/problems/regular-expression-matching/",
    gfg: "https://www.geeksforgeeks.org/regular-expression-matching/"
  },

  {
    slug: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    category: "Linked List",
    difficulty: "Hard",
    shortDescription: "Merge k sorted linked lists efficiently.",
    description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list.",
    tags: ["Linked List", "Divide and Conquer", "Heap", "Merge Sort"],
    intuition: "Use a Min-Heap/Priority Queue to continuously pull the smallest head node across all k lists, appending it to the result list.",
    example: {
      input: "[[1,4,5],[1,3,4],[2,6]]",
      output: "1->1->2->3->4->4->5->6",
      explanation: "All sub-lists are combined into a single sorted output list."
    },
    hints: [
      "Insert the head of each list into a priority queue",
      "When a node is popped, add its structural successor back into the queue"
    ],
    testCases: [
      { input: "[[1,4,5],[1,3,4],[2,6]]", output: "1->1->2->3->4->4->5->6" }
    ],
    leetcode: "https://leetcode.com/problems/merge-k-sorted-lists/",
    gfg: "https://www.geeksforgeeks.org/merge-k-sorted-linked-lists/"
  },

  {
    slug: "sliding-window-maximum",
    title: "Sliding Window Maximum",
    category: "Arrays",
    difficulty: "Hard",
    shortDescription: "Find maximum in all sliding window frames.",
    description: "Given an array nums and a window size k, return the maximum element in each sliding window frame as it shifts from left to right.",
    tags: ["Array", "Queue", "Sliding Window", "Monotonic Queue", "Heap"],
    intuition: "Maintain a monotonic decreasing deque storing array indices. The front element of the deque will always point to the maximum element of the active window frame.",
    example: {
      input: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
      output: "[3,3,5,5,6,7]",
      explanation: "Window paths track local maxima iteratively."
    },
    hints: [
      "Remove indices from the back of the deque if their corresponding values are smaller than the current element",
      "Evict the front index from the deque if it falls completely outside the sliding window boundaries"
    ],
    testCases: [
      { input: "[1,3,-1,-3,5,3,6,7], 3", output: "[3,3,5,5,6,7]" }
    ],
    leetcode: "https://leetcode.com/problems/sliding-window-maximum/",
    gfg: "https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/"
  },

  {
    slug: "edit-distance",
    title: "Edit Distance",
    category: "Dynamic Programming",
    difficulty: "Hard",
    shortDescription: "Min operations to convert word1 to word2.",
    description: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2 using insert, delete, or replace operations.",
    tags: ["String", "Dynamic Programming"],
    intuition: "Define a 2D grid state where dp[i][j] represents the operation cost between prefixes of lengths i and j. If characters mismatch, consider the minimum of insertion, deletion, and replacement paths.",
    example: {
      input: "word1 = \"horse\", word2 = \"ros\"",
      output: "3",
      explanation: "horse -> rorse (replace 'h' with 'r') -> rose (remove 'r') -> ros (remove 'e')"
    },
    hints: [
      "If characters match, drop down to diagonal cost `dp[i-1][j-1]` without any additional cost",
      "If they mismatch, evaluate `1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])`"
    ],
    testCases: [
      { input: "\"horse\", \"ros\"", output: "3" },
      { input: "\"intention\", \"execution\"", output: "5" }
    ],
    leetcode: "https://leetcode.com/problems/edit-distance/",
    gfg: "https://www.geeksforgeeks.org/edit-distance-dp-5/"
  },

 

  {
    slug: "serialize-and-deserialize-binary-tree",
    title: "Serialize and Deserialize Binary Tree",
    category: "Design",
    difficulty: "Hard",
    shortDescription: "Design string serialization system for a tree.",
    description: "Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work.",
    tags: ["String", "Tree", "Depth-First Search", "Breadth-First Search", "Design", "Binary Tree"],
    intuition: "Flatten the tree into a comma-delimited string layout using preorder traversal, writing special symbols like 'X' to explicitly mark null branches.",
    example: {
      input: "[1,2,3,null,null,4,5]",
      output: "[1,2,3,null,null,4,5]",
      explanation: "The tree is safely stringified and reconstructed back to its exact reference structure."
    },
    hints: [
      "Use a queue structure to sequentialize nodes during reconstruction processing loops",
      "Process the tokens recursively via DFS to re-link left and right children effortlessly"
    ],
    testCases: [
      { input: "[1,2,3,null,null,4,5]", output: "[1,2,3,null,null,4,5]" }
    ],
    leetcode: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    gfg: "https://www.geeksforgeeks.org/serialize-and-deserialize-a-binary-tree/"
  },

  {
    slug: "longest-valid-parentheses",
    title: "Longest Valid Parentheses",
    category: "Stack",
    difficulty: "Hard",
    shortDescription: "Find length of longest matching bracket substring.",
    description: "Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.",
    tags: ["String", "Dynamic Programming", "Stack"],
    intuition: "Push character indices onto a stack. Initialize the stack with -1 as a base boundary tracker to compute substring gaps cleanly during pop updates.",
    example: {
      input: "\")()())\"",
      output: "4",
      explanation: "The longest valid parentheses substring is \"()()\"."
    },
    hints: [
      "When popping an open bracket, subtract the top index of the stack from the current index to calculate valid block distance",
      "If the stack becomes empty after popping, push the current index as a new base anchor tracking boundary"
    ],
    testCases: [
      { input: "\"(()\"", output: "2" },
      { input: "\")()())\"", output: "4" }
    ],
    leetcode: "https://leetcode.com/problems/longest-valid-parentheses/",
    gfg: "https://www.geeksforgeeks.org/length-of-the-longest-valid-substring/"
  },

  {
    slug: "n-queens",
    title: "N-Queens",
    category: "Backtracking",
    difficulty: "Hard",
    shortDescription: "Place n queens on board safely.",
    description: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Return all distinct configurations.",
    tags: ["Array", "Backtracking"],
    intuition: "Place queens row-by-row. Maintain row, column, and diagonal bitsets or sets to evaluate safe placement coordinates in O(1) time.",
    example: {
      input: "4",
      output: "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]",
      explanation: "Two unique configurations exist for a 4x4 matrix layout."
    },
    hints: [
      "For any cell (r, c), the positive diagonal index is r + c and negative diagonal index is r - c",
      "Backtrack by clearing tracking flags when returning up the recursion stack"
    ],
    testCases: [
      { input: "4", output: "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]" }
    ],
    leetcode: "https://leetcode.com/problems/n-queens/",
    gfg: "https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/"
  },

  {
    slug: "binary-tree-maximum-path-sum",
    title: "Binary Tree Maximum Path Sum",
    category: "Trees",
    difficulty: "Hard",
    shortDescription: "Find highest path sum across nodes.",
    description: "Given the root of a binary tree, return the maximum path sum of any non-empty path. The path may start and end at any node.",
    tags: ["Tree", "Dynamic Programming", "Depth-First Search", "Binary Tree"],
    intuition: "For each node, compute the max single-arm path extension sum recursively. At each step, evaluate if bridging through the current node yields a global maximum sum.",
    example: {
      input: "[-10,9,20,null,null,15,7]",
      output: "42",
      explanation: "The max path is 15 -> 20 -> 7 which yields a total sum of 42."
    },
    hints: [
      "Ignore child paths that yield negative recursive sums by capping values with `Math.max(0, path_sum)`",
      "Update a global maximum tracker tracking left_arm + right_arm + node.val at every recursive frame"
    ],
    testCases: [
      { input: "[-10,9,20,null,null,15,7]", output: "42" }
    ],
    leetcode: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    gfg: "https://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/"
  },

  {
    slug: "word-ladder",
    title: "Word Ladder",
    category: "Graphs",
    difficulty: "Hard",
    shortDescription: "Shortest transformation sequence between words.",
    description: "Given a beginWord, an endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord.",
    tags: ["Hash Table", "String", "Breadth-First Search", "Graph"],
    intuition: "Treat words as graph vertices connected by edges if they differ by exactly 1 character. Execute a level-order BFS to compute the shortest unweighted distance path.",
    example: {
      input: "begin = \"hit\", end = \"cog\", list = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
      output: "5",
      explanation: "\"hit\" -> \"hot\" -> \"dot\" -> \"dog\" -> \"cog\" takes 5 steps."
    },
    hints: [
      "Mutate each character position of the word from 'a' to 'z' to discover matching intermediate transformations",
      "Use a Set for wordList for O(1) lookup speeds, deleting words upon discovery to prevent redundant cycle re-traversals"
    ],
    testCases: [
      { input: "\"hit\", \"cog\", [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]", output: "5" }
    ],
    leetcode: "https://leetcode.com/problems/word-ladder/",
    gfg: "https://www.geeksforgeeks.org/word-ladder-length-of-shortest-chain-to-reach-a-target-word/"
  },
  {
    "slug": "valid-palindrome-ii",
    "title": "Valid Palindrome II",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "shortDescription": "Check if a string can be a palindrome after deleting at most one character.",
    "description": "Given a string s, return true if the s can be palindrome after deleting at most one character from it.",
    "tags": ["Two Pointers", "String", "Greedy"],
    "intuition": "Use two pointers from both ends. When a mismatch occurs, check if deleting either the left or right character creates a valid palindrome.",
    "example": {
      "input": "s = \"abca\"",
      "output": "true",
      "explanation": "You could delete the character 'c' to get 'aba', which is a palindrome."
    },
    "hints": [
      "Use standard two-pointer palindrome check moving inward.",
      "On the first mismatch, test both remaining substrings: one omitting the left index, one omitting the right index."
    ],
    "testCases": [
      { "input": "s = \"aba\"", "output": "true" },
      { "input": "s = \"abca\"", "output": "true" },
      { "input": "s = \"abc\"", "output": "false" }
    ],
    "leetcode": "https://leetcode.com/problems/valid-palindrome-ii/",
    "gfg": "https://www.geeksforgeeks.org/check-given-string-can-made-palindrome-by-removing-one-character/"
  },
  {
    "slug": "final-value-of-variable-after-performing-operations",
    "title": "Final Value of Variable After Performing Operations",
    "category": "Arrays & Strings",
    "difficulty": "Easy",
    "shortDescription": "Calculate the final value of X after evaluating operation strings.",
    "description": "There is a programming language with only four operations and one variable X. ++X and X++ increments the value of the variable X by 1. --X and X-- decrements the value of the variable X by 1. Initially, the value of X is 0. Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.",
    "tags": ["Array", "String", "Simulation"],
    "intuition": "Look at the middle character of each operation string. If it is '+', increment X; otherwise, decrement X.",
    "example": {
      "input": "operations = [\"--X\",\"X++\",\"X++\"]",
      "output": "1",
      "explanation": "X starts at 0. --X makes X = -1. X++ makes X = 0. X++ makes X = 1."
    },
    "hints": [
      "You don't need to check all 3 characters; checking operations[i][1] is sufficient.",
      "Initialize a counter at 0 and iterate through the list."
    ],
    "testCases": [
      { "input": "operations = [\"--X\",\"X++\",\"X++\"]", "output": "1" },
      { "input": "operations = [\"++X\",\"++X\",\"X++\"]", "output": "3" }
    ],
    "leetcode": "https://leetcode.com/problems/final-value-of-variable-after-performing-operations/",
    "gfg": "https://www.geeksforgeeks.org/final-value-of-variable-after-performing-operations/"
  },
  {
    "slug": "concatenation-of-array",
    "title": "Concatenation of Array",
    "category": "Arrays & Strings",
    "difficulty": "Easy",
    "shortDescription": "Create an array of length 2n where the elements are duplicated.",
    "description": "Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed). Specifically, ans is the concatenation of two nums arrays.",
    "tags": ["Array", "Simulation"],
    "intuition": "Allocate a new array of double the size of the original array and copy the elements into it twice sequentially.",
    "example": {
      "input": "nums = [1,2,1]",
      "output": "[1,2,1,1,2,1]",
      "explanation": "The array is duplicated and joined back-to-back."
    },
    "hints": [
      "Use modulo operations or a nested loop structure to fill up the array.",
      "Many modern languages support simple array duplication operators like `nums + nums`."
    ],
    "testCases": [
      { "input": "nums = [1,2,1]", "output": "[1,2,1,1,2,1]" },
      { "input": "nums = [1,3,2,1]", "output": "[1,3,2,1,1,3,2,1]" }
    ],
    "leetcode": "https://leetcode.com/problems/concatenation-of-array/",
    "gfg": "https://www.geeksforgeeks.org/concatenation-of-array/"
  },
  {
    "slug": "number-of-good-pairs",
    "title": "Number of Good Pairs",
    "category": "Arrays & Strings",
    "difficulty": "Easy",
    "shortDescription": "Find the number of pairs (i, j) where nums[i] == nums[j] and i < j.",
    "description": "Given an array of integers nums, return the number of good pairs. A pair (i, j) is called good if nums[i] == nums[j] and i < j.",
    "tags": ["Array", "Hash Table", "Math", "Counting"],
    "intuition": "If a number has been seen $c$ times before, encountering it again means it can form $c$ new good pairs with the previous occurrences.",
    "example": {
      "input": "nums = [1,2,3,1,1,3]",
      "output": "4",
      "explanation": "There are four good pairs: (0,3), (0,4), (3,4), and (2,5)."
    },
    "hints": [
      "Use a hash map or frequency array to count occurrences as you iterate.",
      "Alternatively, for each frequency $f$, the number of pairs it contributes is given by $\\frac{f \\times (f - 1)}{2}$."
    ],
    "testCases": [
      { "input": "nums = [1,2,3,1,1,3]", "output": "4" },
      { "input": "nums = [1,1,1,1]", "output": "6" }
    ],
    "leetcode": "https://leetcode.com/problems/number-of-good-pairs/",
    "gfg": "https://www.geeksforgeeks.org/count-of-good-pairs-in-an-array/"
  },
  {
    "slug": "how-many-numbers-are-smaller-than-the-current-number",
    "title": "How Many Numbers Are Smaller Than the Current Number",
    "category": "Arrays & Strings",
    "difficulty": "Easy",
    "shortDescription": "For each element, count how many numbers in the array are smaller than it.",
    "description": "Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i]. Return the answer in an array.",
    "tags": ["Array", "Hash Table", "Sorting", "Counting"],
    "intuition": "If the array is sorted, the index of the first occurrence of any element is exactly equal to the count of numbers smaller than it.",
    "example": {
      "input": "nums = [8,1,2,2,3]",
      "output": "[4,0,1,1,3]",
      "explanation": "For 8 there are four smaller numbers (1, 2, 2, 3); for 1 there are none; for 2 there is one (1), etc."
    },
    "hints": [
      "Create a copy of the array and sort it.",
      "Map each number to its first seen index in the sorted array, then build the final result."
    ],
    "testCases": [
      { "input": "nums = [8,1,2,2,3]", "output": "[4,0,1,1,3]" },
      { "input": "nums = [6,5,4,8]", "output": "[2,1,0,3]" }
    ],
    "leetcode": "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/",
    "gfg": "https://www.geeksforgeeks.org/count-of-smaller-elements-in-an-array-for-each-element/"
  },
  {
    "slug": "unique-number-of-occurrences",
    "title": "Unique Number of Occurrences",
    "category": "Arrays & Strings",
    "difficulty": "Easy",
    "shortDescription": "Check if all frequencies of elements in the array are unique.",
    "description": "Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.",
    "tags": ["Array", "Hash Table"],
    "intuition": "Count the frequencies of each element, then check if the number of unique frequencies matches the total number of unique elements.",
    "example": {
      "input": "arr = [1,2,2,1,1,3]",
      "output": "true",
      "explanation": "The value 1 has 3 occurrences, 2 has 2, and 3 has 1. All frequencies are unique."
    },
    "hints": [
      "Use a hash map to map elements to their frequencies.",
      "Insert all frequencies into a hash set and check if the set size matches the map size."
    ],
    "testCases": [
      { "input": "arr = [1,2,2,1,1,3]", "output": "true" },
      { "input": "arr = [1,2]", "output": "false" }
    ],
    "leetcode": "https://leetcode.com/problems/unique-number-of-occurrences/",
    "gfg": "https://www.geeksforgeeks.org/check-if-frequency-of-each-element-in-the-array-is-unique/"
  },
  {
    "slug": "find-common-characters",
    "title": "Find Common Characters",
    "category": "Arrays & Strings",
    "difficulty": "Easy",
    "shortDescription": "Find all characters that appear in every string of the given array.",
    "description": "Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.",
    "tags": ["Array", "Hash Table", "String"],
    "intuition": "Track the minimum frequency of each character across all words. Initialize with frequencies from the first word, then reduce based on subsequent words.",
    "example": {
      "input": "words = [\"bella\",\"label\",\"roller\"]",
      "output": "[\"e\",\"l\",\"l\"]",
      "explanation": "The characters 'e', 'l', and 'l' appear in all three words."
    },
    "hints": [
      "Maintain a global frequency array of size 26 initialized with infinity or the first word's counts.",
      "For each word, compute its character counts and update the global array using `min(global[c], current[c])`."
    ],
    "testCases": [
      { "input": "words = [\"bella\",\"label\",\"roller\"]", "output": "[\"e\",\"l\",\"l\"]" },
      { "input": "words = [\"cool\",\"lock\",\"cook\"]", "output": "[\"c\",\"o\"]" }
    ],
    "leetcode": "https://leetcode.com/problems/find-common-characters/",
    "gfg": "https://www.geeksforgeeks.org/common-characters-in-n-strings/"
  },
  {
    "slug": "rank-transform-of-an-array",
    "title": "Rank Transform of an Array",
    "category": "Arrays & Strings",
    "difficulty": "Easy",
    "shortDescription": "Replace each element in an array with its corresponding rank.",
    "description": "Given an array of integers arr, replace each element with its rank. The rank represents how large the element is. Ranks start from 1, equal elements share the same rank, and ranks should be as small as possible.",
    "tags": ["Array", "Hash Table", "Sorting"],
    "intuition": "Find the sorted unique elements of the array. The rank of each element corresponds directly to its 1-based index position within that unique sorted sequence.",
    "example": {
      "input": "arr = [40,10,20,30]",
      "output": "[4,1,2,3]",
      "explanation": "40 is the largest (rank 4), 10 is the smallest (rank 1), 20 is rank 2, and 30 is rank 3."
    },
    "hints": [
      "Use a set to extract unique elements, then sort them.",
      "Store element-to-rank assignments in a hash map for $O(1)$ lookups during reconstruction."
    ],
    "testCases": [
      { "input": "arr = [40,10,20,30]", "output": "[4,1,2,3]" },
      { "input": "arr = [100,100,100]", "output": "[1,1,1]" }
    ],
    "leetcode": "https://leetcode.com/problems/rank-transform-of-an-array/",
    "gfg": "https://www.geeksforgeeks.org/rank-transform-of-an-array/"
  },
  {
    "slug": "destination-city",
    "title": "Destination City",
    "category": "Arrays & Strings",
    "difficulty": "Easy",
    "shortDescription": "Find the final destination city with no outgoing paths.",
    "description": "You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.",
    "tags": ["Hash Table", "String"],
    "intuition": "The destination city will appear as a destination (right side of the pair) but will never appear as a starting point (left side of the pair).",
    "example": {
      "input": "paths = [[\"London\",\"New York\"],[\"New York\",\"Lima\"],[\"Lima\",\"Sao Paulo\"]]",
      "output": "\"Sao Paulo\"",
      "explanation": "Sao Paulo has no outgoing paths to any other city."
    },
    "hints": [
      "Collect all starting cities into a hash set.",
      "Iterate through the destination cities and return the one missing from your starting cities set."
    ],
    "testCases": [
      { "input": "paths = [[\"London\",\"New York\"],[\"New York\",\"Lima\"],[\"Lima\",\"Sao Paulo\"]]", "output": "\"Sao Paulo\"" },
      { "input": "paths = [[\"B\",\"C\"],[\"D\",\"B\"],[\"C\",\"A\"]]", "output": "\"A\"" }
    ],
    "leetcode": "https://leetcode.com/problems/destination-city/",
    "gfg": "https://www.geeksforgeeks.org/destination-city-without-any-outgoing-path/"
  },
  {
    "slug": "check-if-all-characters-have-equal-number-of-occurrences",
    "title": "Check if All Characters Have Equal Number of Occurrences",
    "category": "Arrays & Strings",
    "difficulty": "Easy",
    "shortDescription": "Determine if all characters in a string appear the exact same number of times.",
    "description": "Given a string s, return true if s is a good string, or false otherwise. A string s is good if all the characters that appear in s have the same number of occurrences.",
    "tags": ["Hash Table", "String", "Counting"],
    "intuition": "Count frequencies of all unique characters and verify that every tracked frequency value is identical.",
    "example": {
      "input": "s = \"abacbc\"",
      "output": "true",
      "explanation": "All characters ('a', 'b', 'c') appear exactly 2 times."
    },
    "hints": [
      "Store frequencies in a hash map or a frequency array of size 26.",
      "Check if the set of frequency values contains exactly one distinct element."
    ],
    "testCases": [
      { "input": "s = \"abacbc\"", "output": "true" },
      { "input": "s = \"aaabb\"", "output": "false" }
    ],
    "leetcode": "https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/",
    "gfg": "https://www.geeksforgeeks.org/check-if-all-characters-have-equal-number-of-occurrences/"
  },
  {
    "slug": "find-words-that-can-be-formed-by-characters",
    "title": "Find Words That Can Be Formed by Characters",
    "category": "Arrays & Strings",
    "difficulty": "Easy",
    "shortDescription": "Sum lengths of words that can be formed using a given set of characters.",
    "description": "You are given an array of strings words and a string chars. A string is good if it can be formed by characters from chars (each character can only be used once). Return the sum of lengths of all good words in words.",
    "tags": ["Array", "Hash Table", "String", "Counting"],
    "intuition": "Count the available characters in `chars`. A word can be formed if and only if the frequency of each character in the word does not exceed its frequency in `chars`.",
    "example": {
      "input": "words = [\"cat\",\"bt\",\"hat\",\"tree\"], chars = \"atach\"",
      "output": "6",
      "explanation": "The words that can be formed are \"cat\" and \"hat\" (3 + 3 = 6)."
    },
    "hints": [
      "Generate a baseline frequency map of `chars`.",
      "For each word, count its letters and compare with the baseline. If valid, add the word's length to your tally."
    ],
    "testCases": [
      { "input": "words = [\"cat\",\"bt\",\"hat\",\"tree\"], chars = \"atach\"", "output": "6" },
      { "input": "words = [\"hello\",\"world\",\"leetcode\"], chars = \"welldonehoneyr\"", "output": "10" }
    ],
    "leetcode": "https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/",
    "gfg": "https://www.geeksforgeeks.org/find-words-that-can-be-formed-by-characters/"
  },
  {
    "slug": "largest-substring-between-two-equal-characters",
    "title": "Largest Substring Between Two Equal Characters",
    "category": "Arrays & Strings",
    "difficulty": "Easy",
    "shortDescription": "Find the maximum length of a substring bounded by two equal characters.",
    "description": "Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring, return -1.",
    "tags": ["Hash Table", "String"],
    "intuition": "Track the first occurrence index of every character. For subsequent occurrences of the same character, compute the distance from its first occurrence.",
    "example": {
      "input": "s = \"abca\"",
      "output": "2",
      "explanation": "The optimal substring is \"bc\" between the two 'a's."
    },
    "hints": [
      "Use a hash map or array of size 26 to store the first index where each letter appears.",
      "The formula for inner length is $\\text{current\\_index} - \\text{first\\_index} - 1$."
    ],
    "testCases": [
      { "input": "s = \"abca\"", "output": "2" },
      { "input": "s = \"cbzxy\"", "output": "-1" }
    ],
    "leetcode": "https://leetcode.com/problems/largest-substring-between-two-equal-characters/",
    "gfg": "https://www.geeksforgeeks.org/length-of-the-longest-substring-between-two-equal-characters/"
  },
  {
    "slug": "make-two-arrays-equal-by-reversing-subarrays",
    "title": "Make Two Arrays Equal by Reversing Subarrays",
    "category": "Arrays & Strings",
    "difficulty": "Easy",
    "shortDescription": "Check if target can be made equal to arr by reversing subarrays.",
    "description": "You are given two integer arrays of equal length target and arr. In one step, you can select any non-empty subarray of arr and reverse it. Return true if you can make arr equal to target or false otherwise.",
    "tags": ["Array", "Hash Table", "Sorting"],
    "intuition": "Reversing subarrays arbitrarily allows any permutation of elements. Therefore, the transformation is possible if and only if both arrays have the exact same elements with the same frequencies.",
    "example": {
      "input": "target = [1,2,3,4], arr = [2,4,1,3]",
      "output": "true",
      "explanation": "You can follow step-by-step reversals to match target, since frequencies are identical."
    },
    "hints": [
      "The problem reduces to determining if `arr` is an anagram/permutation of `target`.",
      "Sort both arrays and check if they match, or compare counts via a hash map."
    ],
    "testCases": [
      { "input": "target = [1,2,3,4], arr = [2,4,1,3]", "output": "true" },
      { "input": "target = [3,7,9], arr = [3,7,11]", "output": "false" }
    ],
    "leetcode": "https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/",
    "gfg": "https://www.geeksforgeeks.org/check-if-two-arrays-are-equal-or-not/"
  },
  {
    "slug": "divide-array-into-arrays-with-max-difference",
    "title": "Divide Array Into Arrays With Max Difference",
    "category": "Arrays & Strings",
    "difficulty": "Medium",
    "shortDescription": "Divide array into triplets where max - min difference <= k.",
    "description": "You are given an integer array nums of size n and a positive integer k. Divide the array into one or more arrays of size 3 satisfying the following conditions: Each element of nums must be in exactly one array, and the difference between any two elements in one array must be less than or equal to k. Return the arrays, or an empty array if impossible.",
    "tags": ["Array", "Sorting", "Greedy"],
    "intuition": "Sort the array first. Sorting places close values adjacent to each other, making chunks of 3 the ideal candidates. Then check if the difference between the third and first element of each chunk is $\\le k$.",
    "example": {
      "input": "nums = [1,3,4,8,7,9,3,5,1], k = 2",
      "output": "[[1,1,3],[3,4,5],[7,8,9]]",
      "explanation": "Sorted array: [1,1,3,3,4,5,7,8,9]. Grouping into blocks of 3 satisfies the difference rule."
    },
    "hints": [
      "Sort the array. Look at triplets sequentially: `nums[i]`, `nums[i+1]`, `nums[i+2]`.",
      "If `nums[i+2] - nums[i] > k`, it is impossible to satisfy the constraints, so return an empty array."
    ],
    "testCases": [
      { "input": "nums = [1,3,4,8,7,9,3,5,1], k = 2", "output": "[[1,1,3],[3,4,5],[7,8,9]]" },
      { "input": "nums = [2,4,2,7], k = 1", "output": "[]" }
    ],
    "leetcode": "https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/",
    "gfg": "https://www.geeksforgeeks.org/divide-array-into-arrays-with-max-difference/"
  },
  {
    "slug": "find-players-with-zero-or-one-losses",
    "title": "Find Players With Zero or One Losses",
    "category": "Arrays & Strings",
    "difficulty": "Medium",
    "shortDescription": "Find players who haven't lost any matches or have lost exactly one.",
    "description": "You are given an integer array matches where matches[i] = [winner, loser] indicates that the player winner defeated player loser in a match. Return a list answer of size 2 where answer[0] is a list of all players that have not lost any matches, and answer[1] is a list of all players that have lost exactly one match. Return sorted lists.",
    "tags": ["Array", "Hash Table", "Sorting", "Counting"],
    "intuition": "Use maps to register all unique players and track the loss counts for each loser explicitly.",
    "example": {
      "input": "matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4]]",
      "output": "[[1,2,10],[4,5,7,8,9]]",
      "explanation": "Players 1, 2, and 10 have no losses. Players 4, 5, 7, 8, and 9 have exactly one loss."
    },
    "hints": [
      "Track loss counts in a hash map or structured frequency tracker.",
      "A player with zero losses appears in the winner slots but has 0 entries in the loser map trackers."
    ],
    "testCases": [
      { "input": "matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4]]", "output": "[[1,2,10],[4,5,7,8,9]]" }
    ],
    "leetcode": "https://leetcode.com/problems/find-players-with-zero-or-one-losses/",
    "gfg": "https://www.geeksforgeeks.org/find-players-with-zero-or-one-losses/"
  },
  {
    "slug": "custom-sort-string",
    "title": "Custom Sort String",
    "category": "Arrays & Strings",
    "difficulty": "Medium",
    "shortDescription": "Sort characters of a string based on a custom order string.",
    "description": "You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously. Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.",
    "tags": ["Hash Table", "String", "Sorting"],
    "intuition": "Count occurrences of characters in `s`. Iterate through `order` and append matching characters according to their frequency. Finally, append any remaining characters from `s` that were not in `order`.",
    "example": {
      "input": "order = \"cba\", s = \"abcd\"",
      "output": "\"cbad\"",
      "explanation": "'c', 'b', and 'a' are ordered matching the priority layout, while 'd' drops onto the end."
    },
    "hints": [
      "Use a frequency array or hash map to count the character occurrences of `s`.",
      "Characters in `s` that do not appear in `order` can be placed anywhere at the end of the output string."
    ],
    "testCases": [
      { "input": "order = \"cba\", s = \"abcd\"", "output": "\"cbad\"" },
      { "input": "order = \"bcafg\", s = \"abcd\"", "output": "\"bcad\"" }
    ],
    "leetcode": "https://leetcode.com/problems/custom-sort-string/",
    "gfg": "https://www.geeksforgeeks.org/custom-sort-string/"
  },
  {
    "slug": "optimal-partition-of-string",
    "title": "Optimal Partition of String",
    "category": "Arrays & Strings",
    "difficulty": "Medium",
    "shortDescription": "Partition a string into the minimum number of substrings containing unique characters.",
    "description": "Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once. Return the minimum number of substrings in such a partition.",
    "tags": ["Hash Table", "String", "Greedy", "Bit Manipulation"],
    "intuition": "Traverse the string greedily. Accumulate characters in a set. The moment you see a character that is already in your set, close the current substring, start a new one, and reset the tracking set.",
    "example": {
      "input": "s = \"abacaba\"",
      "output": "4",
      "explanation": "An optimal partition is (\"ab\", \"ac\", \"ab\", \"a\")."
    },
    "hints": [
      "Use a hash set or a bitmask integer to track visited characters for the current segment.",
      "Don't forget to count the last active segment after finishing the loop."
    ],
    "testCases": [
      { "input": "s = \"abacaba\"", "output": "4" },
      { "input": "s = \"ssssss\"", "output": "6" }
    ],
    "leetcode": "https://leetcode.com/problems/optimal-partition-of-string/",
    "gfg": "https://www.geeksforgeeks.org/minimum-number-of-substrings-with-unique-characters/"
  },
  {
    "slug": "minimum-penalty-for-a-shop",
    "title": "Minimum Penalty for a Shop",
    "category": "Arrays & Strings",
    "difficulty": "Medium",
    "shortDescription": "Find the earliest closing hour that minimizes the shop's total penalty.",
    "description": "You are given the customer visit log of a shop represented by a 0-indexed string customers consisting only of characters 'N' and 'Y'. If the shop closes at hour j, a penalty is incurred based on missed customers and open idle hours. Return the earliest hour at which the shop must be closed to incur a minimum penalty.",
    "tags": ["String", "Prefix Sum"],
    "intuition": "Start by computing the penalty if the shop closes at hour 0 (which equals the total number of 'Y's). As you iterate hour by hour, if the customer at that hour was 'Y', the penalty decreases by 1; if 'N', the penalty increases by 1.",
    "example": {
      "input": "customers = \"YYNY\"",
      "output": "2",
      "explanation": "Closing at hour 2 results in a penalty of 1 (only the 'N' at hour 2 incurs a penalty)."
    },
    "hints": [
      "Instead of calculating the penalty from scratch for each hour, maintain a running score adjustment relative to hour 0.",
      "Track the minimum penalty seen so far and record the corresponding hour index."
    ],
    "testCases": [
      { "input": "customers = \"YYNY\"", "output": "2" },
      { "input": "customers = \"NNNNN\"", "output": "0" }
    ],
    "leetcode": "https://leetcode.com/problems/minimum-penalty-for-a-shop/",
    "gfg": "https://www.geeksforgeeks.org/minimum-penalty-for-a-shop/"
  },
  {
    "slug": "minimum-number-of-steps-to-make-two-strings-anagrams",
    "title": "Minimum Number of Steps to Make Two Strings Anagrams",
    "category": "Arrays & Strings",
    "difficulty": "Medium",
    "shortDescription": "Find the minimum number of character changes to make string t an anagram of s.",
    "description": "You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character. Return the minimum number of steps to make t an anagram of s.",
    "tags": ["Hash Table", "String", "Counting"],
    "intuition": "Count character frequencies for both strings. Sum up the positive differences where the frequency of a character in `s` is greater than its frequency in `t`.",
    "example": {
      "input": "s = \"bab\", t = \"aba\"",
      "output": "1",
      "explanation": "Replace one 'a' in t with 'b' to get \"abb\", which is an anagram of \"bab\"."
    },
    "hints": [
      "An anagram requires exactly matching character counts.",
      "The total number of required replacements is simply $\\sum \\max(0, \\text{count}_s[c] - \\text{count}_t[c])$ across all characters."
    ],
    "testCases": [
      { "input": "s = \"bab\", t = \"aba\"", "output": "1" },
      { "input": "s = \"leetcode\", t = \"practice\"", "output": "5" }
    ],
    "leetcode": "https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagrams/",
    "gfg": "https://www.geeksforgeeks.org/minimum-number-of-steps-to-make-two-strings-anagram/"
  },
  {
    "slug": "find-all-lonely-numbers-in-the-array",
    "title": "Find All Lonely Numbers in the Array",
    "category": "Arrays & Strings",
    "difficulty": "Medium",
    "shortDescription": "Find elements that appear once and have no adjacent numbers in the array.",
    "description": "You are given an integer array nums. A number x is lonely if it appears exactly once in the array, and no adjacent numbers (x + 1 or x - 1) appear in the array. Return all lonely numbers in nums.",
    "tags": ["Array", "Hash Table", "Counting"],
    "intuition": "Use a frequency map to count all numbers. A number $x$ is valid if its frequency is exactly 1 and both $x - 1$ and $x + 1$ have frequencies of 0.",
    "example": {
      "input": "nums = [10,6,5,8]",
      "output": "[10,8]",
      "explanation": "10 is lonely because 9 and 11 do not exist and 10 appears once. 5 and 6 are adjacent, so they are excluded."
    },
    "hints": [
      "Can be solved either by sorting and inspecting adjacent array items or via a single loop over a frequency map.",
      "Ensure your checks look for values, not index positions."
    ],
    "testCases": [
      { "input": "nums = [10,6,5,8]", "output": "[10,8]" },
      { "input": "nums = [1,3,5,3]", "output": "[1,5]" }
    ],
    "leetcode": "https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/",
    "gfg": "https://www.geeksforgeeks.org/find-all-lonely-numbers-in-the-array/"
  },
  {
    "slug": "rearrange-array-elements-by-sign",
    "title": "Rearrange Array Elements by Sign",
    "category": "Arrays & Strings",
    "difficulty": "Medium",
    "shortDescription": "Rearrange elements to alternate positive and negative signs.",
    "description": "You are given a 0-indexed integer array nums of even length containing an equal number of positive and negative integers. Rearrange the elements of nums such that the modified array follows the given conditions: Alternating signs, starting with positive, and preserving relative order.",
    "tags": ["Array", "Two Pointers", "Simulation"],
    "intuition": "Initialize two pointers for the output array: one at index 0 for positive numbers and one at index 1 for negative numbers. Traverse the input array and place elements accordingly.",
    "example": {
      "input": "nums = [3,1,-2,-5,2,-4]",
      "output": "[3,-2,1,-5,2,-4]",
      "explanation": "The positives [3, 1, 2] and negatives [-2, -5, -4] alternate while maintaining their original relative order."
    },
    "hints": [
      "Create a target array of the same size.",
      "Increment your positive pointer by 2 when adding a positive element, and your negative pointer by 2 when adding a negative element."
    ],
    "testCases": [
      { "input": "nums = [3,1,-2,-5,2,-4]", "output": "[3,-2,1,-5,2,-4]" },
      { "input": "nums = [-1,1]", "output": "[1,-1]" }
    ],
    "leetcode": "https://leetcode.com/problems/rearrange-array-elements-by-sign/",
    "gfg": "https://www.geeksforgeeks.org/rearrange-array-elements-by-sign/"
  },
  {
    "slug": "assign-cookies",
    "title": "Assign Cookies",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "shortDescription": "Maximize the number of children content with cookie sizes.",
    "description": "Assume you are a awesome parent and want to give your children some cookies. But, you should give each child at most one cookie. Each child i has a greed factor g[i] and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i. Maximize the number of children content.",
    "tags": ["Array", "Greedy", "Two Pointers", "Sorting"],
    "intuition": "Sort both arrays. Use a greedy approach with two pointers to match the smallest cookie that satisfies the current child's greed factor.",
    "example": {
      "input": "g = [1,2,3], s = [1,1]",
      "output": "1",
      "explanation": "You have 3 children and 2 cookies with sizes 1. You can only make the child with greed factor 1 content."
    },
    "hints": [
      "Sort `g` and `s` in ascending order.",
      "If a cookie can satisfy a child, move both pointers. If not, move only the cookie pointer to find a larger cookie."
    ],
    "testCases": [
      { "input": "g = [1,2,3], s = [1,1]", "output": "1" },
      { "input": "g = [1,2], s = [1,2,3]", "output": "2" }
    ],
    "leetcode": "https://leetcode.com/problems/assign-cookies/",
    "gfg": "https://www.geeksforgeeks.org/assign-cookies-problem/"
  },
  {
    "slug": "merge-strings-alternately",
    "title": "Merge Strings Alternately",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "shortDescription": "Merge two strings by alternating characters.",
    "description": "You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.",
    "tags": ["Two Pointers", "String"],
    "intuition": "Iterate through both strings simultaneously using pointers, appending characters alternatively until you reach the end of one string, then append the remainder.",
    "example": {
      "input": "word1 = \"abc\", word2 = \"pqr\"",
      "output": "\"apbqcr\"",
      "explanation": "Characters are interleaved: a from word1, p from word2, b from word1, q from word2, etc."
    },
    "hints": [
      "Use a single loop bounded by the max length of both strings, checking if pointer indices are within bounds.",
      "Use a string builder or array join to construct the result efficiently."
    ],
    "testCases": [
      { "input": "word1 = \"abc\", word2 = \"pqr\"", "output": "\"apbqcr\"" },
      { "input": "word1 = \"ab\", word2 = \"rsxt\"", "output": "\"arbsxt\"" }
    ],
    "leetcode": "https://leetcode.com/problems/merge-strings-alternately/",
    "gfg": "https://www.geeksforgeeks.org/merge-two-strings-alternately/"
  },
  {
    "slug": "reverse-vowels-of-a-string",
    "title": "Reverse Vowels of a String",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "shortDescription": "Reverse only the vowels within a given string.",
    "description": "Given a string s, reverse only all the vowels in the string and return it. The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases.",
    "tags": ["Two Pointers", "String"],
    "intuition": "Use two pointers starting at opposite ends of the string. Move them inward until both point to vowels, then swap them and repeat.",
    "example": {
      "input": "s = \"hello\"",
      "output": "\"holle\"",
      "explanation": "The vowels 'e' and 'o' are swapped."
    },
    "hints": [
      "Create a helper or set to easily check vowel status, including upper case variants.",
      "Convert the string to a mutable character array before running your pointer loop."
    ],
    "testCases": [
      { "input": "s = \"hello\"", "output": "\"holle\"" },
      { "input": "s = \"leetcode\"", "output": "\"leotcede\"" }
    ],
    "leetcode": "https://leetcode.com/problems/reverse-vowels-of-a-string/",
    "gfg": "https://www.geeksforgeeks.org/reverse-vowels-string/"
  },
  {
    "slug": "minimum-common-value",
    "title": "Minimum Common Value",
    "category": "Two Pointers",
    "difficulty": "Easy",
    "shortDescription": "Find the minimum integer common to two sorted arrays.",
    "description": "Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer, return -1.",
    "tags": ["Array", "Hash Table", "Two Pointers", "Binary Search"],
    "intuition": "Since both arrays are already sorted, use two pointers starting at index 0. Advance the pointer that points to the smaller value until a match is found.",
    "example": {
      "input": "nums1 = [1,2,3], nums2 = [2,4]",
      "output": "2",
      "explanation": "2 is the smallest shared element between both lists."
    },
    "hints": [
      "If `nums1[i] == nums2[j]`, return that value immediately as it's the smallest.",
      "If `nums1[i] < nums2[j]`, increment `i`, else increment `j`."
    ],
    "testCases": [
      { "input": "nums1 = [1,2,3], nums2 = [2,4]", "output": "2" },
      { "input": "nums1 = [1,2,3,6], nums2 = [2,3,4,5]", "output": "2" }
    ],
    "leetcode": "https://leetcode.com/problems/minimum-common-value/",
    "gfg": "https://www.geeksforgeeks.org/minimum-common-value/"
  },
  {
    "slug": "compare-version-numbers",
    "title": "Compare Version Numbers",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "shortDescription": "Compare two version numbers string layout.",
    "description": "Given two version strings, version1 and version2, compare them. A version string contains revisions separated by dots. Compare revisions from left to right. Missing revisions are treated as 0.",
    "tags": ["Two Pointers", "String"],
    "intuition": "Split both strings by '.' and iterate through the revisions up to the maximum number of revisions. Convert each segment to an integer to implicitly ignore leading zeros.",
    "example": {
      "input": "version1 = \"1.01\", version2 = \"1.001\"",
      "output": "0",
      "explanation": "Ignoring leading zeroes, both revisions map to 1 and 1, so they are equal."
    },
    "hints": [
      "Treat out-of-bounds segments as 0 when comparing paths of unequal length.",
      "Return 1 if version1 > version2, -1 if version1 < version2, and 0 if they are equal."
    ],
    "testCases": [
      { "input": "version1 = \"1.01\", version2 = \"1.001\"", "output": "0" },
      { "input": "version1 = \"1.0\", version2 = \"1.0.0.0\"", "output": "0" },
      { "input": "version1 = \"0.1\", version2 = \"1.1\"", "output": "-1" }
    ],
    "leetcode": "https://leetcode.com/problems/compare-version-numbers/",
    "gfg": "https://www.geeksforgeeks.org/compare-two-version-numbers/"
  },
  {
    "slug": "valid-triangle-number",
    "title": "Valid Triangle Number",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "shortDescription": "Count triplets that can form a valid triangle.",
    "description": "Given an integer array nums, return the number of triplets chosen from the array that can make a triangles if we take them as side lengths of a triangle.",
    "tags": ["Array", "Two Pointers", "Binary Search", "Greedy", "Sorting"],
    "intuition": "Sort the array. For a valid triangle, the sum of any two sides must be strictly greater than the third side ($a + b > c$). Fix the longest side $c$, then use a two-pointer approach to find valid pairs for $a$ and $b$.",
    "example": {
      "input": "nums = [2,2,3,4]",
      "output": "3",
      "explanation": "Valid combinations are: [2,3,4] (using first 2), [2,3,4] (using second 2), and [2,2,3]."
    },
    "hints": [
      "Sort the array first to make the inequality check monotonic.",
      "If `nums[left] + nums[right] > nums[i]`, then all pairs from `left` to `right-1` combined with `right` are valid. Add `right - left` to your count and decrement `right`."
    ],
    "testCases": [
      { "input": "nums = [2,2,3,4]", "output": "3" },
      { "input": "nums = [4,2,3,4]", "output": "4" }
    ],
    "leetcode": "https://leetcode.com/problems/valid-triangle-number/",
    "gfg": "https://www.geeksforgeeks.org/find-number-of-triplets-that-can-form-a-triangle/"
  },
  {
    "slug": "interval-list-intersections",
    "title": "Interval List Intersections",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "shortDescription": "Find intersections between two lists of pairwise disjoint closed intervals.",
    "description": "You are given two lists of closed intervals, firstList and secondList, where each list is pairwise disjoint and in sorted order. Return the intersection of these two interval lists.",
    "tags": ["Array", "Two Pointers"],
    "intuition": "Use two pointers to iterate through both interval lists simultaneously. The intersection of two intervals is given by $[\max(\text{start}_1, \text{start}_2), \min(\text{end}_1, \text{end}_2)]$. A valid intersection exists if the start point is $\\le$ the end point.",
    "example": {
      "input": "firstList = [[0,2],[5,10]], secondList = [[1,5],[8,12]]",
      "output": "[[1,2],[5,5],[8,10]]",
      "explanation": "Intersections capture overlapping boundaries perfectly."
    },
    "hints": [
      "Determine overlaps via max of starts and min of ends.",
      "Advance the pointer of the interval that finishes earlier, since it cannot overlap with any subsequent intervals."
    ],
    "testCases": [
      { "input": "firstList = [[0,2],[5,10]], secondList = [[1,5],[8,12]]", "output": "[[1,2],[5,5],[8,10]]" }
    ],
    "leetcode": "https://leetcode.com/problems/interval-list-intersections/",
    "gfg": "https://www.geeksforgeeks.org/find-intersection-of-two-intervals/"
  },
  {
    "slug": "rotate-array",
    "title": "Rotate Array",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "shortDescription": "Rotate an array to the right by k steps in-place.",
    "description": "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative. Try to do it in-place with O(1) extra space.",
    "tags": ["Array", "Two Pointers", "Math"],
    "intuition": "First, normalize $k$ using $k \\pmod n$. Reverse the entire array, then reverse the first $k$ elements, and finally reverse the remaining $n - k$ elements.",
    "example": {
      "input": "nums = [1,2,3,4,5,6,7], k = 3",
      "output": "[5,6,7,1,2,3,4]",
      "explanation": "Rotate 1 step right: [7,1,2,3,4,5,6]. Rotate 2 steps right: [6,7,1,2,3,4,5]. Rotate 3 steps right: [5,6,7,1,2,3,4]."
    },
    "hints": [
      "Reversing a subsegment can be handled via standard two-pointer swaps.",
      "Ensure you handle cases where $k$ is larger than the array length."
    ],
    "testCases": [
      { "input": "nums = [1,2,3,4,5,6,7], k = 3", "output": "[5,6,7,1,2,3,4]" },
      { "input": "nums = [-1,-100,3,99], k = 2", "output": "[3,99,-1,-100]" }
    ],
    "leetcode": "https://leetcode.com/problems/rotate-array/",
    "gfg": "https://www.geeksforgeeks.org/array-rotation/"
  },
  {
    "slug": "minimum-swaps-to-group-all-1s-together-ii",
    "title": "Minimum Swaps to Group All 1's Together II",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "shortDescription": "Find minimum swaps to group all 1s together in a circular array.",
    "description": "A swap is defined as taking two distinct positions in an array and swapping the values in them. Given a binary circular array nums, return the minimum number of swaps required to group all 1's present in the array together at any location.",
    "tags": ["Array", "Sliding Window"],
    "intuition": "Count the total number of 1s in the array, say $C$. The problem transforms into finding a window of size $C$ that contains the maximum number of 1s. The minimum swaps required will be $C$ minus that maximum count. To handle the circular property, look at an array concatenated with itself.",
    "example": {
      "input": "nums = [0,1,0,1,1,0,0]",
      "output": "1",
      "explanation": "There are 3 ones. The window [1,1,0] at the end or inside can be made [1,1,1] with 1 swap."
    },
    "hints": [
      "Fix the sliding window size to equal the total count of 1s in the array.",
      "Use modulo indexing `i % n` to simulate circular iteration without allocating double memory space."
    ],
    "testCases": [
      { "input": "nums = [0,1,0,1,1,0,0]", "output": "1" },
      { "input": "nums = [0,1,1,1,0,0,1,1,0]", "output": "2" }
    ],
    "leetcode": "https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/",
    "gfg": "https://www.geeksforgeeks.org/minimum-swaps-required-group-1s-together/"
  },
  {
    "slug": "number-of-substrings-containing-all-three-characters",
    "title": "Number of Substrings Containing All Three Characters",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "shortDescription": "Count substrings that contain at least one instance of 'a', 'b', and 'c'.",
    "description": "Given a string s consisting only of characters a, b and c. Return the number of substrings containing at least one occurrence of all these characters a, b and c.",
    "tags": ["Hash Table", "String", "Sliding Window"],
    "intuition": "Maintain the last seen indices of 'a', 'b', and 'c'. Any valid substring must start at or before the minimum of these three indices. The number of valid substrings ending at the current character is exactly $\\min(\\text{last}[a], \\text{last}[b], \\text{last}[c]) + 1$.",
    "example": {
      "input": "s = \"abcabc\"",
      "output": "10",
      "explanation": "Substrings like \"abc\", \"abca\", \"abcab\", \"abcabc\", \"bcabc\", etc., contain all three letters."
    },
    "hints": [
      "Initialize tracking variables for indices of 'a', 'b', 'c' to -1.",
      "As you iterate through the string, update the character's last seen position and add $\\min(a, b, c) + 1$ to your total if all three have been seen."
    ],
    "testCases": [
      { "input": "s = \"abcabc\"", "output": "10" },
      { "input": "s = \"aaacb\"", "output": "3" }
    ],
    "leetcode": "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/",
    "gfg": "https://www.geeksforgeeks.org/number-of-substrings-containing-all-three-characters/"
  },
  {
    "slug": "get-equal-substrings-within-budget",
    "title": "Get Equal Substrings Within Budget",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "shortDescription": "Find max length of a substring that can be converted within maxCost.",
    "description": "You are given two strings s and t of the same length and an integer maxCost. You want to change s to t. Changing the ith character of s to t costs |s[i] - t[i]|. Return the maximum length of a substring of s that can be changed to be the same as the corresponding substring of t with a cost less than or equal to maxCost.",
    "tags": ["String", "Binary Search", "Sliding Window", "Prefix Sum"],
    "intuition": "Convert the problem into a sliding window over an array of absolute differences. Expand the window to include elements while tracking the cumulative cost. If the cost exceeds `maxCost`, shrink the window from the left.",
    "example": {
      "input": "s = \"abcd\", t = \"bcdf\", maxCost = 3",
      "output": "3",
      "explanation": "s can be transformed into \"bcd\" with a cost of 1 + 1 + 1 = 3, which matches maxCost exactly."
    },
    "hints": [
      "Calculate costs per character upfront: `diff[i] = abs(s[i] - t[i])`.",
      "The window size only needs to grow or maintain its max size, so you don't need to shrink it iteratively in a while loop if you just shift the left pointer by 1 when out of budget."
    ],
    "testCases": [
      { "input": "s = \"abcd\", t = \"bcdf\", maxCost = 3", "output": "3" },
      { "input": "s = \"abcd\", t = \"cdef\", maxCost = 3", "output": "1" }
    ],
    "leetcode": "https://leetcode.com/problems/get-equal-substrings-within-budget/",
    "gfg": "https://www.geeksforgeeks.org/get-equal-substrings-within-budget/"
  },
  {
    "slug": "maximum-number-of-vowels-in-a-substring of-given-length",
    "title": "Maximum Number of Vowels in a Substring of Given Length",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "shortDescription": "Find the maximum number of vowels in any substring of length k.",
    "description": "Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k. Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.",
    "tags": ["String", "Sliding Window"],
    "intuition": "Use a fixed-size sliding window of length $k$. Count vowels in the initial window, then slide the window across the string by adding the new character and removing the outgoing character, tracking the maximum count.",
    "example": {
      "input": "s = \"abciiidef\", k = 3",
      "output": "3",
      "explanation": "The substring \"iii\" contains 3 vowels."
    },
    "hints": [
      "Pre-calculate a fast vowel lookup lookup structure.",
      "When sliding the window, update the count based on whether the incoming character and outgoing character are vowels."
    ],
    "testCases": [
      { "input": "s = \"abciiidef\", k = 3", "output": "3" },
      { "input": "s = \"aeiou\", k = 2", "output": "2" }
    ],
    "leetcode": "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/",
    "gfg": "https://www.geeksforgeeks.org/maximum-number-of-vowels-in-a-substring-of-given-length/"
  },
  {
    "slug": "make-the-string-great",
    "title": "Make The String Great",
    "category": "Stacks",
    "difficulty": "Easy",
    "shortDescription": "Remove adjacent identical characters with different casing.",
    "description": "Given a string s of lower and upper case English letters. A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa. To make the string good, you can choose two adjacent characters that make the string bad and remove them. Return the final string.",
    "tags": ["String", "Stack"],
    "intuition": "Iterate through the string character by character. Use a stack to check if the current character forms an invalid adjacent pair with the character at the top of the stack. If it does, pop it; otherwise, push the current character.",
    "example": {
      "input": "s = \"leEeetcode\"",
      "output": "\"leetcode\"",
      "explanation": "'e' and 'E' are adjacent and match but have different casing, so they eliminate each other."
    },
    "hints": [
      "Two characters $c_1$ and $c_2$ match this condition if $\\text{abs}(c_1 - c_2) == 32$ in ASCII values.",
      "Reconstruct the final string from the elements remaining in the stack."
    ],
    "testCases": [
      { "input": "s = \"leEeetcode\"", "output": "\"leetcode\"" },
      { "input": "s = \"abBAcc\"", "output": "\"cc\"" }
    ],
    "leetcode": "https://leetcode.com/problems/make-the-string-great/",
    "gfg": "https://www.geeksforgeeks.org/make-the-string-great/"
  },
  {
    "slug": "remove-all-adjacent-duplicates-in-string",
    "title": "Remove All Adjacent Duplicates In String",
    "category": "Stacks",
    "difficulty": "Easy",
    "shortDescription": "Repeatedly remove duplicate adjacent character pairs from a string.",
    "description": "You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them. We repeatedly make duplicate removals on s until we no longer can. Return the final string after all such duplicate removals have been made.",
    "tags": ["String", "Stack"],
    "intuition": "Use a stack to build the string character by character. Before pushing a character, check if it matches the character at the top of the stack. If it does, pop the top character to remove the duplicate pair.",
    "example": {
      "input": "s = \"abbaca\"",
      "output": "\"ca\"",
      "explanation": "In \"abbaca\", \"bb\" is removed to get \"aaca\". Then \"aa\" is removed to get \"ca\"."
    },
    "hints": [
      "A stack or string builder can act as the container to avoid unnecessary string copies.",
      "Check `stack.peek() == current_char` to detect duplicates."
    ],
    "testCases": [
      { "input": "s = \"abbaca\"", "output": "\"ca\"" },
      { "input": "s = \"azxxzy\"", "output": "\"ay\"" }
    ],
    "leetcode": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",
    "gfg": "https://www.geeksforgeeks.org/remove-all-adjacent-duplicates-in-a-string/"
  },
  {
    "slug": "base-7",
    "title": "Base 7",
    "category": "Math",
    "difficulty": "Easy",
    "shortDescription": "Convert an integer to its string representation in base 7.",
    "description": "Given an integer num, return a string of its base 7 representation.",
    "tags": ["Math"],
    "intuition": "Use the standard division-remainder method. Repeatedly divide the number by 7, collect the remainders, and reverse them at the end. Handle negative numbers by tracking the sign upfront.",
    "example": {
      "input": "num = 100",
      "output": "\"202\"",
      "explanation": "100 = 2 * 49 + 0 * 7 + 2 * 1, which corresponds to \"202\" in base 7."
    },
    "hints": [
      "Be sure to handle 0 as a distinct base case to return \"0\".",
      "Take the absolute value for calculation loops and prepend a '-' character if the initial number was negative."
    ],
    "testCases": [
      { "input": "num = 100", "output": "\"202\"" },
      { "input": "num = -7", "output": "\"-10\"" }
    ],
    "leetcode": "https://leetcode.com/problems/base-7/",
    "gfg": "https://www.geeksforgeeks.org/convert-base-decimal-7/"
  }
, {
    "slug": "minimum-size-subarray-sum",
    "title": "Minimum Size Subarray Sum",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "shortDescription": "Find the minimal length of a subarray whose sum is >= target.",
    "description": "Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.",
    "tags": ["Array", "Binary Search", "Sliding Window", "Prefix Sum"],
    "intuition": "Use a sliding window. Expand the right pointer to add values, and contract from the left as long as the window sum meets the target.",
    "example": {
      "input": "target = 7, nums = [2,3,1,2,4,3]",
      "output": "2",
      "explanation": "The subarray [4,3] has the minimal length under the problem constraint."
    },
    "hints": [
      "Keep a running window sum.",
      "When the window sum is >= target, record the length and shrink the window from the left to find smaller matches."
    ],
    "testCases": [
      { "input": "target = 7, nums = [2,3,1,2,4,3]", "output": "2" },
      { "input": "target = 4, nums = [1,4,4]", "output": "1" },
      { "input": "target = 11, nums = [1,1,1,1,1,1,1,1]", "output": "0" }
    ],
    "leetcode": "https://leetcode.com/problems/minimum-size-subarray-sum/",
    "gfg": "https://www.geeksforgeeks.org/minimum-length-subarray-sum-greater-given-value/"
  },
  {
    "slug": "permutation-in-string",
    "title": "Permutation in String",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "shortDescription": "Check if s2 contains a permutation of s1.",
    "description": "Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.",
    "tags": ["Hash Table", "Two Pointers", "String", "Sliding Window"],
    "intuition": "A permutation means equal character frequencies. Slide a fixed-size window of length s1 across s2 and compare character counts.",
    "example": {
      "input": "s1 = \"ab\", s2 = \"eidbaooo\"",
      "output": "true",
      "explanation": "s2 contains one permutation of s1 (\"ba\")."
    },
    "hints": [
      "Use an array or hash map of size 26 to track character frequencies.",
      "Maintain a sliding window of length s1 in s2, updating frequencies dynamically as characters enter and leave."
    ],
    "testCases": [
      { "input": "s1 = \"ab\", s2 = \"eidbaooo\"", "output": "true" },
      { "input": "s1 = \"ab\", s2 = \"eidboaoo\"", "output": "false" }
    ],
    "leetcode": "https://leetcode.com/problems/permutation-in-string/",
    "gfg": "https://www.geeksforgeeks.org/check-if-one-string-is-a-permutation-of-another/"
  },
  {
    "slug": "remove-duplicates-from-sorted-array-ii",
    "title": "Remove Duplicates from Sorted Array II",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "shortDescription": "Remove duplicates from sorted array allowing at most twice replication.",
    "description": "Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.",
    "tags": ["Array", "Two Pointers"],
    "intuition": "Iterate through the array and conditionally write values based on whether the current element matches the element two steps behind the write index.",
    "example": {
      "input": "nums = [1,1,1,2,2,3]",
      "output": "5, nums = [1,1,2,2,3,_]",
      "explanation": "Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively."
    },
    "hints": [
      "Since the array is sorted, duplicates are grouped together.",
      "Keep a write pointer. Only overwrite the array position if the current element is different from the element at write_pointer - 2."
    ],
    "testCases": [
      { "input": "nums = [1,1,1,2,2,3]", "output": "5" },
      { "input": "nums = [0,0,1,1,1,1,2,3,3]", "output": "7" }
    ],
    "leetcode": "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
    "gfg": "https://www.geeksforgeeks.org/remove-duplicates-sorted-array-allowed-k-duplicates/"
  },
  {
    "slug": "string-to-integer-atoi",
    "title": "String to Integer (atoi)",
    "category": "Arrays & Strings",
    "difficulty": "Medium",
    "shortDescription": "Convert a string to a 32-bit signed integer.",
    "description": "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer by discarding whitespace, parsing an optional sign, reading digits, and clamping overflows.",
    "tags": ["String"],
    "intuition": "Process the string sequentially: drop spaces, check signs, process digits one by one, and handle 32-bit limits carefully on every step.",
    "example": {
      "input": "s = \" -42\"",
      "output": "-42",
      "explanation": "Whitespaces are ignored, '-' is parsed, and digits '42' are read into an integer."
    },
    "hints": [
      "Be careful to handle clamping when numbers exceed INT_MAX (2147483647) or drop below INT_MIN (-2147483648).",
      "Stop processing as soon as a non-digit character is encountered after the numbers start."
    ],
    "testCases": [
      { "input": "s = \"42\"", "output": "42" },
      { "input": "s = \" -042\"", "output": "-42" },
      { "input": "s = \"1337c0d3\"", "output": "1337" }
    ],
    "leetcode": "https://leetcode.com/problems/string-to-integer-atoi/",
    "gfg": "https://www.geeksforgeeks.org/write-your-own-atoi/"
  },
  {
    "slug": "boats-to-save-people",
    "title": "Boats to Save People",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "shortDescription": "Find the minimum number of boats to carry everyone.",
    "description": "You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time. Return the minimum number of boats to carry every given person.",
    "tags": ["Array", "Two Pointers", "Greedy", "Sorting"],
    "intuition": "Pair the heaviest available person with the lightest available person. If they can fit together, put both on the boat; otherwise, the heavy person must go alone.",
    "example": {
      "input": "people = [3,2,2,1], limit = 3",
      "output": "3",
      "explanation": "3 boats: (1, 2), (2), and (3)."
    },
    "hints": [
      "Sort the people array first.",
      "Use two pointers (lightest and heaviest). Always allocate a boat for the heaviest person; if the lightest person fits too, advance the light pointer."
    ],
    "testCases": [
      { "input": "people = [1,2], limit = 3", "output": "1" },
      { "input": "people = [3,2,2,1], limit = 3", "output": "3" }
    ],
    "leetcode": "https://leetcode.com/problems/boats-to-save-people/",
    "gfg": "https://www.geeksforgeeks.org/minimum-number-of-boats-required-to-travel-untouched/"
  },
  {
    "slug": "4sum",
    "title": "4Sum",
    "category": "Two Pointers",
    "difficulty": "Medium",
    "shortDescription": "Find all unique quadruplets that sum up to a target.",
    "description": "Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that their sum equals target.",
    "tags": ["Array", "Two Pointers", "Sorting"],
    "intuition": "Sort the array, fix two elements using nested loops, and use a standard two-pointer approach to find the remaining two elements.",
    "example": {
      "input": "nums = [1,0,-1,0,-2,2], target = 0",
      "output": "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]",
      "explanation": "All unique combinations of 4 integers that sum to 0."
    },
    "hints": [
      "Sort the array to skip duplicate values easily.",
      "Watch out for potential integer overflow issues when summing four elements together in languages like C++ or Java."
    ],
    "testCases": [
      { "input": "nums = [1,0,-1,0,-2,2], target = 0", "output": "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]" },
      { "input": "nums = [2,2,2,2,2], target = 8", "output": "[[2,2,2,2]]" }
    ],
    "leetcode": "https://leetcode.com/problems/4sum/",
    "gfg": "https://www.geeksforgeeks.org/find-four-elements-that-sum-to-a-given-value/"
  },
  {
    "slug": "max-consecutive-ones-iii",
    "title": "Max Consecutive Ones III",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "shortDescription": "Find maximum consecutive 1s if you can flip at most k 0s.",
    "description": "Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.",
    "tags": ["Array", "Binary Search", "Sliding Window", "Prefix Sum"],
    "intuition": "Maintain a window that contains at most k zeros. Expand the window until zero count exceeds k, then shrink from the left.",
    "example": {
      "input": "nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2",
      "output": "6",
      "explanation": "Flipping two zeros achieves a maximum length of 6 consecutive ones."
    },
    "hints": [
      "Count the number of zeros in the current sliding window.",
      "If the count of zeros goes beyond k, increment the left window edge until it drops back down."
    ],
    "testCases": [
      { "input": "nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2", "output": "6" },
      { "input": "nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3", "output": "10" }
    ],
    "leetcode": "https://leetcode.com/problems/max-consecutive-ones-iii/",
    "gfg": "https://www.geeksforgeeks.org/maximum-consecutive-ones-length-of-subsegment-with-at-most-k-zeros/"
  },
  {
    "slug": "frequency-of-the-most-frequent-element",
    "title": "Frequency of the Most Frequent Element",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "shortDescription": "Maximize frequency of an element within k increment operations.",
    "description": "The frequency of an element is the number of times it occurs in an array. You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1. Return the maximum possible frequency of an element after performing at most k operations.",
    "tags": ["Array", "Binary Search", "Prefix Sum", "Sliding Window", "Sorting"],
    "intuition": "Sort the array. For a window ending at a target value, the operations required to make all elements equal to target is `(window_length * target) - window_sum`. Ensure this is <= k.",
    "example": {
      "input": "nums = [1,2,4], k = 5",
      "output": "3",
      "explanation": "Increment 1 three times and 2 twice to get [4,4,4], making frequency 3."
    },
    "hints": [
      "Sorting allows us to only consider changing smaller elements to match a larger target.",
      "Use a sliding window to track elements. If the budget condition fails, shrink the window from the left."
    ],
    "testCases": [
      { "input": "nums = [1,2,4], k = 5", "output": "3" },
      { "input": "nums = [1,4,8,13], k = 5", "output": "2" }
    ],
    "leetcode": "https://leetcode.com/problems/frequency-of-the-most-frequent-element/",
    "gfg": "https://www.geeksforgeeks.org/maximize-frequency-of-an-element-by-at-most-k-increments/"
  },
  {
    "slug": "fruit-into-baskets",
    "title": "Fruit Into Baskets",
    "category": "Sliding Window",
    "difficulty": "Medium",
    "shortDescription": "Find the maximum length of a subarray containing at most two distinct types.",
    "description": "You are visiting a farm that has a single row of fruit trees arranged from left to right. You have two baskets, and each basket can only hold a single type of fruit. Return the maximum number of fruits you can collect.",
    "tags": ["Array", "Hash Table", "Sliding Window"],
    "intuition": "This problem translates directly to finding the longest contiguous subarray that contains at most 2 distinct elements.",
    "example": {
      "input": "fruits = [1,2,1]",
      "output": "3",
      "explanation": "We can collect all 3 fruits since there are only two distinct types (1 and 2)."
    },
    "hints": [
      "Use a hash map to keep track of the types of fruits and their counts in the current window.",
      "When the hash map size exceeds 2, decrement frequencies from the left until the distinct type count drops back down."
    ],
    "testCases": [
      { "input": "fruits = [1,2,1]", "output": "3" },
      { "input": "fruits = [0,1,2,2]", "output": "3" }
    ],
    "leetcode": "https://leetcode.com/problems/fruit-into-baskets/",
    "gfg": "https://www.geeksforgeeks.org/maximum-fruits-that-can-be-harvested-into-two-baskets/"
  },
  {
    "slug": "minimum-window-substring",
    "title": "Minimum Window Substring",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "shortDescription": "Find the minimum window in s containing all characters of t.",
    "description": "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string \"\".",
    "tags": ["Hash Table", "String", "Sliding Window"],
    "intuition": "Expand a sliding window across s until all character requirements from t are met. Then contract from the left to find the smallest valid footprint.",
    "example": {
      "input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
      "output": "\"BANC\"",
      "explanation": "The minimum window substring \"BANC\" includes 'A', 'B', and 'C' from string t."
    },
    "hints": [
      "Use a map to keep track of character counts missing from the target string t.",
      "Maintain a 'matched' variable to track how many unique conditions have been completely satisfied inside the current window."
    ],
    "testCases": [
      { "input": "s = \"ADOBECODEBANC\", t = \"ABC\"", "output": "\"BANC\"" },
      { "input": "s = \"a\", t = \"a\"", "output": "\"a\"" },
      { "input": "s = \"a\", t = \"aa\"", "output": "\"\"" }
    ],
    "leetcode": "https://leetcode.com/problems/minimum-window-substring/",
    "gfg": "https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/"
  },
  {
    "slug": "subarrays-with-k-different-integers",
    "title": "Subarrays with K Different Integers",
    "category": "Sliding Window",
    "difficulty": "Hard",
    "shortDescription": "Count the number of subarrays with exactly k different integers.",
    "description": "Given an integer array nums and an integer k, return the number of good subarrays of nums. A good subarray is a subarray that has exactly k different integers.",
    "tags": ["Array", "Hash Table", "Sliding Window", "Counting"],
    "intuition": "Counting 'exactly k' is difficult with a sliding window. Rewrite the problem as: `atMost(k) - atMost(k - 1)` distinct integers.",
    "example": {
      "input": "nums = [1,2,1,2,3], k = 2",
      "output": "7",
      "explanation": "Subarrays formed by exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]."
    },
    "hints": [
      "Write a helper function to find subarrays with at most X distinct elements.",
      "Subtracting the subarrays containing at most K-1 elements from those containing at most K elements gives you exactly K elements."
    ],
    "testCases": [
      { "input": "nums = [1,2,1,2,3], k = 2", "output": "7" },
      { "input": "nums = [1,2,1,3,4], k = 3", "output": "3" }
    ],
    "leetcode": "https://leetcode.com/problems/subarrays-with-k-different-integers/",
    "gfg": "https://www.geeksforgeeks.org/count-subarrays-with-exactly-k-distinct-integers/"
  }
,  {
    slug: "first-missing-positive",
    title: "First Missing Positive",
    category: "Arrays",
    difficulty: "Hard",
    shortDescription: "Find the smallest missing positive integer in O(n).",
    description: "Given an unsorted integer array nums, return the smallest positive integer that is not present. Must run in O(n) time and use O(1) auxiliary space.",
    tags: ["Array", "Hash Table"],
    intuition: "Use the array indices as a virtual hash map. Attempt to place every element x at its correct index position `nums[x - 1]` using cycle swaps.",
    example: {
      input: "[3,4,-1,1]",
      output: "2",
      explanation: "Once sorted/swapped into target alignments, 2 is found missing from index tracking locations."
    },
    hints: [
      "Ignore non-positive numbers or values larger than the array's total elements length boundary",
      "Perform a secondary linear pass to find the first index location where `nums[i] !== i + 1`"
    ],
    testCases: [
      { input: "[1,2,0]", output: "3" },
      { input: "[3,4,-1,1]", output: "2" }
    ],
    leetcode: "https://leetcode.com/problems/first-missing-positive/",
    gfg: "https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array/"
  },
  {
    "slug": "same-tree",
    "title": "Same Tree",
    "category": "Trees",
    "difficulty": "Easy",
    "shortDescription": "Check if two binary trees are structurally identical with the same values.",
    "description": "Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same values.",
    "tags": ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
    "intuition": "Two trees are identical if their current nodes match and their left and right subtrees are recursively identical.",
    "example": {
      "input": "p = [1,2,3], q = [1,2,3]",
      "output": "true",
      "explanation": "Both trees have the exact same structure and node values."
    },
    "hints": [
      "If both nodes are null, they are identical.",
      "If only one node is null, or if their values differ, they cannot be identical."
    ],
    "testCases": [
      { "input": "p = [1,2,3], q = [1,2,3]", "output": "true" },
      { "input": "p = [1,2], q = [1,null,2]", "output": "false" }
    ],
    "leetcode": "https://leetcode.com/problems/same-tree/",
    "gfg": "https://www.geeksforgeeks.org/write-c-code-to-determine-if-two-trees-are-identical/"
  },
  {
    "slug": "subtree-of-another-tree",
    "title": "Subtree of Another Tree",
    "category": "Trees",
    "difficulty": "Easy",
    "shortDescription": "Check if a binary tree is a subtree of another tree.",
    "description": "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot, and false otherwise.",
    "tags": ["Tree", "Depth-First Search", "Binary Tree", "String Matching", "Hash Function"],
    "intuition": "Traverse the main tree. For every node encountered, check if the subtree rooted at that node is identical to the target subRoot.",
    "example": {
      "input": "root = [3,4,5,1,2], subRoot = [4,1,2]",
      "output": "true",
      "explanation": "The structure of subRoot matches a fragment of the primary tree precisely."
    },
    "hints": [
      "Write a helper function to verify if two trees are completely identical (the Same Tree logic).",
      "A tree is a subtree if it matches the current node or is a subtree of either the left or right child."
    ],
    "testCases": [
      { "input": "root = [3,4,5,1,2], subRoot = [4,1,2]", "output": "true" },
      { "input": "root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]", "output": "false" }
    ],
    "leetcode": "https://leetcode.com/problems/subtree-of-another-tree/",
    "gfg": "https://www.geeksforgeeks.org/check-if-a-binary-tree-is-subtree-of-another-binary-tree/"
  },
  {
    "slug": "binary-tree-right-side-view",
    "title": "Binary Tree Right Side View",
    "category": "Trees",
    "difficulty": "Medium",
    "shortDescription": "Return the values of the nodes visible from the right side of the tree.",
    "description": "Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.",
    "tags": ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
    "intuition": "Perform a level-order traversal (BFS) and capture the last element of each level, or do a modified DFS prioritizing the right branch first.",
    "example": {
      "input": "root = [1,2,3,null,5,null,4]",
      "output": "[1,3,4]",
      "explanation": "Looking from top to bottom, the rightmost nodes exposed are 1, 3, and 4."
    },
    "hints": [
      "If using DFS, track your current depth and only add a node to the result if it is the first node visited at that depth level.",
      "Traverse the right child before the left child during your recursive steps."
    ],
    "testCases": [
      { "input": "root = [1,2,3,null,5,null,4]", "output": "[1,3,4]" },
      { "input": "root = [1,null,3]", "output": "[1,3]" }
    ],
    "leetcode": "https://leetcode.com/problems/binary-tree-right-side-view/",
    "gfg": "https://www.geeksforgeeks.org/print-right-view-binary-tree-2/"
  },
  {
    "slug": "path-sum-ii",
    "title": "Path Sum II",
    "category": "Trees",
    "difficulty": "Medium",
    "shortDescription": "Find all root-to-leaf paths where the sum equals targetSum.",
    "description": "Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values.",
    "tags": ["Backtracking", "Tree", "Depth-First Search", "Binary Tree"],
    "intuition": "Use DFS backtracking to traverse paths from the root to leaves, accumulating node values and tracking the remaining sum.",
    "example": {
      "input": "root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22",
      "output": "[[5,4,11,2],[5,8,4,5]]",
      "explanation": "There are two distinct paths from root to leaf that sum up to 22."
    },
    "hints": [
      "Remember that path definitions must end specifically at a leaf node (no children).",
      "Pop the last added element from your path tracking array before backtracking up to a parent node."
    ],
    "testCases": [
      { "input": "root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22", "output": "[[5,4,11,2],[5,8,4,5]]" },
      { "input": "root = [1,2,3], targetSum = 5", "output": "[]" }
    ],
    "leetcode": "https://leetcode.com/problems/path-sum-ii/",
    "gfg": "https://www.geeksforgeeks.org/root-to-leaf-path-sum-equal-to-a-given-number/"
  },
  {
    "slug": "path-sum-iii",
    "title": "Path Sum III",
    "category": "Trees",
    "difficulty": "Medium",
    "shortDescription": "Find the number of paths that sum to targetSum, without needing to start at the root.",
    "description": "Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum. The path does not need to start or end at the root or a leaf.",
    "tags": ["Tree", "Depth-First Search", "Binary Tree"],
    "intuition": "Combine DFS with prefix sums. Track the cumulative path sum down the current branch using a hash map to count matches dynamically in linear time.",
    "example": {
      "input": "root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8",
      "output": "3",
      "explanation": "The three paths that sum to 8 are: [5, 3], [5, 2, 1], [-3, 11]."
    },
    "hints": [
      "Use prefix sum tracking identical to 'Subarray Sum Equals K'.",
      "When returning from a recursive call, decrement the frequency of the current prefix sum in the map to isolate branches."
    ],
    "testCases": [
      { "input": "root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8", "output": "3" }
    ],
    "leetcode": "https://leetcode.com/problems/path-sum-iii/",
    "gfg": "https://www.geeksforgeeks.org/number-of-paths-with-given-sum-in-a-binary-tree/"
  },
  {
    "slug": "flatten-binary-tree-to-linked-list",
    "title": "Flatten Binary Tree to Linked List",
    "category": "Trees",
    "difficulty": "Medium",
    "shortDescription": "Flatten a binary tree into a right-leaning linked list in-place.",
    "description": "Given the root of a binary tree, flatten the tree into a 'linked list': The 'linked list' should use the same TreeNode class where the right child pointer points to the next node in a pre-order traversal and the left child pointer is always null.",
    "tags": ["Linked List", "Stack", "Tree", "Depth-First Search", "Binary Tree"],
    "intuition": "Traverse backwards via post-order (Right -> Left -> Root) and link the current node's right pointer to the previously processed node.",
    "example": {
      "input": "root = [1,2,5,3,4,null,6]",
      "output": "[1,null,2,null,3,null,4,null,5,null,6]",
      "explanation": "The tree structure collapses into a linear thread aligned to the right branches."
    },
    "hints": [
      "Maintain a global or pointer state tracking the 'previous' flattened node.",
      "Alternatively, for an O(1) space approach, find the rightmost node of the left subtree and connect it to the right subtree."
    ],
    "testCases": [
      { "input": "root = [1,2,5,3,4,null,6]", "output": "[1,null,2,null,3,null,4,null,5,null,6]" },
      { "input": "[]", "output": "[]" }
    ],
    "leetcode": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
    "gfg": "https://www.geeksforgeeks.org/flatten-a-binary-tree-into-linked-list/"
  },
  {
    "slug": "count-good-nodes-in-binary-tree",
    "title": "Count Good Nodes in Binary Tree",
    "category": "Trees",
    "difficulty": "Medium",
    "shortDescription": "Count the nodes whose value is >= all values from root to that node.",
    "description": "Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X. Return the number of good nodes in the binary tree.",
    "tags": ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
    "intuition": "Traverse the tree recursively while passing down the maximum value seen so far along the current path.",
    "example": {
      "input": "root = [3,1,4,3,null,1,5]",
      "output": "4",
      "explanation": "Good nodes include Root (3), child (4), leaf (5), and node (3) since path maximum was 3."
    },
    "hints": [
      "Initialize your recursive max parameter with the value of the root node.",
      "If node.val >= path_max, increment your good node count and update path_max."
    ],
    "testCases": [
      { "input": "root = [3,1,4,3,null,1,5]", "output": "4" },
      { "input": "root = [3,3,null,4,2]", "output": "3" }
    ],
    "leetcode": "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
    "gfg": "https://www.geeksforgeeks.org/count-good-nodes-in-a-binary-tree/"
  },
  {
    "slug": "binary-tree-zigzag-level-order-traversal",
    "title": "Binary Tree Zigzag Level Order Traversal",
    "category": "Trees",
    "difficulty": "Medium",
    "shortDescription": "Traverse a binary tree in a zigzag level order format.",
    "description": "Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).",
    "tags": ["Tree", "Breadth-First Search", "Binary Tree"],
    "intuition": "Perform a standard level-order BFS traversal, but use a flag to reverse the order of collected elements on alternating rows.",
    "example": {
      "input": "root = [3,9,20,null,null,15,7]",
      "output": "[[3],[20,9],[15,7]]",
      "explanation": "Row 1 reads left-to-right [3], Row 2 switches direction [20,9], Row 3 returns to left-to-right [15,7]."
    },
    "hints": [
      "Use a queue to complete normal level-by-level processing.",
      "Insert elements into the current level list via append (if left-to-right) or prepend/insert at start (if right-to-left)."
    ],
    "testCases": [
      { "input": "root = [3,9,20,null,null,15,7]", "output": "[[3],[20,9],[15,7]]" },
      { "input": "[1]", "output": "[[1]]" }
    ],
    "leetcode": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
    "gfg": "https://www.geeksforgeeks.org/zigzag-tree-traversal/"
  },
  {
    "slug": "all-nodes-distance-k-in-binary-tree",
    "title": "All Nodes Distance K in Binary Tree",
    "category": "Trees",
    "difficulty": "Medium",
    "shortDescription": "Find all nodes at distance k from a target node.",
    "description": "Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node in any direction.",
    "tags": ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
    "intuition": "Convert the tree into an undirected graph by tracking parent pointers, then perform a standard BFS starting from the target node up to depth k.",
    "example": {
      "input": "root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2",
      "output": "[7,4,1]",
      "explanation": "Nodes 7, 4, and 1 are all exactly 2 edges away from node 5."
    },
    "hints": [
      "Use a primary pass (DFS) to register parent mappings for every node.",
      "Use a hash set to avoid visiting nodes repeatedly during the subsequent BFS expansion."
    ],
    "testCases": [
      { "input": "root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2", "output": "[7,4,1]" }
    ],
    "leetcode": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
    "gfg": "https://www.geeksforgeeks.org/print-nodes-distance-k-given-node/"
  },
  {
    "slug": "populating-next-right-pointers-in-each-node",
    "title": "Populating Next Right Pointers in Each Node",
    "category": "Trees",
    "difficulty": "Medium",
    "shortDescription": "Connect adjacent nodes at the same level in a perfect binary tree.",
    "description": "You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.",
    "tags": ["Linked List", "Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
    "intuition": "Utilize existing links on the current level to chain nodes together on the level below, achieving an O(1) auxiliary space optimization.",
    "example": {
      "input": "root = [1,2,3,4,5,6,7]",
      "output": "[1,#,2,3,#,4,5,6,7,#]",
      "explanation": "Next links connect 2->3, 4->5->6->7 seamlessly across vertical boundaries."
    },
    "hints": [
      "For any node, link node.left.next = node.right.",
      "If node.next is not null, you can bridge subtrees via node.right.next = node.next.left."
    ],
    "testCases": [
      { "input": "root = [1,2,3,4,5,6,7]", "output": "[1,#,2,3,#,4,5,6,7,#]" }
    ],
    "leetcode": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
    "gfg": "https://www.geeksforgeeks.org/connect-nodes-at-same-level/"
  },
  {
    "slug": "convert-sorted-array-to-bst",
    "title": "Convert Sorted Array to Binary Search Tree",
    "category": "Trees",
    "difficulty": "Easy",
    "shortDescription": "Convert a sorted array into a height-balanced BST.",
    "description": "Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.",
    "tags": ["Array", "Divide and Conquer", "Binary Search Tree", "Binary Tree"],
    "intuition": "Always pick the middle element of the current array slice as the root to guarantee height balance, then recursively build the left and right subtrees.",
    "example": {
      "input": "nums = [-10,-3,0,5,9]",
      "output": "[0,-3,9,-10,null,5]",
      "explanation": "Picking 0 as the root splits elements evenly into left and right subtrees."
    },
    "hints": [
      "This is a divide and conquer strategy equivalent to binary search boundaries.",
      "Calculate mid as left + (right - left) / 2 to prevent overflow, assign it as the root, and recurse on both halves."
    ],
    "testCases": [
      { "input": "nums = [-10,-3,0,5,9]", "output": "[0,-3,9,-10,null,5]" },
      { "input": "nums = [1,3]", "output": "[3,1]" }
    ],
    "leetcode": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
    "gfg": "https://www.geeksforgeeks.org/sorted-array-to-balanced-bst/"
  },
  {
    "slug": "insert-into-a-binary-search-tree",
    "title": "Insert into a Binary Search Tree",
    "category": "Trees",
    "difficulty": "Medium",
    "shortDescription": "Insert a value into a binary search tree.",
    "description": "You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.",
    "tags": ["Tree", "Binary Search Tree", "Binary Tree"],
    "intuition": "Compare the target value with the current node. Navigate right if the value is larger or left if it is smaller until you find a null spot to link the new node.",
    "example": {
      "input": "root = [4,2,7,1,3], val = 5",
      "output": "[4,2,7,1,3,5]",
      "explanation": "5 is greater than 4, less than 7, so it links onto the left leg of 7."
    },
    "hints": [
      "Can be cleanly implemented both recursively or iteratively in O(h) space/time.",
      "When hitting a null reference point, instantiate and return your new TreeNode(val)."
    ],
    "testCases": [
      { "input": "root = [4,2,7,1,3], val = 5", "output": "[4,2,7,1,3,5]" }
    ],
    "leetcode": "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
    "gfg": "https://www.geeksforgeeks.org/insert-a-node-in-binary-search-tree-iteratively/"
  },
  {
    "slug": "delete-node-in-a-bst",
    "title": "Delete Node in a BST",
    "category": "Trees",
    "difficulty": "Medium",
    "shortDescription": "Delete a node from a binary search tree safely.",
    "description": "Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference of the BST.",
    "tags": ["Tree", "Binary Search Tree", "Binary Tree"],
    "intuition": "Locate the node first. If it has 0 or 1 children, delete or swap it directly. If it has 2 children, find its inorder successor (minimum value in right subtree), replace the node's value with it, and delete the successor.",
    "example": {
      "input": "root = [5,3,6,2,4,null,7], key = 3",
      "output": "[5,4,6,2,null,null,7]",
      "explanation": "Node 3 is deleted. Node 4 takes its structural spot to maintain the BST invariant."
    },
    "hints": [
      "The inorder successor is found by going once to the right, then as far left as possible.",
      "Ensure you re-link parent pointers correctly when returning nodes back up the recursion frame."
    ],
    "testCases": [
      { "input": "root = [5,3,6,2,4,null,7], key = 3", "output": "[5,4,6,2,null,null,7]" }
    ],
    "leetcode": "https://leetcode.com/problems/delete-node-in-a-bst/",
    "gfg": "https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/"
  },
  {
    "slug": "trim-a-binary-search-tree",
    "title": "Trim a Binary Search Tree",
    "category": "Trees",
    "difficulty": "Medium",
    "shortDescription": "Trim a BST to keep elements only within [low, high].",
    "description": "Given the root of a binary search tree and the lowest and highest boundaries as low and high, trim the tree so that all its elements lies in [low, high]. Trimming the tree should not change the relative structure of the elements that will remain in the tree.",
    "tags": ["Tree", "Depth-First Search", "Binary Search Tree", "Binary Tree"],
    "intuition": "If a node's value is less than low, its entire left subtree is invalid, so return the trimmed right subtree. If its value is greater than high, return the trimmed left subtree.",
    "example": {
      "input": "root = [1,0,2], low = 1, high = 2",
      "output": "[1,null,2]",
      "explanation": "0 drops outside the boundaries and is cut out of the structural tree."
    },
    "hints": [
      "If the root value is in bounds, recursively trim its left and right children.",
      "Use the BST property to skip processing entire subtrees that fall completely out of bounds."
    ],
    "testCases": [
      { "input": "root = [1,0,2], low = 1, high = 2", "output": "[1,null,2]" },
      { "input": "root = [3,0,4,null,2,null,null,1], low = 1, high = 3", "output": "[3,2,null,1]" }
    ],
    "leetcode": "https://leetcode.com/problems/trim-a-binary-search-tree/",
    "gfg": "https://www.geeksforgeeks.org/trim-bst-elements-outside-given-range/"
  },
  {
    slug: "sudoku-solver",
    title: "Sudoku Solver",
    category: "Backtracking",
    difficulty: "Hard",
    shortDescription: "Solve a valid Sudoku puzzle grid.",
    description: "Write a program to solve a Sudoku puzzle by filling the empty cells in-place via backtracking search rules.",
    tags: ["Array", "Hash Table", "Backtracking", "Matrix"],
    intuition: "Iterate across empty matrix points. Speculatively inject valid digits from '1'-'9', using structural row/col/subgrid validation sets before advancing choices.",
    example: {
      input: "9x9 character matrix grid",
      output: "9x9 solved matrix representation",
      explanation: "Empty cells ('.') are completely filled satisfying puzzle criteria."
    },
    hints: [
      "Subgrid box lookup coordinates match index transformations `Math.floor(row/3)*3 + Math.floor(col/3)`",
      "If a speculative digits pathway leads to deadlocks down-line, return false to drop back and increment choice states"
    ],
    testCases: [
      { input: "[[\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"],...]", output: "[[\"5\",\"3\",\"4\",\"6\",\"7\",\"8\",\"9\",\"1\",\"2\"],...]" }
    ],
    leetcode: "https://leetcode.com/problems/sudoku-solver/",
    gfg: "https://www.geeksforgeeks.org/sudoku-backtracking-7/"
  },

  {
    slug: "burst-balloons",
    title: "Burst Balloons",
    category: "Dynamic Programming",
    difficulty: "Hard",
    shortDescription: "Maximize coins collected by bursting balloons.",
    description: "Given n balloons indexed from 0 to n-1, each with a number painted on it. If you burst balloon i you get coins equal to nums[i-1] * nums[i] * nums[i+1]. Maximize the total coins collected.",
    tags: ["Array", "Dynamic Programming"],
    intuition: "Think backward: work on finding the *last* balloon to pop inside a given subarray range instead of trying to process the first balloon popped.",
    example: {
      input: "[3,1,5,8]",
      output: "167",
      explanation: "3->1->5->8 sequence leaves 167 total coins collected optimal paths."
    },
    hints: [
      "Pad array boundaries with virtual 1 markers at both ends to ease calculation logistics",
      "Use interval-based DP where `dp[i][j]` tracks optimal answers between boundaries i and j"
    ],
    testCases: [
      { input: "[3,1,5,8]", output: "167" }
    ],
    leetcode: "https://leetcode.com/problems/burst-balloons/",
    gfg: "https://www.geeksforgeeks.org/burst-balloons-dp/"
  },

  {
    slug: "largest-rectangle-in-histogram",
    title: "Largest Rectangle in Histogram",
    category: "Stack",
    difficulty: "Hard",
    shortDescription: "Find the maximum area rectangle in a bar chart.",
    description: "Given an array of integers heights representing a histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    tags: ["Array", "Stack", "Monotonic Stack"],
    intuition: "Use an increasing monotonic stack. For each bar, compute the maximum width achievable by locating its left and right smaller height boundaries.",
    example: {
      input: "[2,1,5,6,2,3]",
      output: "10",
      explanation: "The largest rectangle is formed by bars 5 and 6 with an area = 2 * 5 = 10."
    },
    hints: [
      "Pop elements from the stack when the current bar height is smaller than the bar index at stack's top",
      "Push a sentinel 0 or pad index boundaries to flush remaining stack elements automatically at loop exit"
    ],
    testCases: [
      { input: "[2,1,5,6,2,3]", output: "10" }
    ],
    leetcode: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    gfg: "https://www.geeksforgeeks.org/largest-rectangle-under-histogram/"
  },

  {
    slug: "maximal-rectangle",
    title: "Maximal Rectangle",
    category: "Dynamic Programming",
    difficulty: "Hard",
    shortDescription: "Find max area 1s rectangle in binary matrix.",
    description: "Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.",
    tags: ["Array", "Dynamic Programming", "Stack", "Matrix", "Monotonic Stack"],
    intuition: "Transform the problem into the 'Largest Rectangle in Histogram' problem. Accumulate heights row-by-row and run the monotonic stack algorithm for each row level.",
    example: {
      input: "[[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]",
      output: "6",
      explanation: "The maximal area rectangle is located within coordinates containing 6 units."
    },
    hints: [
      "Create a 1D tracking array initialized to the row size column dimensions",
      "Increment values if `matrix[row][col] === '1'`, otherwise reset the height entry to 0 for that index location"
    ],
    testCases: [
      { input: "[[\"1\",\"0\"],[\"1\",\"1\"]]", output: "2" }
    ],
    leetcode: "https://leetcode.com/problems/maximal-rectangle/",
    gfg: "https://www.geeksforgeeks.org/maximum-size-rectangle-binary-sub-matrix-1s/"
  },
  {
    "slug": "evaluate-reverse-polish-notation",
    "title": "Evaluate Reverse Polish Notation",
    "category": "Stack",
    "difficulty": "Medium",
    "shortDescription": "Evaluate the value of an arithmetic expression in Reverse Polish Notation.",
    "description": "You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation (postfix). Evaluate the expression and return an integer that represents the value of the expression.",
    "tags": ["Array", "Math", "Stack"],
    "intuition": "Process tokens sequentially. Push numbers onto a stack; when an operator is encountered, pop the top two numbers, apply the operation, and push the result back.",
    "example": {
      "input": "tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]",
      "output": "9",
      "explanation": "((2 + 1) * 3) = 9"
    },
    "hints": [
      "Use a stack to keep track of operands.",
      "Be careful with truncation toward zero for division: in languages like Python, use int(a / b) instead of a // b."
    ],
    "testCases": [
      { "input": "tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]", "output": "9" },
      { "input": "tokens = [\"4\",\"13\",\"5\",\"/\",\"+\"]", "output": "6" }
    ],
    "leetcode": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    "gfg": "https://www.geeksforgeeks.org/evaluate-the-value-of-an-arithmetic-expression-in-reverse-polish-notation-in-java/"
  },

  {
    "slug": "car-fleet",
    "title": "Car Fleet",
    "category": "Stack",
    "difficulty": "Medium",
    "shortDescription": "Find how many car fleets will arrive at the destination.",
    "description": "There are n cars going to the same destination along a one-lane road. You are given two arrays position and speed. If a faster car catches up to a slower car, they form a car fleet. Return the number of car fleets that will arrive at the destination.",
    "tags": ["Array", "Stack", "Sorting", "Monotonic Stack"],
    "intuition": "Sort cars by starting position in descending order. Calculate the time each car needs to reach the destination. If a car ahead takes longer than a car behind, the trailing car will join its fleet.",
    "example": {
      "input": "target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]",
      "output": "3",
      "explanation": "The cars starting at 10 and 8 become a fleet, meeting each other at 12. The car starting at 0 forms its own fleet. The cars starting at 5 and 3 become a fleet, meeting at 6."
    },
    "hints": [
      "Calculate time to destination as: (target - position) / speed.",
      "Iterate through the sorted positions from closest to furthest. Maintain a stack of arriving fleet times."
    ],
    "testCases": [
      { "input": "target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]", "output": "3" },
      { "input": "target = 10, position = [3], speed = [3]", "output": "1" }
    ],
    "leetcode": "https://leetcode.com/problems/car-fleet/",
    "gfg": "https://www.geeksforgeeks.org/car-fleet-problem/"
  },
  {
    "slug": "asteroid-collision",
    "title": "Asteroid Collision",
    "category": "Stack",
    "difficulty": "Medium",
    "shortDescription": "Find the state of asteroids after all collisions.",
    "description": "We are given an array asteroids of integers representing asteroids in a row. For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Find the state of the asteroids after all collisions.",
    "tags": ["Array", "Stack"],
    "intuition": "Use a stack to track active asteroids moving right. A collision can only occur when a moving-left asteroid (-ve) encounters a moving-right asteroid (+ve) currently at the top of the stack.",
    "example": {
      "input": "asteroids = [5,10,-5]",
      "output": "[5,10]",
      "explanation": "The 10 and -5 collide resulting in 10. The 5 and 10 never collide because they move in the same direction."
    },
    "hints": [
      "Loop through each asteroid. If it moves right, push it safely.",
      "If it moves left, simulate collisions with the stack top while the top is positive and smaller than the incoming asteroid."
    ],
    "testCases": [
      { "input": "asteroids = [5,10,-5]", "output": "[5,10]" },
      { "input": "asteroids = [8,-8]", "output": "[]" },
      { "input": "asteroids = [10,2,-5]", "output": "[10]" }
    ],
    "leetcode": "https://leetcode.com/problems/asteroid-collision/",
    "gfg": "https://www.geeksforgeeks.org/asteroid-collision-problem/"
  },
  {
    "slug": "online-stock-span",
    "title": "Online Stock Span",
    "category": "Stack",
    "difficulty": "Medium",
    "shortDescription": "Calculate the span of a stock's price for the current day.",
    "description": "Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day. The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backward) for which the stock price was less than or equal to today's price.",
    "tags": ["Stack", "Design", "Monotonic Stack", "Data Stream"],
    "intuition": "Use a monotonic decreasing stack to look back. Store pairs of `(price, span)` in the stack. When a new price arrives, collapse all elements with a price less than or equal to it, adding up their spans.",
    "example": {
      "input": "[\"StockSpanner\", \"next\", \"next\", \"next\"], [[], [100], [80], [60]]",
      "output": "[null, 1, 1, 1]",
      "explanation": "First price 100 has span 1. 80 is less than 100, span 1. 60 is less than 80, span 1."
    },
    "hints": [
      "Instead of a raw history array, look for the 'Next Greater Element' logic using a stack.",
      "Pop elements from the stack while their prices are lower than or equal to the current price."
    ],
    "testCases": [
      { "input": "[100, 80, 60, 70, 60, 75, 85]", "output": "[1, 1, 1, 2, 1, 4, 6]" }
    ],
    "leetcode": "https://leetcode.com/problems/online-stock-span/",
    "gfg": "https://www.geeksforgeeks.org/the-stock-span-problem/"
  },
  {
    "slug": "task-scheduler",
    "title": "Task Scheduler",
    "category": "Heap / Priority Queue",
    "difficulty": "Medium",
    "shortDescription": "Find the minimum number of intervals required to complete all tasks with a cooling period.",
    "description": "Given a characters array tasks, representing the tasks a CPU needs to do, where each character represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle. However, there is a non-negative integer n that represents the cooldown period between two same tasks.",
    "tags": ["Array", "Hash Table", "Greedy", "Sorting", "Heap (Priority Queue)", "Counting"],
    "intuition": "The total time is dictated heavily by the most frequent task. Schedule the most frequent tasks first, then fill the mandatory idle slots with other available tasks.",
    "example": {
      "input": "tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 2",
      "output": "8",
      "explanation": "A -> B -> idle -> A -> B -> idle -> A -> B"
    },
    "hints": [
      "Count the frequencies of each task.",
      "Calculate the maximum frequency $f$. The minimum chunks of time required will be at least $(f - 1) * (n + 1) + \\text{count of tasks with max frequency}$."
    ],
    "testCases": [
      { "input": "tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 2", "output": "8" },
      { "input": "tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 0", "output": "6" }
    ],
    "leetcode": "https://leetcode.com/problems/task-scheduler/",
    "gfg": "https://www.geeksforgeeks.org/cpu-task-scheduler/"
  },
  {
    "slug": "last-stone-weight",
    "title": "Last Stone Weight",
    "category": "Heap / Priority Queue",
    "difficulty": "Easy",
    "shortDescription": "Simulate smashing the two heaviest stones together until at most one remains.",
    "description": "You are given an array of integers stones where stones[i] is the weight of the ith stone. We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Return the weight of the last remaining stone. If no stones are left, return 0.",
    "tags": ["Array", "Heap (Priority Queue)"],
    "intuition": "Always pull the two largest stones. A Max-Heap handles dynamic extraction and insertion of largest values in logarithmic time.",
    "example": {
      "input": "stones = [2,7,4,1,8,1]",
      "output": "1",
      "explanation": "Smash 8 and 7 -> 1. Stones become [2,4,1,1,1]. Smash 4 and 2 -> 2. Stones become [2,1,1,1]. Smash 2 and 1 -> 1. Stones become [1,1,1]. Smash 1 and 1 -> 0. Last stone is 1."
    },
    "hints": [
      "Invert weights to use a standard Min-Heap as a Max-Heap if your language lacks a built-in max-heap structure.",
      "Pop two values; if they aren't equal, push the difference back into the heap."
    ],
    "testCases": [
      { "input": "stones = [2,7,4,1,8,1]", "output": "1" },
      { "input": "stones = [1]", "output": "1" }
    ],
    "leetcode": "https://leetcode.com/problems/last-stone-weight/",
    "gfg": "https://www.geeksforgeeks.org/last-stone-weight/"
  },
  {
    "slug": "find-median-from-data-stream",
    "title": "Find Median from Data Stream",
    "category": "Heap / Priority Queue",
    "difficulty": "Hard",
    "shortDescription": "Dynamically find the median of a continuously expanding stream of numbers.",
    "description": "The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values. Implement the MedianFinder class.",
    "tags": ["Two Pointers", "Design", "Sorting", "Heap (Priority Queue)", "Data Stream"],
    "intuition": "Divide the running numbers into two halves: a max-heap for the smaller half and a min-heap for the larger half. Balancing their sizes ensures the median is always accessible at the roots.",
    "example": {
      "input": "addNum(1), addNum(2), findMedian(), addNum(3), findMedian()",
      "output": "[null, null, 1.5, null, 2.0]",
      "explanation": "After 1 and 2, median is 1.5. After adding 3, the sorted stream is [1,2,3], median is 2."
    },
    "hints": [
      "Ensure the max-heap size is equal to or exactly one element larger than the min-heap.",
      "If total elements count is odd, the median sits at the top of the max-heap."
    ],
    "testCases": [
      { "input": "[\"MedianFinder\",\"addNum\",\"addNum\",\"findMedian\"], [[],[1],[2],[]]", "output": "[null,null,null,1.5]" }
    ],
    "leetcode": "https://leetcode.com/problems/find-median-from-data-stream/",
    "gfg": "https://www.geeksforgeeks.org/median-of-stream-of-integers-running-integers/"
  },
  {
    "slug": "seat-reservation-manager",
    "title": "Seat Reservation Manager",
    "category": "Heap / Priority Queue",
    "difficulty": "Medium",
    "shortDescription": "Manage seat reservations ensuring the lowest-numbered seat is always allocated first.",
    "description": "Design a system that manages the seat reservations of n seats numbered from 1 to n. It should support reserving the smallest available seat and unreserving any previously taken seat.",
    "tags": ["Design", "Heap (Priority Queue)"],
    "intuition": "A min-heap naturally tracks unreserved or available items in numerical sequence, allowing fetching the minimum unreserved seat in $O(\\log m)$ time.",
    "example": {
      "input": "SeatManager(5), reserve(), reserve(), unreserve(2), reserve()",
      "output": "[null, 1, 2, null, 2]",
      "explanation": "Seats 1 and 2 are taken. 2 is released. The next reservation fetches 2 again because it is the smallest available index."
    },
    "hints": [
      "Initialize a min-heap with numbers up to n, or use a pointer to track the largest unreserved seat to optimize initial space usage.",
      "When a seat is unreserved, push that seat index directly back into your min-heap."
    ],
    "testCases": [
      { "input": "[\"SeatManager\",\"reserve\",\"unreserve\",\"reserve\"], [[3],[],[1],[]]", "output": "[null,1,null,1]" }
    ],
    "leetcode": "https://leetcode.com/problems/seat-reservation-manager/",
    "gfg": "https://www.geeksforgeeks.org/design-seat-reservation-manager/"
  },
  {
    "slug": "minimize-deviation-in-array",
    "title": "Minimize Deviation in Array",
    "category": "Heap / Priority Queue",
    "difficulty": "Hard",
    "shortDescription": "Minimize the max-min element difference by multiplying odd elements or dividing even elements.",
    "description": "You are given an array nums of n positive integers. You can perform two types of operations on any element of the array any number of times: If the element is odd, multiply it by 2. If the element is even, divide it by 2. Return the minimum deviation possible.",
    "tags": ["Array", "Greedy", "Heap (Priority Queue)", "Ordered Set"],
    "intuition": "Transform all odd numbers to even numbers by multiplying by 2. This sets all elements to their maximum upper bounds. Put them into a max-heap and repeatedly divide the largest element by 2 while tracking the running range minimum.",
    "example": {
      "input": "nums = [4,1,5,20]",
      "output": "3",
      "explanation": "Transform odds to [4,2,10,20]. Keep dividing max: 20 becomes 10 -> [4,2,10,10]. 10 becomes 5 -> [4,2,5,10]. 10 becomes 5 -> [4,2,5,5]. Min deviation between 5 and 2 is 3."
    },
    "hints": [
      "Convert all numbers to their maximum state first.",
      "Stop when the maximum element pulled from the max-heap becomes an odd number, as it can no longer be decreased."
    ],
    "testCases": [
      { "input": "nums = [1,2,3,4]", "output": "1" },
      { "input": "nums = [4,1,5,20]", "output": "3" }
    ],
    "leetcode": "https://leetcode.com/problems/minimize-deviation-in-array/",
    "gfg": "https://www.geeksforgeeks.org/minimize-the-maximum-difference-between-the-elements-after-performing-given-operations/"
  },
  {
    "slug": "maximum-subsequence-score",
    "title": "Maximum Subsequence Score",
    "category": "Heap / Priority Queue",
    "difficulty": "Medium",
    "shortDescription": "Maximize subsequence sum from nums1 multiplied by the minimum value from nums2.",
    "description": "You are given two 0-indexed integer arrays nums1 and nums2 of equal length n and a positive integer k. You must choose a subsequence of indices of length k. The score is defined as the sum of elements from nums1 multiplied by the minimum element from nums2 among those chosen indices.",
    "tags": ["Array", "Greedy", "Sorting", "Heap (Priority Queue)"],
    "intuition": "Sort index pairs based on nums2 descending. Iterate through, tracking elements from nums1 inside a min-heap of size k to easily evict the smallest sum contributor whenever the boundary expands.",
    "example": {
      "input": "nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3",
      "output": "12",
      "explanation": "Select indices 0, 2, and 3. Sum in nums1 = 1+3+2 = 6. Min in nums2 = min(2,3,4) = 2. Score = 6 * 2 = 12."
    },
    "hints": [
      "Sorting elements based on nums2 means the current nums2 element is always the minimum of all processed elements.",
      "Keep a min-heap of size k to store the values of nums1, and maintain a running sum of those k elements."
    ],
    "testCases": [
      { "input": "nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3", "output": "12" }
    ],
    "leetcode": "https://leetcode.com/problems/maximum-subsequence-score/",
    "gfg": "https://www.geeksforgeeks.org/maximum-subsequence-score/"
  },
  {
    "slug": "decode-ways",
    "title": "Decode Ways",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "shortDescription": "Count the number of ways to decode a digit string mapped to letters.",
    "description": "A message containing letters from A-Z can be encoded into numbers using mapping 'A' -> \"1\", 'B' -> \"2\" ... 'Z' -> \"26\". Given a string s containing only digits, return the number of ways to decode it.",
    "tags": ["String", "Dynamic Programming"],
    "intuition": "For each index, we can decode a single digit or pair it with the previous digit if it forms a valid number between 10 and 26. This maps directly to a Fibonacci-like state transition.",
    "example": {
      "input": "s = \"12\"",
      "output": "2",
      "explanation": "Could be decoded as \"AB\" (1 2) or \"L\" (12)."
    },
    "hints": [
      "Any single digit '0' cannot be decoded on its own.",
      "Maintain a DP state array where $dp[i] = dp[i-1] \\text{ (if valid single)} + dp[i-2] \\text{ (if valid double)}$."
    ],
    "testCases": [
      { "input": "s = \"12\"", "output": "2" },
      { "input": "s = \"226\"", "output": "3" },
      { "input": "s = \"06\"", "output": "0" }
    ],
    "leetcode": "https://leetcode.com/problems/decode-ways/",
    "gfg": "https://www.geeksforgeeks.org/count-possible-decodings-given-digit-sequence/"
  },
  {
    "slug": "target-sum",
    "title": "Target Sum",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "shortDescription": "Find number of expressions built from an array that evaluate to a target sum.",
    "description": "You are given an integer array nums and an integer target. You want to build an expression using all the integers in nums by assigning either a '+' or '-' sign before each integer. Return the number of different expressions that evaluate to target.",
    "tags": ["Array", "Dynamic Programming", "Backtracking"],
    "intuition": "This can be mathematically transformed into the Subset Sum problem. We need to find a subset of elements that sum up to $\\frac{\\text{sum}(nums) + \\text{target}}{2}$.",
    "example": {
      "input": "nums = [1,1,1,1,1], target = 3",
      "output": "5",
      "explanation": "-1+1+1+1+1 = 3, 1-1+1+1+1 = 3, etc. Five ways to write the expression."
    },
    "hints": [
      "If $(\\text{sum}(nums) + target)$ is odd or negative, return 0.",
      "Use a 1D DP array to count configurations for the targeted subset sum value."
    ],
    "testCases": [
      { "input": "nums = [1,1,1,1,1], target = 3", "output": "5" },
      { "input": "nums = [1], target = 1", "output": "1" }
    ],
    "leetcode": "https://leetcode.com/problems/target-sum/",
    "gfg": "https://www.geeksforgeeks.org/target-sum-problem/"
  },
  {
    "slug": "partition-equal-subset-sum",
    "title": "Partition Equal Subset Sum",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "shortDescription": "Check if an array can be split into two subsets with equal sums.",
    "description": "Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.",
    "tags": ["Array", "Dynamic Programming"],
    "intuition": "If the sum of all elements is odd, an equal partition is impossible. If even, the problem reduces to a 0/1 Knapsack variance: find if a subset sums up to exactly $\\frac{\\text{sum}}{2}$.",
    "example": {
      "input": "nums = [1,5,11,5]",
      "output": "true",
      "explanation": "The array can be partitioned as [1, 5, 5] and [11]."
    },
    "hints": [
      "Calculate total sum. Target is sum / 2.",
      "Use a boolean DP array or set tracking combinations from the end backwards to avoid double counting the same index element."
    ],
    "testCases": [
      { "input": "nums = [1,5,11,5]", "output": "true" },
      { "input": "nums = [1,2,3,5]", "output": "false" }
    ],
    "leetcode": "https://leetcode.com/problems/partition-equal-subset-sum/",
    "gfg": "https://www.geeksforgeeks.org/partition-a-set-into-two-subsets-such-that-the-difference-of-subset-sums-is-minimum/"
  },
  {
    "slug": "unique-paths-ii",
    "title": "Unique Paths II",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "shortDescription": "Find total possible unique paths in a grid containing obstacles.",
    "description": "You are given an m x n integer array grid where grid[i][j] represents an obstacle (1) or an empty space (0). A robot starts at the top-left corner and moves to the bottom-right corner. Find the number of unique paths.",
    "tags": ["Array", "Dynamic Programming", "Matrix"],
    "intuition": "Build path answers dynamically. The path count to any cell is the sum of paths from its top cell and left cell. If a cell contains an obstacle, set its path value to 0.",
    "example": {
      "input": "obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]",
      "output": "2",
      "explanation": "An obstacle sits right in the middle of the 3x3 grid. Only two routes can avoid it."
    },
    "hints": [
      "If the start cell or end cell has a 1, return 0.",
      "Optimize memory by using a single 1D row array to update configurations in place."
    ],
    "testCases": [
      { "input": "obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]", "output": "2" },
      { "input": "obstacleGrid = [[0,1],[0,0]]", "output": "1" }
    ],
    "leetcode": "https://leetcode.com/problems/unique-paths-ii/",
    "gfg": "https://www.geeksforgeeks.org/unique-paths-in-a-grid-with-obstacles/"
  },
  {
    "slug": "interleaving-string",
    "title": "Interleaving String",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "shortDescription": "Check if s3 is formed by an interleaving of s1 and s2.",
    "description": "Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2 while preserving the relative ordering of characters within each individual string.",
    "tags": ["String", "Dynamic Programming"],
    "intuition": "Let $dp[i][j]$ represent whether $s3[0 \\dots i+j-1]$ can be formed by interleaving $s1[0 \\dots i-1]$ and $s2[0 \\dots j-1]$. A cell is valid if the character matches $s1$ or $s2$ and the preceding state was valid.",
    "example": {
      "input": "s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbcbcac\"",
      "output": "true",
      "explanation": "Characters from s1 and s2 weave cleanly into s3 while keeping internal sequence ordering."
    },
    "hints": [
      "If $\\text{len}(s1) + \\text{len}(s2) \\neq \\text{len}(s3)$, return false immediately.",
      "Check matches at $dp[i-1][j]$ with $s1[i-1]$ and $dp[i][j-1]$ with $s2[j-1]$."
    ],
    "testCases": [
      { "input": "s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbcbcac\"", "output": "true" }
    ],
    "leetcode": "https://leetcode.com/problems/interleaving-string/",
    "gfg": "https://www.geeksforgeeks.org/check-whether-a-given-string-is-an-interleaving-of-two-other-given-strings/"
  },
  {
    "slug": "edit-distance",
    "title": "Edit Distance",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "shortDescription": "Find minimum operations (insert, delete, replace) to convert word1 to word2.",
    "description": "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You have three operations permitted on a word: Insert, Delete, or Replace a character.",
    "tags": ["String", "Dynamic Programming"],
    "intuition": "If characters match, no operation is needed ($dp[i][j] = dp[i-1][j-1]$). If they don't, evaluate all three choices and take the minimum: $1 + \\min(\\text{insert}, \\text{delete}, \\text{replace})$.",
    "example": {
      "input": "word1 = \"horse\", word2 = \"ros\"",
      "output": "3",
      "explanation": "horse -> rorse (replace 'h' with 'r'), rorse -> rose (remove 'r'), rose -> ros (remove 'e')."
    },
    "hints": [
      "Set up a 2D matrix of size $(m+1) \\times (n+1)$.",
      "The base cases represent transforming an empty string to a string of length $k$, which takes exactly $k$ operations."
    ],
    "testCases": [
      { "input": "word1 = \"horse\", word2 = \"ros\"", "output": "3" },
      { "input": "word1 = \"intention\", word2 = \"execution\"", "output": "5" }
    ],
    "leetcode": "https://leetcode.com/problems/edit-distance/",
    "gfg": "https://www.geeksforgeeks.org/edit-distance-dp-5/"
  },
  {
    "slug": "longest-common-subsequence",
    "title": "Longest Common Subsequence",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "shortDescription": "Find the length of the longest subsequence shared between two strings.",
    "description": "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.",
    "tags": ["String", "Dynamic Programming"],
    "intuition": "Compare characters sequentially. If $text1[i] == text2[j]$, increment length by 1. If not, branch into two paths: skip from text1 or skip from text2, and pick the maximum.",
    "example": {
      "input": "text1 = \"abcde\", text2 = \"ace\"",
      "output": "3",
      "explanation": "The longest common subsequence is \"ace\" and its length is 3."
    },
    "hints": [
      "Build a 2D grid where rows match text1 and columns match text2.",
      "If $text1[i-1] == text2[j-1]$, then $dp[i][j] = 1 + dp[i-1][j-1]$, else $\\max(dp[i-1][j], dp[i][j-1])$."
    ],
    "testCases": [
      { "input": "text1 = \"abcde\", text2 = \"ace\"", "output": "3" },
      { "input": "text1 = \"abc\", text2 = \"abc\"", "output": "3" }
    ],
    "leetcode": "https://leetcode.com/problems/longest-common-subsequence/",
    "gfg": "https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/"
  },
  {
    "slug": "ones-and-zeroes",
    "title": "Ones and Zeroes",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "shortDescription": "Find the maximum size subset of binary strings that contains at most m 0s and n 1s.",
    "description": "You are given an array of binary strings strs and two integers m and n. Return the size of the largest subset of strs such that there are at most m 0's and n 1's in the subset.",
    "tags": ["Array", "String", "Dynamic Programming"],
    "intuition": "This is a 2-dimensional 0/1 Knapsack problem. For each string, count its zeros and ones, then iterate backwards through a 2D DP matrix to update the maximum subset count.",
    "example": {
      "input": "strs = [\"10\",\"0001\",\"111001\",\"1\",\"0\"], m = 5, n = 3",
      "output": "4",
      "explanation": "The largest subset is [\"10\", \"1\", \"0\", \"0001\"] which uses 4 zeros and 3 ones."
    },
    "hints": [
      "Process each string independently.",
      "Loop through your DP capacities from $m$ down to zeros count and $n$ down to ones count to compute the max state safely in place."
    ],
    "testCases": [
      { "input": "strs = [\"10\",\"0001\",\"111001\",\"1\",\"0\"], m = 5, n = 3", "output": "4" }
    ],
    "leetcode": "https://leetcode.com/problems/ones-and-zeroes/",
    "gfg": "https://www.geeksforgeeks.org/0-1-knapsack-problem-with-two-weight-constraints/"
  },
  {
    "slug": "minimum-path-sum",
    "title": "Minimum Path Sum",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "shortDescription": "Find a path from top-left to bottom-right which minimizes the sum of numbers.",
    "description": "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. You can only move either down or right at any point in time.",
    "tags": ["Array", "Dynamic Programming", "Matrix"],
    "intuition": "The minimum cost to reach cell $(i, j)$ is the value of the cell itself plus the minimum cost of reaching it from either the left cell or the top cell.",
    "example": {
      "input": "grid = [[1,3,1],[1,5,1],[4,2,1]]",
      "output": "7",
      "explanation": "The path 1 -> 3 -> 1 -> 1 -> 1 minimizes the overall sum."
    },
    "hints": [
      "The boundary elements (first row and first column) have only one direction they can be reached from.",
      "Modify the input grid directly to achieve an $O(1)$ space optimization."
    ],
    "testCases": [
      { "input": "grid = [[1,3,1],[1,5,1],[4,2,1]]", "output": "7" }
    ],
    "leetcode": "https://leetcode.com/problems/minimum-path-sum/",
    "gfg": "https://www.geeksforgeeks.org/minimum-path-sum-in-a-grid/"
  },
  {
    "slug": "gas-station",
    "title": "Gas Station",
    "category": "Greedy",
    "difficulty": "Medium",
    "shortDescription": "Find the starting gas station index to complete a circular circuit.",
    "description": "There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i]. You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. Return the starting gas station index.",
    "tags": ["Array", "Greedy"],
    "intuition": "If the total sum of gas is less than the total sum of cost, completing the circuit is impossible. If gas is sufficient, track your running tank; if it goes negative, reset the start candidate to the next station.",
    "example": {
      "input": "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
      "output": "3",
      "explanation": "Start at station 3 (index 3). Fill 4 units of gas, cost is 1. Tank = 3. Travel circularly to finish successfully."
    },
    "hints": [
      "If total gas minus total cost is negative, return -1.",
      "A valid start station will never allow the running sum of gas minus cost to drop below 0 during the remainder of the array traversal."
    ],
    "testCases": [
      { "input": "gas = [1,2,3,4,5], cost = [3,4,5,1,2]", "output": "3" },
      { "input": "gas = [2,3,4], cost = [3,4,3]", "output": "-1" }
    ],
    "leetcode": "https://leetcode.com/problems/gas-station/",
    "gfg": "https://www.geeksforgeeks.org/find-the-starting-gas-station-for-a-circular-tour/"
  },
  {
    "slug": "hand-of-straights",
    "title": "Hand of Straights",
    "category": "Greedy",
    "difficulty": "Medium",
    "shortDescription": "Rearrange cards into groups of groupSize containing consecutive cards.",
    "description": "Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards. Return true if she can.",
    "tags": ["Array", "Hash Table", "Greedy", "Sorting"],
    "intuition": "Sort the values or track their counts in a sorted map. Always pick the smallest available card and check if the next consecutive cards are available to form a valid group.",
    "example": {
      "input": "hand = [1,2,3,6,2,3,4,7,8], groupSize = 3",
      "output": "true",
      "explanation": "Alice can arrange cards into [1,2,3], [2,3,4], [6,7,8]."
    },
    "hints": [
      "Count frequencies using a hash map or ordered structure.",
      "When evaluating a minimum card value $x$, decrement counts for $x$ up to $x + \\text{groupSize} - 1$. If any consecutive card is missing, return false."
    ],
    "testCases": [
      { "input": "hand = [1,2,3,6,2,3,4,7,8], groupSize = 3", "output": "true" },
      { "input": "hand = [1,2,3,4,5], groupSize = 4", "output": "false" }
    ],
    "leetcode": "https://leetcode.com/problems/hand-of-straights/",
    "gfg": "https://www.geeksforgeeks.org/divide-array-into-k-subsets-of-consecutive-elements/"
  },
  {
    "slug": "candy",
    "title": "Candy",
    "category": "Greedy",
    "difficulty": "Hard",
    "shortDescription": "Assign candies to children based on ratings such that higher-rated neighbors get more candy.",
    "description": "There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings. You are giving candies to these children subjected to the requirements: Each child must have at least one candy. Children with a higher rating than their neighbors must get more candies than their neighbors. Return the minimum candies required.",
    "tags": ["Array", "Greedy"],
    "intuition": "Use a two-pass approach. First pass left-to-right ensures a child has more candies than their left neighbor if their rating is higher. Second pass right-to-left ensures the same condition relative to their right neighbor.",
    "example": {
      "input": "ratings = [1,0,2]",
      "output": "5",
      "explanation": "You can allocate candies as [2, 1, 2] satisfying both neighbor conditions."
    },
    "hints": [
      "Initialize an array of size n with 1 candy each.",
      "On the second pass (right-to-left), update candy allocation using $\\max(\\text{existing\\_candy}, \\text{right\\_neighbor\\_candy} + 1)$."
    ],
    "testCases": [
      { "input": "ratings = [1,0,2]", "output": "5" },
      { "input": "ratings = [1,2,2]", "output": "4" }
    ],
    "leetcode": "https://leetcode.com/problems/candy/",
    "gfg": "https://www.geeksforgeeks.org/candy-distribution-problem/"
  }
, {
    "slug": "simplify-path",
    "title": "Simplify Path",
    "category": "Stack",
    "difficulty": "Medium",
    "shortDescription": "Convert an absolute Unix path into a simplified canonical path.",
    "description": "Given an absolute path for a Unix-style file system, convert it to the simplified canonical path. The path must start with a single slash '/', components must be separated by a single slash, must not end with a trailing '/', and must only contain directories.",
    "tags": ["String", "Stack"],
    "intuition": "Split the path string by slashes. Use a stack to track valid directory structures: push a directory name, pop on '..' (if stack is not empty), and ignore '.' or empty components.",
    "example": {
      "input": "path = \"/home//foo/\"",
      "output": "\"/home/foo\"",
      "explanation": "Multiple consecutive slashes are replaced by a single one, and the trailing slash is dropped."
    },
    "hints": [
      "Split the input string by '/' to isolate folder tokens.",
      "Rebuild the path by joining stack elements with a forward slash."
    ],
    "testCases": [
      { "input": "path = \"/home/\"", "output": "\"/home\"" },
      { "input": "path = \"/../\"", "output": "\"/\"" },
      { "input": "path = \"/home//foo/\"", "output": "\"/home/foo\"" }
    ],
    "leetcode": "https://leetcode.com/problems/simplify-path/",
    "gfg": "https://www.geeksforgeeks.org/simplify-directory-path-unix-like/"
  },
  {
    "slug": "generate-parentheses",
    "title": "Generate Parentheses",
    "category": "Backtracking",
    "difficulty": "Medium",
    "shortDescription": "Generate all combinations of well-formed parentheses.",
    "description": "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    "tags": ["String", "Dynamic Programming", "Backtracking"],
    "intuition": "Track the counts of open and close brackets used. You can always add an open bracket if count < n, and you can add a closing bracket if close < open.",
    "example": {
      "input": "n = 3",
      "output": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]",
      "explanation": "All valid structures containing 3 open and 3 closed matching brackets."
    },
    "hints": [
      "Use recursion to build combinations character by character.",
      "Enforce branching constraints: open_count < n and close_count < open_count."
    ],
    "testCases": [
      { "input": "n = 3", "output": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]" },
      { "input": "n = 1", "output": "[\"()\"]" }
    ],
    "leetcode": "https://leetcode.com/problems/generate-parentheses/",
    "gfg": "https://www.geeksforgeeks.org/print-all-combinations-of-balanced-parentheses/"
  },
  {
    "slug": "132-pattern",
    "title": "132 Pattern",
    "category": "Stack",
    "difficulty": "Medium",
    "shortDescription": "Check if there is a 132 pattern in an array.",
    "description": "Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j]. Return true if there is a 132 pattern in nums, otherwise return false.",
    "tags": ["Array", "Binary Search", "Stack", "Monotonic Stack", "Ordered Set"],
    "intuition": "Iterate from right to left to find a prospective '2' value (nums[k]) while maintaining a monotonic stack of potential '3' values (nums[j]). Keep track of the largest possible valid value for '2'.",
    "example": {
      "input": "nums = [3,1,4,2]",
      "output": "true",
      "explanation": "There is a 132 pattern in the sequence: [1, 4, 2]."
    },
    "hints": [
      "Maintain a monotonic stack tracking values decreasing from right to left.",
      "If the current value is less than the last popped element ('2' element), a 132 pattern is successfully found."
    ],
    "testCases": [
      { "input": "nums = [1,2,3,4]", "output": "false" },
      { "input": "nums = [3,1,4,2]", "output": "true" }
    ],
    "leetcode": "https://leetcode.com/problems/132-pattern/",
    "gfg": "https://www.geeksforgeeks.org/find-a-132-pattern-in-given-array/"
  },
  {
    "slug": "remove-k-digits",
    "title": "Remove K Digits",
    "category": "Stack",
    "difficulty": "Medium",
    "shortDescription": "Remove k digits from a number to find the smallest possible result.",
    "description": "Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.",
    "tags": ["String", "Stack", "Greedy", "Monotonic Stack"],
    "intuition": "To make a number smaller, remove a digit if it is greater than the next digit (left-to-right). Use a monotonic stack to greedily keep smaller digits.",
    "example": {
      "input": "num = \"1432219\", k = 3",
      "output": "\"1219\"",
      "explanation": "Remove the three digits 4, 3, and 2 to form the smallest new number 1219."
    },
    "hints": [
      "Maintain a monotonic increasing stack of digits.",
      "Pop elements if the current digit is smaller than the stack top and k > 0. Remember to strip leading zeros at the end."
    ],
    "testCases": [
      { "input": "num = \"1432219\", k = 3", "output": "\"1219\"" },
      { "input": "num = \"10200\", k = 1", "output": "\"200\"" }
    ],
    "leetcode": "https://leetcode.com/problems/remove-k-digits/",
    "gfg": "https://www.geeksforgeeks.org/build-lowest-number-by-removing-n-digits/"
  },
  {
    "slug": "flood-fill",
    "title": "Flood Fill",
    "category": "Graphs",
    "difficulty": "Easy",
    "shortDescription": "Perform a flood fill on an image starting from a pixel coordinates.",
    "description": "An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image. You are also given three integers sr, sc, and color. Perform a flood fill on the image starting from the pixel image[sr][sc].",
    "tags": ["Array", "Depth-First Search", "Breadth-First Search", "Matrix"],
    "intuition": "Use DFS or BFS to traverse adjacent matching pixels in 4 directions and recolor them, ensuring you don't repeat work if the new color matches the old color.",
    "example": {
      "input": "image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2",
      "output": "[[2,2,2],[2,2,0],[2,0,1]]",
      "explanation": "From the center of the image, all pixels connected by path of the same color are colored 2."
    },
    "hints": [
      "Check if the starting pixel already has the target color to avoid infinite loops.",
      "Explore neighbors in 4 directions recursively or using a queue."
    ],
    "testCases": [
      { "input": "image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2", "output": "[[2,2,2],[2,2,0],[2,0,1]]" },
      { "input": "image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0", "output": "[[0,0,0],[0,0,0]]" }
    ],
    "leetcode": "https://leetcode.com/problems/flood-fill/",
    "gfg": "https://www.geeksforgeeks.org/flood-fill-algorithm/"
  },
  {
    "slug": "surrounded-regions",
    "title": "Surrounded Regions",
    "category": "Graphs",
    "difficulty": "Medium",
    "shortDescription": "Capture all regions that are completely surrounded by 'X'.",
    "description": "Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'. A region is captured by flipping all 'O's into 'X's in that surrounded region.",
    "tags": ["Array", "Depth-First Search", "Breadth-First Search", "Union Find", "Matrix"],
    "intuition": "Any 'O' connected to the border cannot be captured. Traverse from all border 'O's to mark escapable cells, then flip remaining 'O's to 'X'.",
    "example": {
      "input": "board = [[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"O\",\"X\"],[\"X\",\"X\",\"O\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]",
      "output": "[[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]",
      "explanation": "Surrounded regions should not be on the border, which is why the bottom-most 'O' is untouched."
    },
    "hints": [
      "Iterate along the four edges of the grid and launch DFS/BFS from every 'O' found.",
      "Temporarily change border-connected 'O's to a placeholder character like 'E' before scanning the entire board."
    ],
    "testCases": [
      { "input": "board = [[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"O\",\"X\"],[\"X\",\"X\",\"O\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]", "output": "[[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]" }
    ],
    "leetcode": "https://leetcode.com/problems/surrounded-regions/",
    "gfg": "https://www.geeksforgeeks.org/given-matrix-o-x-replace-o-x-surrounded-x/"
  },
  {
    "slug": "walls-and-gates",
    "title": "Walls and Gates",
    "category": "Graphs",
    "difficulty": "Medium",
    "shortDescription": "Fill each empty room with the distance to its nearest gate.",
    "description": "You are given a 2D grid initialized with these values: -1 (A wall), 0 (A gate), and INF (An empty room). Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.",
    "tags": ["Array", "Breadth-First Search", "Matrix"],
    "intuition": "Instead of running BFS from every empty room, run a multi-source BFS starting simultaneously from all gates to guarantee shortest distances in a single pass.",
    "example": {
      "input": "rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]",
      "output": "[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]",
      "explanation": "Each room reflects its steps away from the closest 0 value."
    },
    "hints": [
      "Find all coordinates containing 0 and enqueue them at level 0.",
      "Update adjacent rooms only if their value is currently equal to INF."
    ],
    "testCases": [
      { "input": "rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]", "output": "[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]" }
    ],
    "leetcode": "https://leetcode.com/problems/walls-and-gates/",
    "gfg": "https://www.geeksforgeeks.org/walls-and-gates/"
  },
  {
    "slug": "open-the-lock",
    "title": "Open the Lock",
    "category": "Graphs",
    "difficulty": "Medium",
    "shortDescription": "Find the minimum total number of turns required to open a lock.",
    "description": "You have a lock with 4 circular wheels. Each wheel has 10 slots: '0' to '9'. The lock initially starts at '0000'. Given a list of deadends, return the minimum total number of turns required to reach the target slot, or -1 if impossible.",
    "tags": ["Array", "Hash Table", "String", "Breadth-First Search"],
    "intuition": "This can be modeled as finding the shortest path on a graph where each lock combination is a node with 8 neighbors. Use BFS to find the shortest path while avoiding deadends.",
    "example": {
      "input": "deadends = [\"0201\",\"0101\",\"0102\",\"1212\",\"2002\"], target = \"0202\"",
      "output": "6",
      "explanation": "A sequence of valid turns: \"0000\" -> \"1000\" -> \"1100\" -> \"1200\" -> \"1201\" -> \"1202\" -> \"0202\"."
    },
    "hints": [
      "Convert deadends to a Hash Set for O(1) lookups.",
      "If '0000' is in the deadends set, return -1 immediately."
    ],
    "testCases": [
      { "input": "deadends = [\"0201\",\"0101\",\"0102\",\"1212\",\"2002\"], target = \"0202\"", "output": "6" }
    ],
    "leetcode": "https://leetcode.com/problems/open-the-lock/",
    "gfg": "https://www.geeksforgeeks.org/open-the-lock/"
  },
  {
    "slug": "shortest-path-in-binary-matrix",
    "title": "Shortest Path in Binary Matrix",
    "category": "Graphs",
    "difficulty": "Medium",
    "shortDescription": "Find the length of the shortest clear path in a binary matrix.",
    "description": "Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1. Movement is allowed in 8 directions.",
    "tags": ["Array", "Breadth-First Search", "Matrix"],
    "intuition": "Use BFS since it guarantees finding the shortest path in an unweighted graph. Explore nodes in all 8 directions level-by-level.",
    "example": {
      "input": "grid = [[0,1],[1,0]]",
      "output": "2",
      "explanation": "The path consists of index (0,0) and index (1,1)."
    },
    "hints": [
      "If the start cell (0,0) or end cell (n-1,n-1) is 1, return -1 immediately.",
      "Track path lengths by storing `(row, col, distance)` in the queue."
    ],
    "testCases": [
      { "input": "grid = [[0,1],[1,0]]", "output": "2" },
      { "input": "grid = [[0,0,0],[1,1,0],[1,1,0]]", "output": "4" }
    ],
    "leetcode": "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
    "gfg": "https://www.geeksforgeeks.org/shortest-path-in-a-binary-maze/"
  },
  {
    "slug": "all-paths-from-source-to-target",
    "title": "All Paths From Source to Target",
    "category": "Graphs",
    "difficulty": "Medium",
    "shortDescription": "Find all possible paths from node 0 to node n-1.",
    "description": "Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.",
    "tags": ["Backtracking", "Bit Manipulation", "Graph", "Depth-First Search", "Breadth-First Search"],
    "intuition": "Since the graph is a Directed Acyclic Graph (DAG), use DFS with backtracking to find every path from 0 to n-1 without worrying about infinite cycles.",
    "example": {
      "input": "graph = [[1,2],[3],[3],[]]",
      "output": "[[0,1,3],[0,2,3]]",
      "explanation": "There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3."
    },
    "hints": [
      "Start a DFS at node 0 and keep adding elements to a path array.",
      "When the current node is equal to n - 1, append a copy of the path to the result list."
    ],
    "testCases": [
      { "input": "graph = [[1,2],[3],[3],[]]", "output": "[[0,1,3],[0,2,3]]" }
    ],
    "leetcode": "https://leetcode.com/problems/all-paths-from-source-to-target/",
    "gfg": "https://www.geeksforgeeks.org/find-paths-given-source-destination/"
  },
  {
    "slug": "min-cost-to-connect-all-points",
    "title": "Min Cost to Connect All Points",
    "category": "Graphs",
    "difficulty": "Medium",
    "shortDescription": "Connect all points with minimum total Manhattan distance.",
    "description": "You are given an array points representing integer coordinates of some points on a 2D-plane. The cost of connecting two points is the Manhattan distance between them. Return the minimum cost to make all points connected.",
    "tags": ["Array", "Union Find", "Graph", "Minimum Spanning Tree"],
    "intuition": "This is a Minimum Spanning Tree (MST) problem on a fully connected graph. Use Prim's or Kruskal's algorithm to greedily connect points at minimal cost.",
    "example": {
      "input": "points = [[0,0],[2,2],[3,10],[5,2],[7,0]]",
      "output": "20",
      "explanation": "Connecting points sequentially creates an MST with a Manhattan distance total of 20."
    },
    "hints": [
      "Prim's algorithm with a min-heap or simple array search runs in O(V^2), which is highly efficient for dense graphs.",
      "Manhattan distance is calculated as |x1 - x2| + |y1 - y2|."
    ],
    "testCases": [
      { "input": "points = [[0,0],[2,2],[3,10],[5,2],[7,0]]", "output": "20" }
    ],
    "leetcode": "https://leetcode.com/problems/min-cost-to-connect-all-points/",
    "gfg": "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/"
  },
  {
    "slug": "swim-in-rising-water",
    "title": "Swim in Rising Water",
    "category": "Graphs",
    "difficulty": "Hard",
    "shortDescription": "Find the minimum time to reach the bottom-right corner.",
    "description": "You are given an n x n integer matrix grid where each cell represents the elevation at that point. At time t, you can swim to any adjacent cell if the elevation of both cells is at most t. Return the least time to reach the bottom-right corner.",
    "tags": ["Array", "Binary Search", "Union Find", "Graph", "Breadth-First Search", "Matrix", "Heap (Priority Queue)"],
    "intuition": "Modify Dijkstra's algorithm. Instead of summing up edge weights, minimize the maximum elevation encountered along the path from start to end.",
    "example": {
      "input": "grid = [[0,2],[1,3]]",
      "output": "3",
      "explanation": "At time 3, the path 0 -> 1 -> 3 is passable. We must wait until time 3 to move."
    },
    "hints": [
      "Use a min-heap to always expand the path node that has the lowest maximum elevation.",
      "Keep track of visited cells to ensure you don't evaluate positions multiple times."
    ],
    "testCases": [
      { "input": "grid = [[0,2],[1,3]]", "output": "3" }
    ],
    "leetcode": "https://leetcode.com/problems/swim-in-rising-water/",
    "gfg": "https://www.geeksforgeeks.org/swim-in-rising-water-problem/"
  },
  {
    "slug": "cheapest-flights-within-k-stops",
    "title": "Cheapest Flights Within K Stops",
    "category": "Graphs",
    "difficulty": "Medium",
    "shortDescription": "Find the cheapest price from src to dst with at most k stops.",
    "description": "There are n cities connected by some number of flights. You are given an array flights where flights[i] = [from, to, price]. Return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.",
    "tags": ["Dynamic Programming", "Graph", "Breadth-First Search", "Shortest Path", "Heap (Priority Queue)"],
    "intuition": "Use the Bellman-Ford algorithm executed exactly k + 1 times, or a modified BFS tracking the minimum cost to reach each node within a specific number of steps.",
    "example": {
      "input": "n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1",
      "output": "700",
      "explanation": "The optimal path goes 0 -> 1 -> 3 with 1 stop at a cost of 700. Path 0 -> 1 -> 2 -> 3 requires 2 stops."
    },
    "hints": [
      "Standard Dijkstra can fail if a more expensive path uses fewer stops but unlocks a valid solution later.",
      "Maintain a running list of distances and duplicate it on each of the k iterations to prevent updates within the same step."
    ],
    "testCases": [
      { "input": "n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1", "output": "700" }
    ],
    "leetcode": "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
    "gfg": "https://www.geeksforgeeks.org/cheapest-flights-within-k-stops/"
  },
  {
    "slug": "is-graph-bipartite",
    "title": "Is Graph Bipartite?",
    "category": "Graphs",
    "difficulty": "Medium",
    "shortDescription": "Check if a graph can be partitioned into two independent sets.",
    "description": "Given an undirected graph, return true if it is bipartite. A graph is bipartite if we can split its nodes into two independent sets A and B such that every edge in the graph connects a node in set A and a node in set B.",
    "tags": ["Depth-First Search", "Breadth-First Search", "Union Find", "Graph"],
    "intuition": "A graph is bipartite if and only if it can be colored using two colors such that no two adjacent nodes share the same color.",
    "example": {
      "input": "graph = [[1,2,3],[0,2],[0,1,3],[0,2]]",
      "output": "false",
      "explanation": "Nodes 0 and 2 are adjacent but connected to the same neighboring nodes, making valid two-coloring impossible."
    },
    "hints": [
      "Use BFS or DFS to color nodes with 1 and -1.",
      "The graph may not be fully connected; make sure to loops through all nodes to handle disconnected components."
    ],
    "testCases": [
      { "input": "graph = [[1,2,3],[0,2],[0,1,3],[0,2]]", "output": "false" },
      { "input": "graph = [[1,3],[0,2],[1,3],[0,2]]", "output": "true" }
    ],
    "leetcode": "https://leetcode.com/problems/is-graph-bipartite/",
    "gfg": "https://www.geeksforgeeks.org/bipartite-graph/"
  },
  {
    "slug": "snakes-and-ladders",
    "title": "Snakes and Ladders",
    "category": "Graphs",
    "difficulty": "Medium",
    "shortDescription": "Find the minimum least die rolls to reach the last square.",
    "description": "You are given an n x n integer matrix board where the cells are labeled from 1 to n^2 in a Boustrophedon style. Return the least number of moves required to reach the square n^2. If it is not possible, return -1.",
    "tags": ["Array", "Breadth-First Search", "Matrix"],
    "intuition": "This is an unweighted shortest path problem on a directed graph. Use BFS where each state represents a board square and transitions are the 1-6 outcomes of a die roll.",
    "example": {
      "input": "board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]",
      "output": "4",
      "explanation": "Roll a die to land on the ladder at square 2 to climb up to square 15, and proceed with optimal jumps."
    },
    "hints": [
      "Write a helper function to convert a 1D square number (1 to n^2) into its corresponding 2D matrix row and column coordinates.",
      "If a destination square contains a snake or ladder, you must move to its target value immediately."
    ],
    "testCases": [
      { "input": "board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]", "output": "4" }
    ],
    "leetcode": "https://leetcode.com/problems/snakes-and-ladders/",
    "gfg": "https://www.geeksforgeeks.org/snake-ladder-problem-2/"
  },
  {
    "slug": "reconstruct-itinerary",
    "title": "Reconstruct Itinerary",
    "category": "Graphs",
    "difficulty": "Hard",
    "shortDescription": "Reconstruct a flight itinerary in lexical order starting from 'JFK'.",
    "description": "You are given a list of airline tickets where tickets[i] = [from, to] represent the departure and arrival airports. Reconstruct the itinerary in order and return it. All of the tickets must be used exactly once, starting from 'JFK'.",
    "tags": ["Depth-First Search", "Graph", "Eulerian Circuit"],
    "intuition": "This problem asks for an Eulerian path on a directed graph. Use Hierholzer's algorithm via DFS. Sort neighbors lexicographically first, and build the path in reverse post-order.",
    "example": {
      "input": "tickets = [[\"MUC\",\"LHR\"],[\"JFK\",\"MUC\"],[\"SFO\",\"SJC\"],[\"LHR\",\"SFO\"]]",
      "output": "[\"JFK\",\"MUC\",\"LHR\",\"SFO\",\"SJC\"]",
      "explanation": "All flights are consumed sequentially starting from JFK."
    },
    "hints": [
      "Map each source airport to a min-heap or sorted list of targets to ensure lexical ordering.",
      "Pop edges from the graph as you traverse them. Append airports to the result only after all their outgoing flights are exhausted."
    ],
    "testCases": [
      { "input": "tickets = [[\"MUC\",\"LHR\"],[\"JFK\",\"MUC\"],[\"SFO\",\"SJC\"],[\"LHR\",\"SFO\"]]", "output": "[\"JFK\",\"MUC\",\"LHR\",\"SFO\",\"SJC\"]" }
    ],
    "leetcode": "https://leetcode.com/problems/reconstruct-itinerary/",
    "gfg": "https://www.geeksforgeeks.org/hierholzers-algorithm-directed-graph/"
  }
,  {
    "slug": "decode-string",
    "title": "Decode String",
    "category": "Stack",
    "difficulty": "Medium",
    "shortDescription": "Decode an encoded string with bracket repeat frequencies.",
    "description": "Given an encoded string, return its decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. You may assume that the input string is always valid.",
    "tags": ["String", "Stack", "Recursion"],
    "intuition": "Use stacks to maintain states. When hitting '[', push the current string and current multiplier onto their respective stacks and reset them. When hitting ']', pop and combine.",
    "example": {
      "input": "s = \"3[a]2[bc]\"",
      "output": "\"aaabcbc\"",
      "explanation": "'a' is repeated 3 times, 'bc' is repeated 2 times."
    },
    "hints": [
      "Use two separate stacks: one for numbers (k) and one for strings.",
      "Accumulate characters directly into a building string until an opening or closing bracket triggers an alternative state action."
    ],
    "testCases": [
      { "input": "s = \"3[a]2[bc]\"", "output": "\"aaabcbc\"" },
      { "input": "s = \"3[a2[c]]\"", "output": "\"accaccacc\"" }
    ],
    "leetcode": "https://leetcode.com/problems/decode-string/",
    "gfg": "https://www.geeksforgeeks.org/decode-string-recursively-encoded-count/"
  },
  {
    "slug": "largest-rectangle-in-histogram",
    "title": "Largest Rectangle in Histogram",
    "category": "Stack",
    "difficulty": "Hard",
    "shortDescription": "Find the area of the largest rectangle in a histogram.",
    "description": "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    "tags": ["Array", "Stack", "Monotonic Stack"],
    "intuition": "For each bar, find the width of the rectangle it can form by locating the first smaller bar to its left and right using a monotonic increasing stack.",
    "example": {
      "input": "heights = [2,1,5,6,2,3]",
      "output": "10",
      "explanation": "The largest rectangle is formed by bars [5, 6] with an area equal to 10 units."
    },
    "hints": [
      "Maintain a stack of indices with increasing heights.",
      "When a smaller height is found, pop elements from the stack and compute the area using the popped height as the minimum boundary height."
    ],
    "testCases": [
      { "input": "heights = [2,1,5,6,2,3]", "output": "10" },
      { "input": "heights = [2,4]", "output": "4" }
    ],
    "leetcode": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    "gfg": "https://www.geeksforgeeks.org/largest-rectangle-under-histogram/"
  },
  {
    "slug": "sum-of-subarray-minimums",
    "title": "Sum of Subarray Minimums",
    "category": "Stack",
    "difficulty": "Medium",
    "shortDescription": "Find the sum of minimum values of all continuous subarrays.",
    "description": "Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 10^9 + 7.",
    "tags": ["Array", "Dynamic Programming", "Stack", "Monotonic Stack"],
    "intuition": "Find how many subarrays have a given element arr[i] as their minimum. This is determined by the distance to the Previous Less Element (PLE) and Next Less Element (NLE).",
    "example": {
      "input": "arr = [3,1,2,4]",
      "output": "17",
      "explanation": "Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1. Sum is 17."
    },
    "hints": [
      "Use a monotonic stack to precalculate distances to the previous and next smaller elements.",
      "The total contribution of an element arr[i] is arr[i] * (left_distance) * (right_distance). Watch out for duplicates by handling strict vs non-strict inequalities."
    ],
    "testCases": [
      { "input": "arr = [3,1,2,4]", "output": "17" },
      { "input": "arr = [11,81,94,43,3]", "output": "444" }
    ],
    "leetcode": "https://leetcode.com/problems/sum-of-subarray-minimums/",
    "gfg": "https://www.geeksforgeeks.org/sum-of-minimum-elements-of-all-subarrays/"
  }
,  {
    slug: "wildcard-matching",
    title: "Wildcard Matching",
    category: "Dynamic Programming",
    difficulty: "Hard",
    shortDescription: "Implement wildcard matching supporting '?' and '*'.",
    description: "Given an input string s and a pattern p, implement wildcard pattern matching with support for '?' (matches single char) and '*' (matches any sequence of characters).",
    tags: ["String", "Dynamic Programming", "Greedy", "Backtracking"],
    intuition: "Use 2D dynamic programming or a greedy two-pointer strategy. When handling '*', match it with zero characters or consume elements iteratively.",
    example: {
      input: "s = \"aa\", p = \"*\"",
      output: "true",
      explanation: "'*' matches any sequence, including blank strings."
    },
    hints: [
      "Unlike regex matching, '*' in wildcard stands independently and does not depend on the preceding character element",
      "Track rollback pointers to revert when speculative '*' consumption sequences hit a mismatch down line"
    ],
    testCases: [
      { input: "\"aa\", \"*\"", output: "true" },
      { input: "\"cb\", \"?a\"", output: "false" }
    ],
    leetcode: "https://leetcode.com/problems/wildcard-matching/",
    gfg: "https://www.geeksforgeeks.org/wildcard-pattern-matching/"
  },

  {
    slug: "n-queens-ii",
    title: "N-Queens II",
    category: "Backtracking",
    difficulty: "Hard",
    shortDescription: "Count the total distinct N-Queens solutions.",
    description: "Given an integer n, return the total number of distinct solutions to the n-queens puzzle configuration.",
    tags: ["Backtracking"],
    intuition: "Utilize the exact same row placement backtracking mechanics as N-Queens I, but optimize the logic to increment a simple integer counter rather than generating string boards.",
    example: {
      input: "4",
      output: "2",
      explanation: "There are two unique placements achievable on a 4x4 layout grid."
    },
    hints: [
      "Use quick bitmask updates or arrays to track occupied status across column and diagonal lines",
      "Unset verification markers when backtracking to keep calculations clean"
    ],
    testCases: [
      { input: "4", output: "2" },
      { input: "1", output: "1" }
    ],
    leetcode: "https://leetcode.com/problems/n-queens-ii/",
    gfg: "https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/"
  },

  {
    slug: "reverse-nodes-in-k-group",
    title: "Reverse Nodes in k-Group",
    category: "Linked List",
    difficulty: "Hard",
    shortDescription: "Reverse linked list nodes k at a time.",
    description: "Given the head of a linked list, reverse the nodes of the list k at a time and return its modified head. Leftover elements at the end remain unchanged.",
    tags: ["Linked List", "Recursion"],
    intuition: "Verify if there are at least k nodes ahead. If yes, reverse that segment in-place and recursively call the function to attach to the next k-group sub-chain tail.",
    example: {
      input: "head = [1,2,3,4,5], k = 2",
      output: "[2,1,4,3,5]",
      explanation: "Nodes are reversed in blocks of 2, leaving 5 trailing intact."
    },
    hints: [
      "Isolate subsegment tracking pointers carefully before flipping pointer links",
      "If the remaining node count is less than k, leave them in their original sequence configuration"
    ],
    testCases: [
      { input: "[1,2,3,4,5], 2", output: "[2,1,4,3,5]" }
    ],
    leetcode: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    gfg: "https://www.geeksforgeeks.org/reverse-linked-list-groups-given-size/"
  },

  {
    slug: "critical-connections-in-a-network",
    title: "Critical Connections in a Network",
    category: "Graphs",
    difficulty: "Hard",
    shortDescription: "Find bridges in a graph (Tarjan's algorithm).",
    description: "Find all bridges in an undirected connected graph. Bridges are critical connections whose deletion breaks graph connectivity.",
    tags: ["Depth-First Search", "Graph", "Biconnected Component"],
    intuition: "Apply Tarjan's or Kosaraju's bridge-finding discovery algorithm using DFS tracking. Maintain node entry times and lowest reachable ancestry discovery timestamps.",
    example: {
      input: "n = 4, connections = [[0,1],[1,2],[2,3],[3,0]]",
      output: "[[1,3]] equivalent matching formats",
      explanation: "Deleting any cyclic links leaves connections intact; true isolates are retrieved."
    },
    hints: [
      "A connection (u, v) is a bridge if and only if the lowest timestamp reachable from v is strictly greater than the entry discovery time of u",
      "Avoid traveling back directly to an immediate parent node during DFS steps"
    ],
    testCases: [
      { input: "4, [[0,1],[1,2],[2,3],[3,4]]", output: "[[3,4]]" }
    ],
    leetcode: "https://leetcode.com/problems/critical-connections-in-a-network/",
    gfg: "https://www.geeksforgeeks.org/bridge-in-a-graph/"
  },

  {
    slug: "remove-invalid-parentheses",
    title: "Remove Invalid Parentheses",
    category: "Backtracking",
    difficulty: "Hard",
    shortDescription: "Remove min brackets to make string valid.",
    description: "Remove the minimum number of invalid parentheses to make the input string valid. Return all possible results without generating duplicates.",
    tags: ["String", "Backtracking", "Breadth-First Search"],
    intuition: "First count the exact number of misplaced open and close brackets. Use backtracking to prune branches by removing only the necessary number of brackets.",
    example: {
      input: "\"()())()\"",
      output: "[\"(())()\",\"()()()\"]",
      explanation: "One bracket removal is required to balance configurations."
    },
    hints: [
      "Alternatively, use BFS to process items level-by-level, returning the current level contents immediately when valid patterns appear",
      "Use a Set collection to block generating duplicate variations during character processing steps"
    ],
    testCases: [
      { input: "\"()())()\"", output: "[\"(())()\",\"()()()\"]" }
    ],
    leetcode: "https://leetcode.com/problems/remove-invalid-parentheses/",
    gfg: "https://www.geeksforgeeks.org/remove-invalid-parentheses/"
  },

  {
    slug: "word-break-ii",
    title: "Word Break II",
    category: "Dynamic Programming",
    difficulty: "Hard",
    shortDescription: "Generate all valid word sentence assemblies.",
    description: "Given a string s and a dictionary, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.",
    tags: ["Hash Table", "String", "Dynamic Programming", "Backtracking", "Memoization"],
    intuition: "Combine backtracking with memoization. Iterate across character splits, look up sub-fragments inside the dictionary, and combine strings recursively.",
    example: {
      input: "s = \"catsanddog\", dict = [\"cat\",\"cats\",\"and\",\"sand\",\"dog\"]",
      output: "[\"cats and dog\",\"cat sand dog\"]",
      explanation: "All valid combination configurations are tracked into arrays."
    },
    hints: [
      "Use a HashMap cache where keys are string suffix positions to store computed combinations and bypass exponential recalculation paths",
      "Prune recursion steps early if pruning matches confirm that a substring segment is invalid"
    ],
    testCases: [
      { input: "\"catsanddog\", [\"cat\",\"cats\",\"and\",\"sand\",\"dog\"]", output: "[\"cats and dog\",\"cat sand dog\"]" }
    ],
    leetcode: "https://leetcode.com/problems/word-break-ii/",
    gfg: "https://www.geeksforgeeks.org/word-break-problem-dp-32/"
  },

  {
    slug: "frog-jump",
    title: "Frog Jump",
    category: "Dynamic Programming",
    difficulty: "Hard",
    shortDescription: "Check if frog can cross river via steps.",
    description: "A frog is crossing a river by jumping on stones. If the frog's last jump was k units, its next jump must be either k-1, k, or k+1 units. Determine if it can reach the last stone.",
    tags: ["Array", "Dynamic Programming"],
    intuition: "Maintain a Map where keys represent stone coordinates and values contain a Set tracking the jump sizes that can land on that stone.",
    example: {
      input: "[0,1,3,5,6,8,12,17]",
      output: "false",
      explanation: "The gaps between 12 and 17 prevent jump tracking configurations from reaching the end."
    },
    hints: [
      "The first jump from stone 0 must always be exactly 1 unit",
      "For each stone position, look forward and add future valid jump parameters to downstream stone destinations"
    ],
    testCases: [
      { input: "[0,1,3,5,6,8,12,17]", output: "false" }
    ],
    leetcode: "https://leetcode.com/problems/frog-jump/",
    gfg: "https://www.geeksforgeeks.org/frog-jump-problem/"
  },

  {
    slug: "expression-add-operators",
    title: "Expression Add Operators",
    category: "Backtracking",
    difficulty: "Hard",
    shortDescription: "Insert +, -, * to evaluate to target value.",
    description: "Given a string num containing only digits and an integer target, return all possibilities to insert binary operators '+', '-', and/or '*' so that the expression evaluates to the target value.",
    tags: ["String", "Backtracking"],
    intuition: "Track evaluations line-by-line using a backtracking search. When handling multiplication, pass along the previously processed element value to adjust operator precedence rules cleanly.",
    example: {
      input: "num = \"123\", target = 6",
      output: "[\"1+2+3\",\"1*2*3\"]",
      explanation: "Both expression combinations equate to target requirements."
    },
    hints: [
      "Watch out for leading zeroes in subsegments, which are invalid (e.g., '05')",
      "Maintain a tracking operand variable to subtract and adjust when processing high-precedence '*' evaluations"
    ],
    testCases: [
      { input: "\"123\", 6", output: "[\"1+2+3\",\"1*2*3\"]" }
    ],
    leetcode: "https://leetcode.com/problems/expression-add-operators/",
    gfg: "https://www.geeksforgeeks.org/print-all-possible-expressions-that-evaluate-to-a-target/"
  },
] 