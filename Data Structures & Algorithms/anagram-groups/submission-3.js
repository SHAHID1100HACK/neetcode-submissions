class Solution{
    groupAnagrams(strs) {

        const fileCabinet = {};
        for(let word of strs) {

            const sortedWord = word.split('').sort().join('');

            if(!(sortedWord in fileCabinet)) {
                fileCabinet[sortedWord] = [];

            }
            fileCabinet[sortedWord].push(word);

        }

        return Object.values(fileCabinet);

    }
}