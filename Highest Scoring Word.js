/*
Highest Scoring Word

ESCRIPTION:

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

SOLUTION: 
*/

function high(x){

    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const textArr = x.split(' ');
    let sumArr = [];

    for (let i = 0; i < textArr.length; i++) {
        let textCharsArr = textArr[i].split('')
        let sum = 0;

        for (let j = 0; j < textCharsArr.length; j++) {
            let currentChar = alphabet.indexOf(textCharsArr[j])
            sum += currentChar + 1;
        }
        sumArr.push(sum)
    }
    let bigSum = Math.max(...sumArr)
    let resultSum = sumArr.indexOf(bigSum)
    let result = textArr[resultSum]
    return result
}
