/*
  selectOdd
  This function selects all the odd numbers from a given list of numbers
*/
const selectOdd = function(numberList){
  return numberList.filter((number)=>{
    return number % 2 != 0
  });
}

/*
  selectEven
  This function selects all the even numbers from a given list of numbers
*/
const selectEven = function(numberList){
  return numberList.filter((number)=>{
    return number % 2 == 0
  });
}

/*
  sumUp
  This function sums up all the numbers of a given list
*/
const sumUp = function(numberList){
  return numberList.reduce((accumulator, number)=>{
    return accumulator + number;
  },0);
}


/*
  reverseList
  This function reverses the elements of a given list and provides a new list
*/
function isAscending(array){
  let checkGreater = -9999;
  let lengthOfArray=0;
  for(let count=0;count<array.length&&array[count]>=checkGreater;count++){
    checkGreater = array[count];
    lengthOfArray=count;
  }
  if(++lengthOfArray<array.length){
    return false;
  }
  return true;
}


/*
  reverseFibo
  This function provides the first n terms of a fibonacci series in reverse order
  This function accepts a single number, n as its only argument.
*/
function avgList(array){
  let sum = 0;
  for(let count = 0;count<array.length;count++){
    sum = sum + array[count];
  }
  return sum/array.length;
}

/*
  greatestInList
  This function provides the greatest number in a list, given a list of numbers
*/


/*
  leastInList
  This function provides the lowest number in a list, given a list of numbers
*/

function countAbove(array,givenNumber){
  let aboveCount = 0;
  for(let count=0;array[count]!=givenNumber;count++){
    aboveCount++;
  }
  return ++aboveCount;
}
/*
  mapLengths
  This function provides a list of lengths corresponding to the list of strings
  given as an argument
*/


/*
  isAscendingOrder
  This function checks if a given list is in ascending order or not
*/


/*
  isDescendingOrder
  This function checks if a given list is in descending order or not
*/


/*
  extractDigits
  This function extracts the digits of a given number and returns a list of digits
*/


/*
  countBelowThreshold
  This function provides the count of numbers below given threshold
*/


/*
  countAboveThreshold
  This function provides the count of numbers above given threshold
*/


exports.selectOdd=selectOdd;
exports.selectEven=selectEven;
exports.sumUp=sumUp;
exports.reverseList=reverseList;
exports.reverseFibo=reverseFibo;
exports.greatestInList=greatestInList;
exports.leastInList=leastInList;
exports.mapLengths=mapLengths;
exports.isAscendingOrder=isAscendingOrder;
exports.isDescendingOrder=isDescendingOrder;
exports.extractDigits=extractDigits;
exports.countBelowThreshold=countBelowThreshold;
exports.countAboveThreshold=countAboveThreshold;
