// calculates length of each warp thread
// calculateWarpLength(10, 10, 24, 10) --> 45
// calculateWarpLength(10, 10, 10, 10) --> 31
function calculateWarpLength(wovenLength, takeUp, loomWaste, sampling) {
  return(wovenLength + (100 + takeUp) / 100 + loomWaste + sampling);
}

// calculates number of warp threads
// calculateWarpThreads(10, 10, 8) --> 88
// calculateWarpThreads(12, 10, 12) --> 158.4
function calculateWarpThreads(wovenWidth, takeUp, sett) {
  return(wovenWidth * sett * (100 + takeUp) / 100);
};

// calculates yarn needed for warp in yards
// calculateWarpYarn(36, 36) --> 36
// calculateWarpYarn(24, 30) --> 20
function calculateWarpYarn(warpLength, warpThreads) {
  return(warpLength/36 * warpThreads);
}

// Document ready function
$(document).ready(function() {

  //when the submit button is clicked
  $("#submit").on(
    "click",
    function() {
      //calculate and display sett
      var sett = parseInt($("#wrapsPerInch").val())/2;
      $("#sett").text(sett);

      //calculate and display warp length
      var warpLength = calculateWarpLength(parseInt($("#wovenLength").val()), parseInt($("#warpTakeUp").val()), parseInt($("#loomWaste").val()), parseInt($("#sampling").val()));
      $("#warpLength").text(warpLength);

      //calculate and display warp threads
      var warpThreads = calculateWarpThreads(parseInt($("#wovenWidth").val()), parseInt($("#weftTakeUp").val()), sett);
      $("#warpThreads").text(warpThreads);

      //calculate and display warp yarn
      var warpYarn = calculateWarpYarn(warpLength, warpThreads);
      $("#warpYarn").text(warpYarn);
    }); //end of submit onclick function


}); // end of document ready function
