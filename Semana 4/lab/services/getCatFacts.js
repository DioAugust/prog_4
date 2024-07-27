async function getCatFacts() {
  const response = await fetch("https://catfact.ninja/fact");
  return await response.json();
}
module.exports = getCatFacts;
