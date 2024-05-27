const scrapper = require("./scraper.js");
const citiesArray = require("./cities.js");
indexCalculator();

console.log(citiesArray[0]);
async function indexCalculator(_citiesArray, _key = "żabka") {
  for (let i = 0; i < _citiesArray; i++) {
    result;
  }
}

function convertToCSV(arr) {
  const array = [Object.keys(arr[0])].concat(arr);

  return array
    .map((it) => {
      return Object.values(it).toString();
    })
    .join("\n");
}
