/*
I've built the Algorithm to find the longest length of word in the given string.


Challange:
Return the length of the longest word in the provided sentence.
Your response should be a number.

function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

*/

function findLongestWordLength(str) {
    let newStr = [];
    newStr = str.split(" ");
    let longestLengthWord = 0;
    for (let i = 0; i < newStr.length; i++)
    {
      if (newStr[i].length > longestLengthWord)
      {
        longestLengthWord = newStr[i].length;
      }
    }
  
    return longestLengthWord;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));