setInterval(updateClock, 1000)
const secDiv = document.getElementById("sec");
const minDiv = document.getElementById("min");
const hourDiv = document.getElementById("hour");

function updateClock() {
    let date = new Date();
    let sec = date.getSeconds() / 60;
    let min = (sec + date.getMinutes()) / 60;
    let hour = (min + date.getHours()) / 12;
    console.log(hour);


    secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
    minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
    hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)";
}

updateClock();





// function setDate(){
//     // const date = new Date();
//     // const sec = date.getSeconds();
//     Console.log("hello");
// }

// setInterval(setDate, 1000);


