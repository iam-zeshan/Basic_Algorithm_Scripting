/*
In this challange, I've learned, how we can reverse the elements in a string.

Challange:
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

function reverseString(str) {
  return str;
}

reverseString("hello");

*/

function reverseString(str) {
    let arr = [...str];
    let reverseArr = [];
    let arrLength = arr.length
    for (let i = 0; i < arr.length; i++)
    {
      arrLength--; 
      reverseArr[i] = arr[arrLength];
    }
    return reverseArr.join("");
  }
  
  console.log(reverseString("Howday"));