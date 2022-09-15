/*
I've build another algorithm, which will return the factorial of any number.

Challange:
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  return num;
}

factorialize(5);

*/

function factorialize(num) {
    if (num === 0)
    {
      return 1;
    }else
    {
      let counter = num - 1;
      while(counter > 0)
      {
        num *= counter;
        counter --;
      }
      return num;
    }
  }
  
  console.log(factorialize(5));