class Solution {
    

    encode(strs) {
        let giantBox = "";
        
        for (let word of strs) {
            
            giantBox += word.length + "#" + word;
        }
        
        return giantBox;
    }

    
    decode(str) {
        const unpackedItems = [];
        let i = 0; 
        
        while (i < str.length) {
            
            let j = i;
            while (str[j] !== '#') {
                j++;
            }
            
            
            const lengthOfWord = parseInt(str.substring(i, j));
            
            
            const startOfWord = j + 1;
            const endOfWord = j + 1 + lengthOfWord;
            const actualWord = str.substring(startOfWord, endOfWord);
            
            unpackedItems.push(actualWord);
            
            
            i = endOfWord;
        }
        
        return unpackedItems;
    }
}