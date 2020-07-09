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
    var quote = quotes[cur_index];
    cur_index = (cur_index + 1) % quotes.length;
    //console.log(quote);
    document.querySelector("#quote").innerHTML = quote.quote;
    document.querySelector("#author").innerHTML = quote.author;
}

//https://javascript.info/task/shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

var main = function() {
    shuffle(quotes);
}

window.onload = main;
