const animalFact = document.getElementById("animal-fact");
const nextButton = document.getElementById("next-button");

function getAnimalFact() {
  return "random fact about animals";
}

function renderAnimalFact(fact) {
  animalFact.innerHTML = fact;
}

nextButton.onclick = function () {
  const fact = getAnimalFact();
  renderAnimalFact(fact);
};
renderAnimalFact("click next to get an animal fact");
