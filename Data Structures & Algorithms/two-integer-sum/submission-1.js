class Solution {
    twoSum(nums, target) {
        // Step 1: Create our empty Wanted Poster board
        const seen = {}; 
        
        // Step 2: Loop through the menu, but this time we need the item numbers (indices), so we use a classic 'for' loop
        for (let i = 0; i < nums.length; i++) {
            
            const currentPrice = nums[i];
            const neededPrice = target - currentPrice;
            
            // Step 3: Check if the number we need is already on the board
            if (neededPrice in seen) {
                // If yes, return the item number from the board, and our current item number!
                return [seen[neededPrice], i];
            }
            
            // Step 4: If not, pin our current price and item number to the board for later
            seen[currentPrice] = i;
        }
    }
}