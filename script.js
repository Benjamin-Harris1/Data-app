"use strict";

window.addEventListener("load", startApp);

async function startApp() {
  const character = await getCharacter();
  character.forEach(showCharacter);
}

async function getCharacter() {
  const response = await fetch("https://cederdorff.github.io/dat-js/05-data/southpark.json");
  const data = await response.json();
  return data;
}

function showCharacter(character) {
  const HTML =
    /*html*/
    `
    <article class="grid-item">
    <img src="${character.image}"">
    <h1><span>${character.name}</span></h1>
    <p><strong>Aka: </strong><span>${character.nickname}</span></spa></p>
    </article>
      `;
  document.querySelector("#characters").insertAdjacentHTML("beforeend", HTML);
  document.querySelector("#characters article:last-child").addEventListener("click", characterClicked);

  function characterClicked() {
    document.querySelector("#dialog-image").src = character.image;
    document.querySelector("#dialog-name").textContent = character.name;
    document.querySelector("#dialog-nickname").textContent = character.nickname;
    document.querySelector("#dialog-occupation").textContent = character.occupation;
    document.querySelector("#dialog-age").textContent = character.age;
    document.querySelector("#dialog-voicedby").textContent = character.voicedBy;
    document.querySelector("#dialog-gender").textContent = character.gender;
    document.querySelector("#dialog-religion").textContent = character.religion;
    document.querySelector("#dialog-hair").textContent = character.hairColor;
    document.querySelector("#dialog-schoolgrade").textContent = character.schoolGrade;
    document.querySelector("#dialog-episodes").textContent = character.episodes;
    document.querySelector("#dialog-appearances").textContent = character.appearances;
    document.querySelector("#dialog-firstappearance").textContent = character.firstAppearance;
    document.querySelector("#dialog").showModal();
  }
}
