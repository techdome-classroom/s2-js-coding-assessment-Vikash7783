function isValid(s) {
    // Initialize a stack to keep track of opening brackets
    const stack = [];
    // Mapping of closing to opening brackets
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // Iterate through each character in the string
    for (const char of s) {
        if (mapping[char]) { // If it's a closing bracket
            // Check if the stack is empty or if the top doesn't match
            if (stack.length === 0 || stack.pop() !== mapping[char]) {
                return false;
            }
        } else { // If it's an opening bracket
            stack.push(char);
        }
    }

    // Return true if the stack is empty (all brackets matched)
    return stack.length === 0;
}

// Example usage
console.log(isValid("()"));        // Output: true
console.log(isValid("()[]{}"));    // Output: true
console.log(isValid("(]"));        // Output: false

