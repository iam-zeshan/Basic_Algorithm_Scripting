/*
Challenge:
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  return num;
}

getIndexToIns([40, 60], 50);
*/


function getIndexToIns(arr, num) {
    let ArrL = arr.length;
    arr.sort((a, b) => (a - b))
    if (arr.length === 0) {
      return 0;
    } else if (arr[ArrL-1] < num) {
      arr.push(num);
      return ArrL;
    }else if(arr[0] === num)
    {
      return 0;
    }else {
      for (let i = 0; i <= ArrL; i++) {
        if (arr[i] >= num) {
          arr.splice(i, 0, num);
          return i;
        }
      }
    }
  }
  console.log(getIndexToIns([2, 20, 10], 19));