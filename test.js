//Having a really hard time figuring out how to compare the values of the cards. I have spent an entire day on this.


let hearts = [];
let spades = [];
let diamonds = [];
let clubs = [];
let deck = [];

function makeDeck() {
    //CREATING HEARTS ARRAY
    for (var i = 1; i <= 13; i++) {
        hearts.push({
            value: i,
            name: "HEARTS",
        });
    }
    for (let h = 0; h < hearts.length; h++) { //PUSHING HEARTS ARRAY INTO DECK ARRAY
        let heartcards = hearts[h].name + " " + hearts[h].value;
        deck.push({
            suit: hearts[h].name,
            value: hearts[h].value
        })
    }

    //SPADES ARRAY
    for (var i = 1; i <= 13; i++) {
        spades.push({
            value: i,
            name: "SPADES"
        });
    }
    for (let s = 1; s < spades.length; s++) {
        let spadescards = spades[s].name + " " + spades[s].value;
        deck.push({
            suit: spades[s].name,
            value: spades[s].value
        })
    }

    //DIAMONDS ARRAY
    for (var i = 1; i <= 13; i++) {
        diamonds.push({
            value: i,
            name: "DIAMONDS"
        });
    }
    for (let d = 0; d < diamonds.length; d++) {
        let diamondscards = diamonds[d].name + " " + diamonds[d].value;
        deck.push({
            suit: diamonds[d].name,
            value: diamonds[d].value
        })
    }

    //CLUBS ARRAY
    for (var i = 1; i <= 13; i++) {
        clubs.push({
            value: i,
            name: "CLUBS"
        });
    }
    for (let c = 0; c < clubs.length; c++) {
        let clubscards = clubs[c].name + " " + clubs[c].value;
        deck.push({
            suit: clubs[c].name,
            value: clubs[c].value
        })
    }

    printCards(deck);
}

function printCards(deck) {
    let parent = document.querySelector(".cards_list");
    let showCard = document.createElement("li");
    showCard.setAttribute("class", "card");

    let randomCard = deck[Math.floor(Math.random() * deck.length)];

    showCard.textContent = randomCard.suit + " " + randomCard.value;
    parent.appendChild(showCard);

    higher(randomCard);
    lower(randomCard);

    deck.splice(deck.indexOf(randomCard, 1));
    console.log(deck);
}


let randomCardVal = 0;

function higher(randomCard) {
    let higherbtn = document.querySelector("#higher");

    higherbtn.addEventListener("click", function() {
        if (randomCardVal < randomCard.value) {
            console.log("WON THE LAST ROUND, the new card was higher");
            console.log("original value " + randomCardVal);
            console.log("random card value: " + randomCard.value);
            printCards(deck);
            randomCardVal = randomCard.value;

        } else if (randomCardVal > randomCard.value || randomCardVal === randomCard.value) {
            console.log("LOST THE LAST ROUND, the new card was lower or equal");
            window.alert("You lost! The new card was lower or equal. Refresh to play again.");

            return false;
        }
    });

};



//LOWER BUTTON
function lower(randomCard) {
    let lowerbtn = document.querySelector("#lower");

    lowerbtn.addEventListener("click", function() {
        if (randomCardVal > randomCard.value || randomCardVal === randomCard.value) {
            console.log("LOST THE LAST ROUND! The new card is higher or equal");
            window.alert("You lost. The new card was higher or equal. Refresh page to play again.");
            return false;
        } else if (randomCardVal < randomCard.value) {
            console.log("YOU WON THE LAST ROUND, the new card was lower");
            console.log("original value " + randomCardVal);
            console.log("random card value: " + randomCard.value);
            printCards(deck);
            randomCardVal = randomCard.value;
        }
    });

};



window.addEventListener("load", makeDeck);
