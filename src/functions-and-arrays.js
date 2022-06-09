// Iteration #1: Find the maximum
function maxOfTwoNumbers(x,y) {
  if (x>y) {
    return x
  } else {
    return y
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arr) { if (arr.length ===0){
  return null
} 
  let longestword = ''
  
  for (let i = 0; i < arr.length; i++) {

    if(arr.length===0){
      return null
    }
    if (arr[i].length > longestword.length) {
      longestword = arr[i]
    }
  }
  console.log(longestword)
  return longestword;
}

findLongestWord(words)

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(num) {
  if (num.length === 0) {
    return 0
  }
  let sum = 0
  for(let i = 0; i < num.length; i++) {
  sum += num[i]
  } 
  console.log(sum)
  return sum
}

sumNumbers(numbers)

// Iteration #3.1 Bonus:
function sum() {}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(num) {
  if (num.length === 0) {
    return null
  }
  let sum = 0
  for(let i = 0; i < num.length; i++) {
  sum += num[i]
  } 
  return sum/num.length 
}

averageNumbers(numbersAvg)

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(avg) {
  if (avg.length===0){
    return null
  }
  let elon = 0
  for(let i=0; i < avg.length; i++){
  elon += avg[i].length/avg.length
  }
  return elon
}

averageWordLength(wordsArr)

// Bonus - Iteration #4.1
function avg() {}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(arr){
  if(arr.length === 0) {
    return null
  }
  let newArr = []
  for (let i=0; i < arr.length; i++){
    if (newArr.indexOf(arr[i])===-1){
      newArr.push(arr[i])
    }
  }
  console.log(newArr)
  return newArr
}


// Bonus - Iteration #5.1: Unique arrays using Set

function uniquifyArrayWithSet() {}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(wordsFind, specificWord) {
  if (wordsFind.length === 0) {
    return null
  }
  for (let i=0; i < wordsFind.length; i++){
    if ((wordsFind[i]) === specificWord) {
      return true 
    }    
  }
  return false
}

doesWordExist(wordsFind, `matter`)

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
let word = `machine`

function howManyTimes(wordsCount, word){

 let count = 0 
  
for (let i=0; i < wordsCount.length; i++) {
  if (word === wordsCount[i]) {
    count++
  }
}
  return count
}
howManyTimes(wordsCount, word)

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    uniquifyArrayWithSet
  };
}
