//Varibles and test varibles
var currentDate = moment().format('dddd,  MMM Do');

//Creating an Array of data objects for the planner data

var myPlans = [
    {
        id: "1",
        hour: "09",
        time: "09",
        timeOfDay: "am",
        notes: "",
    },
]


//display the current day in the JumboTron of the Website.

function dateUpdate() {
    document.getElementById('currentDay').innerHTML = currentDate;
}
dateUpdate();

//