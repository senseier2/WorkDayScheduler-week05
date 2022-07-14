//display the current day in the JumboTron of the Website.

function headerDate() {
    var currentDate = moment().format('dddd,  MMM Do');
    $('#currentDay').text(currentDate);
}


