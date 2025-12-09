let btn = document.querySelector("#btn");
let card = document.querySelector(".card");
let btnuserImg = document.querySelector("#userImg");
let userName = document.querySelector("#userName");
let userCity = document.querySelector("#userCity");
let userEmail = document.querySelector("#userEmail");






async function nikalo() {
  let res = await fetch(`https://randomuser.me/api/`);
  let data = await res.json();

  let user = data.results[0];

  userName.textContent = user.name.first +" " +user.name.last;

  userCity.textContent = user.location.city;

  userEmail.textContent = user.email;

 btnuserImg.src= user.picture.large;
 

}

btn.addEventListener("click", function () {
  nikalo();
});


























// async function nikalo() {
//   let res = await fetch(`https://randomuser.me/api/`);
//   let data = await res.json();

//   let usernaam = data.results[0].name.first;
//   userName.textContent =  data.results[0].name.first;

//   let useremail = data.results[0].email;
//   userEmail.textContent = `${useremail}`;

//   let userpicture = data.results[0].picture.large;
//   btnuserImg.src = `${userpicture}`;

//   let usercity = data.results[0].location.city;
//   userCity.textContent = `${usercity}`;
// }

// btn.addEventListener("click", function () {
//   nikalo();
// });