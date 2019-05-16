var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
function addElementToBeginningOfArray(chocolateBars,candyString) {
  return ["foo", ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars,candyString) {
 chocolateBars.unshift("foo")
 return chocolateBars
}
function addElementToEndOfArray(chocolateBars,candyString) {
  return [...chocolateBars,candyString]
}
function destructivelyAddElementToEndOfArrayaddElementToEndOfArray(chocolateBars,candyString) {
  choclateBars.push(candyString)
}