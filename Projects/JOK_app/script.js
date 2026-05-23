async function getNewJoke() {
  const API_URL =
    "https://official-joke-api.appspot.com/jokes/random";

  const responce = await fetch(API_URL);
  const data = await responce.json();

  document.getElementById("setup").innerText = data.joke || data.setup;
  document.getElementById("delievery").innerText = data.delievery || "";
}