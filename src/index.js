const animalFact = document.getElementById("animal-fact");
const nextButton = document.getElementById("next-button");

function getAnimalFact() {
  return fetch(
    "https://upbeat-benz-235f24.netlify.app/.netlify/functions/fact"
  ).then(function (response) {
    return response.json();
  });
}

function renderAnimalFact(fact) {
  animalFact.innerHTML = fact;
}

nextButton.onclick = function () {
  getAnimalFact().then(function (fact) {
    renderAnimalFact(fact);
  });
};
renderAnimalFact("click next to get an animal fact");
