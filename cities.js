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
    result.push(obj);
  }
  return result;
}

function saveToCSV(_content) {
  let string = "";
  for (let i = 0; i < _content.length; i++) {
    let newLine = _content[i].city + "," + _content[i].population;
    if (_content[i].zabkaCount) {
      newLine = newLine + "," + _content[i].zabkaCount;
    }
    newLine = newLine + "\r\n";
    string = string + newLine;
  }

  try {
    fs.writeFileSync("./cities.csv", string, "utf-8");
    //console.log(data);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { citiesArray, saveToCSV };
