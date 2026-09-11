class Solution {
    hasDuplicate(nums) {
        // Create our blank scrap paper
        const seen = new Set();
        
        // Loop through every number in the array
        for (let num of nums) {
            
            // Check if we already wrote this number down
            if (seen.has(num)) {
                return true;
            }
            
            // If not, write it down on the scrap paper
            seen.add(num);
        }
        
        // If the loop finishes, all numbers are unique
        return false;
    }
}