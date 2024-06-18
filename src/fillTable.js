/**
 * @param {document} _div The date
 */

export function fillTable(_firstIndex, _count, _data, _table) {
  for (let i = _firstIndex; i < _firstIndex + _count; i++) {
    const tr = document.createElement("tr");
    const no = document.createElement("td");
    const city = document.createElement("td");
    const population = document.createElement("td");
    const zabkaCount = document.createElement("td");
    const perCapita = document.createElement("td");
    const index = document.createElement("td");
    no.textContent = i + 1;
    city.textContent = _data[i].city;
    population.textContent = _data[i].population;
    zabkaCount.textContent = _data[i].zabkaCount;
    perCapita.textContent = _data[i].perCapita.toFixed(2);
    index.textContent = _data[i].index;
    tr.appendChild(no);
    tr.appendChild(city);
    tr.appendChild(population);
    tr.appendChild(zabkaCount);
    tr.appendChild(perCapita);
    tr.appendChild(index);
    if (i == 0) {
      tr.id = "gold";
    }
    if (i == 1) {
      tr.id = "silver";
    }
    if (i == 2) {
      tr.id = "bronze";
    }
    _table.appendChild(tr);
  }
}

export function fillPodium(_data, _div) {
  const firstPlace = _div.querySelector(".first > p");
  firstPlace.textContent = _data[0].city;
  const secondPlace = _div.querySelector(".second > p");
  secondPlace.textContent = _data[1].city;
  const thirdPlace = _div.querySelector(".third > p");
  thirdPlace.textContent = _data[2].city;
}
