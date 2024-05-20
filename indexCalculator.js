const scrapper = require("./scraper.js");
const cities = require("./cities.js");
async function indexCalculator() {
  await scrapper("kępno");
}
