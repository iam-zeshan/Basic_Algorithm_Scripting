/*
In JavaScript we need to be capable of solving a problem by building an Algorithm. To make an algorithm we need to first understand the problem and then we need to divide that problem into little chunks, by doing this so, we can solve these problem easily.

In this challange, I've made an Algorithm to convert the temperature which was in celius into Farenheit.

Challange:
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

function convertCtoF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertCtoF(30);
*/

function convertCtoF(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
  }
  
  convertCtoF(30);