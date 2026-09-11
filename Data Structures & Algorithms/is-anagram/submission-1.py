class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # Step 1: If they are different lengths, they can't be anagrams!
        if len(s) != len(t):
            return False
        
        # Step 2: Create blank tally sheets (Dictionaries)
        tally_s = {}
        tally_t = {}
        
        # Step 3: Count every letter in the first word (s)
        for letter in s:
            if letter in tally_s:
                tally_s[letter] += 1  # Add a tally mark
            else:
                tally_s[letter] = 1   # Write the letter down for the first time
                
        # Step 4: Count every letter in the second word (t)
        for letter in t:
            if letter in tally_t:
                tally_t[letter] += 1
            else:
                tally_t[letter] = 1
                
        # Step 5: Compare the two tally sheets
        if tally_s == tally_t:
            return True
        else:
            return False