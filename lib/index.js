(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("index", [], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _pali_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pali-script */ "./src/pali-script.js");
/* harmony import */ var _pali_script_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pali-script-extensions */ "./src/pali-script-extensions.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Script: _pali_script__WEBPACK_IMPORTED_MODULE_0__.Script,
  TextProcessor: _pali_script__WEBPACK_IMPORTED_MODULE_0__.TextProcessor,
  getScriptForCode: _pali_script__WEBPACK_IMPORTED_MODULE_0__.getScriptForCode,
  PaliScriptInfo: _pali_script__WEBPACK_IMPORTED_MODULE_0__.PaliScriptInfo,
  ScriptIndex: _pali_script__WEBPACK_IMPORTED_MODULE_0__.ScriptIndex,
  convert: _pali_script_extensions__WEBPACK_IMPORTED_MODULE_1__.convert,
  getLocaleForScript: _pali_script_extensions__WEBPACK_IMPORTED_MODULE_1__.getLocaleForScript,
  getLocaleNameForScript: _pali_script_extensions__WEBPACK_IMPORTED_MODULE_1__.getLocaleNameForScript,
  getSupportedLocales: _pali_script_extensions__WEBPACK_IMPORTED_MODULE_1__.getSupportedLocales
});

/***/ }),

/***/ "./src/pali-script-extensions.js":
/*!***************************************!*\
  !*** ./src/pali-script-extensions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convert": () => /* binding */ convert,
/* harmony export */   "getLocaleForScript": () => /* binding */ getLocaleForScript,
/* harmony export */   "getLocaleNameForScript": () => /* binding */ getLocaleNameForScript,
/* harmony export */   "getSupportedLocales": () => /* binding */ getSupportedLocales
/* harmony export */ });
/* harmony import */ var _pali_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pali-script */ "./src/pali-script.js");
var _this = undefined;

 // TODO: Use number as intermediate language instead of Sinh.

var convert = function convert(input, fromScript, toScript) {
  var sinh = _this.convertToSinh(input, fromScript);

  return _this.convertFromSinh(sinh, toScript);
};
var getLocaleForScript = function getLocaleForScript(s) {
  var _PS$PaliScriptInfo$ge;

  return (_PS$PaliScriptInfo$ge = _pali_script__WEBPACK_IMPORTED_MODULE_0__.PaliScriptInfo.get(s)) == null ? void 0 : _PS$PaliScriptInfo$ge[3].locale;
};
var getLocaleNameForScript = function getLocaleNameForScript(s) {
  var _PS$PaliScriptInfo$ge2;

  return (_PS$PaliScriptInfo$ge2 = _pali_script__WEBPACK_IMPORTED_MODULE_0__.PaliScriptInfo.get(s)) == null ? void 0 : _PS$PaliScriptInfo$ge2[3].localeName;
};
var getSupportedLocales = function getSupportedLocales() {
  var sInfos = Object.getOwnPropertyNames(_pali_script__WEBPACK_IMPORTED_MODULE_0__.Script).map(function (k) {
    var _PS$PaliScriptInfo$ge3;

    return (_PS$PaliScriptInfo$ge3 = _pali_script__WEBPACK_IMPORTED_MODULE_0__.PaliScriptInfo.get(_pali_script__WEBPACK_IMPORTED_MODULE_0__.Script[k])) == null ? void 0 : _PS$PaliScriptInfo$ge3[3];
  });
  var ls = new Set(sInfos.map(function (si) {
    return si.locale;
  }));
  return ls;
};

/***/ }),

/***/ "./src/pali-script.js":
/*!****************************!*\
  !*** ./src/pali-script.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptIndex": () => /* binding */ ScriptIndex,
/* harmony export */   "sinh_conso_range": () => /* binding */ sinh_conso_range,
/* harmony export */   "thai_conso_range": () => /* binding */ thai_conso_range,
/* harmony export */   "lao_conso_range": () => /* binding */ lao_conso_range,
/* harmony export */   "mymr_conso_range": () => /* binding */ mymr_conso_range,
/* harmony export */   "TextProcessor": () => /* binding */ TextProcessor,
/* harmony export */   "Script": () => /* binding */ Script,
/* harmony export */   "PaliScriptInfo": () => /* binding */ PaliScriptInfo,
/* harmony export */   "getScriptForCode": () => /* binding */ getScriptForCode
/* harmony export */ });
var _ScriptIndex, _beautify_func, _un_beautify_func, _convert_to_func, _convert_from_func;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// TODO: Clean these up gradually.

/* eslint-disable no-misleading-character-class */

/* eslint-disable no-useless-escape */

/* eslint-disable camelcase */

/* eslint-disable no-restricted-syntax */

/**
 * Copyright Path Nirvana 2018
 * The code and character mapping defined in this file can not be used for any commercial purposes.
 * Permission from the auther is required for all other purposes.
 */
// https://en.wikipedia.org/wiki/ISO_15924
var Script = Object.freeze({
  SI: 'Sinh',
  HI: 'Deva',
  RO: 'Latn',
  THAI: 'Thai',
  LAOS: 'Laoo',
  MY: 'Mymr',
  KM: 'Khmr',
  BENG: 'Beng',
  GURM: 'Guru',
  THAM: 'Lana',
  GUJA: 'Gujr',
  TELU: 'Telu',
  KANN: 'Knda',
  MALA: 'Mlym',
  BRAH: 'Brah',
  TIBT: 'Tibt',
  CYRL: 'Cyrl'
}); // Locale TLAs from https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes

var PaliScriptInfo = new Map([[Script.SI, ['Sinhala', 'සිංහල', [[0x0d80, 0x0dff]], {
  f: 'sl_flag.png',
  locale: 'si',
  localeName: 'සිංහල'
}]], [Script.HI, ['Devanagari', 'नागरी', [[0x0900, 0x097f]], {
  f: 'in_flag.png',
  locale: 'hi',
  localeName: 'हिन्दी'
}]], // latin extended and latin extended additional blocks
[Script.RO, ['Roman', 'Roman', [[0x0000, 0x017f], [0x1e00, 0x1eff]], {
  f: 'uk_flag.png',
  locale: 'en',
  localeName: 'English'
}]], // thai special letters are outside the range
[Script.THAI, ['Thai', 'ไทย', [[0x0e00, 0x0e7f], 0xf70f, 0xf700], {
  f: 'th_flag.png',
  locale: 'th',
  localeName: 'ไทย'
}]], [Script.LAOS, ['Laos', 'ລາວ', [[0x0e80, 0x0eff]], {
  f: 'laos_flag.png',
  locale: 'lo',
  localeName: 'ລາວ'
}]], [Script.MY, ['Myanmar', 'ဗမာစာ', [[0x1000, 0x107f]], {
  f: 'my_flag.png',
  locale: 'my',
  localeName: 'ဗမာစာ'
}]], [Script.KM, ['Khmer', 'ភាសាខ្មែរ', [[0x1780, 0x17ff]], {
  f: 'kh_flag.png',
  locale: 'km',
  localeName: 'ភាសាខ្មែរ'
}]], [Script.BENG, ['Bengali', 'বাংলা', [[0x0980, 0x09ff]], {
  f: 'bangla_flag.png',
  locale: 'bn',
  localeName: 'বাংলা',
  g: 'indian'
}]], [Script.GURM, ['Gurmukhi', 'ਗੁਰਮੁਖੀ', [[0x0a00, 0x0a7f]], {
  locale: 'pa',
  localeName: 'ਪੰਜਾਬੀ',
  g: 'indian'
}]], [Script.GUJA, ['Gujarati', 'ગુજરાતી', [[0x0a80, 0x0aff]], {
  locale: 'gu',
  localeName: 'ગુજરાતી',
  g: 'indian'
}]], [Script.TELU, ['Telugu', 'తెలుగు', [[0x0c00, 0x0c7f]], {
  locale: 'te',
  localeName: 'తెలుగు',
  g: 'indian'
}]], [Script.KANN, ['Kannada', 'ಕನ್ನಡ', [[0x0c80, 0x0cff]], {
  locale: 'kn',
  localeName: 'ಕನ್ನಡ',
  g: 'indian'
}]], [Script.MALA, ['Malayalam', 'മലയാളം', [[0x0d00, 0x0d7f]], {
  locale: 'ml',
  localeName: 'മലയാളം',
  g: 'indian'
}]], [Script.THAM, ['Tai Tham', 'Tai Tham LN', [[0x1a20, 0x1aaf]], {
  locale: 'th',
  localeName: 'ไทย (Lanna)',
  c: 'beta-script',
  g: 'other'
}]], // charCodeAt returns two codes for each letter [[0x11000, 0x1107F]]
[Script.BRAH, ['Brahmi', 'Brāhmī', [[0xd804, 0xd804], [0xdc00, 0xdc7f]], {
  locale: 'hi',
  localeName: 'हिन्दी (Brah)',
  g: 'other'
}]], [Script.TIBT, ['Tibetan', 'བོད་སྐད།', [[0x0f00, 0x0fff]], {
  f: 'tibet_flag.png',
  c: 'larger',
  locale: 'bo',
  localeName: 'བོད་སྐད།',
  g: 'other'
}]], // also adding the "Combining Diacritical Marks" block
[Script.CYRL, ['Cyrillic', 'кириллица', [[0x0400, 0x04ff], [0x0300, 0x036f]], {
  f: 'russia_flag.png',
  locale: 'ru',
  localeName: 'ру́сский',
  g: 'other'
}]]]);

function getScriptForCode(charCode) {
  for (var _iterator = _createForOfIteratorHelperLoose(PaliScriptInfo), _step; !(_step = _iterator()).done;) {
    var info = _step.value;

    for (var _iterator2 = _createForOfIteratorHelperLoose(info[1][2]), _step2; !(_step2 = _iterator2()).done;) {
      var range = _step2.value;
      if (Array.isArray(range) && charCode >= range[0] && charCode <= range[1]) return info[0];
      if (Number.isInteger(range) && charCode === range) return info[0];
    }
  }

  return -1;
}

var ScriptIndex = (_ScriptIndex = {}, _ScriptIndex[Script.SI] = 0, _ScriptIndex[Script.HI] = 1, _ScriptIndex[Script.RO] = 2, _ScriptIndex[Script.THAI] = 3, _ScriptIndex[Script.LAOS] = 4, _ScriptIndex[Script.MY] = 5, _ScriptIndex[Script.KM] = 6, _ScriptIndex[Script.BENG] = 7, _ScriptIndex[Script.GURM] = 8, _ScriptIndex[Script.THAM] = 9, _ScriptIndex[Script.GUJA] = 10, _ScriptIndex[Script.TELU] = 11, _ScriptIndex[Script.KANN] = 12, _ScriptIndex[Script.MALA] = 13, _ScriptIndex[Script.BRAH] = 14, _ScriptIndex[Script.TIBT] = 15, _ScriptIndex[Script.CYRL] = 16, _ScriptIndex);
var specials = [// independent vowels
['අ', 'अ', 'a', 'อ', 'ອ', 'အ', 'អ', 'অ', 'ਅ', "\u1A4B", 'અ', 'అ', 'ಅ', 'അ', '𑀅', 'ཨ', 'а'], ['ආ', 'आ', 'ā', 'อา', 'ອາ', 'အာ', 'អា', 'আ', 'ਆ', "\u1A4C", 'આ', 'ఆ', 'ಆ', 'ആ', '𑀆', 'ཨཱ', 'а̄'], ['ඉ', 'इ', 'i', 'อิ', 'ອິ', 'ဣ', 'ឥ', 'ই', 'ਇ', "\u1A4D", 'ઇ', 'ఇ', 'ಇ', 'ഇ', '𑀇', 'ཨི', 'и'], ['ඊ', 'ई', 'ī', 'อี', 'ອີ', 'ဤ', 'ឦ', 'ঈ', 'ਈ', "\u1A4E", 'ઈ', 'ఈ', 'ಈ', 'ഈ', '𑀈', 'ཨཱི', 'ӣ'], ['උ', 'उ', 'u', 'อุ', 'ອຸ', 'ဥ', 'ឧ', 'উ', 'ਉ', "\u1A4F", 'ઉ', 'ఉ', 'ಉ', 'ഉ', '𑀉', 'ཨུ', 'у'], ['ඌ', 'ऊ', 'ū', 'อู', 'ອູ', 'ဦ', 'ឩ', 'ঊ', 'ਊ', "\u1A50", 'ઊ', 'ఊ', 'ಊ', 'ഊ', '𑀊', 'ཨཱུ', 'ӯ'], ['එ', 'ए', 'e', 'อเ', 'ອເ', 'ဧ', 'ឯ', 'এ', 'ਏ', "\u1A51", 'એ', 'ఏ', 'ಏ', 'ഏ', '𑀏', 'ཨེ', 'е'], ['ඔ', 'ओ', 'o', 'อโ', 'ອໂ', 'ဩ', 'ឱ', 'ও', 'ਓ', "\u1A52", 'ઓ', 'ఓ', 'ಓ', 'ഓ', '𑀑', 'ཨོ', 'о'],
/*
 * various signs
 */
// niggahita - anusawara
['ං', 'ं', 'ṃ', "\u0E4D", "\u0ECD", 'ံ', 'ំ', 'ং', 'ਂ', "\u1A74", 'ં', 'ం', 'ಂ', 'ം', '𑀁', "\u0F7E", 'м̣'], // visarga - not in pali but deva original text has it
// (thai/lao/tt - not found. using the closest equivalent per wikipedia)
['ඃ', 'ः', 'ḥ', 'ะ', 'ະ', 'း', 'ះ', 'ঃ', 'ਃ', "\u1A61", 'ઃ', 'ః', 'ಃ', 'ഃ', '𑀂', "\u0F7F", 'х̣'], // virama (al - hal). roman/cyrillic need special handling
['්', '्', '', "\u0E3A", "\u0EBA", '္', '្', '্', '੍', "\u1A60", '્', '్', '್', '്', "\uD804\uDC46", "\u0F84", ''], // digits
['0', '०', '0', '๐', '໐', '၀', '០', '০', '੦', "\u1A90", '૦', '౦', '೦', '൦', '𑁦', '༠', '0'], ['1', '१', '1', '๑', '໑', '၁', '១', '১', '੧', "\u1A91", '૧', '౧', '೧', '൧', '𑁧', '༡', '1'], ['2', '२', '2', '๒', '໒', '၂', '២', '২', '੨', "\u1A92", '૨', '౨', '೨', '൨', '𑁨', '༢', '2'], ['3', '३', '3', '๓', '໓', '၃', '៣', '৩', '੩', "\u1A93", '૩', '౩', '೩', '൩', '𑁩', '༣', '3'], ['4', '४', '4', '๔', '໔', '၄', '៤', '৪', '੪', "\u1A94", '૪', '౪', '೪', '൪', '𑁪', '༤', '4'], ['5', '५', '5', '๕', '໕', '၅', '៥', '৫', '੫', "\u1A95", '૫', '౫', '೫', '൫', '𑁫', '༥', '5'], ['6', '६', '6', '๖', '໖', '၆', '៦', '৬', '੬', "\u1A96", '૬', '౬', '೬', '൬', '𑁬', '༦', '6'], ['7', '७', '7', '๗', '໗', '၇', '៧', '৭', '੭', "\u1A97", '૭', '౭', '೭', '൭', '𑁭', '༧', '7'], ['8', '८', '8', '๘', '໘', '၈', '៨', '৮', '੮', "\u1A98", '૮', '౮', '೮', '൮', '𑁮', '༨', '8'], ['9', '९', '9', '๙', '໙', '၉', '៩', '৯', '੯', "\u1A99", '૯', '౯', '೯', '൯', '𑁯', '༩', '9']];
var consos = [// velar stops
['ක', 'क', 'k', 'ก', 'ກ', 'က', 'ក', 'ক', 'ਕ', "\u1A20", 'ક', 'క', 'ಕ', 'ക', '𑀓', 'ཀ', 'к'], ['ඛ', 'ख', 'kh', 'ข', 'ຂ', 'ခ', 'ខ', 'খ', 'ਖ', "\u1A21", 'ખ', 'ఖ', 'ಖ', 'ഖ', '𑀔', 'ཁ', 'кх'], ['ග', 'ग', 'g', 'ค', 'ຄ', 'ဂ', 'គ', 'গ', 'ਗ', "\u1A23", 'ગ', 'గ', 'ಗ', 'ഗ', '𑀕', 'ག', 'г'], ['ඝ', 'घ', 'gh', 'ฆ', "\u0E86", 'ဃ', 'ឃ', 'ঘ', 'ਘ', "\u1A25", 'ઘ', 'ఘ', 'ಘ', 'ഘ', '𑀖', 'གྷ', 'гх'], ['ඞ', 'ङ', 'ṅ', 'ง', 'ງ', 'င', 'ង', 'ঙ', 'ਙ', "\u1A26", 'ઙ', 'ఙ', 'ಙ', 'ങ', '𑀗', 'ང', 'н̇'], // palatal stops
['ච', 'च', 'c', 'จ', 'ຈ', 'စ', 'ច', 'চ', 'ਚ', "\u1A27", 'ચ', 'చ', 'ಚ', 'ച', '𑀘', 'ཙ', 'ч'], ['ඡ', 'छ', 'ch', 'ฉ', "\u0E89", 'ဆ', 'ឆ', 'ছ', 'ਛ', "\u1A28", 'છ', 'ఛ', 'ಛ', 'ഛ', '𑀙', 'ཚ', 'чх'], ['ජ', 'ज', 'j', 'ช', 'ຊ', 'ဇ', 'ជ', 'জ', 'ਜ', "\u1A29", 'જ', 'జ', 'ಜ', 'ജ', '𑀚', 'ཛ', 'дж'], ['ඣ', 'झ', 'jh', 'ฌ', "\u0E8C", 'ဈ', 'ឈ', 'ঝ', 'ਝ', "\u1A2B", 'ઝ', 'ఝ', 'ಝ', 'ഝ', '𑀛', 'ཛྷ', 'джх'], ['ඤ', 'ञ', 'ñ', 'ญ', "\u0E8E", 'ဉ', 'ញ', 'ঞ', 'ਞ', "\u1A2C", 'ઞ', 'ఞ', 'ಞ', 'ഞ', '𑀜', 'ཉ', 'н̃'], // retroflex stops
['ට', 'ट', 'ṭ', 'ฏ', "\u0E8F", 'ဋ', 'ដ', 'ট', 'ਟ', "\u1A2D", 'ટ', 'ట', 'ಟ', 'ട', '𑀝', 'ཊ', 'т̣'], ['ඨ', 'ठ', 'ṭh', 'ฐ', "\u0E90", 'ဌ', 'ឋ', 'ঠ', 'ਠ', "\u1A2E", 'ઠ', 'ఠ', 'ಠ', 'ഠ', '𑀞', 'ཋ', 'т̣х'], ['ඩ', 'ड', 'ḍ', 'ฑ', "\u0E91", 'ဍ', 'ឌ', 'ড', 'ਡ', "\u1A2F", 'ડ', 'డ', 'ಡ', 'ഡ', '𑀟', 'ཌ', 'д̣'], ['ඪ', 'ढ', 'ḍh', 'ฒ', "\u0E92", 'ဎ', 'ឍ', 'ঢ', 'ਢ', "\u1A30", 'ઢ', 'ఢ', 'ಢ', 'ഢ', '𑀠', 'ཌྷ', 'д̣х'], ['ණ', 'ण', 'ṇ', 'ณ', "\u0E93", 'ဏ', 'ណ', 'ণ', 'ਣ', "\u1A31", 'ણ', 'ణ', 'ಣ', 'ണ', '𑀡', 'ཎ', 'н̣'], // dental stops
['ත', 'त', 't', 'ต', 'ຕ', 'တ', 'ត', 'ত', 'ਤ', "\u1A32", 'ત', 'త', 'ತ', 'ത', '𑀢', 'ཏ', 'т'], ['ථ', 'थ', 'th', 'ถ', 'ຖ', 'ထ', 'ថ', 'থ', 'ਥ', "\u1A33", 'થ', 'థ', 'ಥ', 'ഥ', '𑀣', 'ཐ', 'тх'], ['ද', 'द', 'd', 'ท', 'ທ', 'ဒ', 'ទ', 'দ', 'ਦ', "\u1A34", 'દ', 'ద', 'ದ', 'ദ', '𑀤', 'ད', 'д'], ['ධ', 'ध', 'dh', 'ธ', "\u0E98", 'ဓ', 'ធ', 'ধ', 'ਧ', "\u1A35", 'ધ', 'ధ', 'ಧ', 'ധ', '𑀥', 'དྷ', 'дх'], ['න', 'न', 'n', 'น', 'ນ', 'န', 'ន', 'ন', 'ਨ', "\u1A36", 'ન', 'న', 'ನ', 'ന', '𑀦', 'ན', 'н'], // labial stops
['ප', 'प', 'p', 'ป', 'ປ', 'ပ', 'ប', 'প', 'ਪ', "\u1A38", 'પ', 'ప', 'ಪ', 'പ', '𑀧', 'པ', 'п'], ['ඵ', 'फ', 'ph', 'ผ', 'ຜ', 'ဖ', 'ផ', 'ফ', 'ਫ', "\u1A39", 'ફ', 'ఫ', 'ಫ', 'ഫ', '𑀨', 'ཕ', 'пх'], ['බ', 'ब', 'b', 'พ', 'ພ', 'ဗ', 'ព', 'ব', 'ਬ', "\u1A3B", 'બ', 'బ', 'ಬ', 'ബ', '𑀩', 'བ', 'б'], ['භ', 'भ', 'bh', 'ภ', "\u0EA0", 'ဘ', 'ភ', 'ভ', 'ਭ', "\u1A3D", 'ભ', 'భ', 'ಭ', 'ഭ', '𑀪', 'བྷ', 'бх'], ['ම', 'म', 'm', 'ม', 'ມ', 'မ', 'ម', 'ম', 'ਮ', "\u1A3E", 'મ', 'మ', 'ಮ', 'മ', '𑀫', 'མ', 'м'], // liquids, fricatives, etc.
['ය', 'य', 'y', 'ย', 'ຍ', 'ယ', 'យ', 'য', 'ਯ', "\u1A3F", 'ય', 'య', 'ಯ', 'യ', '𑀬', 'ཡ', 'й'], ['ර', 'र', 'r', 'ร', 'ຣ', 'ရ', 'រ', 'র', 'ਰ', "\u1A41", 'ર', 'ర', 'ರ', 'ര', '𑀭', 'ར', 'р'], ['ල', 'ल', 'l', 'ล', 'ລ', 'လ', 'ល', 'ল', 'ਲ', "\u1A43", 'લ', 'ల', 'ಲ', 'ല', '𑀮', 'ལ', 'л'], ['ළ', 'ळ', 'ḷ', 'ฬ', "\u0EAC", 'ဠ', 'ឡ', 'ল়', 'ਲ਼', "\u1A4A", 'ળ', 'ళ', 'ಳ', 'ള', '𑀴', 'ལ༹', 'л̣'], ['ව', 'व', 'v', 'ว', 'ວ', 'ဝ', 'វ', 'ৰ', 'ਵ', "\u1A45", 'વ', 'వ', 'ವ', 'വ', '𑀯', 'ཝ', 'в'], ['ස', 'स', 's', 'ส', 'ສ', 'သ', 'ស', 'স', 'ਸ', "\u1A48", 'સ', 'స', 'ಸ', 'സ', '𑀲', 'ས', 'с'], ['හ', 'ह', 'h', 'ห', 'ຫ', 'ဟ', 'ហ', 'হ', 'ਹ', "\u1A49", 'હ', 'హ', 'ಹ', 'ഹ', '𑀳', 'ཧ', 'х']];
var vowels = [// dependent vowel signs 1A6E-1A63
['ා', 'ा', 'ā', 'า', 'າ', 'ာ', 'ា', 'া', 'ਾ', "\u1A63", 'ા', 'ా', 'ಾ', 'ാ', '𑀸', "\u0F71", 'а̄'], ['ි', 'ि', 'i', "\u0E34", "\u0EB4", 'ိ', 'ិ', 'ি', 'ਿ', "\u1A65", 'િ', 'ి', 'ಿ', 'ി', '𑀺', "\u0F72", 'и'], ['ී', 'ी', 'ī', "\u0E35", "\u0EB5", 'ီ', 'ី', 'ী', 'ੀ', "\u1A66", 'ી', 'ీ', 'ೀ', 'ീ', '𑀻', "\u0F71\u0F72", 'ӣ'], ['ු', 'ु', 'u', "\u0E38", "\u0EB8", 'ု', 'ុ', 'ু', 'ੁ', "\u1A69", 'ુ', 'ు', 'ು', 'ു', '𑀼', "\u0F74", 'у'], ['ූ', 'ू', 'ū', "\u0E39", "\u0EB9", 'ူ', 'ូ', 'ূ', 'ੂ', "\u1A6A", 'ૂ', 'ూ', 'ೂ', 'ൂ', '𑀽', "\u0F71\u0F74", 'ӯ'], // for th/lo - should appear in front
['ෙ', 'े', 'e', 'เ', 'ເ', 'ေ', 'េ', 'ে', 'ੇ', "\u1A6E", 'ે', 'ే', 'ೇ', 'േ', '𑁂', "\u0F7A", 'е'], // for th/lo - should appear in front
['ො', 'ो', 'o', 'โ', 'ໂ', 'ော', 'ោ', 'ো', 'ੋ', "\u1A6E\u1A63", 'ો', 'ో', 'ೋ', 'ോ', '𑁄', "\u0F7C", 'о']];
var sinh_conso_range = 'ක-ෆ';
var thai_conso_range = 'ก-ฮ';
var lao_conso_range = 'ກ-ຮ';
var mymr_conso_range = 'က-ဠ';

function beautify_sinh(text, _script, _rendType) {
  if (_rendType === void 0) {
    _rendType = '';
  }

  // change joiners before U+0DBA Yayanna and U+0DBB Rayanna to Virama + ZWJ
  return text.replace(/\u0DCA([\u0DBA\u0DBB])/g, "\u0DCA\u200D$1");
} // long vowels replaced by short vowels as sometimes people type long vowels by mistake


function un_beautify_sinh(input) {
  var text = input;
  text = text.replace(/ඒ/g, 'එ').replace(/ඕ/g, 'ඔ');
  return text.replace(/ේ/g, 'ෙ').replace(/ෝ/g, 'ො');
} // new unicode 5.1 spec https://www.unicode.org/notes/tn11/UTN11_3.pdf


function beautify_mymr(input, _script, _rendType) {
  if (_rendType === void 0) {
    _rendType = '';
  }

  var text = input;
  text = text.replace(/[,;]/g, '၊'); // comma/semicolon -> single line

  text = text.replace(/[\u2026\u0964\u0965]+/g, '။'); // ellipsis/danda/double danda -> double line

  text = text.replace(/ဉ\u1039ဉ/g, 'ည'); // kn + kna has a single char

  text = text.replace(/သ\u1039သ/g, 'ဿ'); // s + sa has a single char (great sa)

  text = text.replace(/င္([က-ဠ])/g, "\u1004\u103A\u1039$1"); // kinzi - ඞ + al

  text = text.replace(/္ယ/g, 'ျ'); // yansaya  - yapin

  text = text.replace(/္ရ/g, 'ြ'); // rakar - yayit

  text = text.replace(/္ဝ/g, 'ွ'); // al + wa - wahswe

  text = text.replace(/္ဟ/g, 'ှ'); // al + ha - hahto
  // following code for tall aa is from https://www.facebook.com/pndaza.mlm

  text = text.replace(/([ခဂငဒပဝ]ေ?)\u102c/g, "$1\u102B"); // aa to tall aa

  text = text.replace(/(က္ခ|န္ဒ|ပ္ပ|မ္ပ)(ေ?)\u102b/g, "$1$2\u102C"); // restore back tall aa to aa for some pattern

  return text.replace(/(ဒ္ဓ|ဒွ)(ေ?)\u102c/g, "$1\u102B");
} // reverse of beautify above


function un_beautify_mymr(input) {
  var text = input;
  text = text.replace(/\u102B/g, 'ာ');
  text = text.replace(/ှ/g, '္ဟ'); // al + ha - hahto

  text = text.replace(/ွ/g, '္ဝ'); // al + wa - wahswe

  text = text.replace(/ြ/g, '္ရ'); // rakar - yayit

  text = text.replace(/ျ/g, '္ယ'); // yansaya  - yapin

  text = text.replace(/\u103A/g, ''); // kinzi

  text = text.replace(/ဿ/g, "\u101E\u1039\u101E"); // s + sa has a single char (great sa)

  text = text.replace(/ည/g, "\u1009\u1039\u1009"); // nnga

  text = text.replace(/သံဃ/g, 'သင္ဃ'); // nigghahita to ṅ for this word for searching - from Pn Daza

  text = text.replace(/၊/g, ','); // single line -> comma

  return text.replace(/။/g, '.'); // double line -> period
}
/**
 * Each script need additional steps when rendering on screen
 * e.g. for sinh needs converting dandas/abbrev, removing spaces, and addition ZWJ
 */


function beautify_common(input, _script, rendType) {
  if (rendType === void 0) {
    rendType = '';
  }

  var text = input;

  if (rendType === 'cen') {
    // remove double dandas around namo tassa
    text = text.replace(/॥/g, '');
  } else if (rendType.startsWith('ga')) {
    // in gathas, single dandas convert to semicolon, double to period
    text = text.replace(/।/g, ';');
    text = text.replace(/॥/g, '.');
  } // remove Dev abbreviation sign before an ellipsis. We don't want a 4th dot after pe.


  text = text.replace(/॰…/g, '…');
  text = text.replace(/॰/g, '·'); // abbre sign changed - prevent capitalization in notes

  text = text.replace(/[।॥]/g, '.'); // all other single and double dandas converted to period
  // cleanup punctuation 1) two spaces to one
  // 2) There should be no spaces before these punctuation marks.

  text = text.replace(/\s([\s,!;\?\.])/g, '$1');
  return text;
} // for roman text only


function capitalize(input, _script, _rendType) {
  if (_rendType === void 0) {
    _rendType = '';
  }

  var text = input; // the adding of <w> tags around the words before the beautification makes it harder - (?:<w>)? added

  text = text.replace(/^((?:<w>)?\S)/g, function (_1, p1) {
    // begining of a line
    return p1.toUpperCase();
  });
  text = text.replace(/([\.\?]\s(?:<w>)?)(\S)/g, function (_1, p1, p2) {
    // beginning of sentence
    return "" + p1 + p2.toUpperCase();
  });
  return text.replace(/([\u201C‘](?:<w>)?)(\S)/g, function (_1, p1, p2) {
    // starting from a quote
    return "" + p1 + p2.toUpperCase();
  });
}

var un_capitalize = function un_capitalize(text) {
  return text.toLowerCase();
}; // for thai text - this can also be done in the convert stage


function swap_e_o(text, script, _rendType) {
  if (_rendType === void 0) {
    _rendType = '';
  }

  if (script === Script.THAI) {
    return text.replace(/([ก-ฮ])([เโ])/g, '$2$1');
  }

  if (script === Script.LAOS) {
    return text.replace(/([ກ-ຮ])([ເໂ])/g, '$2$1');
  }

  throw new Error("Unsupported script " + script + " for swap_e_o method.");
} // to be used when converting from


function un_swap_e_o(text, script) {
  if (script === Script.THAI) {
    return text.replace(/([เโ])([ก-ฮ])/g, '$2$1');
  }

  if (script === Script.LAOS) {
    return text.replace(/([ເໂ])([ກ-ຮ])/g, '$2$1');
  }

  throw new Error("Unsupported script " + script + " for un_swap_e_o method.");
} // in thai pali these two characters have special glyphs (using the encoding used in the THSarabunNew Font)


function beautify_thai(input, _script) {
  var text = input;
  text = text.replace(/\u0E34\u0E4D/g, "\u0E36"); // 'iṃ' has a single unicode in thai

  text = text.replace(/ญ/g, "\uF70F");
  return text.replace(/ฐ/g, "\uF700");
}

function un_beautify_thai(input, _script) {
  var text = input;
  text = text.replace(/ฎ/g, 'ฏ'); // sometimes people use ฎ instead of the correct ฏ which is used in the tipitaka

  text = text.replace(/\u0E36/g, "\u0E34\u0E4D"); // 'iṃ' has a single unicode in thai which is split into two here

  text = text.replace(/\uF70F/g, 'ญ');
  return text.replace(/\uF700/g, 'ฐ');
}

function un_beautify_khmer(input, _script) {
  var text = input;
  text = text.replace(/\u17B9/g, "\u17B7\u17C6"); // 'iṃ' has a single unicode in khmer which is split into two here

  return text.replace(/\u17D1/g, "\u17D2"); // end of word virama is different in khmer
}
/* zero-width joiners - replace both ways
['\u200C', ''], // ZWNJ (remove) not in sinh (or deva?)
['\u200D', ''], // ZWJ (remove) will be added when displaying */


function cleanup_zwj(inputText) {
  return inputText.replace(/\u200C|\u200D/g, '');
} // just replace deva danda with brahmi danda


function beautify_brahmi(input) {
  var text = input;
  text = text.replace(/।/g, '𑁇');
  text = text.replace(/॥/g, '𑁈');
  return text.replace(/–/g, '𑁋');
} // todo - unbeautify needed


function beautify_tham(input) {
  var text = input;
  text = text.replace(/\u1A60\u1A41/g, "\u1A55"); // medial ra - rakar

  text = text.replace(/\u1A48\u1A60\u1A48/g, "\u1A54"); // great sa - ssa

  text = text.replace(/।/g, "\u1AA8");
  return text.replace(/॥/g, "\u1AA9");
} // copied form csharp - consider removing subjoined as it makes it hard to read


function beautify_tibet(input) {
  var text = input; // not adding the intersyllabic tsheg between "syllables" (done in csharp code) since no visible change

  text = text.replace(/।/g, '།'); // tibet dandas

  text = text.replace(/॥/g, '༎'); // Iterate over all of the consonants, looking for tibetan halant + consonant.
  // Replace with the corresponding subjoined consonant (without halant)

  for (var i = 0; i <= 39; i += 1) {
    text = text.replace(new RegExp(String.fromCharCode(0x0f84, 0x0f40 + i), 'g'), String.fromCharCode(0x0f90 + i));
  } // exceptions: yya and vva use the "fixed-form subjoined consonants as the 2nd one


  text = text.replace(/\u0F61\u0FB1/g, "\u0F61\u0FBB"); // yya

  text = text.replace(/\u0F5D\u0FAD/g, "\u0F5D\u0FBA"); // vva
  // exceptions: jjha, yha and vha use explicit (visible) halant between

  text = text.replace(/\u0F5B\u0FAC/g, "\u0F5B\u0F84\u0F5C"); // jjha

  text = text.replace(/\u0F61\u0FB7/g, "\u0F61\u0F84\u0F67"); // yha

  return text.replace(/\u0F5D\u0FB7/g, "\u0F5D\u0F84\u0F67"); // vha
} // todo undo the subjoining done above


function un_beautify_tibet(text) {
  return text;
}

var beautify_func_default = [];
var beautify_func = (_beautify_func = {}, _beautify_func[Script.SI] = [beautify_sinh, beautify_common], _beautify_func[Script.RO] = [beautify_common, capitalize], _beautify_func[Script.THAI] = [swap_e_o, beautify_thai, beautify_common], _beautify_func[Script.LAOS] = [swap_e_o, beautify_common], _beautify_func[Script.MY] = [beautify_mymr, beautify_common], _beautify_func[Script.KM] = [beautify_common], _beautify_func[Script.THAM] = [beautify_tham], _beautify_func[Script.GUJA] = [beautify_common], _beautify_func[Script.TELU] = [beautify_common], _beautify_func[Script.MALA] = [beautify_common], _beautify_func[Script.BRAH] = [beautify_brahmi, beautify_common], _beautify_func[Script.TIBT] = [beautify_tibet], _beautify_func[Script.CYRL] = [beautify_common], _beautify_func); // when converting from another script, have to unbeautify before converting

var un_beautify_func_default = [];
var un_beautify_func = (_un_beautify_func = {}, _un_beautify_func[Script.SI] = [cleanup_zwj, un_beautify_sinh], _un_beautify_func[Script.HI] = [cleanup_zwj], _un_beautify_func[Script.RO] = [un_capitalize], _un_beautify_func[Script.THAI] = [un_beautify_thai, un_swap_e_o], _un_beautify_func[Script.LAOS] = [un_swap_e_o], _un_beautify_func[Script.KM] = [un_beautify_khmer], _un_beautify_func[Script.MY] = [un_beautify_mymr], _un_beautify_func[Script.TIBT] = [un_beautify_tibet], _un_beautify_func);

function prepareHashMaps(fromIndex, toIndex, useVowels) {
  if (useVowels === void 0) {
    useVowels = true;
  }

  var fullAr = consos.concat(specials, useVowels ? vowels : []);
  var finalAr = [[], [], []]; // max 3

  fullAr.forEach(function (val) {
    if (val[fromIndex]) {
      // empty mapping - e.g in roman
      finalAr[val[fromIndex].length - 1].push([val[fromIndex], val[toIndex]]);
    }
  });
  return finalAr.filter(function (ar) {
    return ar.length;
  }).map(function (ar) {
    return [ar[0][0].length, new Map(ar)];
  }).reverse(); // longest is first
}

function replaceByMaps(inputText, hashMaps) {
  var outputAr = [];
  var b = 0;

  while (b < inputText.length) {
    var match = false;

    for (var _iterator3 = _createForOfIteratorHelperLoose(hashMaps), _step3; !(_step3 = _iterator3()).done;) {
      var _step3$value = _step3.value,
          len = _step3$value[0],
          hashMap = _step3$value[1];
      var inChars = inputText.substr(b, len);

      if (hashMap.has(inChars)) {
        outputAr.push(hashMap.get(inChars)); // note: can be empty string too

        match = true;
        b += len;
        break;
      }
    }

    if (!match) {
      // did not match the hashmaps
      outputAr.push(inputText.charAt(b));
      b += 1;
    }
  }

  return outputAr.join('');
} // for roman/cyrl text - insert 'a' after all consonants that are not followed by virama, dependent vowel or 'a'
// cyrillic mapping extracted from https://dhamma.ru/scripts/transdisp.js - TODO capitalize cyrl too


function insert_a(input, script) {
  var a = script === Script.CYRL ? "\u0430" : 'a'; // roman a or cyrl a

  var text = input;
  text = text.replace(new RegExp("([\u0D9A-\u0DC6])([^\u0DCF-\u0DDF\u0DCA" + a + "])", 'g'), "$1" + a + "$2");
  text = text.replace(new RegExp("([\u0D9A-\u0DC6])([^\u0DCF-\u0DDF\u0DCA" + a + "])", 'g'), "$1" + a + "$2");
  return text.replace(/([ක-ෆ])$/g, "$1" + a); // conso at the end of string not matched by regex above
} // eslint-disable-next-line prettier/prettier


var IV_TO_DV = {
  'අ': '',
  'ආ': 'ා',
  'ඉ': 'ි',
  'ඊ': 'ී',
  'උ': 'ු',
  'ඌ': 'ූ',
  'එ': 'ෙ',
  'ඔ': 'ො'
};

function remove_a(input, _script) {
  var text = input;
  text = text.replace(/([ක-ෆ])([^අආඉඊඋඌඑඔ\u0DCA])/g, "$1\u0DCA$2"); // done twice to match successive hal

  text = text.replace(/([ක-ෆ])([^අආඉඊඋඌඑඔ\u0DCA])/g, "$1\u0DCA$2");
  text = text.replace(/([ක-ෆ])$/g, "$1\u0DCA"); // last conso not matched by above

  text = text.replace(/([ක-ෆ])([අආඉඊඋඌඑඔ])/g, function (_1, p1, p2) {
    return p1 + IV_TO_DV[p2];
  });
  return text;
}

var fix_m_above = function fix_m_above(text) {
  return text.replace(/ṁ/g, 'ං');
}; // per ven anandajothi request


function convert_to(text, script) {
  var hashMaps = prepareHashMaps(ScriptIndex[Script.SI], ScriptIndex[script]);
  return replaceByMaps(text, hashMaps);
}

function convert_from(text, script) {
  // TODO create maps initially and reuse them
  var hashMaps = prepareHashMaps(ScriptIndex[script], ScriptIndex[Script.SI]); // console.log(hashMaps);

  return replaceByMaps(text, hashMaps);
}

function convert_from_w_v(text, script) {
  var hashMaps = prepareHashMaps(ScriptIndex[script], ScriptIndex[Script.SI], false); // without vowels for roman

  return replaceByMaps(text, hashMaps);
}

var convert_to_func_default = [convert_to];
var convert_to_func = (_convert_to_func = {}, _convert_to_func[Script.SI] = [], _convert_to_func[Script.RO] = [insert_a, convert_to], _convert_to_func[Script.CYRL] = [insert_a, convert_to], _convert_to_func);
var convert_from_func_default = [convert_from];
var convert_from_func = (_convert_from_func = {}, _convert_from_func[Script.SI] = [], _convert_from_func[Script.RO] = [convert_from_w_v, fix_m_above, remove_a], _convert_from_func[Script.CYRL] = [convert_from_w_v, remove_a], _convert_from_func);

var TextProcessor = /*#__PURE__*/function () {
  function TextProcessor() {
    _classCallCheck(this, TextProcessor);
  }

  _createClass(TextProcessor, null, [{
    key: "basicConvertFromSinh",
    // convert from sinhala to another script
    value: function basicConvertFromSinh(input, script) {
      var text = input;
      (convert_to_func[script] || convert_to_func_default).forEach(function (func) {
        text = func(text, script);
      });
      return text;
    } // convert from another script to sinhala

  }, {
    key: "basicConvertToSinh",
    value: function basicConvertToSinh(input, script) {
      var text = input;
      (convert_from_func[script] || convert_from_func_default).forEach(function (func) {
        text = func(text, script);
      });
      return text;
    } // script specific beautification

  }, {
    key: "beautify",
    value: function beautify(input, script, rendType) {
      if (rendType === void 0) {
        rendType = '';
      }

      var text = input;
      (beautify_func[script] || beautify_func_default).forEach(function (func) {
        text = func(text, script, rendType);
      });
      return text;
    } // from Sinhala to other script

  }, {
    key: "convertFromSinh",
    value: function convertFromSinh(input, script) {
      var text = input;
      text = this.basicConvertFromSinh(text, script);
      return this.beautify(text, script);
    } // from other script to Sinhala - one script

  }, {
    key: "convertToSinh",
    value: function convertToSinh(input, script) {
      var text = input;
      (un_beautify_func[script] || un_beautify_func_default).forEach(function (func) {
        text = func(text, script);
      });
      return this.basicConvertToSinh(text, script);
    } // from other scripts (mixed) to Sinhala

  }, {
    key: "convertFromMixed",
    value: function convertFromMixed(input) {
      var mixedText = input;
      mixedText = cleanup_zwj(mixedText) + " "; // zwj messes with computing runs + hack to process last char

      var curScript = -1;
      var run = '';
      var output = '';

      for (var i = 0; i < mixedText.length; i += 1) {
        var newScript = getScriptForCode(mixedText.charCodeAt(i));

        if (newScript !== curScript || i === mixedText.length - 1) {
          // make sure to process the last run
          output += this.convertToSinh(run, curScript);
          curScript = newScript;
          run = mixedText.charAt(i);
        } else {
          run += mixedText.charAt(i);
        }
      } // console.log(`convert from mixed: "${mixedText}" => "${output}"`);


      return output;
    }
  }]);

  return TextProcessor;
}(); // for es6 - browser




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
.default;
});
//# sourceMappingURL=index.js.map