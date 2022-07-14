//Varibles and test varibles
var currentDate = moment().format('dddd,  MMM Do');


//display the current day in the JumboTron of the Website.

function dateUpdate() {
    document.getElementById('currentDay').innerHTML = currentDate;
}
dateUpdate();

//