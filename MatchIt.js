var cardDeck = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];
var cardValue = [];
var openedCard = [];
var cardsFlipped = 0;


function newGame(){
	cardsFlipped = 0;
	// shuffle deck to start a new game
	shuffleDeck(cardDeck);
	var htmlCode = " ";

	// displaying deck
	cardDeck.forEach(function(card){
		htmlCode += "<div class=\"cardBack\"></div>";
	});
	document.getElementsByClassName('gameBoard')[0].innerHTML = htmlCode;

	// adding eventListener to each card
	cardDeck.forEach(function(card, index){
		var te=document.getElementsByClassName("cardBack")[index];
		te.addEventListener('click', function(event){
			flipCard(te, card);
		});
	});
}

function shuffleDeck(allCardsInDeck){
	var length = allCardsInDeck.length;
	var randomNumber, temp;

	while(--length>0){
		randomNumber = Math.floor((Math.random()*length));
		temp = allCardsInDeck[randomNumber];
		allCardsInDeck[randomNumber] = allCardsInDeck[length];
		allCardsInDeck[length] = temp; 
	}
}

function flipCard(cardDiv, card){
	if (cardValue.length < 2 ) {
		cardDiv.style.fontSize = "50px";
		cardDiv.style.textAlign = "center";
		cardDiv.style.background = "#fff";
		cardDiv.innerHTML = card;
		if (cardValue.length == 0){
			cardValue.push(card);
			openedCard.push(cardDiv);
			cardsFlipped++;
		} else {
			cardValue.push(card);
			openedCard.push(cardDiv);
			cardsFlipped++;
			if (cardValue[0]==cardValue[1]){
				cardValue = [];
				openedCard = [];
			} else {
				setTimeout(function(){
					flipCardsBack(openedCard[0], openedCard[1]);
					cardValue = [];
					openedCard = [];
				}, 1000);
			}
		}
		var totalFlips = document.getElementById("totalFlips");
		totalFlips.innerHTML = '';
		var a = document.createElement("p");
		var b = document.createTextNode("Cards flipped: " + cardsFlipped);
		a.appendChild(b);
		totalFlips.appendChild(a);
	}

}

function flipCardsBack(cardDiv1, cardDiv2){
	cardDiv1.style.background = '#000';
	cardDiv2.style.background = '#000';
}
newGame();