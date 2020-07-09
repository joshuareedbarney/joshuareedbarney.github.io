/*
This javascript file chooses a random quote to display

Joshua Barney
July 9th 2020
*/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

var main = function() {
    var quote = quotes[getRndInteger(0, quotes.length)];
    //console.log(quote);
    document.querySelector("#quote").innerHTML = quote.quote;
    document.querySelector("#author").innerHTML = quote.author;
}

window.onload = main;
