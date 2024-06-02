const scrapper = require("./scraper.js");
const { citiesArray, saveToCSV } = require("./cities.js");
indexCalculator(citiesArray);
saveToCSV(citiesArray);

async function indexCalculator(_citiesArray, _key = "żabka") {
  for (let i = 0; i < 216; i++) {
    if (_citiesArray[i].zabkaCount === undefined)
      _citiesArray[i].zabkaCount = await scrapper(_citiesArray[i].city);
    saveToCSV(_citiesArray);
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
