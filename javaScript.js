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
  //Cityname
  let details = document.querySelector(".city");
  details.innerHTML = response.data.city;
  //pic
  let pic = document.querySelector("#icon");
  let picture = response.data.city;
  //let pi = response.data.condition.icon;
  pic.setAttribute(
    "src",
    // 'http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png'
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );

  //temprature
  celciusTemp = response.data.temperature.current;
  alert(celciusTemp);

  let temprature = document.querySelector(".temp");
  temprature.innerHTML = Math.round(celciusTemp);
  //Humidity
  let humidity = document.querySelector(".hum");
  humidity.innerHTML = response.data.temperature.humidity;
  //wind
  let wind = document.querySelector(".wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
  //Sky
  let clear = document.querySelector(".clear");
  clear.innerHTML = response.data.condition.description;

  //feels
  let feels = document.querySelector(".feels");
  feels.innerHTML = Math.round(response.data.temperature.feels_like);
}

function showPosition(position) {
  /*console.log(position);
  //console.log(position.coords.latitude);
  //console.log(position.coords.longitude);
  let lati = position.coords.latitude;
  let longi = position.coords.longitude;
  //alert(longi); */

  let loca = document.querySelector("#input").value;
  console.log(loca);
  let apikey = "e4o9d2209401dft9565e97304ab65b63"; //add your API key here
  let apiLocation = `https://api.shecodes.io/weather/v1/current?query=${loca}&key=${apikey}&units=metric`;
  console.log(apiLocation);
  // let apiLocation = `https://api.openweathermap.org/data/2.5/weather?id=524901&lang=fr&appid=${apikey}`;
  //axios.get(apiLocation).then(showTemperature);
  // axios.get(apiLocation).then(showLocation); // for current location
  axios.get(apiLocation).then(showLocation); //for search location
}

/*function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
} */
function calculation(event) {
  event.preventDefault();
  let farenhiTemp = Math.round((celciusTemp * 9) / 5 + 32);
  let change = document.querySelector(".temp");
  change.innerHTML = farenhiTemp;
  // alert(farenhiTemp);

  //console.log(num);
  // cel.innerHTML=
}

function calculateToBack(event) {
  event.preventDefault();
  let change = document.querySelector(".temp");
  change.innerHTML = Math.round(celciusTemp);
}

let loc = document.querySelector("form");
console.log(loc);
//locationz.addEventListener("click", getCurrentPosition); //for the current location
loc.addEventListener("click", showPosition);

let far = document.querySelector("#faranhite");
console.log(far);
far.addEventListener("click", calculation);

let celc = document.querySelector("#celcius");
console.log(celc);
celc.addEventListener("click", calculateToBack);

let celciusTemp = null;
