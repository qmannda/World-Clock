function fixTime() {
  //JHB time
  let joburgElement = document.querySelector("#joburg");
  if (joburgElement) {
    let joburgDate = joburgElement.querySelector(".date");
    let joburgTime = joburgElement.querySelector(".time");
    let joburgToday = moment().tz("Africa/Johannesburg");

    joburgDate.innerHTML = joburgToday.format("MMMM Do YYYY");
    joburgTime.innerHTML = joburgToday.format("hh:mm:ss [<small>]A[</small>]");
  }

  //Fiji time

  let fijiElement = document.querySelector("#fiji");
  if (fijiElement) {
    let fijiDate = fijiElement.querySelector(".date");
    let fijiTime = fijiElement.querySelector(".time");
    let fijiToday = moment().tz("Pacific/Fiji");

    fijiDate.innerHTML = fijiToday.format("MMMM Do YYYY");
    fijiTime.innerHTML = fijiToday.format("hh:mm:ss [<small>]A[</small>]");
  }
}

fixTime();
setInterval(fixTime, 1000);
