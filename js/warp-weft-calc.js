// calculates length of each warp thread
// warp_length = woven_length * take-up + loom waste + sampling
// calculateWarpLength(10, 10, 24, 10) --> 45
// calculateWarpLength(10, 10, 10, 10) --> 31
function calculateWarpLength(wovenLength, takeUp, loomWaste, sampling) {
  return(wovenLength + (wovenLength * takeUp / 100) + loomWaste + sampling);
}

// calculates number of warp threads
// calculateWarpThreads(10, 10, 16) --> 88
// calculateWarpThreads(12, 10, 24) --> 158.4
function calculateWarpThreads(wovenWidth, takeUp, wrapsPerInch) {
  return(wovenWidth * wrapsPerInch / 2 * (100 + takeUp) / 100);
};

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
      var sett = parseInt($("#wrapsPerInch").val())/2;
      $("#sett").text(sett);

      $("#warpLength").text(calculateWarpLength(parseInt($("#wovenLength").val()), parseInt($("#warpTakeUp").val()), parseInt($("#loomWaste").val()), parseInt($("#sampling").val())));

      $("#warpThreads").text(calculateWarpThreads(parseInt($("#wovenWidth").val()), parseInt($("#weftTakeUp").val()), parseInt($("#wrapsPerInch").val())));
    }); //end of submit onclick function


}); // end of document ready function
