let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let map = document.querySelector("#map");

let lat = document.querySelector("#lat");
let lan = document.querySelector("#lan");




function getlocation(pos) {
  const { latitude, longitude } = pos.coords;

  console.log("Latitude :", latitude);
  console.log("Longitude:", longitude);
}

function errorhandler(error) {
  console.log("❌ Permission Denied");
  console.log(error.message);
}

startBtn.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(getlocation, errorhandler);
});
