var chocolateBars = ["snickers","hundred grand","kitkat"
,"skittles"];

function addElementToBeginningOfArray(chocolateBars,candyString) {
  return [candyString, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars,candyString) {
 chocolateBars.unshift(candyString);
 return chocolateBars;
}
function addElementToEndOfArray(chocolateBars,candyString) {
  return [...chocolateBars,candyString];
}
function destructivelyAddElementToEndOfArrayy(chocolateBars,candyString) { 
  choclateBars.push(candyString);
  return chocolateBars;
}
function accessElementInArray(array, index) {
  return array[index];
}