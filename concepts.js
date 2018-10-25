/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */ //length = 5;
// array spots = 0, 1, 2, 3, 4

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);

// Write your code here...

function joinList(conceptList) {
  var string = "";
  if (conceptList[0] === null){
    return string;
  }
  else {
    for (var x = 0; x < conceptList.length; x++){
      if (x < conceptList.length - 1){
        string += conceptList[x] + ", ";
      }
      else {
        string += conceptList[x];
      }
    }
  }
  return string;
}

console.log("Today I learned about " + concepts + ".");

