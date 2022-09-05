//Varibles and test varibles

const { on } = require("nodemon");

//display the current day in the JumboTron of the Website.
var dateToday = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(dateToday);

//function to set item to local storage on click
$(document).ready(function() {
  $(".saveBtn")on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });

  //Tracking time and updating the color status of the time blocks
  function trackTime() {
    var timeCurrent = moment().hour();

    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
      //If then to handle the styling changes "past present and future"
      if (timeBlock < timeCurrent) {

      } else if (timeBlock === timeCurrent) {


      } else {

      }

    })
  }


});