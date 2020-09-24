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

var newQuote = function() {
    // getRndInteger(0, quotes.length)
    cur_index = (cur_index + 1) % quotes.length;
    var quote = quotes[cur_index];
    //console.log(quote);
    document.querySelector("#quote").innerHTML = quote.quote;
    document.querySelector("#author").innerHTML = quote.author;
}

var lastQuote = function() {
    cur_index = cur_index - 1;
    if (cur_index < 0) {
        cur_index = quotes.length - 1;
    }

    var quote = quotes[cur_index];
    document.querySelector("#quote").innerHTML = quote.quote;
    document.querySelector("#author").innerHTML = quote.author;
}

//https://javascript.info/task/shuffle
function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
 */
let touchstartX = 0;
let touchendX = 0;

const slider = document.getElementById('slider');

function handleGesure() {
  if (touchendX < touchstartX) lastQuote();
  if (touchendX > touchstartX) newQuote();
};

slider.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX;
  handleGesure();
});


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
}

// window.onload = main;
