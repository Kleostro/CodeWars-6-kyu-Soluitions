/*
Your order, please

ESCRIPTION:
  
  Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
  
  Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
  
  If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
  
  Examples
  "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
  "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
  ""  -->  ""

SOLUTION: 
*/
function order(words){
  let arr = words.split(' ')
  let arr2 = []
  let arr3 = []
  let result = []
  console.log(arr);
  if(words !== '') {
    for(let i = 0; i < arr.length; i++) {
      arr2.push(arr[i].match(/\d+/))
      console.log(arr2);
    }
    for(let i = 0; i < arr2.length; i++) {
      arr3.push([arr2[i].index = arr2[i][0], arr2[i].input])
    }

    arr3 = arr3.sort()

    for(let i = 0; i < arr3.length; i++) {
      result.push(arr3[i][1])
    }
    return result.join(' ')
  } else {
    return ''
  }
}
