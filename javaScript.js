let current = document.querySelector("h4");
let date = new Date();
let day = date.getDay();
let hours = date.getHours();
let min = date.getMinutes();

if (day === 1) {
  day = "Monday";
}
if (day === 2) {
  day = "Tuesday";
}
if (day === 3) {
  day = "Wednesday";
}
if (day === 4) {
  day = "Thursday";
}
if (day === 5) {
  day = "Friday";
}
current.innerHTML = day + "  " + hours + " : " + min;

/*function showTemperature() {
  let temp = document.querySelector(".temp");
  console.log(temp);
}
//API
let apikey = "e4o9d2209401dft9565e97304ab65b63";
let apiURL = `https://api.shecodes.io/weather/v1/current?lon={lon}&lat={lat}&key=${apikey}`;

axios.get(apiURL).then(showTemperature); */

//current location
function showLocation(response) {
  let details = document.querySelector(".city");
  //details.innerHTML = response.data.name;
}

function showPosition(position) {
  //console.log(position);
  //console.log(position.coords.latitude);
  //console.log(position.coords.longitude);
  let lati = position.coords.latitude;
  let longi = position.coords.longitude;
  //alert(longi);

  let details = document.querySelector(".city");
  let apikey = "e4o9d2209401dft9565e97304ab65b63"; //add your API key here
  let apiLocation = `https://api.shecodes.io/weather/v1/current?query=${locationz}&key=${apikey}`;
  // let apiLocation = `https://api.openweathermap.org/data/2.5/weather?id=524901&lang=fr&appid=${apikey}`;
  //axios.get(apiLocation).then(showTemperature);
  axios.get(apiLocation).then(showLocation);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let loc = document.querySelector("#input");
locationz.addEventListener("click", getCurrentPosition);
