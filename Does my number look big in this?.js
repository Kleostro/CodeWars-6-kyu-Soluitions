/*
 Does my number look big in this?

ESCRIPTION:

  A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
  
  For example, take 153 (3 digits), which is narcissistic:
  
      1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
  and 1652 (4 digits), which isn't:
  
      1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

SOLUTION: 
*/
function narcissistic(value) {
  let valueArr = Array.from(String(value), Number)
  let sumArr = []
  let sum = 0
  for(let i = 0; i < valueArr.length; i++) {
    sumArr.push(Math.pow(valueArr[i], valueArr.length))
  }
  sum = sumArr.reduce((a, b) => a + b, 0)
  return sum === value
}
