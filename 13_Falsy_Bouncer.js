/*

In JavaScript these below values are called falsy values:
false, null, 0, "", undefined, and NaN

*/

function bouncer(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++)
    {
      if (arr[i])
      {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  console.log(bouncer([false, "ate", "", false, 9]));