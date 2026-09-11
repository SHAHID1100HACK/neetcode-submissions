class Solution:
    def twoSum(self, nums, target):
        
        # Step 1: Create our empty Wanted Poster board (Dictionary)
        seen = {}
        
        # Step 2: Loop through the menu.
        # 'enumerate' gives us BOTH the index (i) and the price (current_price) at the same time!
        for i, current_price in enumerate(nums):
            
            needed_price = target - current_price
            
            # Step 3: Check if the number we need is already on the board
            if needed_price in seen:
                # If yes, grab the index from the board, and our current index
                return [seen[needed_price], i]
                
            # Step 4: If not, pin our current price and index to the board
            seen[current_price] = i