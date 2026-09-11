class Solution {
    isAnagram(s, t) {
        // Step 1: If they are different lengths, they can't be anagrams!
        if (s.length !== t.length) {
            return false;
        }
        
        // Step 2: Create blank tally sheets (Objects in JavaScript)
        const tallyS = {};
        const tallyT = {};
        
        // Step 3: Count every letter in the first word (s)
        for (let letter of s) {
            if (letter in tallyS) {
                tallyS[letter] += 1;  // Add a tally mark
            } else {
                tallyS[letter] = 1;   // Write the letter down for the first time
            }
        }
        
        // Step 4: Count every letter in the second word (t)
        for (let letter of t) {
            if (letter in tallyT) {
                tallyT[letter] += 1;
            } else {
                tallyT[letter] = 1;
            }
        }
        
        // Step 5: Compare the two tally sheets
        for (let letter in tallyS) {
            if (tallyS[letter] !== tallyT[letter]) {
                return false; 
            }
        }
        
        return true;
    }
}