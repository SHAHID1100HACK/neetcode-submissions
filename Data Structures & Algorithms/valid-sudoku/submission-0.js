class Solution {
    isValidSudoku(board) {
        const rows = {};
        const cols = {};
        const boxes = {};
        
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                
                const val = board[r][c];
                
                if (val === ".") {
                    continue;
                }
                
                const boxCoord = Math.floor(r / 3) + "," + Math.floor(c / 3);
                
                if (!rows[r]) rows[r] = new Set();
                if (!cols[c]) cols[c] = new Set();
                if (!boxes[boxCoord]) boxes[boxCoord] = new Set();
                
                if (rows[r].has(val) || cols[c].has(val) || boxes[boxCoord].has(val)) {
                    return false; 
                }
                
                rows[r].add(val);
                cols[c].add(val);
                boxes[boxCoord].add(val);
            }
        }
        
        return true;
    }
}