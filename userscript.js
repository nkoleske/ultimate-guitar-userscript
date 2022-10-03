// ==UserScript==
// @name         ultimate-guitar Columns
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  modifies tabs on ultimate-guitar.com to display in a dual column format
// @author       nkoleske
// @match        https://tabs.ultimate-guitar.com/tab/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

window.addEventListener('load', function() {
    document.getElementsByClassName("P8ReX")[0].style.columnCount = 2;
    document.getElementsByClassName("fbcII ryXzc")[0].style.maxWidth = "3000px";
}, false);
