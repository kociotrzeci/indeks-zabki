const fs = require("node:fs");
let data;
try {
  data = fs.readFileSync("./cities.csv", "utf-8");
  //console.log(data);
} catch (error) {
  console.log(error);
}

const citiesArray = csvToJSON(data);
function csvToJSON(_csv) {
  let lines = _csv.split("\r\n");
  let result = [];
  for (let i = 0; i < lines.length; i++) {
    let obj = {};
    let currentLine = lines[i].split(",");
    obj.city = currentLine[0];
    obj.population = currentLine[1];
    if (currentLine[2]) obj.zabkaCount = currentLine[2];
    if (currentLine[3]) obj.index = currentLine[3];
    result.push(obj);
  }
  return result;
}
function saveToCSV(_array, dir = "./cities.csv") {
  let string = "";
  _array.forEach((element) => {
    let line = "" + element.city + "," + element.population;
    if (element.zabkaCount) line = line + "," + element.zabkaCount;
    if (element.index) line = line + "," + element.index;
    line = line + "\r\n";
    string = string + line;
  });
  try {
    fs.writeFileSync(dir, string, "utf-8");
  } catch (error) {
    console.log(error);
  }
}

function getCalculationInput() {
  let data;
  try {
    data = fs.readFileSync("./cities_with_zabkas.csv", "utf-8");
    //console.log(data);
  } catch (error) {
    console.log(error);
  }
  return csvToJSON(data);
}
const citiesArray = csvToJSON(data);
module.exports = { citiesArray, saveToCSV, getCalculationInput };
