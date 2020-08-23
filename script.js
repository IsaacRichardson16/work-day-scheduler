// current day in jumbotron

let m = moment().format("dddd" + ", " + "MMMM" + " " + "Do");
$('#currentDay').append(m);

// set constants

const timeBox = document.getElementsByClassName("timeBox")
const submitBtn = document.getElementsByClassName("btn8")
const timeBoxOutput = document.getElementsByClassName("timeBox8")
// button event listener

submitBtn.onclick = function(){
    const timeBox = timeBox.value;

    console.log(timeBox)
}

// saving individual inputs

// saving in local storage 


// changing text are background color when  time is scheduled