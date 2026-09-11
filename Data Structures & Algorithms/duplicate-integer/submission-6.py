class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        
        # Step 1: Sort the list (put the cards in order)
        nums.sort()
        
        # Step 2: Walk down the line, stopping at the second-to-last card
        for i in range(len(nums) - 1):
            
            # Step 3: Check if this card matches the one to its right
            if nums[i] == nums[i + 1]:
                return True
                
        # Step 4: If we check all neighbors and find no matches
        return False