/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
}
body header {
  background-color: #333;
  color: white;
  padding: 10px 0;
  text-align: center;
}
body .content {
  display: flex;
  flex-direction: row;
}
body table {
  align-self: center;
  width: 100%;
  max-width: 1200px;
  margin: 20px 0;
  border-collapse: collapse;
}
body table th,
body table td {
  padding: 10px;
  border: 1px solid #ddd;
}
body table th {
  background-color: #4caf50;
  color: white;
}
body table tr:nth-child(odd) {
  background-color: #f7f7f7;
}
body table #gold {
  background-color: #fdff73;
}
body table #silver {
  background-color: #d3d3d3;
}
body table #bronze {
  background-color: #c5997e;
}`, "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAAA;EACE,8BAAA;EACA,SAAA;EACA,UAAA;EACA,yBAAA;EACA,aAAA;EACA,sBAAA;AACF;AAAE;EACE,sBAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;AAEJ;AAAE;EACE,aAAA;EACA,mBAAA;AAEJ;AAAE;EACE,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,cAAA;EACA,yBAAA;AAEJ;AADI;;EAEE,aAAA;EACA,sBAAA;AAGN;AADI;EACE,yBAAA;EACA,YAAA;AAGN;AADI;EACE,yBAAA;AAGN;AAAI;EACE,yBAAA;AAEN;AAAI;EACE,yBAAA;AAEN;AAAI;EACE,yBAAA;AAEN","sourcesContent":["body {\r\n  font-family: Arial, sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #f0f0f0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  header {\r\n    background-color: #333;\r\n    color: white;\r\n    padding: 10px 0;\r\n    text-align: center;\r\n  }\r\n  .content {\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n  table {\r\n    align-self: center;\r\n    width: 100%;\r\n    max-width: 1200px;\r\n    margin: 20px 0;\r\n    border-collapse: collapse;\r\n    th,\r\n    td {\r\n      padding: 10px;\r\n      border: 1px solid #ddd;\r\n    }\r\n    th {\r\n      background-color: #4caf50;\r\n      color: white;\r\n    }\r\n    tr:nth-child(odd) {\r\n      background-color: #f7f7f7;\r\n    }\r\n\r\n    #gold {\r\n      background-color: #fdff73;\r\n    }\r\n    #silver {\r\n      background-color: #d3d3d3;\r\n    }\r\n    #bronze {\r\n      background-color: #c5997e;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/data/cities_with_ratio.csv":
/*!****************************************!*\
  !*** ./src/data/cities_with_ratio.csv ***!
  \****************************************/
/***/ ((module) => {

module.exports = [{"city":"Poznań","population":532048,"zabkaCount":346,"index":100},{"city":"Wrocław","population":641928,"zabkaCount":413,"index":98.9},{"city":"Kołobrzeg","population":46198,"zabkaCount":26,"index":86.5},{"city":"Gdańsk","population":470805,"zabkaCount":258,"index":84.3},{"city":"Rumia","population":49536,"zabkaCount":27,"index":83.8},{"city":"Leszno","population":62854,"zabkaCount":34,"index":83.2},{"city":"Kielce","population":193415,"zabkaCount":104,"index":82.7},{"city":"Katowice","population":290553,"zabkaCount":155,"index":82},{"city":"Kraków","population":779966,"zabkaCount":411,"index":81},{"city":"Gdynia","population":244969,"zabkaCount":128,"index":80.3},{"city":"Warszawa","population":1794166,"zabkaCount":927,"index":79.4},{"city":"Piaseczno","population":48670,"zabkaCount":25,"index":79},{"city":"Częstochowa","population":217530,"zabkaCount":107,"index":75.6},{"city":"Piotrków Trybunalski","population":72250,"zabkaCount":35,"index":74.5},{"city":"Inowrocław","population":71674,"zabkaCount":34,"index":72.9},{"city":"Wejherowo","population":49099,"zabkaCount":23,"index":72},{"city":"Puławy","population":46965,"zabkaCount":22,"index":72},{"city":"Szczecin","population":398255,"zabkaCount":186,"index":71.8},{"city":"Tychy","population":126871,"zabkaCount":59,"index":71.5},{"city":"Pruszków","population":62623,"zabkaCount":29,"index":71.2},{"city":"Radomsko","population":45353,"zabkaCount":21,"index":71.2},{"city":"Gliwice","population":177049,"zabkaCount":81,"index":70.3},{"city":"Nowy Sącz","population":83558,"zabkaCount":38,"index":69.9},{"city":"Olsztyn","population":171249,"zabkaCount":77,"index":69.1},{"city":"Chorzów","population":106846,"zabkaCount":48,"index":69.1},{"city":"Bełchatów","population":56419,"zabkaCount":25,"index":68.1},{"city":"Wodzisław Śląski","population":47576,"zabkaCount":21,"index":67.9},{"city":"Zielona Góra","population":140892,"zabkaCount":62,"index":67.7},{"city":"Gorzów Wielkopolski","population":122589,"zabkaCount":54,"index":67.7},{"city":"Łódź","population":672185,"zabkaCount":291,"index":66.6},{"city":"Ostrowiec Świętokrzyski","population":67404,"zabkaCount":29,"index":66.2},{"city":"Bielsko-Biała","population":169756,"zabkaCount":73,"index":66.1},{"city":"Żory","population":62844,"zabkaCount":27,"index":66.1},{"city":"Świdnica","population":56222,"zabkaCount":24,"index":65.6},{"city":"Lublin","population":338586,"zabkaCount":144,"index":65.4},{"city":"Dąbrowa Górnicza","population":118285,"zabkaCount":50,"index":65},{"city":"Biała Podlaska","population":56942,"zabkaCount":24,"index":64.8},{"city":"Rybnik","population":137128,"zabkaCount":56,"index":62.8},{"city":"Pabianice","population":63945,"zabkaCount":26,"index":62.5},{"city":"Tczew","population":59430,"zabkaCount":24,"index":62.1},{"city":"Stargard","population":67579,"zabkaCount":27,"index":61.4},{"city":"Skierniewice","population":47655,"zabkaCount":19,"index":61.3},{"city":"Koszalin","population":106235,"zabkaCount":42,"index":60.8},{"city":"Będzin","population":56008,"zabkaCount":22,"index":60.4},{"city":"Legionowo","population":53529,"zabkaCount":21,"index":60.3},{"city":"Krosno","population":45948,"zabkaCount":18,"index":60.2},{"city":"Słupsk","population":89780,"zabkaCount":34,"index":58.2},{"city":"Zgierz","population":55673,"zabkaCount":21,"index":58},{"city":"Jelenia Góra","population":78335,"zabkaCount":29,"index":56.9},{"city":"Kędzierzyn-Koźle","population":60021,"zabkaCount":22,"index":56.4},{"city":"Legnica","population":98436,"zabkaCount":36,"index":56.2},{"city":"Płock","population":118268,"zabkaCount":43,"index":55.9},{"city":"Bydgoszcz","population":344091,"zabkaCount":124,"index":55.4},{"city":"Opole","population":127839,"zabkaCount":46,"index":55.3},{"city":"Rzeszów","population":197863,"zabkaCount":71,"index":55.2},{"city":"Włocławek","population":108561,"zabkaCount":39,"index":55.2},{"city":"Zawiercie","population":48703,"zabkaCount":17,"index":53.7},{"city":"Toruń","population":198613,"zabkaCount":69,"index":53.4},{"city":"Białystok","population":296958,"zabkaCount":101,"index":52.3},{"city":"Ostrów Wielkopolski","population":71560,"zabkaCount":24,"index":51.6},{"city":"Konin","population":72539,"zabkaCount":24,"index":50.9},{"city":"Jastrzębie-Zdrój","population":88038,"zabkaCount":29,"index":50.7},{"city":"Gniezno","population":67570,"zabkaCount":22,"index":50.1},{"city":"Mysłowice","population":74559,"zabkaCount":24,"index":49.5},{"city":"Siedlce","population":77813,"zabkaCount":25,"index":49.4},{"city":"Bytom","population":163255,"zabkaCount":52,"index":49},{"city":"Skarżysko-Kamienna","population":44260,"zabkaCount":14,"index":48.6},{"city":"Ruda Śląska","population":136423,"zabkaCount":43,"index":48.5},{"city":"Sosnowiec","population":197586,"zabkaCount":62,"index":48.3},{"city":"Chełm","population":61135,"zabkaCount":19,"index":47.8},{"city":"Tarnowskie Góry","population":61756,"zabkaCount":19,"index":47.3},{"city":"Lubin","population":71710,"zabkaCount":22,"index":47.2},{"city":"Ełk","population":61903,"zabkaCount":19,"index":47.2},{"city":"Zabrze","population":170924,"zabkaCount":52,"index":46.8},{"city":"Głogów","population":66120,"zabkaCount":20,"index":46.5},{"city":"Tarnów","population":107498,"zabkaCount":31,"index":44.3},{"city":"Radom","population":209296,"zabkaCount":59,"index":43.3},{"city":"Elbląg","population":118582,"zabkaCount":33,"index":42.8},{"city":"Zamość","population":62785,"zabkaCount":17,"index":41.6},{"city":"Siemianowice Śląskie","population":66270,"zabkaCount":17,"index":39.4},{"city":"Starogard Gdański","population":47272,"zabkaCount":12,"index":39},{"city":"Starachowice","population":47638,"zabkaCount":12,"index":38.7},{"city":"Jaworzno","population":90368,"zabkaCount":22,"index":37.4},{"city":"Otwock","population":44317,"zabkaCount":10,"index":34.7},{"city":"Piła","population":72527,"zabkaCount":16,"index":33.9},{"city":"Piekary Śląskie","population":54702,"zabkaCount":12,"index":33.7},{"city":"Tomaszów Mazowiecki","population":61338,"zabkaCount":13,"index":32.6},{"city":"Wałbrzych","population":109971,"zabkaCount":23,"index":32.2},{"city":"Grudziądz","population":93564,"zabkaCount":19,"index":31.2},{"city":"Mielec","population":60075,"zabkaCount":11,"index":28.2},{"city":"Łomża","population":62573,"zabkaCount":11,"index":27},{"city":"Suwałki","population":69639,"zabkaCount":11,"index":24.3},{"city":"Przemyśl","population":59779},{"city":"Tarnobrzeg","population":46360,"zabkaCount":11,"index":36.5},{"city":"Świętochłowice","population":49108,"zabkaCount":10,"index":31.3},{"city":"Dębica","population":45189,"zabkaCount":8,"index":27.2},{"city":"Ostrołęka","population":51656,"zabkaCount":8,"index":23.8},{"city":"Kalisz","population":99106,"zabkaCount":15,"index":23.3},{"city":"Stalowa Wola","population":59623,"zabkaCount":9,"index":23.2},{"city":"Racibórz","population":"54*259","zabkaCount":21},{"city":"Zakopane","population":26846,"zabkaCount":27,"index":154.7},{"city":"Sopot","population":35286,"zabkaCount":22,"index":95.9},{"city":"Płońsk","population":21924,"zabkaCount":13,"index":91.2},{"city":"Zgorzelec","population":29810,"zabkaCount":17,"index":87.7},{"city":"Lębork","population":35101,"zabkaCount":20,"index":87.6},{"city":"Świnoujście","population":40948,"zabkaCount":23,"index":86.4},{"city":"Kluczbork","population":23254,"zabkaCount":13,"index":86},{"city":"Myszków","population":31261,"zabkaCount":17,"index":83.6},{"city":"Żywiec","population":30733,"zabkaCount":16,"index":80.1},{"city":"Czechowice-Dziedzice","population":35839,"zabkaCount":18,"index":77.2},{"city":"Swarzędz","population":29862,"zabkaCount":15,"index":77.2},{"city":"Białogard","population":23950,"zabkaCount":12,"index":77},{"city":"Luboń","population":32015,"zabkaCount":16,"index":76.8},{"city":"Ząbki","population":38546,"zabkaCount":19,"index":75.8},{"city":"Grodzisk Mazowiecki","population":32452,"zabkaCount":16,"index":75.8},{"city":"Kłodzko","population":26421,"zabkaCount":13,"index":75.7},{"city":"Polkowice","population":22435,"zabkaCount":11,"index":75.4},{"city":"Sandomierz","population":22997,"zabkaCount":11,"index":73.6},{"city":"Knurów","population":37801,"zabkaCount":18,"index":73.2},{"city":"Wągrowiec","population":25607,"zabkaCount":12,"index":72.1},{"city":"Nowy Dwór Mazowiecki","population":28691,"zabkaCount":13,"index":69.7},{"city":"Nowa Sól","population":38191,"zabkaCount":17,"index":68.4},{"city":"Pruszcz Gdański","population":31578,"zabkaCount":14,"index":68.2},{"city":"Ostróda","population":32714,"zabkaCount":14,"index":65.8},{"city":"Pszczyna","population":25702,"zabkaCount":11,"index":65.8},{"city":"Szczecinek","population":39827,"zabkaCount":17,"index":65.6},{"city":"Środa Wielkopolska","population":23672,"zabkaCount":10,"index":65},{"city":"Iława","population":33206,"zabkaCount":14,"index":64.8},{"city":"Sochaczew","population":35891,"zabkaCount":15,"index":64.3},{"city":"Kwidzyn","population":38329,"zabkaCount":16,"index":64.2},{"city":"Reda","population":26707,"zabkaCount":11,"index":63.3},{"city":"Sieradz","population":41390,"zabkaCount":17,"index":63.2},{"city":"Wieluń","population":21892,"zabkaCount":9,"index":63.2},{"city":"Goleniów","population":21979,"zabkaCount":9,"index":63},{"city":"Marki","population":36816,"zabkaCount":15,"index":62.7},{"city":"Wołomin","population":36848,"zabkaCount":15,"index":62.6},{"city":"Malbork","population":38101,"zabkaCount":15,"index":60.5},{"city":"Mińsk Mazowiecki","population":40916,"zabkaCount":16,"index":60.1},{"city":"Żyrardów","population":39550,"zabkaCount":15,"index":58.3},{"city":"Sanok","population":36999,"zabkaCount":14,"index":58.2},{"city":"Jarocin","population":26453,"zabkaCount":10,"index":58.1},{"city":"Kutno","population":43332,"zabkaCount":16,"index":56.8},{"city":"Zambrów","population":21921,"zabkaCount":8,"index":56.1},{"city":"Chrzanów","population":36118,"zabkaCount":13,"index":55.3},{"city":"Września","population":31000,"zabkaCount":11,"index":54.6},{"city":"Giżycko","population":28964,"zabkaCount":10,"index":53.1},{"city":"Ciechanów","population":43883,"zabkaCount":15,"index":52.6},{"city":"Lubliniec","population":23551,"zabkaCount":8,"index":52.2},{"city":"Zduńska Wola","population":41288,"zabkaCount":14,"index":52.1},{"city":"Kościan","population":23716,"zabkaCount":8,"index":51.9},{"city":"Oława","population":33087,"zabkaCount":11,"index":51.1},{"city":"Kraśnik","population":33917,"zabkaCount":11,"index":49.9},{"city":"Żary","population":37052,"zabkaCount":12,"index":49.8},{"city":"Czerwionka-Leszczyny","population":27888,"zabkaCount":9,"index":49.6},{"city":"Mława","population":31129,"zabkaCount":10,"index":49.4},{"city":"Oświęcim","population":37569,"zabkaCount":12,"index":49.1},{"city":"Kobyłka","population":25149,"zabkaCount":8,"index":48.9},{"city":"Olkusz","population":34757,"zabkaCount":11,"index":48.7},{"city":"Brodnica","population":28701,"zabkaCount":9,"index":48.2},{"city":"Brzeg","population":35226,"zabkaCount":11,"index":48},{"city":"Police","population":32243,"zabkaCount":10,"index":47.7},{"city":"Jarosław","population":37073,"zabkaCount":11,"index":45.6},{"city":"Czeladź","population":31039,"zabkaCount":9,"index":44.6},{"city":"Wieliczka","population":24215,"zabkaCount":7,"index":44.5},{"city":"Łowicz","population":27896,"zabkaCount":8,"index":44.1},{"city":"Aleksandrów Łódzki","population":21754,"zabkaCount":6,"index":42.4},{"city":"Śrem","population":29176,"zabkaCount":8,"index":42.2},{"city":"Mikołów","population":41003,"zabkaCount":11,"index":41.3},{"city":"Cieszyn","population":33981,"zabkaCount":9,"index":40.7},{"city":"Świebodzice","population":22642,"zabkaCount":6,"index":40.7},{"city":"Bolesławiec","population":38486,"zabkaCount":10,"index":40},{"city":"Gorlice","population":26973,"zabkaCount":7,"index":39.9},{"city":"Świdnik","population":38763,"zabkaCount":10,"index":39.7},{"city":"Nysa","population":43356,"zabkaCount":11,"index":39},{"city":"Chojnice","population":39647,"zabkaCount":10,"index":38.8},{"city":"Skawina","population":24366,"zabkaCount":6,"index":37.9},{"city":"Oleśnica","population":36979,"zabkaCount":9,"index":37.4},{"city":"Dzierżoniów","population":32869,"zabkaCount":8,"index":37.4},{"city":"Nowy Targ","population":33257,"zabkaCount":8,"index":37},{"city":"Bielsk Podlaski","population":25044,"zabkaCount":6,"index":36.8},{"city":"Bielawa","population":29523,"zabkaCount":7,"index":36.5},{"city":"Bochnia","population":29554,"zabkaCount":7,"index":36.4},{"city":"Augustów","population":29946,"zabkaCount":7,"index":35.9},{"city":"Biłgoraj","population":26114,"zabkaCount":6,"index":35.3},{"city":"Szczytno","population":22813,"zabkaCount":5,"index":33.7},{"city":"Kościerzyna","population":23778,"zabkaCount":5,"index":32.3},{"city":"Łuków","population":29441,"zabkaCount":6,"index":31.3},{"city":"Jasło","population":34542,"zabkaCount":7,"index":31.2},{"city":"Żagań","population":25265,"zabkaCount":5,"index":30.4},{"city":"Świecie","population":25486,"zabkaCount":5,"index":30.2},{"city":"Wałcz","population":24949,"zabkaCount":4,"index":24.7},{"city":"Kętrzyn","population":26788,"zabkaCount":4,"index":23},{"city":"Krotoszyn","population":28701,"zabkaCount":3,"index":16.1},{"city":"Wyszków","population":26980},{"city":"Ustka","population":15199,"zabkaCount":12,"index":121.4},{"city":"Busko-Zdrój","population":15611,"zabkaCount":11,"index":108.4},{"city":"Świdwin","population":15338,"zabkaCount":10,"index":100.3},{"city":"Szamotuły","population":18736,"zabkaCount":10,"index":82.1},{"city":"Konstancin-Jeziorna","population":16889,"zabkaCount":9,"index":81.9},{"city":"Łask","population":16925,"zabkaCount":9,"index":81.8},{"city":"Ustroń","population":15989,"zabkaCount":8,"index":76.9},{"city":"Gryfice","population":16212,"zabkaCount":8,"index":75.9},{"city":"Myślenice","population":18325,"zabkaCount":9,"index":75.5},{"city":"Słubice","population":16623,"zabkaCount":8,"index":74},{"city":"Gryfino","population":20923,"zabkaCount":10,"index":73.5},{"city":"Braniewo","population":16974,"zabkaCount":8,"index":72.5},{"city":"Łomianki","population":17080,"zabkaCount":8,"index":72},{"city":"Zielonka","population":17486,"zabkaCount":8,"index":70.4},{"city":"Nakło nad Notecią","population":18026,"zabkaCount":8,"index":68.2},{"city":"Konstantynów Łódzki","population":18335,"zabkaCount":8,"index":67.1},{"city":"Libiąż","population":16838,"zabkaCount":7,"index":63.9},{"city":"Limanowa","population":15067,"zabkaCount":6,"index":61.2},{"city":"Gostyń","population":20250,"zabkaCount":8,"index":60.7},{"city":"Wadowice","population":18379,"zabkaCount":7,"index":58.6},{"city":"Złotów","population":18437,"zabkaCount":7,"index":58.4},{"city":"Dęblin","population":15887,"zabkaCount":6,"index":58.1},{"city":"Koło","population":21247,"zabkaCount":8,"index":57.9},{"city":"Orzesze","population":21290,"zabkaCount":8,"index":57.8},{"city":"Krapkowice","population":15962,"zabkaCount":6,"index":57.8},{"city":"Tomaszów Lubelski","population":18783,"zabkaCount":7,"index":57.3},{"city":"Końskie","population":18878,"zabkaCount":7,"index":57},{"city":"Pułtusk","population":19294,"zabkaCount":7,"index":55.8},{"city":"Rawa Mazowiecka","population":17193,"zabkaCount":6,"index":53.7},{"city":"Rawicz","population":20187,"zabkaCount":7,"index":53.3},{"city":"Strzelce Opolskie","population":17657,"zabkaCount":6,"index":52.3},{"city":"Radlin","population":17665,"zabkaCount":6,"index":52.2},{"city":"Kostrzyn nad Odrą","population":17704,"zabkaCount":6,"index":52.1},{"city":"Oborniki","population":17848,"zabkaCount":6,"index":51.7},{"city":"Gostynin","population":18355,"zabkaCount":6,"index":50.3},{"city":"Pyskowice","population":18455,"zabkaCount":6,"index":50},{"city":"Lubartów","population":21636,"zabkaCount":7,"index":49.7},{"city":"Pisz","population":19029,"zabkaCount":6,"index":48.5},{"city":"Rypin","population":15999,"zabkaCount":5,"index":48.1},{"city":"Bieruń","population":19375,"zabkaCount":6,"index":47.6},{"city":"Trzebinia","population":19507,"zabkaCount":6,"index":47.3},{"city":"Przasnysz","population":17055,"zabkaCount":5,"index":45.1},{"city":"Bogatynia","population":17037,"zabkaCount":5,"index":45.1},{"city":"Działdowo","population":21145,"zabkaCount":6,"index":43.6},{"city":"Rydułtowy","population":21385,"zabkaCount":6,"index":43.1},{"city":"Świebodzin","population":21550,"zabkaCount":6,"index":42.8},{"city":"Grajewo","population":21709,"zabkaCount":6,"index":42.5},{"city":"Chodzież","population":18229,"zabkaCount":5,"index":42.2},{"city":"Ząbkowice Śląskie","population":14728,"zabkaCount":4,"index":41.8},{"city":"Sokołów Podlaski","population":18814,"zabkaCount":5,"index":40.9},{"city":"Przeworsk","population":15105,"zabkaCount":4,"index":40.7},{"city":"Boguszów-Gorce","population":15154,"zabkaCount":4,"index":40.6},{"city":"Chełmno","population":19205,"zabkaCount":5,"index":40},{"city":"Lidzbark Warmiński","population":15489,"zabkaCount":4,"index":39.7},{"city":"Andrychów","population":19837,"zabkaCount":5,"index":38.8},{"city":"Nowogard","population":16448,"zabkaCount":4,"index":37.4},{"city":"Milanówek","population":16478,"zabkaCount":4,"index":37.3},{"city":"Prudnik","population":20671,"zabkaCount":5,"index":37.2},{"city":"Opoczno","population":20746,"zabkaCount":5,"index":37.1},{"city":"Namysłów","population":16622,"zabkaCount":4,"index":37},{"city":"Bytów","population":16833,"zabkaCount":4,"index":36.5},{"city":"Nowa Ruda","population":21643,"zabkaCount":5,"index":35.5},{"city":"Łańcut","population":17675,"zabkaCount":4,"index":34.8},{"city":"Sierpc","population":17788,"zabkaCount":4,"index":34.6},{"city":"Kamienna Góra","population":18585,"zabkaCount":4,"index":33.1},{"city":"Jędrzejów","population":14812,"zabkaCount":3,"index":31.1},{"city":"Sulejówek","population":19951,"zabkaCount":4,"index":30.8},{"city":"Złotoryja","population":15273,"zabkaCount":3,"index":30.2},{"city":"Łapy","population":15412,"zabkaCount":3,"index":29.9},{"city":"Strzegom","population":15873,"zabkaCount":3,"index":29.1},{"city":"Olecko","population":16364,"zabkaCount":3,"index":28.2},{"city":"Sulechów","population":16592,"zabkaCount":3,"index":27.8},{"city":"Radzionków","population":16903,"zabkaCount":3,"index":27.3},{"city":"Pleszew","population":16953,"zabkaCount":3,"index":27.2},{"city":"Hrubieszów","population":17232,"zabkaCount":3,"index":26.8},{"city":"Garwolin","population":17548,"zabkaCount":3,"index":26.3},{"city":"Mrągowo","population":21302,"zabkaCount":3,"index":21.7},{"city":"Józefów","population":20741},{"city":"Lubań","population":20723,"zabkaCount":4,"index":29.7},{"city":"Międzyrzecz","population":17667,"zabkaCount":3,"index":26.1},{"city":"Kęty","population":18443,"zabkaCount":3,"index":25},{"city":"Łęczna","population":18675,"zabkaCount":3,"index":24.7},{"city":"Pionki","population":17902,"zabkaCount":2,"index":17.2},{"city":"Sokółka","population":17967,"zabkaCount":2,"index":17.1},{"city":"Krasnystaw","population":18383,"zabkaCount":2,"index":16.7},{"city":"Ozorków","population":19128,"zabkaCount":2,"index":16.1},{"city":"Trzcianka","population":17009},{"city":"Jelcz-Laskowice","population":15648,"zabkaCount":3,"index":29.5},{"city":"Nisko","population":15193,"zabkaCount":2,"index":20.2},{"city":"Brzesko","population":16764,"zabkaCount":2,"index":18.3},{"city":"Kozienice","population":16877,"zabkaCount":2,"index":18.2},{"city":"Grójec","population":16785},{"city":"Gubin","population":16528,"zabkaCount":3,"index":27.9},{"city":"Solec Kujawski","population":15614,"zabkaCount":2,"index":19.7},{"city":"Ropczyce","population":15864,"zabkaCount":2,"index":19.4},{"city":"Międzyrzec Podlaski","population":16667,"zabkaCount":2,"index":18.5},{"city":"Lędziny","population":16731,"zabkaCount":1,"index":9.2},{"city":"Radzyń Podlaski","population":15428},{"city":"Radzymin","population":13313,"zabkaCount":10,"index":115.5},{"city":"Darłowo","population":13574,"zabkaCount":9,"index":102},{"city":"Brzeg Dolny","population":12480,"zabkaCount":8,"index":98.6},{"city":"Łęczyca","population":13786,"zabkaCount":7,"index":78.1},{"city":"Kępno","population":13889,"zabkaCount":7,"index":77.5},{"city":"Rabka-Zdrój","population":12662,"zabkaCount":6,"index":72.9},{"city":"Wąbrzeźno","population":13400,"zabkaCount":6,"index":68.9},{"city":"Człuchów","population":13479,"zabkaCount":6,"index":68.4},{"city":"Pszów","population":13734,"zabkaCount":6,"index":67.2},{"city":"Mosina","population":14255,"zabkaCount":6,"index":64.7},{"city":"Kartuzy","population":14276,"zabkaCount":6,"index":64.6},{"city":"Nowy Tomyśl","population":14319,"zabkaCount":6,"index":64.4},{"city":"Strzelin","population":12383,"zabkaCount":5,"index":62.1},{"city":"Wolsztyn","population":12859,"zabkaCount":5,"index":59.8},{"city":"Barlinek","population":13611,"zabkaCount":5,"index":56.5},{"city":"Żnin","population":13623,"zabkaCount":5,"index":56.4},{"city":"Brwinów","population":13710,"zabkaCount":5,"index":56.1},{"city":"Niepołomice","population":14022,"zabkaCount":5,"index":54.8},{"city":"Skoczów","population":14116,"zabkaCount":5,"index":54.5},{"city":"Grodzisk Wielkopolski","population":14713,"zabkaCount":5,"index":52.3},{"city":"Ożarów Mazowiecki","population":12432,"zabkaCount":4,"index":49.5},{"city":"Głubczyce","population":12441,"zabkaCount":4,"index":49.4},{"city":"Trzebnica","population":13314,"zabkaCount":4,"index":46.2},{"city":"Słupca","population":13564,"zabkaCount":4,"index":45.3},{"city":"Brzeziny","population":12365,"zabkaCount":3,"index":37.3},{"city":"Golub-Dobrzyń","population":12412,"zabkaCount":3,"index":37.2},{"city":"Pyrzyce","population":12484,"zabkaCount":3,"index":37},{"city":"Złocieniec","population":12706,"zabkaCount":3,"index":36.3},{"city":"Włodawa","population":12915,"zabkaCount":3,"index":35.7},{"city":"Chojnów","population":13236,"zabkaCount":3,"index":34.9},{"city":"Głuchołazy","population":13388,"zabkaCount":3,"index":34.5},{"city":"Morąg","population":13459,"zabkaCount":3,"index":34.3},{"city":"Nidzica","population":13547,"zabkaCount":3,"index":34.1},{"city":"Lubsko","population":13733,"zabkaCount":3,"index":33.6},{"city":"Wschowa","population":13717,"zabkaCount":3,"index":33.6},{"city":"Staszów","population":14534,"zabkaCount":3,"index":31.7},{"city":"Sławno","population":12357,"zabkaCount":2,"index":24.9},{"city":"Kłobuck","population":12756,"zabkaCount":2,"index":24.1},{"city":"Tuchola","population":13534,"zabkaCount":2,"index":22.7},{"city":"Gołdap","population":13600,"zabkaCount":2,"index":22.6},{"city":"Leżajsk","population":13585,"zabkaCount":2,"index":22.6},{"city":"Ostrzeszów","population":13964,"zabkaCount":2,"index":22},{"city":"Głowno","population":13961,"zabkaCount":2,"index":22},{"city":"Siemiatycze","population":14210,"zabkaCount":2,"index":21.6},{"city":"Chełmża","population":14362,"zabkaCount":2,"index":21.4},{"city":"Lipno","population":14283},{"city":"Węgrów","population":12452,"zabkaCount":1,"index":12.3},{"city":"Koluszki","population":12776,"zabkaCount":1,"index":12},{"city":"Dębno","population":13626,"zabkaCount":1,"index":11.3},{"city":"Sędziszów Małopolski","population":12415},{"city":"Wisła","population":11007,"zabkaCount":9,"index":125.7},{"city":"Krynica-Zdrój","population":10456,"zabkaCount":8,"index":117.7},{"city":"Krosno Odrzańskie","population":11155,"zabkaCount":8,"index":110.3},{"city":"Miastko","population":10211,"zabkaCount":7,"index":105.4},{"city":"Ciechocinek","population":10534,"zabkaCount":6,"index":87.6},{"city":"Wołów","population":12298,"zabkaCount":7,"index":87.5},{"city":"Wasilków","population":11802,"zabkaCount":6,"index":78.2},{"city":"Sulęcin","population":10005,"zabkaCount":5,"index":76.8},{"city":"Błonie","population":12134,"zabkaCount":6,"index":76},{"city":"Szydłowiec","population":11557,"zabkaCount":5,"index":66.5},{"city":"Łobez","population":10048,"zabkaCount":4,"index":61.2},{"city":"Murowana Goślina","population":10410,"zabkaCount":4,"index":59.1},{"city":"Brzeszcze","population":11092,"zabkaCount":4,"index":55.5},{"city":"Węgorzewo","population":11144,"zabkaCount":4,"index":55.2},{"city":"Puck","population":11139,"zabkaCount":4,"index":55.2},{"city":"Milicz","population":11199,"zabkaCount":4,"index":54.9},{"city":"Zdzieszowice","population":11246,"zabkaCount":4,"index":54.7},{"city":"Drawsko Pomorskie","population":11417,"zabkaCount":4,"index":53.9},{"city":"Mogilno","population":11652,"zabkaCount":4,"index":52.8},{"city":"Janów Lubelski","population":11661,"zabkaCount":4,"index":52.7},{"city":"Góra Kalwaria","population":11988,"zabkaCount":4,"index":51.3},{"city":"Aleksandrów Kujawski","population":12058,"zabkaCount":4,"index":51},{"city":"Syców","population":10340,"zabkaCount":3,"index":44.6},{"city":"Lubawa","population":10374,"zabkaCount":3,"index":44.5},{"city":"Czarnków","population":10464,"zabkaCount":3,"index":44.1},{"city":"Międzychód","population":10476,"zabkaCount":3,"index":44},{"city":"Pińczów","population":10524,"zabkaCount":3,"index":43.8},{"city":"Kowary","population":10650,"zabkaCount":3,"index":43.3},{"city":"Myślibórz","population":11049,"zabkaCount":3,"index":41.8},{"city":"Koronowo","population":11070,"zabkaCount":3,"index":41.7},{"city":"Wronki","population":11064,"zabkaCount":3,"index":41.7},{"city":"Lubaczów","population":11830,"zabkaCount":3,"index":39},{"city":"Warka","population":11926,"zabkaCount":3,"index":38.7},{"city":"Nowe Miasto Lubawskie","population":10709,"zabkaCount":2,"index":28.7},{"city":"Nowa Dęba","population":11006,"zabkaCount":2,"index":27.9},{"city":"Ostrów Mazowiecka","population":22216,"zabkaCount":4,"index":27.7},{"city":"Rogoźno","population":11124,"zabkaCount":2,"index":27.6},{"city":"Miechów","population":11500,"zabkaCount":2,"index":26.7},{"city":"Pasłęk","population":12117,"zabkaCount":2,"index":25.4},{"city":"Piastów","population":22559,"zabkaCount":3,"index":20.4},{"city":"Bartoszyce","population":22984,"zabkaCount":3,"index":20.1},{"city":"Dobre Miasto","population":10010,"zabkaCount":1,"index":15.4},{"city":"Kolno","population":10143,"zabkaCount":1,"index":15.2},{"city":"Parczew","population":10555,"zabkaCount":1,"index":14.6},{"city":"Biskupiec","population":10628,"zabkaCount":1,"index":14.5},{"city":"Łaziska Górne","population":22130,"zabkaCount":2,"index":13.9},{"city":"Jawor","population":22462,"zabkaCount":2,"index":13.7},{"city":"Dąbrowa Tarnowska","population":11844,"zabkaCount":1,"index":13},{"city":"Turek","population":26441,"zabkaCount":2,"index":11.6},{"city":"Choszczno","population":14998,"zabkaCount":1,"index":10.3},{"city":"Hajnówka","population":20265,"zabkaCount":1,"index":7.6},{"city":"Góra","population":11574},{"city":"Szprotawa","population":11530}]

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fillTable.js":
/*!**************************!*\
  !*** ./src/fillTable.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fillTable)
/* harmony export */ });
function fillTable(_firstIndex, _count, _data, _table) {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _data_cities_with_ratio_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/cities_with_ratio.csv */ "./src/data/cities_with_ratio.csv");
/* harmony import */ var _data_cities_with_ratio_csv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_cities_with_ratio_csv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fillTable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fillTable.js */ "./src/fillTable.js");



console.log("Hello webpack");
const tableBody = document.querySelector("tbody");
(0,_fillTable_js__WEBPACK_IMPORTED_MODULE_2__["default"])(0, 10, (_data_cities_with_ratio_csv__WEBPACK_IMPORTED_MODULE_1___default()), tableBody);

const btnLoadMore = document.getElementById("load-more");
btnLoadMore.addEventListener("click", () => {
  (0,_fillTable_js__WEBPACK_IMPORTED_MODULE_2__["default"])(10, 40, (_data_cities_with_ratio_csv__WEBPACK_IMPORTED_MODULE_1___default()), tableBody);
  btnLoadMore.remove();
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map