// ==UserScript==
// @name         Delete promoted posts on OLX
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  Deletes promoted posts on OLX
// @author       Dan Adrian Mirea
// @match        https://*.olx.ro/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/danadrianmirea/tampermonkey-scripts/main/DeletePromotedOlx.js
// @downloadURL  https://raw.githubusercontent.com/danadrianmirea/tampermonkey-scripts/main/DeletePromotedOlx.js

(function() {

    function deletePromotedEntries() {
        var top_add = document.getElementById("div-gpt-ad-listing-sponsored-ad-first");
        if (top_add) {
            top_add.remove();
        }

        const allElements = document.querySelectorAll('*');
        const posts = Array.from(allElements).filter(element =>
            Array.from(element.attributes).some(attr =>
            attr.value.includes("card") || attr.value.includes("advert")));

        posts.forEach((post) => {
            if (post.textContent.toLowerCase().includes("promo")) {
                post.remove();
            }
        });
    }

    window.onload = function() {
        var intervalId = window.setInterval(function(){
            deletePromotedEntries();
        }, 1000);
    };

})();
