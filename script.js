"use strict";

window.addEventListener("load", startApp);

function startApp() {
  const data = getData;
  document.querySelector(person.image).addEventListener("click", somefunction);
}

function getData() {
  const data = [];
  return data;
}

function showAllCharacters(list) {
  showCharacter(person);
}

const heather = {
  image: "picture/Heather_Swanson.webp",
  name: "Heather Swanson",
  occupation: "Athlete",
  age: "Unknown",
  gender: "Female, formerly male",
  religion: "",
  haircolor: "Brown",
  voicedby: "Trey Parker",
  appearances: "S23 EP07, Board Girls",
};

const random = {
  name: "Kurt",
  occupation: "",
};

function showCharacter(person) {
  const details = document.querySelector("#characters");

  const HTML =
    /*html*/
    `
    <img src="${person.image}"alt="" style ="width 10%" image">
    <h1><span>${person.name}</span></h1>
    <p><strong>Occupation: </strong><span>${person.occupation}</span></p>
    <p><strong>Age: </strong><span>${person.age}</span></spa></p>
    <p><strong>Gender: </strong><span>${person.gender}</span></p>
    <p><strong>Hair color: </strong><span>${person.haircolor}</span></p>
    <p><strong>Voiced by: </strong><span>${person.voicedby}</span></p>
    <p><strong>Appearances: </strong><span>${person.appearances}</span></p>
      `;

  details.insertAdjacentHTML("beforeend", HTML);
}

function showDialog(person) {}

function closeDialog() {}

showCharacter(heather);
