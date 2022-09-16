/*
Challenge:
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

*/


function titleCase(str) {
    let lowerCaseString = str.toLowerCase();
    let newStr = "";
  
    let numSplit = lowerCaseString.split(" ");
    // return str.charAt(6).toUpperCase() + str.slice(1);
  
    for (let i = 0; i < numSplit.length; i++) {
      let newWord = numSplit[i];
      newStr = newStr.concat(newWord.charAt(0).toUpperCase() + newWord.slice(1) + " ");
    }
    return newStr;
  } 
  
  console.log(titleCase("I'm a little tea pot"));