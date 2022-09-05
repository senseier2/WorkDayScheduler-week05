//Varibles and test varibles
// var currentDate = moment().format('dddd,  MMM Do');

//Creating an Array of data objects for the planner data

// var myPlans = [
//     {
//         id: "1",
//         hour: "09",
//         time: "09",
//         timeOfDay: "am",
//         notes: "",
//     },
//     {
//         id: "2",
//         hour: "10",
//         time: "10",
//         timeOfDay: "am",
//         notes: "",
//     },
//     {
//         id: "3",
//         hour: "11",
//         time: "11",
//         timeOfDay: "am",
//         notes: "",
//     },
//     {
//         id: "4",
//         hour: "12",
//         time: "12",
//         timeOfDay: "pm",
//         notes: "",
//     },
//     {
//         id: "5",
//         hour: "01",
//         time: "13",
//         timeOfDay: "pm",
//         notes: "",
//     },
//     {
//         id: "6",
//         hour: "02",
//         time: "14",
//         timeOfDay: "pm",
//         notes: "",
//     },
//     {
//         id: "7",
//         hour: "03",
//         time: "15",
//         timeOfDay: "pm",
//         notes: "",
//     },
//     {
//         id: "8",
//         hour: "04",
//         time: "16",
//         timeOfDay: "pm",
//         notes: "",
//     },
//     {
//         id: "9",
//         hour: "05",
//         time: "17",
//         timeOfDay: "pm",
//         notes: "",
//     },
// ]


//display the current day in the JumboTron of the Website.

// function dateUpdate() {
//     document.getElementById('currentDay').innerHTML = currentDate;
// }
// dateUpdate();

//creating the save button function.


var $currentDay = $("#currentDay");
var $timeBlocks = $(".time-block");
var $scheduleArea = $(".saveBtn");

var itemsToDo = [];
//each object has a hour property and a text property
 
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");

function renderSchedule(){
    itemsToDo = localStorage.getItem("todos");
    itemsToDo = JSON.parse(itemsToDo);

  //loop thru array then assign the text to the timeBlock with data-hour equal to hour. 
  //make a variable where [data-hour={hour}] then plug it in to the selector $('[data-hour={hour}')
  for (var i = 0; i < itemsToDo.length; i++){
    var itemHour = itemsToDo[i].hour;
    var itemText = itemsToDo[i].text; 
   
    $("[data-hour=" + itemHour + "]").children("textarea").val(itemText);
  }
}

function saveHandler(){
  var $thisBlock = $(this).parent();

  var hourToUpdate = $(this).parent().attr("data-hour");
  var itemToAdd = (($(this).parent()).children("textarea")).val();

  //see which item we need to update based on the hour of the button clicked matching
  for (var t = 0; t < itemsToDo.length; t++){
    if (itemsToDo[t].hour == hourToUpdate){
      //set its text to what was added to textarea
      itemsToDo[t].text = itemToAdd;
    }
  }
  localStorage.setItem("todos", JSON.stringify(itemsToDo));
  renderSchedule();
}

//add event listener to buttons
$(document).ready(function(){
  //display current date
  $currentDay.text(currentDate);

  //add style to time blocks to show where we are in the day
  $timeBlocks.each(function () {
    var $thisBlock = $(this);
    var thisBlockHr = parseInt($thisBlock.attr("data-hour"));

    if (thisBlockHr == currentHour) {
      $thisBlock.addClass("present").removeClass("past future");
    }
    if (thisBlockHr < currentHour) {
      $thisBlock.addClass("past").removeClass("present future");
    }
    if (thisBlockHr > currentHour) {
      $thisBlock.addClass("future").removeClass("past present");
    }
  });

  renderSchedule();
  $scheduleArea.on("click", "button", saveHandler);
  console.log('hello');
  
});