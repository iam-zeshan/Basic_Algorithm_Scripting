/*
Challenge:
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

*/

function chunkArrayInGroups(arr, size) {
    let newArr = [];
    let counter = 0;
    let iterator = size;
    for (let i = 0; i < iterator; i++)
    {
      if (arr.length%2 === 0)
      {
      newArr.push(arr.slice(counter, size));
      counter += size;
      size += size;
      }else {
        break;
      }
    }
    return newArr;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

  // I've got an emergency, that's why a little bit work is remaining in this challenge!!!!!!!!!!!!!!