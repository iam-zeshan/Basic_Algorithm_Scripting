/*
Again, I've made an Algorithm, If the last letters were matching then, it should return True otherwise it would return false.

Challange:
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");
*/

function confirmEnding(str, target) {
    let targetL = target.length;
    let finaly = str.length - targetL;
    if (str.substring(finaly) === target)
    {
      return true;
    }else
    {
      return false
    }
    //  return str.substring(finaly);
  }
  
  console.log(confirmEnding("Open sesame", "same"));