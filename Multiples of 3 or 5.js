/*
Multiples of 3 or 5

ESCRIPTION:

  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
  
  Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
  
  Additionally, if the number is negative, return 0.
  
  Note: If the number is a multiple of both 3 and 5, only count it once.

SOLUTION: 
*/
const solution = (number) => {
  let arr3 = []
  let arr5 = []
  let sumArr = []
  if (number < 0) {
    return 0
  } else {
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0) {
        arr3.push(i)
      }
      if (i % 5 === 0 && i % 3 !== 0) {
        arr5.push(i)
      }
    }
    sumArr = [...arr3, ...arr5]
    return sumArr.reduce((a, b) => a + b, 0)
  }
}
