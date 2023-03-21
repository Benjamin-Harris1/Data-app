"use strict";

window.addEventListener("load", startApp);

function startApp() {
  document.querySelector("#showdetailsbtn").addEventListener("click");
}

const heather = {
  name: "Heather Swanson",
  occupation: "Athlete",
  age: "Unknown",
  gender: "Female, formerly male",
  religion: "",
  haircolor: "Brown",
  voicedby: "Trey Parker",
};

const random = {
  name: "Kurt",
  occupation: "",
};

function showDetails(person) {
  const details = document.querySelector("#details");

  const HTML =
    /*html*/
    `
    <h1>Name: <span>${person.name}</span></h1>
    <p>Occupation: <span>${person.occupation}</span></p>
    <p>Age: <span>${person.age}</span></spa></p>
    <p>Gender: <span>${person.gender}</span></p>
    <p>Hair color: <span>${person.haircolor}</span></p>
    <p>Voiced by: <span>${person.voicedby}</span></p>
      `;

  details.insertAdjacentHTML("beforeend", HTML);

  details.style.display = "block";
}

showDetails(heather);
