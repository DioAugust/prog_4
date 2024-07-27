const getCatFacts = require("./getCatFacts");

async function getShowMoreButton() {
  const catFact = await getCatFacts();

  if (catFact.fact.length > 100) {
    return catFact.fact.slice(0, 100).concat("...Show more");
  }

  return catFact.fact;
}

module.exports = getShowMoreButton;
