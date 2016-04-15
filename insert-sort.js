
// var arr = [201,39,54,461,93,377,413,176,164,317,109,113,36,235,17,60,53,474,257,48];
var arr = [201,39,54,461,93,377];

function insertSort(items){
  // loop over all numbers

      // loop over all prior numbers
        // if the prior number is smaller than the current number. stop and insert
  var length = items.length, count=1, finalCount;

  for (i=1; i<length-1; i++){

    for(j=0; j<count; j++){
        // console.log("item j"+items[j]);
        // console.log("item i"+items[i]);
      if(items[j]<items[i]){
        items[finalCount]=items[i];
        finalCount++
        console.log("final number"+items[finalCount]);
      }
    }
    count++;
  }
  return items;
}

//================================================
// FUNCTION CALL
//================================================
console.log("PRE-SORT");
console.log(arr.join(" "));
console.log("---------------------------")
console.log("POST-SORT");
console.log(insertSort(arr).join(" "));
