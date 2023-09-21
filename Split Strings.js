/*
Split Strings

ESCRIPTION:

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

SOLUTION: 
*/

function solution(str){
  let result = [];
   if (str.length % 2 === 0) {
     for (let i = 0; i < str.length - 1; i += 2) {
      pairLetters = str[i]+str[i+1]
       result.push(pairLetters)
     }
   } else {
    for (let i = 0; i < str.length; i += 2) {
      pairLetters = str[i]+str[i+1]
      if (str[i + 1] === undefined) {
        pairLetters = str[i]+'_'
      }
       result.push(pairLetters)
     }
   }
   return result
