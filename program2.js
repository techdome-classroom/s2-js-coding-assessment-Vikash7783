function romanToInt(s) {
    // Mapping of Roman numerals to their integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    // Iterate through the Roman numeral from right to left
    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanMap[s[i]];

        // If the current value is less than the previous value, subtract it
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }

        // Update the previous value to the current value
        prevValue = currentValue;
    }

    return total;
}

// Example usage
console.log(romanToInt("III"));       // Output: 3
console.log(romanToInt("LVIII"));     // Output: 58
console.log(romanToInt("MCMXCIV"));   // Output: 1994
