class Solution:
  
    def encode(self, strs):
        giant_box = ""
        
        for word in strs:
           
            giant_box += str(len(word)) + "#" + word
            
        return giant_box

    
    def decode(self, s):
        unpacked_items = []
        i = 0  
        
        while i < len(s):
            
            j = i
            while s[j] != "#":
                j += 1
                
            
            length_of_word = int(s[i:j])
            
            
            start_of_word = j + 1
            end_of_word = j + 1 + length_of_word
            actual_word = s[start_of_word : end_of_word]
            
            unpacked_items.append(actual_word)
            
            
            i = end_of_word
            
        return unpacked_items