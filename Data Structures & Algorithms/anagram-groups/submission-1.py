class Solution:
    def groupAnagrams(self , strs):

        file_cabinet = {}

        for word in strs:

            sorted_word = "".join(sorted(word))

            if sorted_word not in file_cabinet:
                file_cabinet[sorted_word] = []
            
            file_cabinet[sorted_word].append(word)


        return list(file_cabinet.values())