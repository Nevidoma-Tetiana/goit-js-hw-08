!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o);var l,n=o("eaxEB"),u=document.querySelector(".feedback-form"),i=document.querySelector("input"),d=document.querySelector("textarea"),f="feedback-form-state";u.addEventListener("input",e(n)((function(){var e={email:i.value,message:d.value};localStorage.setItem(f,JSON.stringify(e))}),500)),u.addEventListener("submit",(function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem(f));console.log(t),i.value="",d.value="",localStorage.removeItem(f)})),null!==(l=localStorage.getItem(f))?(i.value=JSON.parse(l).email,d.value=JSON.parse(l).message):(i.value="",d.value="")}();
//# sourceMappingURL=03-feedback.9542b116.js.map