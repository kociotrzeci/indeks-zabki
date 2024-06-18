import "./styles.scss";
import data from "./data/cities_with_ratio.csv";
import { fillTable, fillPodium } from "./fillTable.js";
console.log("Hello webpack");
const tableBody = document.querySelector("tbody");
const podiumBody = document.querySelector("div.right");
fillPodium(data, podiumBody);
fillTable(0, 10, data, tableBody);

const btnLoadMore = document.getElementById("load-more");
btnLoadMore.addEventListener("click", () => {
  fillTable(10, 40, data, tableBody);
  btnLoadMore.remove();
});
