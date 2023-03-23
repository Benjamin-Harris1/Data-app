"use strict";

window.addEventListener("load", startApp);

async function startApp() {
  const heather = await getCharacter("data/heather.json");
  showCharacter(heather);
}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showAllCharacters(list) {
  showCharacter(person);
}

function showCharacter(person) {
  const HTML =
    /*html*/
    `
    <article class="grid-item">
    <img src="${person.image}"style ="width 10%" image">
    <h1><span>${person.name}</span></h1>
    <p><strong>Aka: </strong><span>${person.nickname}</span></spa></p>
    </article>
      `;
  document.querySelector("#characters").insertAdjacentHTML("beforeend", HTML);
  document.querySelector("#characters article:last-child").addEventListener("click", characterClicked);

  function characterClicked() {
    document.querySelector("#dialog-image").textContent = person.image;
    document.querySelector("#dialog-name").textContent = person.name;
    document.querySelector("#dialog-nickname").textContent = person.nickname;
    document.querySelector("#dialog-occupation").textContent = person.occupation;
    document.querySelector("#dialog-age").textContent = person.age;
    document.querySelector("#dialog-voicedby").textContent = person.voicedby;
    document.querySelector("#dialog-gender").textContent = person.gender;
    document.querySelector("#dialog-religion").textContent = person.religion;
    document.querySelector("#dialog-hair").textContent = person.haircolor;
    document.querySelector("#dialog-schoolgrade").textContent = person.schoolgrade;
    document.querySelector("#dialog-episodes").textContent = person.episodes;
    document.querySelector("#dialog-appearances").textContent = person.appearances;
    document.querySelector("#dialog-firstappearance").textContent = person.firstappearance;
    document.querySelector("#dialog").showModal();
  }
}

function showDialog(person) {}

function closeDialog() {}
