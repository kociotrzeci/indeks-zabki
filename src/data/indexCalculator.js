const scrapper = require("./scraper.js");
const { citiesArray, saveToCSV, getCalculationInput } = require("./cities.js");
const fs = require("node:fs");
//runScrapper(citiesArray);
calculateRatio(getCalculationInput());
async function runScrapper(_citiesArray) {
  for (let i = 0; i < _citiesArray.length; i++) {
    if (_citiesArray[i].zabkaCount === undefined) {
      _citiesArray[i].zabkaCount = await scrapper(_citiesArray[i].city);
      console.log(
        "saving: " + _citiesArray[i].city + ": " + _citiesArray[i].zabkaCount
      );
      saveToCSV(_citiesArray);
    }
  }
}

function calculateRatio(_array) {
  _array.forEach((element) => {
    element.index =
      Math.round((element.zabkaCount / element.population) * 100000 * 15.377) /
      10;
  });
  _array.sort((a, b) => b.index - a.index);
  saveToCSV(_array, "./cities_with_ratio.csv");
}
