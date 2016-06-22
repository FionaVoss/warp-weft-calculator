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
      //TODO: use these variables
      // var wovenLengthVal = parseInt($("#wovenLength").val());
      // var warpTakeUpVal = parseInt($("#warpTakeUp").val());
      // var loomWasteVal = parseInt($("#loomWaste").val());
      // var samplingVal = parseInt($("#sampling").val());
      // var warpLengthVal = calculateWarpLength(wovenLengthVal, warpTakeUpVal, loomWasteVal, samplingVal);
      $("#warpLength").text(calculateWarpLength(parseInt($("#wovenLength").val()), parseInt($("#warpTakeUp").val()), parseInt($("#loomWaste").val()), parseInt($("#sampling").val())));
    });


});
