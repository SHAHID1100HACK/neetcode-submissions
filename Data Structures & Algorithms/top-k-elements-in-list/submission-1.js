class Solution {
    topKFrequent(nums, k) {
        
        const tallySheet = {};
        for (let num of nums) {
            if (num in tallySheet) {
                tallySheet[num] += 1;
            } else {
                tallySheet[num] = 1;
            }
        }
        
        const leaderboard = Object.entries(tallySheet);
        
        leaderboard.sort((a, b) => b[1] - a[1]);
        
        const winners = [];
        for (let i = 0; i < k; i++) {
            winners.push(Number(leaderboard[i][0]));
        }
        
        return winners;
    }
}