const { access } = require("fs");

//1
const words = ["apple", "banana", "kiwi", "orange", "grape"];

const longestWord = words.reduce((acc,curr) => (curr.length > acc.length ? curr : acc),words[0])
console.log(longestWord);

//2
const numbers = [10, 5, 8, 20, 15];
const smalestNum = numbers.reduce((accumulator,currentValue) => (currentValue < accumulator ? currentValue : accumulator),numbers[0])
console.log(smalestNum);

//3
const wordsLength = ["apple", "banana", "kiwi", "orange", "grape"];
const totalLength = wordsLength.reduce((acc,curr) => acc += curr.length,0)
console.log(totalLength);

//4
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const countEvenNum = nums.reduce((acc,curr)=> (curr % 2 === 0 ? acc+=1 : acc ),0)
console.log(countEvenNum);

//5
const wordsCaps = ["hello", "world", "how", "are", "you"];
const capitilizeWords = wordsCaps.reduce((accumulator,currentValue) => {
let word =  currentValue.charAt(0).toUpperCase()  + currentValue.slice(1);
  accumulator.push(word);
  return accumulator;
},[]).join(" ")
console.log(capitilizeWords);


//6
const numsAvg = [10, 15, 20, 25, 30];
const averageOfNum = numsAvg.reduce((acc,curr) => {
  acc = acc + curr 
  return acc ;
} ,0)
const avg = averageOfNum / numsAvg.length ;
console.log(avg);

//7
const numbers2 = [1, 2, 3, 4, 5];
const numberSquare = numbers2.reduce((accumulator,currentValue) =>
  accumulator += currentValue * currentValue ,0)
console.log(numberSquare);

//8
const stationeryWords = ["pen", "notebook", "eraser", "notebook", "pencil", "notebook", "pencil"];
const countStationary = stationeryWords.reduce((acc,curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc ;
},{})
console.log(countStationary);

//9
const wordsLetter = ["apple", "banana", "kiwi", "orange", "grape"];
const firstLetterKey = wordsLetter.reduce((acc,curr) => {
  acc[curr.charAt(0)] = (acc[curr] || 0) + 1;
  return acc ;
},{})
console.log(firstLetterKey);

//10
const numPositive = [-2, 3, 4, -5, 6];
const productOfPositiveNum = numPositive.reduce((acc,curr) => {
 curr > 0 ? acc*=curr : acc ;
  return acc;
},1)
console.log(productOfPositiveNum);
