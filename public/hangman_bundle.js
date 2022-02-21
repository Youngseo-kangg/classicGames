/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/hangman.js":
/*!******************************!*\
  !*** ./source/js/hangman.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/reset.css */ \"./source/css/reset.css\");\n/* harmony import */ var _css_hangman_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/hangman.css */ \"./source/css/hangman.css\");\n\n\nconst hangman = {};\nhangman.word = ''; //단어\n\nhangman.definition = 'no hint, good luck!'; // 단어 정의\n\nhangman.partOfSpeech = 'no hint, good luck!'; // 품사 정의\n\nhangman.typeOf = ['no hint, good luck!']; // 카테고리 정의\n\nhangman.validGuess = /[a-zA-Z]/; // 유효성 검사용\n\nhangman.lives = 6; // 입력 기회\n\nhangman.spelling = []; // 단어 스펠링\n\nhangman.userGuess = ['a', 'b']; // 유저가 입력한 내용\n// 초기 HTML 문서를 완전히 불러오고 분석했을 때 발생 + 스타일 시트, 이미지, 하위 프레임의 로딩은 기다리지 않음\n\nhangman.start = () => {\n  // TODO : 필요한 header, main, div 등 만들고 세팅\n  let header = document.createElement('header');\n  let main = document.createElement('main');\n  let footer = document.createElement('footer');\n  document.body.append(header, main, footer); // TODO : 처음 접속했을때 띄울 안내 article 만들고 세팅\n\n  let article = document.createElement('article'); // 시작버튼 누르기 전 창으로 작동할 태그\n\n  article.id = 'beforeStart';\n  let articleDiv = document.createElement('div');\n  articleDiv.id = 'beforeStartMsg';\n  let articleP = document.createElement('p');\n  articleP.textContent = '행맨 게임에 오신것을 환영합니다!';\n  let articleBtn = document.createElement('button'); // 이 버튼을 누르면 article꺼짐\n\n  articleBtn.id = 'startBtn';\n  articleBtn.textContent = '게임 시작하기'; // TODO : articleBtn 버튼 눌렀을 때 article 사라지는 함수 구현\n\n  articleBtn.addEventListener('click', () => {\n    article.style.display = 'none';\n    hangman.displayQuestion();\n  }); // 세팅하기\n\n  articleDiv.append(articleP, articleBtn);\n  article.append(articleDiv);\n  document.body.append(article); // TODO : Header안에 h1태그, 제목, 클래스 주기\n\n  let h1 = document.createElement('h1');\n  h1.textContent = '행맨 게임';\n  document.querySelector('header').appendChild(h1); // TODO : main 안에 행맨 이미지, 입력창, 점수 나타낼 div 만들고 main에 세팅\n\n  let mainComponents = ['hangmanDisplay', 'hangmanHint', 'hangmanScore', 'hangmanGuess', 'hangmanInput'];\n  let readMain = document.querySelector('main');\n\n  for (let i = 0; i < mainComponents.length; i++) {\n    let div = document.createElement('section'); // section 새로 생성\n\n    div.id = mainComponents[i]; // id 지정\n\n    readMain.appendChild(div);\n  } // TODO : 점수창, 틀린 알파벳 창 세팅\n\n\n  let readHangmanScore = document.querySelector('#hangmanScore');\n  readHangmanScore.textContent = `opportunities : ${hangman.lives}`;\n  let readHangmanGuess = document.querySelector('#hangmanGuess');\n  readHangmanGuess.textContent = `Guess : ${hangman.userGuess.reduce((acc, cur) => acc = acc + ',' + cur)}`; // TODO : 단어 정의, 카테고리, 품사 정의 관련 div 만들기\n\n  let readHangmanHint = document.querySelector('#hangmanHint');\n  let hangmanHints = ['definition', 'partOfSpeech', 'typeOf'];\n\n  for (let i = 0; i < hangmanHints.length; i++) {\n    let hangmanHintWrapper = document.createElement('div'); // wrapper만들어주기\n\n    hangmanHintWrapper.id = hangmanHints[i]; // id 지정\n\n    readHangmanHint.appendChild(hangmanHintWrapper); // 붙여주기\n  }\n\n  for (let i = 0; i < hangmanHints.length; i++) {\n    let readHangmanHint = document.querySelector(`#${hangmanHints[i]}`);\n    let hangmanHintText = document.createElement('p'); // 내용 태그\n\n    hangmanHintText.classList.add(hangmanHints[i]);\n    hangmanHintText.textContent = `${hangmanHints[i]}: ${hangman[hangmanHints[i]]}`; // 내용에 텍스트 넣어주기\n\n    readHangmanHint.append(hangmanHintText);\n  } // TODO : 알파벳 입력창 + 버튼 담아둘 div 만들고 hangmanInput에 세팅\n\n\n  let readHangmanInput = document.querySelector('#hangmanInput');\n  let hangmanInputWrapper = document.createElement('div');\n  hangmanInputWrapper.classList.add('hangmanInputWrapper');\n  readHangmanInput.append(hangmanInputWrapper); // TODO : 알파벳 입력창 만들기\n\n  let alphabetInput = document.createElement('input');\n  let readHangmanInputWrapper = document.querySelector('.hangmanInputWrapper');\n  alphabetInput.setAttribute('type', 'text'); // text속성 주기\n\n  alphabetInput.setAttribute('placeholder', 'Letter'); // text속성 주기\n\n  readHangmanInputWrapper.append(alphabetInput); // TODO : 알파벳 입력 버튼 만들기\n\n  let alphabetInputButton = document.createElement('button');\n  alphabetInputButton.textContent = '입력하기';\n  readHangmanInputWrapper.append(alphabetInputButton); // TODO : 행맨 매달릴 부분 + 캐릭터 만들기\n\n  let readHangmanDisplay = document.querySelector('#hangmanDisplay'); // * 매달릴 부분 만들기\n\n  let treeComponents = ['rope', 'branch', 'tree', 'ground'];\n  let tree = document.createElement('div');\n  tree.id = 'hangmanTree';\n  readHangmanDisplay.appendChild(tree);\n  let readTree = document.querySelector('#hangmanTree');\n\n  for (let i = 0; i < treeComponents.length; i++) {\n    let treePart = document.createElement('div');\n    treePart.id = treeComponents[i]; // id 지정\n\n    readTree.appendChild(treePart);\n  } // * 캐릭터 만들기\n\n\n  let hangmanBody = document.createElement('div');\n  hangmanBody.classList.add('hangmanBody');\n  readHangmanDisplay.appendChild(hangmanBody);\n  let readHangmanBody = document.querySelector('.hangmanBody');\n  let bodyComponents = ['head', 'torso', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg'];\n\n  for (let i = 0; i < bodyComponents.length; i++) {\n    let bodyPart = document.createElement('div');\n    bodyPart.id = bodyComponents[i]; // id 지정\n\n    bodyPart.style.display = 'none'; // class 지정\n\n    readHangmanBody.appendChild(bodyPart);\n  } // TODO: DOMContentLoaded확인하기\n\n\n  console.log('hangman.js DOMContentLoaded');\n};\n\nhangman.displayQuestion = function () {\n  // 랜덤한 단어 요청하기\n  fetch('https://wordsapiv1.p.rapidapi.com/words/?random=true&lettersMin=1&lettersMax=10', {\n    method: 'GET',\n    headers: {\n      'x-rapidapi-host': \"wordsapiv1.p.rapidapi.com\",\n      'x-rapidapi-key': \"7a14a2261bmshc222b74b06ac04cp1aa3acjsn67f1284536ac\"\n    }\n  }).then(res => {\n    res.json().then(res => {\n      // console.log(res);\n      hangman.word = res.word; // 재할당\n\n      if (res.results !== undefined) {\n        if (res.results.length >= 1) {\n          if (res.results[0].definition) {\n            hangman.definition = res.results[0].definition;\n            let readHangmanDefinition = document.querySelector('.definition');\n            readHangmanDefinition.textContent = `definition : ${hangman.definition}`;\n          }\n\n          if (res.results[0].partOfSpeech) {\n            hangman.partOfSpeech = res.results[0].partOfSpeech;\n            let readHangmanSpeech = document.querySelector('.partOfSpeech');\n            readHangmanSpeech.textContent = `partOfSpeech : ${hangman.partOfSpeech}`;\n          }\n\n          if (res.results[0].typeOf) {\n            hangman.typeOf = res.results[0].typeOf;\n            let readHangmanTypeof = document.querySelector('.typeOf');\n            readHangmanTypeof.textContent = `typeOf : ${hangman.typeOf}`;\n          }\n        }\n      } // console.log(hangman);\n\n    }).then(() => {});\n  }).catch(err => {\n    console.error(err);\n  }); // 요청한 단어 베이스로 칸 만들어 주기\n}; // Initialize app\n\n\nhangman.init = function () {\n  hangman.start();\n};\n\nhangman.init();\n\n//# sourceURL=webpack://classicgames/./source/js/hangman.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./source/css/hangman.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./source/css/hangman.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  width: 100%;\\n  height: 100%;\\n  min-width: 280px;\\n  min-height: 653px;\\n  display: grid;\\n  grid-template-rows: 50px 1fr 50px;\\n}\\n\\n#beforeStart {\\n  width: 100%;\\n  height: 100%;\\n  position: fixed;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  background-color: rgba(0, 0, 0, 0.7);\\n  display: grid;\\n  place-items: center;\\n}\\n\\n#beforeStartMsg {\\n  width: 250px;\\n  height: 150px;\\n  display: grid;\\n  place-items: center;\\n  grid-template-rows: 2fr 1fr;\\n  background-color: rgba(0, 0, 0);\\n  color: #fff;\\n}\\n\\n#startBtn {\\n  width: 100px;\\n  height: 30px;\\n  font-size: 14px;\\n  background: #000;\\n  color: yellow;\\n  box-shadow: 5px 5px;\\n}\\n\\n#startBtn:hover {\\n  color: blue;\\n  background: greenyellow;\\n}\\n\\nmain {\\n  display: grid;\\n  place-items: center;\\n  row-gap: 10px;\\n  grid-template-rows: 350px 120px 1fr 1fr 1fr;\\n}\\n\\nheader {\\n  display: grid;\\n  place-items: center;\\n}\\nh1 {\\n  font-size: 25px;\\n}\\n\\n#hangmanDisplay {\\n  position: relative;\\n  width: 350px;\\n  height: 350px;\\n  display: grid;\\n  place-items: center;\\n  grid-template-columns: repeat(2, 1fr);\\n}\\n\\n#ground,\\n#tree,\\n#branch,\\n#rope,\\n#head,\\n#torso,\\n#leftArm,\\n#rightArm,\\n#leftLeg,\\n#rightLeg {\\n  position: absolute;\\n}\\n\\n#ground,\\n#tree,\\n#branch,\\n#rope,\\n#torso,\\n#leftArm,\\n#rightArm,\\n#leftLeg,\\n#rightLeg {\\n  background: #000000;\\n  width: 4px;\\n}\\n\\n#ground {\\n  width: 100px;\\n  height: 4px;\\n  bottom: 50px;\\n}\\n\\n#tree {\\n  bottom: 295px;\\n  height: 245px;\\n  top: 53px;\\n}\\n\\n#branch {\\n  width: 70px;\\n  height: 4px;\\n  bottom: 295px;\\n}\\n\\n#rope {\\n  width: 4px;\\n  height: 22px;\\n  top: 53px;\\n  left: 154px;\\n}\\n\\n#head {\\n  border-radius: 50%;\\n  height: 40px;\\n  width: 40px;\\n  border: 4px solid #000000;\\n  left: 130px;\\n  top: 74px;\\n}\\n\\n#torso {\\n  height: 70px;\\n  left: 150px;\\n  top: 120px;\\n}\\n\\n#leftArm {\\n  height: 50px;\\n  top: 120px;\\n  left: 140px;\\n  -webkit-transform: rotate(20deg);\\n  transform: rotate(20deg);\\n}\\n\\n#rightArm {\\n  height: 50px;\\n  top: 120px;\\n  left: 160px;\\n  -webkit-transform: rotate(-20deg);\\n  transform: rotate(-20deg);\\n}\\n\\n#leftLeg {\\n  height: 60px;\\n  top: 185px;\\n  left: 140px;\\n  -webkit-transform: rotate(20deg);\\n  transform: rotate(20deg);\\n}\\n\\n#rightLeg {\\n  height: 60px;\\n  top: 185px;\\n  left: 160px;\\n  -webkit-transform: rotate(-20deg);\\n  transform: rotate(-20deg);\\n}\\n\\n#hangmanInput {\\n  display: grid;\\n  place-items: center;\\n}\\n.hangmanInputWrapper {\\n  width: auto;\\n  height: 35px;\\n  display: grid;\\n  grid-template-columns: 195px 80px;\\n  column-gap: 5px;\\n}\\ninput,\\nbutton {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\ninput {\\n  border-bottom: 2px solid #eee;\\n  outline: none;\\n}\\n\\n@media (max-width: 330px) {\\n  #hangmanDisplay {\\n    position: relative;\\n    width: 280px;\\n    height: 350px;\\n    display: grid;\\n    place-items: center;\\n    grid-template-columns: repeat(2, 1fr);\\n  }\\n  #tree {\\n    top: 55px;\\n  }\\n  #branch {\\n    top: 55px;\\n  }\\n  #rope {\\n    top: 55px;\\n    left: 140px;\\n  }\\n  #head {\\n    left: 120px;\\n    top: 75px;\\n  }\\n  #torso {\\n    left: 140px;\\n    top: 120px;\\n  }\\n  #leftArm {\\n    top: 120px;\\n    left: 130px;\\n  }\\n\\n  #rightArm {\\n    top: 120px;\\n    left: 150px;\\n  }\\n\\n  #leftLeg {\\n    top: 185px;\\n    left: 130px;\\n  }\\n\\n  #rightLeg {\\n    top: 185px;\\n    left: 150px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://classicgames/./source/css/hangman.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./source/css/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./source/css/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\ninput,\\nbutton,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: '';\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://classicgames/./source/css/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://classicgames/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://classicgames/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./source/css/hangman.css":
/*!********************************!*\
  !*** ./source/css/hangman.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_hangman_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./hangman.css */ \"./node_modules/css-loader/dist/cjs.js!./source/css/hangman.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_hangman_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_hangman_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_hangman_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_hangman_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://classicgames/./source/css/hangman.css?");

/***/ }),

/***/ "./source/css/reset.css":
/*!******************************!*\
  !*** ./source/css/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./source/css/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://classicgames/./source/css/reset.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://classicgames/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://classicgames/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://classicgames/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://classicgames/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://classicgames/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://classicgames/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./source/js/hangman.js");
/******/ 	
/******/ })()
;