/*
This javascript file chooses a random quote to display

Joshua Barney
July 9th 2020
*/

var cur_index = 0;

//https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// function addBreaks(str1) {
//     let str2 = (' ' + str1).slice(1);
//     return str2.replace(/\. /g, ".<br/>").replace(/; /g, ";<br/>");
// }

var lastTimeQuoteChanged = Date.now();

var newQuote = function() {
    lastTimeQuoteChanged = Date.now();

    // getRndInteger(0, quotes.length)
    cur_index = (cur_index + 1) % quotes.length;
    var quote = quotes[cur_index];
    //console.log(quote);
    document.querySelector("#quote").innerHTML = quote.quote;
    document.querySelector("#author").innerHTML = quote.author;
};

var lastQuote = function() {
    lastTimeQuoteChanged = Date.now();

    cur_index = cur_index - 1;
    if (cur_index < 0) {
        cur_index = quotes.length - 1;
    }

    var quote = quotes[cur_index];
    document.querySelector("#quote").innerHTML = quote.quote;
    document.querySelector("#author").innerHTML = quote.author;
};

//Add functionality to go to previous quote by clicking 
// or pressing finger on the left most side of the screen.
document.querySelector("html").addEventListener("click", function(event) {
    if (event.target == document.getElementById("back")) {
        lastQuote();
    }
    else {
        newQuote();
    }
});

//https://javascript.info/task/shuffle
function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

var main = function() {
    shuffle(quotes);

    //https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
    document.querySelector("html").addEventListener('keydown', function(event) {
        const key = event.key;

        switch (key) {
            case "ArrowRight":
                newQuote();
                break;
            case "ArrowLeft":
                lastQuote();
                break;
        }
    });
};

/**
 * https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
 */
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            newQuote(); /* left swipe */
        } else {
            lastQuote(); /* right swipe */
        }
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
        } else {
            /* down swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};

var oneSecond = 1000;
var oneMinuite = 60 * oneSecond;
setInterval(function() {
    const now = Date.now();
    const timeSinceLastQuoteChange = now - lastTimeQuoteChanged;
    if (timeSinceLastQuoteChange > oneMinuite) {
        newQuote();
    }
}, oneMinuite);

// window.onload = main;
