var currentTime = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(currentTime);

function saveBtn() {

}

function hourTracker() {
  //get current number of hours.
  var currentHour = moment().hour();

  // loop over time blocks
  $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log( blockHour, currentHour)

      //checks the current time and classifies it as past, present or future with parameters
      if (blockHour < currentHour) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
      }
      else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
      }
      else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
      }
      //console.log("test");
  })
}
hourTracker();