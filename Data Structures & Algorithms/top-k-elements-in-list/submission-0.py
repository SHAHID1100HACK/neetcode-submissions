class Solution:
    def topKFrequent(self, nums, k):
        
        tally_sheet = {}
        for num in nums:
            if num in tally_sheet:
                tally_sheet[num] += 1
            else:
                tally_sheet[num] = 1
                
        leaderboard = []
        for num in tally_sheet:
            votes = tally_sheet[num]
            leaderboard.append((votes, num))
            
        leaderboard.sort(reverse=True)
        
        winners = []
        for i in range(k):
            winners.append(leaderboard[i][1])
            
        return winners