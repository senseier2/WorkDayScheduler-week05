//display the current day in the JumboTron of the Website.
var dateToday = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(dateToday);

//function to set item to local storage on click
$(document).ready(function() {
  $(".saveBtn").on("click", function () {
    var note = $(this).siblings(".notes").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, note);
  });

  //Tracking time and updating the color status of the time blocks
  function trackTime() {
    var timeCurrent = moment().hour();

    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
      //If then to handle the styling changes "past present and future"
      if (timeBlock < timeCurrent) { //Using class swaps as used in my still broken Questionaire application...sigh
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (timeBlock === timeCurrent) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }});
  }

  //Get local storage and update the schedule on refresh

  $("#hour1 .description").val(localStorage.getItem("hour1"));
  $("#hour2 .description").val(localStorage.getItem("hour2"));
  $("#hour3 .description").val(localStorage.getItem("hour3"));
  $("#hour4 .description").val(localStorage.getItem("hour4"));
  $("#hour5 .description").val(localStorage.getItem("hour5"));
  $("#hour6 .description").val(localStorage.getItem("hour6"));
  $("#hour7 .description").val(localStorage.getItem("hour7"));
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));


  trackTime();
});