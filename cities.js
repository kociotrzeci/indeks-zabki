const fs = require("node:fs");
let data;
try {
  data = fs.readFileSync("./cities.csv", "utf-8");
  //console.log(data);
} catch (error) {
  console.log(error);
}

function csvToJSON(_csv) {
  let lines = _csv.split("\r\n");
  let result = [];
  for (let i = 0; i < lines.length; i++) {
    let obj = {};
    let currentLine = lines[i].split(",");
    obj.city = currentLine[0];
    obj.population = currentLine[1];
    result.push(obj);
  }
  return result;
}
const citiesArray = csvToJSON(data);
module.exports = citiesArray;
