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
    {
        id: "2",
        hour: "10",
        time: "10",
        timeOfDay: "am",
        notes: "",
    },
    {
        id: "3",
        hour: "11",
        time: "11",
        timeOfDay: "am",
        notes: "",
    },
    {
        id: "4",
        hour: "12",
        time: "12",
        timeOfDay: "pm",
        notes: "",
    },
    {
        id: "5",
        hour: "01",
        time: "13",
        timeOfDay: "pm",
        notes: "",
    },
    {
        id: "6",
        hour: "02",
        time: "14",
        timeOfDay: "pm",
        notes: "",
    },
    {
        id: "7",
        hour: "03",
        time: "15",
        timeOfDay: "pm",
        notes: "",
    },
    {
        id: "8",
        hour: "04",
        time: "16",
        timeOfDay: "pm",
        notes: "",
    },
    {
        id: "9",
        hour: "05",
        time: "17",
        timeOfDay: "pm",
        notes: "",
    },
]


//display the current day in the JumboTron of the Website.

function dateUpdate() {
    document.getElementById('currentDay').innerHTML = currentDate;
}
dateUpdate();

//