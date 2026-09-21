class Solution:
    def twoSum(self, nums, target):
        
        
        seen = {}
        
        for i, current_price in enumerate(nums):
            
            needed_price = target - current_price
            
            if needed_price in seen:
                return [seen[needed_price], i]
                
            seen[current_price] = i