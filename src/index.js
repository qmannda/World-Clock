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

function changeCity(event) {
  let cityTimeZone = event.target.value;

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `<div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>`;
}

fixTime();
setInterval(fixTime, 1000);

let selectElement = document.querySelector("#countries");
selectElement.addEventListener("change", changeCity);
