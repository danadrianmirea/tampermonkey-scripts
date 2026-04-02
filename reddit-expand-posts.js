// ==UserScript==
// @name         Reddit Auto Expand Posts
// @namespace    https://www.reddit.com/
// @version      1.1
// @description  Automatically expand all posts in Reddit search results
// @author       Dan Adrian Mirea
// @match        *://*.reddit.com/r/*
// @exclude      *://*.reddit.com/r/*/comments/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @updateURL    https://raw.githubusercontent.com/danadrianmirea/tampermonkey-scripts/main/reddit-expand-posts.js
// @downloadURL  https://raw.githubusercontent.com/danadrianmirea/tampermonkey-scripts/main/reddit-expand-posts.js
// ==/UserScript==

(function() {

    function expandButtons() {
      var expandButtons = document.querySelectorAll('.expando-button');
      //console.log("expandButtons.length: " + expandButtons.length); // Logs the first element with the class 'example-class' or null

      // Click each button
      expandButtons.forEach(function(button) {
        var entryAncestor = button.closest('.entry');
        var expandoChild = entryAncestor ? entryAncestor.querySelector('.expando, .res-expando-box') : null;
        var computedStyle = expandoChild ? getComputedStyle(expandoChild) : null;

        // only expand buttons that have not been already expanded
        if (computedStyle && computedStyle.display === 'none') {
            button.click();
        }
      });
    }

    var intervalId = window.setInterval(function(){ expandButtons(); }, 500);

})();
