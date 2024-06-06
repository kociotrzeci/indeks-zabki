export default function fillTable(_firstIndex, _count, _data, _table) {
  for (let i = _firstIndex; i < _firstIndex + _count; i++) {
    const tr = document.createElement("tr");
    const no = document.createElement("td");
    const city = document.createElement("td");
    const population = document.createElement("td");
    const zabkaCount = document.createElement("td");
    const index = document.createElement("td");
    no.textContent = i + 1;
    city.textContent = _data[i].city;
    population.textContent = _data[i].population;
    zabkaCount.textContent = _data[i].zabkaCount;
    index.textContent = _data[i].index;
    tr.appendChild(no);
    tr.appendChild(city);
    tr.appendChild(population);
    tr.appendChild(zabkaCount);
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
