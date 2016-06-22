// calculates length of each warp thread
// warp_length = woven_length * take-up + loom waste + sampling
// calculateWarpLength(10, 10, 24, 10) --> 45
// calculateWarpLength(10, 10, 10, 10) --> 31
function calculateWarpLength(wovenLength, takeUp, loomWaste, sampling) {
  return(wovenLength + (wovenLength * takeUp / 100) + loomWaste + sampling);
}

// Document ready function
$(document).ready(function() {

  //when the submit button is clicked
  $("#submit").on(
    "click",
    function() {
      var wovenLength = parseInt($("#wovenLength").val());
      var warpTakeUp = parseInt($("#warpTakeUp").val());
      var loomWaste = parseInt($("#loomWaste").val());
      var sampling = parseInt($("#sampling").val());
      var warpLength = calculateWarpLength(wovenLength, warpTakeUp, loomWaste, sampling);
      $("#warpLength").innerHTML(warpLength);
    });


});
