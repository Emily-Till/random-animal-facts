const catFacts = [
  "cats spend 70% of their lives asleep",
  "In 1963 a called called Felicette went to space",
  "The oldest cat, Creme Puff, reached 38 years of age",
  "Cats can rotate their ears 180 degrees",
  "Most cats have no eyelashes",
];

exports.handler = async (events) => {
  const random = catFacts[Math.floor(Math.random() * catFacts.length)];
  return {
    statusCode: 200,
    body: `${random}!`,
  };
};
