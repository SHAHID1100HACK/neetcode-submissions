import collections

class Solution:
    def isValidSudoku(self, board):
        rows = collections.defaultdict(set)
        cols = collections.defaultdict(set)
        boxes = collections.defaultdict(set)
        
        for r in range(9):
            for c in range(9):
                
                val = board[r][c]
                
                if val == ".":
                    continue
                
                box_coord = (r // 3, c // 3)
                
                if (val in rows[r]) or (val in cols[c]) or (val in boxes[box_coord]):
                    return False 
                    
                rows[r].add(val)
                cols[c].add(val)
                boxes[box_coord].add(val)
                
        return True